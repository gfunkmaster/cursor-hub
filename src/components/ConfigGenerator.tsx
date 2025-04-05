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
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});
  const [showPreview, setShowPreview] = useState(false);

  const validateConfig = (newConfig: Record<string, any>) => {
    const errors: Record<string, string> = {};

    // Validate required fields
    if (!newConfig.project?.type) {
      errors["project.type"] = "Project type is required";
    }

    // Validate context lines
    if (
      newConfig.ai?.contextLines &&
      (newConfig.ai.contextLines < 10 || newConfig.ai.contextLines > 200)
    ) {
      errors["ai.contextLines"] = "Context lines should be between 10 and 200";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

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

      validateConfig(newConfig);
      return newConfig;
    });
  };

  const copyConfig = async () => {
    const configString = JSON.stringify(config, null, 2);
    await navigator.clipboard.writeText(configString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadConfig = () => {
    if (!validateConfig(config)) {
      alert("Please fix validation errors before downloading");
      return;
    }

    const configString = JSON.stringify(config, null, 2);
    const blob = new Blob([configString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = ".cursor-config.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const importConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        setConfig(imported);
        validateConfig(imported);
      } catch (error) {
        alert("Invalid configuration file");
      }
    };
    reader.readAsText(file);
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
      <div className="flex justify-end space-x-4 mb-6">
        <label className="cursor-pointer px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
          Import Config
          <input
            type="file"
            accept=".json"
            onChange={importConfig}
            className="hidden"
          />
        </label>
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/90"
        >
          {showPreview ? "Hide Preview" : "Show Preview"}
        </button>
        <button
          onClick={downloadConfig}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
          disabled={Object.keys(validationErrors).length > 0}
        >
          Download Config
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex space-x-4 mb-6">
            {configSections.map((section, index) => (
              <button
                key={section.title}
                onClick={() => setSelectedSection(index)}
                className={`px-4 py-2 rounded ${
                  selectedSection === index
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
              >
                <div className="flex items-center space-x-2">
                  {section.icon}
                  <span>{section.title}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {configSections[selectedSection].fields.map((field) => (
              <div key={field.key} className="space-y-2">
                <label className="block text-sm font-medium">
                  {field.label}
                  {validationErrors[field.key] && (
                    <span className="text-red-500 ml-2">
                      {validationErrors[field.key]}
                    </span>
                  )}
                </label>
                {renderField(field)}
                <p className="text-sm text-gray-500">{field.description}</p>
              </div>
            ))}
          </div>
        </div>

        {showPreview && (
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">
                Configuration Preview
              </h3>
              <button
                onClick={copyConfig}
                className="text-white hover:text-primary"
                title="Copy to clipboard"
              >
                {copied ? (
                  <CheckIcon className="w-5 h-5" />
                ) : (
                  <ClipboardIcon className="w-5 h-5" />
                )}
              </button>
            </div>
            <pre className="text-green-400 text-sm overflow-auto">
              {JSON.stringify(config, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfigGenerator;
