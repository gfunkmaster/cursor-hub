import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Start Guide | Cursor AI",
  description: "Get started with Cursor AI in 5 minutes.",
};

export default function QuickStartGuide() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Cursor AI Quick Start Guide</h1>
      <p className="text-lg text-gray-600 mb-8">
        Get up and running with Cursor AI in just 5 minutes.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Installation & Setup (2 minutes)
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3">
              1. Download and Install
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="text-sm">
                {`# macOS
brew install cursor-ai

# Windows
winget install cursor-ai

# Linux
curl -fsSL https://cursor.sh/install.sh | sh`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">2. First Launch</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Open Cursor AI</li>
              <li>
                Sign in (optional but recommended for personalized experience)
              </li>
              <li>The AI will automatically initialize on first launch</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Essential Keyboard Shortcuts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-mono text-blue-800">Cmd/Ctrl + K</p>
            <p className="text-gray-600">Open Command Palette</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-mono text-blue-800">Cmd/Ctrl + L</p>
            <p className="text-gray-600">Get AI Suggestions</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-mono text-blue-800">Cmd/Ctrl + /</p>
            <p className="text-gray-600">Start AI Chat</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-mono text-blue-800">Cmd/Ctrl + I</p>
            <p className="text-gray-600">AI Edit Mode</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Try These Commands</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3">1. Create a new file</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                Press Cmd/Ctrl + K, then type:
              </p>
              <pre className="bg-white p-3 rounded text-sm">
                create new react component
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              2. Get code suggestions
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Type:</p>
              <pre className="bg-white p-3 rounded text-sm">
                const myFunction =
              </pre>
              <p className="text-sm text-gray-600 mt-2">
                Then press Cmd/Ctrl + L
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">3. Ask for help</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                Press Cmd/Ctrl + /, then type:
              </p>
              <pre className="bg-white p-3 rounded text-sm">
                How do I implement a login form?
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Project Setup</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3">Create a New Project</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Open Command Palette (Cmd/Ctrl + K)</li>
              <li>Type: create new project</li>
              <li>
                Select your project type:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>React/Next.js</li>
                  <li>Python FastAPI</li>
                  <li>Node.js Express</li>
                  <li>Vue.js</li>
                </ul>
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Add Features to Your Project
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                Open AI Chat (Cmd/Ctrl + /) and try:
              </p>
              <pre className="bg-white p-3 rounded text-sm">
                {`Add authentication to my project
Create a responsive navigation component
Set up a database connection`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">
              1. Explore Features
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Smart Component Generation</li>
              <li>API Integration</li>
              <li>Test Generation</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">
              2. Learn Best Practices
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Effective Prompting</li>
              <li>Code Organization</li>
              <li>Testing Patterns</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-medium text-purple-800 mb-2">
              3. Join Community
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>GitHub Discussions</li>
              <li>Discord Channel</li>
              <li>Stack Overflow</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
