"use client";

import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { CodeBlock } from "@/components/ui/CodeBlock";

interface Feature {
  title: string;
  description: string;
  example: string;
  steps: string[];
  codeSnippet: string;
}

const ComplexFeaturesDemo: FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features: Feature[] = [
    {
      title: "AI-Powered Refactoring",
      description:
        "Transform complex code structures with intelligent refactoring",
      example: "Convert a class component to functional component with hooks",
      steps: [
        "Select the class component code",
        "Use Cmd/Ctrl + K and type 'Convert to functional component'",
        "Review and adjust the transformed code",
        "Update any affected imports or dependencies",
      ],
      codeSnippet: `// Before: Class Component
class UserProfile extends React.Component {
  state = { user: null, loading: true };
  
  componentDidMount() {
    this.fetchUser();
  }
  
  render() {
    return <div>{/* ... */}</div>;
  }
}

// After: Functional Component
const UserProfile: FC = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUser();
  }, []);
  
  return <div>{/* ... */}</div>;
};`,
    },
    {
      title: "Smart Code Generation",
      description: "Generate complex code patterns with natural language",
      example:
        "Create a custom hook with TypeScript, error handling, and caching",
      steps: [
        "Open a new file for your hook",
        "Use Cmd/Ctrl + K",
        "Describe the hook's functionality in detail",
        "Review and test the generated code",
      ],
      codeSnippet: `// Generate a custom hook
const useDataFetching = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};`,
    },
    {
      title: "Advanced Testing Patterns",
      description: "Generate comprehensive test suites with AI",
      example: "Create tests for async operations and error handling",
      steps: [
        "Select the component or function to test",
        "Use Cmd/Ctrl + K and request test generation",
        "Specify test scenarios and edge cases",
        "Review and enhance the generated tests",
      ],
      codeSnippet: `// Generate test suite
describe('useDataFetching', () => {
  it('should handle successful data fetching', async () => {
    const mockData = { id: 1, name: 'Test' };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    ) as jest.Mock;

    const { result, waitForNextUpdate } = renderHook(() =>
      useDataFetching('/api/data')
    );

    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    
    expect(result.current.data).toEqual(mockData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});`,
    },
  ];

  return (
    <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-primary mb-6">
        Complex Features Interactive Demo
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`p-4 rounded-lg cursor-pointer transition-all ${
                activeFeature === index
                  ? "bg-primary/10 border border-primary/30"
                  : "bg-background/80 hover:bg-accent/10"
              }`}
              onClick={() => setActiveFeature(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground mb-2">
                {feature.description}
              </p>
              <div className="text-sm text-primary">
                Example: {feature.example}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="bg-background/90 rounded-lg p-4">
            <h4 className="font-semibold mb-4">Steps:</h4>
            <ol className="list-decimal list-inside space-y-2">
              {features[activeFeature].steps.map((step, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-background/90 rounded-lg p-4">
            <h4 className="font-semibold mb-4">Code Example:</h4>
            <CodeBlock
              code={features[activeFeature].codeSnippet}
              language="typescript"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplexFeaturesDemo;
