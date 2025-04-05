"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckIcon,
  ClipboardIcon,
  EyeIcon,
  CodeBracketIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

interface ConfigOption {
  key: string;
  label: string;
  type: "text" | "number" | "boolean" | "select" | "array";
  options?: string[];
  defaultValue: any;
  description: string;
  preview?: string;
}

interface ConfigSection {
  title: string;
  icon: JSX.Element;
  fields: ConfigOption[];
}

const configSections: ConfigSection[] = [
  {
    title: "Project Settings",
    icon: <CodeBracketIcon className="w-5 h-5" />,
    fields: [
      {
        key: "project.type",
        label: "Project Type",
        type: "select",
        options: ["next-app", "react-app", "node-api", "library"],
        defaultValue: "next-app",
        description: "The type of project you're working on",
      },
      {
        key: "project.typescript",
        label: "Use TypeScript",
        type: "boolean",
        defaultValue: true,
        description: "Whether the project uses TypeScript",
      },
      {
        key: "project.strictMode",
        label: "Strict Mode",
        type: "boolean",
        defaultValue: true,
        description: "Enable strict type checking",
      },
    ],
  },
  {
    title: "AI Optimization",
    icon: <AdjustmentsHorizontalIcon className="w-5 h-5" />,
    fields: [
      {
        key: "ai.contextStrategy",
        label: "Context Strategy",
        type: "select",
        options: ["minimal", "balanced", "comprehensive"],
        defaultValue: "balanced",
        description: "How much context to include in AI requests",
        preview:
          "// Example context strategy impact:\nminimal: Current file only\nbalanced: Related files + types\ncomprehensive: Full feature context",
      },
      {
        key: "ai.promptPatterns",
        label: "Prompt Patterns",
        type: "array",
        defaultValue: [
          "explain [selection]",
          "refactor [selection] to [pattern]",
          "add types to [selection]",
          "optimize [selection] for [aspect]",
        ],
        description: "Custom prompt patterns for quick access",
        preview:
          "// Example prompt pattern:\nexplain this code → Provides detailed explanation\nrefactor to hooks → Converts to hook pattern",
      },
      {
        key: "ai.codeGeneration",
        label: "Code Generation",
        type: "select",
        options: ["basic", "typed", "documented", "tested"],
        defaultValue: "typed",
        description: "Level of detail in generated code",
        preview:
          "// Example generated code:\nbasic: Simple implementation\ntyped: With TypeScript\ndocumented: With JSDoc\ntested: With tests",
      },
      {
        key: "ai.contextLines",
        label: "Context Lines",
        type: "number",
        defaultValue: 50,
        description: "Number of lines of context to include",
      },
      {
        key: "ai.autoSuggest",
        label: "Auto Suggestions",
        type: "boolean",
        defaultValue: true,
        description: "Enable automatic code suggestions",
      },
    ],
  },
  {
    title: "Code Style",
    icon: <CodeBracketIcon className="w-5 h-5" />,
    fields: [
      {
        key: "style.framework",
        label: "UI Framework",
        type: "select",
        options: ["tailwind", "mui", "chakra", "none"],
        defaultValue: "tailwind",
        description: "Primary UI framework",
      },
      {
        key: "style.componentPattern",
        label: "Component Pattern",
        type: "select",
        options: ["functional", "class", "mixed"],
        defaultValue: "functional",
        description: "Preferred React component pattern",
      },
      {
        key: "style.testFramework",
        label: "Testing Framework",
        type: "select",
        options: ["jest", "vitest", "cypress", "none"],
        defaultValue: "jest",
        description: "Primary testing framework",
      },
    ],
  },
  {
    title: "Documentation",
    icon: <EyeIcon className="w-5 h-5" />,
    fields: [
      {
        key: "docs.style",
        label: "Documentation Style",
        type: "select",
        options: ["jsdoc", "tsdoc", "markdown"],
        defaultValue: "tsdoc",
        description: "Documentation format",
      },
      {
        key: "docs.requireTests",
        label: "Require Tests",
        type: "boolean",
        defaultValue: true,
        description: "Require test files for components",
      },
      {
        key: "docs.storybook",
        label: "Use Storybook",
        type: "boolean",
        defaultValue: true,
        description: "Generate Storybook stories",
      },
    ],
  },
];

