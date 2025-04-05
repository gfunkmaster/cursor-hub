import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { Spinner } from "@/components/ui/Spinner";

interface CodeEditorProps {
  code: string;
  language?: string;
  theme?: "vs-dark" | "light";
  onChange?: (value: string | undefined) => void;
  readOnly?: boolean;
  height?: string;
}

export function CodeEditor({
  code,
  language = "typescript",
  theme = "vs-dark",
  onChange,
  readOnly = false,
  height = "400px",
}: CodeEditorProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-gray-100 dark:bg-gray-800 rounded-lg">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <Editor
        height={height}
        defaultLanguage={language}
        defaultValue={code}
        theme={theme}
        onChange={onChange}
        options={{
          readOnly,
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: true,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding: { top: 16, bottom: 16 },
        }}
        loading={<Spinner size="lg" />}
      />
    </div>
  );
}
