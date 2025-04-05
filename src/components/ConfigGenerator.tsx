"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckIcon,
  ClipboardIcon,
  EyeIcon,
  CodeBracketIcon,
  AdjustmentsHorizontalIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
  ChevronRightIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

interface ConfigOption {
  key: string;
  label: string;
  type: "text" | "number" | "boolean" | "select" | "array";
  options?: string[];
  defaultValue: any;
  description: string;
  preview?: string;
  tooltip?: string;
  validation?: {
    required?: boolean;
    min?: number;
    max?: number;
    pattern?: RegExp;
    message?: string;
  };
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
        tooltip:
          "Select your project type to get optimized AI suggestions and configurations",
        validation: {
          required: true,
          message: "Project type is required for proper AI context",
        },
      },
      {
        key: "project.typescript",
        label: "Use TypeScript",
        type: "boolean",
        defaultValue: true,
        description: "Whether the project uses TypeScript",
        tooltip:
          "TypeScript provides better type safety and improves AI code generation accuracy",
      },
      {
        key: "project.strictMode",
        label: "Strict Mode",
        type: "boolean",
        defaultValue: true,
        description: "Enable strict type checking",
        tooltip: "Recommended for better type safety and code quality",
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
        tooltip:
          "Controls how much surrounding code context Cursor AI considers",
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

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => (
  <div className="flex items-center gap-2 mb-6">
    {Array.from({ length: totalSteps }).map((_, index) => (
      <div key={index} className="flex items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            index < currentStep
              ? "bg-green-500 text-white"
              : index === currentStep
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          {index + 1}
        </div>
        {index < totalSteps - 1 && (
          <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
        )}
      </div>
    ))}
  </div>
);

const ConfigGenerator: FC = () => {
  const [config, setConfig] = useState<Record<string, any>>(() => {
    const initialConfig: Record<string, any> = {};
    configSections.forEach((section) => {
      section.fields.forEach((field) => {
        const [mainKey, subKey] = field.key.split(".");
        if (!initialConfig[mainKey]) {
          initialConfig[mainKey] = {};
        }
        initialConfig[mainKey][subKey] = field.defaultValue;
      });
    });
    return initialConfig;
  });
  const [copied, setCopied] = useState(false);
  const [activePreview, setActivePreview] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState(0);
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});
  const [showPreview, setShowPreview] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [configStatus, setConfigStatus] = useState<{
    isValid: boolean;
    message: string;
  }>({ isValid: false, message: "Required fields missing" });
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = configSections.length;

  const validateConfig = (newConfig: Record<string, any>) => {
    const errors: Record<string, string> = {};
    let isValid = true;
    let statusMessage = "Configuration is valid";
    let completedSteps = 0;

    // Validate all fields with validation rules
    configSections.forEach((section, sectionIndex) => {
      let sectionValid = true;
      section.fields.forEach((field) => {
        const value =
          newConfig[field.key.split(".")[0]]?.[field.key.split(".")[1]];

        if (field.validation) {
          if (field.validation.required && !value) {
            errors[field.key] =
              field.validation.message || "This field is required";
            sectionValid = false;
            isValid = false;
          }

          if (
            field.validation.min !== undefined &&
            value < field.validation.min
          ) {
            errors[
              field.key
            ] = `Value must be at least ${field.validation.min}`;
            sectionValid = false;
            isValid = false;
          }

          if (
            field.validation.max !== undefined &&
            value > field.validation.max
          ) {
            errors[field.key] = `Value must be at most ${field.validation.max}`;
            sectionValid = false;
            isValid = false;
          }

          if (
            field.validation.pattern &&
            !field.validation.pattern.test(value)
          ) {
            errors[field.key] = field.validation.message || "Invalid format";
            sectionValid = false;
            isValid = false;
          }
        }
      });

      if (sectionValid) {
        completedSteps++;
      }
    });

    if (!isValid) {
      statusMessage = `Please fix validation errors (${completedSteps}/${totalSteps} sections complete)`;
    } else {
      statusMessage = `Configuration is valid (${completedSteps}/${totalSteps} sections complete)`;
    }

    setValidationErrors(errors);
    setConfigStatus({ isValid, message: statusMessage });
    return isValid;
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
    const [mainKey, subKey] = field.key.split(".");
    const value = config[mainKey]?.[subKey] ?? field.defaultValue;
    const hasError = !!validationErrors[field.key];

    return (
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <label className="block text-sm font-medium">
            {field.label}
            {field.validation?.required && (
              <span className="text-red-500 ml-1">*</span>
            )}
          </label>
          {field.tooltip && (
            <button
              className="text-gray-400 hover:text-gray-600"
              onMouseEnter={() => setActiveTooltip(field.key)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <QuestionMarkCircleIcon className="w-4 h-4" />
            </button>
          )}
        </div>
        {activeTooltip === field.key && (
          <div className="absolute z-10 bg-black text-white p-2 rounded text-sm max-w-xs">
            {field.tooltip}
          </div>
        )}
        <div className={`${hasError ? "border-red-500" : "border-border"}`}>
          {field.type === "select" ? (
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
          ) : field.type === "boolean" ? (
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded border-border"
                checked={value}
                onChange={(e) => handleChange(field.key, e.target.checked)}
              />
              <span className="text-sm text-muted-foreground">Enabled</span>
            </label>
          ) : field.type === "array" ? (
            <div className="space-y-2">
              {(value || []).map((item: string, index: number) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 rounded-md border border-border bg-background px-3 py-2"
                    value={item}
                    onChange={(e) => {
                      const newValue = [...(value || [])];
                      newValue[index] = e.target.value;
                      handleChange(field.key, newValue);
                    }}
                  />
                  <button
                    className="px-2 py-1 text-red-500 hover:bg-red-500/10 rounded"
                    onClick={() => {
                      const newValue = (value || []).filter(
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
                onClick={() => handleChange(field.key, [...(value || []), ""])}
              >
                + Add Pattern
              </button>
            </div>
          ) : (
            <input
              type={field.type}
              className="w-full rounded-md border border-border bg-background px-3 py-2"
              value={value}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          )}
        </div>
        {hasError && (
          <p className="text-red-500 text-sm mt-1">
            {validationErrors[field.key]}
          </p>
        )}
        <p className="text-sm text-gray-500 mt-1">{field.description}</p>
      </div>
    );
  };

  const handleNext = () => {
    const sectionValid = configSections[currentStep].fields.every(
      (field) => !validationErrors[field.key]
    );

    if (sectionValid && currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          {configStatus.isValid ? (
            <CheckCircleIcon className="w-5 h-5 text-green-500" />
          ) : (
            <ExclamationCircleIcon className="w-5 h-5 text-yellow-500" />
          )}
          <span
            className={`text-sm ${
              configStatus.isValid ? "text-green-500" : "text-yellow-500"
            }`}
          >
            {configStatus.message}
          </span>
        </div>
        <div className="flex space-x-4">
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
      </div>

      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-primary">
              {configSections[currentStep].title}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={currentStep === totalSteps - 1}
                className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {configSections[currentStep].fields.map((field) => (
              <div key={field.key} className="space-y-2">
                {renderField(field)}
              </div>
            ))}
          </div>
        </div>

        {showPreview && (
          <div className="bg-gray-900 p-6 rounded-lg sticky top-4">
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
            <pre className="text-green-400 text-sm overflow-auto max-h-[600px]">
              {JSON.stringify(config, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfigGenerator;
