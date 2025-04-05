"use client";

import React, { useState } from "react";
import { CodeEditor } from "@/components/editor/CodeEditor";

const EXAMPLE_CODE = `// Example TypeScript code
interface User {
  id: string;
  name: string;
  email: string;
}

function greetUser(user: User) {
  console.log(\`Hello, \${user.name}!\`);
}

const user: User = {
  id: "123",
  name: "John Doe",
  email: "john@example.com"
};

greetUser(user);`;

export default function CodeEditorExample() {
  const [code, setCode] = useState(EXAMPLE_CODE);
  const [theme, setTheme] = useState<"vs-dark" | "light">("vs-dark");

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Code Editor Example</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This example demonstrates the features of our code editor component,
          including syntax highlighting, theme switching, and real-time editing.
        </p>

        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => setTheme(theme === "vs-dark" ? "light" : "vs-dark")}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Toggle Theme
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Editable Editor</h2>
            <CodeEditor
              code={code}
              onChange={(value) => setCode(value || "")}
              theme={theme}
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Read-only Mirror</h2>
            <CodeEditor code={code} readOnly theme={theme} />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Different Languages</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">JavaScript</h3>
              <CodeEditor
                code="const sum = (a, b) => a + b;\nconsole.log(sum(1, 2));"
                language="javascript"
                height="200px"
                theme={theme}
                readOnly
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Python</h3>
              <CodeEditor
                code="def greet(name):\n    print(f'Hello, {name}!')\n\ngreet('World')"
                language="python"
                height="200px"
                theme={theme}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
