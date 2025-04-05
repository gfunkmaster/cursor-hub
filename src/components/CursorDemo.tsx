"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";

interface Command {
  shortcut: string;
  description: string;
  example: string;
}

const CursorDemo: FC = () => {
  const [activeCommand, setActiveCommand] = useState<number>(0);

  const commands: Command[] = [
    {
      shortcut: "Cmd + K",
      description: "Quick AI Command Palette",
      example: "// Try: 'Explain this code' or 'Refactor this function'",
    },
    {
      shortcut: "Cmd + L",
      description: "AI Line Edit",
      example: "// Select a line and ask AI to modify it",
    },
    {
      shortcut: "Cmd + I",
      description: "Inline AI Chat",
      example: "// Ask questions about specific code segments",
    },
    {
      shortcut: "Cmd + ;",
      description: "AI Code Actions",
      example: "// Quick fixes and suggestions for your code",
    },
    {
      shortcut: "Cmd + Shift + L",
      description: "AI Multi-Line Edit",
      example: "// Edit multiple lines with natural language",
    },
  ];

  return (
    <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-primary mb-6">
        Interactive Cursor AI Commands
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {commands.map((command, index) => (
            <motion.div
              key={command.shortcut}
              className={`p-4 rounded-lg cursor-pointer transition-all ${
                activeCommand === index
                  ? "bg-primary/10 border border-primary/30"
                  : "bg-background/80 hover:bg-accent/10"
              }`}
              onClick={() => setActiveCommand(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm bg-background/90 px-2 py-1 rounded">
                  {command.shortcut}
                </span>
                <span className="text-muted-foreground text-sm">
                  {command.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-background/90 rounded-lg p-4">
          <div className="font-mono text-sm">
            <div className="mb-4 text-primary">
              {commands[activeCommand].description}
            </div>
            <pre className="p-4 bg-black/90 rounded overflow-x-auto">
              <code className="text-green-400">
                {commands[activeCommand].example}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursorDemo;
