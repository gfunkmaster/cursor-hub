"use client";

import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import Link from "next/link";

interface NavigationItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface SearchResult {
  title: string;
  content: string;
  guide: NavigationItem;
}

interface GuideSearchProps {
  guides: NavigationItem[];
}

export function GuideSearch({ guides }: GuideSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  // Function to search through guides
  const searchGuides = (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];
    const searchRegex = new RegExp(query, "i");

    guides.forEach((guide) => {
      if (
        searchRegex.test(guide.title) ||
        searchRegex.test(guide.description)
      ) {
        searchResults.push({
          title: guide.title,
          content: guide.description,
          guide: guide,
        });
      }
    });

    setResults(searchResults);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      searchGuides(searchQuery);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center p-2 text-sm text-foreground/60 hover:text-foreground transition-colors rounded-md hover:bg-accent/10"
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          aria-hidden="true"
        />

        <div className="min-h-screen px-4 text-center">
          <div className="inline-block w-full max-w-2xl p-6 my-8 text-left align-middle transition-all transform bg-background border border-border/40 shadow-xl rounded-xl">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-foreground/60" />
              <input
                type="text"
                placeholder="Search guides..."
                className="w-full pl-10 pr-4 py-2 text-base bg-background border border-border/40 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>

            <div className="mt-4 max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="space-y-2">
                  {results.map((result, index) => (
                    <Link
                      key={index}
                      href={result.guide.href}
                      onClick={() => setIsOpen(false)}
                      className="block p-4 rounded-lg hover:bg-accent/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl group-hover:scale-110 transition-transform">
                          {result.guide.icon}
                        </span>
                        <div>
                          <h3 className="text-base font-medium text-foreground">
                            {result.guide.title}
                          </h3>
                          <p className="text-sm text-foreground/60">
                            {result.guide.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : searchQuery ? (
                <p className="text-center text-foreground/60 py-4">
                  No results found
                </p>
              ) : (
                <div className="text-center text-foreground/60 py-4">
                  Start typing to search guides
                </div>
              )}
            </div>

            <div className="mt-4 text-xs text-foreground/40 text-center">
              Press ESC to close
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