const ConfigGenerator: FC = () => {
  const [config, setConfig] = useState<Record<string, any>>({});
  const [copied, setCopied] = useState(false);
  const [activePreview, setActivePreview] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState(0);

  const handleChange = (key: string, value: any) => {
    setConfig((prev) => {
      const newConfig = { ...prev };
      const keys = key.split(".");
      let current = newConfig;

      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
          current[keys[i]] = {};
        }
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newConfig;
    });
  };

  const copyConfig = async () => {
    await navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderField = (field: ConfigOption) => {
    const value = config[field.key] || field.defaultValue;

    switch (field.type) {
      case "select":
        return (
          <select
            className="w-full rounded-md border border-border bg-background px-3 py-2"
            value={value}
            onChange={(e) => handleChange(field.key, e.target.value)}
          >
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "boolean":
        return (
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded border-border"
              checked={value}
              onChange={(e) => handleChange(field.key, e.target.checked)}
            />
            <span className="text-sm text-muted-foreground">Enabled</span>
          </label>
        );
      case "array":
        return (
          <div className="space-y-2">
            {value.map((item: string, index: number) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 rounded-md border border-border bg-background px-3 py-2"
                  value={item}
                  onChange={(e) => {
                    const newValue = [...value];
                    newValue[index] = e.target.value;
                    handleChange(field.key, newValue);
                  }}
                />
                <button
                  className="px-2 py-1 text-red-500 hover:bg-red-500/10 rounded"
                  onClick={() => {
                    const newValue = value.filter(
                      (_: any, i: number) => i !== index
                    );
                    handleChange(field.key, newValue);
                  }}
                >
                  ×
                </button>
              </div>
            ))}
            <button
              className="text-sm text-primary hover:text-primary/80"
              onClick={() => handleChange(field.key, [...value, ""])}
            >
              + Add Pattern
            </button>
          </div>
        );
      default:
        return (
          <input
            type={field.type}
            className="w-full rounded-md border border-border bg-background px-3 py-2"
            value={value}
            onChange={(e) => handleChange(field.key, e.target.value)}
          />
        );
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-4 overflow-x-auto pb-4">
        {configSections.map((section, index) => (
          <button
            key={section.title}
            onClick={() => setSelectedSection(index)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              selectedSection === index
                ? "bg-primary text-white"
                : "bg-background/50 hover:bg-background/80"
            }`}
          >
            {section.icon}
            <span>{section.title}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          key={selectedSection}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
            {configSections[selectedSection].icon}
            {configSections[selectedSection].title}
          </h3>
          <div className="space-y-4">
            {configSections[selectedSection].fields.map((field) => (
              <div key={field.key} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-foreground">
                    {field.label}
                    <span className="text-xs text-muted-foreground ml-2">
                      ({field.description})
                    </span>
                  </label>
                  {field.preview && (
                    <button
                      onClick={() =>
                        setActivePreview(
                          activePreview === field.key ? null : field.key
                        )
                      }
                      className={`p-1 rounded hover:bg-accent/10 ${
                        activePreview === field.key
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      <EyeIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {activePreview === field.key && field.preview && (
                  <pre className="text-xs bg-black/90 p-3 rounded-md text-green-400 mt-2">
                    {field.preview}
                  </pre>
                )}
                {renderField(field)}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          <div className="bg-black/90 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">
                Generated Configuration
              </h3>
              <button
                onClick={copyConfig}
                className="px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                {copied ? (
                  <CheckIcon className="w-4 h-4" />
                ) : (
                  <ClipboardIcon className="w-4 h-4" />
                )}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <pre className="text-green-400 text-sm overflow-x-auto">
              {JSON.stringify(config, null, 2)}
            </pre>
          </div>

          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">
              Configuration Impact
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your current configuration optimizes for:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-500" />
                {config.ai?.contextStrategy === "comprehensive"
                  ? "Maximum context awareness"
                  : config.ai?.contextStrategy === "minimal"
                  ? "Fast, focused responses"
                  : "Balanced context and performance"}
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-500" />
                {config.ai?.codeGeneration === "tested"
                  ? "Fully tested code generation"
                  : config.ai?.codeGeneration === "documented"
                  ? "Well-documented code"
                  : "Basic implementation with types"}
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-500" />
                {config.ai?.autoSuggest
                  ? "Proactive code suggestions"
                  : "Manual code assistance"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigGenerator;
