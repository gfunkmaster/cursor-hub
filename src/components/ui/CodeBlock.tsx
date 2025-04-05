"use client";

import React, { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock: FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          margin: 0,
          padding: "1rem",
          fontSize: "0.875rem",
          lineHeight: "1.5",
          backgroundColor: "transparent",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
