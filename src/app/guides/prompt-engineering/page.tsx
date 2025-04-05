import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prompt Engineering Guide | Cursor AI",
  description:
    "Learn how to write effective prompts for Cursor AI to get the best results.",
};

export default function PromptEngineeringGuide() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">
        Cursor AI Prompt Engineering Guide
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Principles</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3">1. Be Specific</h3>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <p className="font-medium text-green-800">✅ Good:</p>
              <pre className="bg-white p-3 rounded mt-2 text-sm">
                {`Create a React component that displays a user profile with:
- Name and avatar
- Email and location
- Bio section
- Edit button that triggers a modal`}
              </pre>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="font-medium text-red-800">❌ Bad:</p>
              <pre className="bg-white p-3 rounded mt-2 text-sm">
                Make a user profile component
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">2. Provide Context</h3>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <p className="font-medium text-green-800">✅ Good:</p>
              <pre className="bg-white p-3 rounded mt-2 text-sm">
                {`We're using Next.js 13 with TypeScript and Tailwind CSS. Create an authentication form that:
- Handles email/password login
- Includes form validation
- Shows loading states
- Handles error messages`}
              </pre>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="font-medium text-red-800">❌ Bad:</p>
              <pre className="bg-white p-3 rounded mt-2 text-sm">
                Create a login form
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Common Patterns</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3">1. Component Creation</h3>
            <pre className="bg-gray-50 p-4 rounded-lg text-sm">
              {`// Pattern:
Create a [Component Name] that:
1. Takes props: [list props]
2. Handles states: [list states]
3. Includes features: [list features]
4. Uses: [list technologies]
5. Implements: [list patterns]

// Example:
Create a DataTable component that:
1. Takes props: data, columns, sorting, pagination
2. Handles states: loading, error, selected rows
3. Includes features: sorting, filtering, pagination
4. Uses: TypeScript, styled-components
5. Implements: virtualization for large datasets`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3">
              1. Structure Your Prompts
            </h3>
            <ul className="list-decimal pl-5 space-y-2">
              <li>Start with the goal</li>
              <li>List requirements</li>
              <li>Specify technologies</li>
              <li>Include constraints</li>
              <li>Request examples</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">2. Use Clear Language</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-medium text-green-800 mb-2">✅ Use:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Specific technical terms</li>
                  <li>Clear requirements</li>
                  <li>Measurable outcomes</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-medium text-red-800 mb-2">❌ Avoid:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ambiguous terms</li>
                  <li>Unclear scope</li>
                  <li>Vague requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3">1. Unclear Results</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-2">
                If results are unclear:
              </p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Add more context</li>
                <li>Be more specific</li>
                <li>Include code examples</li>
                <li>List technologies</li>
                <li>Specify versions</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
