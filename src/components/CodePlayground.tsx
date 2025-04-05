'use client';

import React, { useState, useEffect } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Spinner } from './ui/Spinner';

interface CodePlaygroundProps {
  code: string;
  scope?: Record<string, unknown>;
  title?: string;
  description?: string;
}

export default function CodePlayground({
  code,
  scope = {},
  title = 'Code Example',
  description,
}: CodePlaygroundProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLoading(false);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      )}
      
      {error ? (
        <div className="text-red-500 p-4 rounded bg-red-50 dark:bg-red-900/20">
          {error.message}
        </div>
      ) : (
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-black/50">
              <Spinner />
            </div>
          )}
          <LiveProvider code={code} scope={scope}>
            <div className="mb-4">
              <LivePreview />
            </div>
            <LiveError />
            <div className="mt-4">
              <LiveEditor 
                className="rounded-md overflow-hidden"
                style={{
                  fontFamily: 'monospace',
                  fontSize: '14px',
                }}
              />
            </div>
          </LiveProvider>
        </div>
      )}
    </div>
  );
} 