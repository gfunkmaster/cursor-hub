"use client";

import { useEffect, useState } from "react";
import { MarkdownContent } from "@/components/MarkdownContent";
import { motion } from "framer-motion";
import Link from "next/link";
import { guides } from "@/components/Navigation";

export default function GuidePage({ params }: { params: { slug: string } }) {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const currentGuide = guides.find(
    (guide) => guide.href === `/guides/${params.slug}`
  );
  const currentIndex = guides.findIndex(
    (guide) => guide.href === `/guides/${params.slug}`
  );
  const prevGuide = currentIndex > 0 ? guides[currentIndex - 1] : null;
  const nextGuide =
    currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null;

  useEffect(() => {
    async function loadContent() {
      setIsLoading(true);
      setError("");
      try {
        const response = await fetch(`/api/guides/${params.slug}`);
        if (!response.ok) throw new Error("Failed to load guide");
        const data = await response.text();
        setContent(data);
      } catch (error) {
        console.error("Error loading guide content:", error);
        setError("Failed to load guide content. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    loadContent();
  }, [params.slug]);

  return (
    <div className="min-h-screen bg-background/95">
      {/* Guide Header */}
      <div className="border-b border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="container max-w-4xl mx-auto py-6 px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl">{currentGuide?.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {currentGuide?.title}
              </h1>
              <p className="text-muted-foreground">
                {currentGuide?.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Content */}
      <main className="container max-w-4xl mx-auto py-8 px-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <motion.div
              className="w-6 h-6 border-2 border-primary rounded-full border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MarkdownContent content={content} />
          </motion.div>
        )}
      </main>

      {/* Navigation Footer */}
      <div className="border-t border-border/40 bg-background/50 backdrop-blur-sm py-6">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {prevGuide ? (
              <Link
                href={prevGuide.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>{prevGuide.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextGuide && (
              <Link
                href={nextGuide.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span>{nextGuide.title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
