"use client";

import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownContentProps {
  content: string;
}

type ComponentType = {
  children?: ReactNode;
  className?: string;
  href?: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ children }: ComponentType) => (
            <h1 className="text-4xl font-bold mb-6 text-foreground border-b pb-2">
              {children}
            </h1>
          ),
          h2: ({ children }: ComponentType) => (
            <h2 className="text-3xl font-semibold mt-8 mb-4 text-foreground">
              {children}
            </h2>
          ),
          h3: ({ children }: ComponentType) => (
            <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground">
              {children}
            </h3>
          ),
          p: ({ children }: ComponentType) => (
            <p className="text-lg leading-relaxed mb-4 text-foreground/90">
              {children}
            </p>
          ),
          ul: ({ children }: ComponentType) => (
            <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/90">
              {children}
            </ul>
          ),
          ol: ({ children }: ComponentType) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 text-foreground/90">
              {children}
            </ol>
          ),
          li: ({ children }: ComponentType) => (
            <li className="text-lg leading-relaxed">{children}</li>
          ),
          blockquote: ({ children }: ComponentType) => (
            <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-foreground/80">
              {children}
            </blockquote>
          ),
          a: ({ href, children }: ComponentType) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline underline-offset-4"
            >
              {children}
            </a>
          ),
          code: ({ className, children }: ComponentType) => {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <div className="relative group">
                <div className="absolute -top-4 right-0 text-xs text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  {match[1].toUpperCase()}
                </div>
                <div className="rounded-lg bg-background/50 p-4 my-4 border border-border/40">
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </div>
              </div>
            ) : (
              <code className="bg-background/50 text-primary px-1.5 py-0.5 rounded-md text-sm">
                {children}
              </code>
            );
          },
          table: ({ children }: ComponentType) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-border/40 rounded-lg">
                {children}
              </table>
            </div>
          ),
          th: ({ children }: ComponentType) => (
            <th className="bg-background/50 px-4 py-2 text-left font-semibold border-b border-border/40">
              {children}
            </th>
          ),
          td: ({ children }: ComponentType) => (
            <td className="px-4 py-2 border-b border-border/40">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
