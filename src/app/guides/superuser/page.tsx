import { FC } from "react";
import Link from "next/link";

const SuperuserGuidePage: FC = () => {
  const sections = [
    {
      title: "Daily Habits",
      items: [
        "Use Cmd+K for quick AI assistance",
        "Maintain organized /docs folder",
        "Write specific TODOs",
        "Use live prompt tuning",
        "Build in small commits",
      ],
    },
    {
      title: "Power User Tips",
      items: [
        "Create project-specific .cursor-config.json",
        "Use prompt templates for consistency",
        "Keep context focused and relevant",
        "Trust the tools but verify outputs",
        "Regular dependency updates",
      ],
    },
    {
      title: "Best Practices",
      items: [
        "Document AI interactions",
        "Use semantic commit messages",
        "Follow project conventions",
        "Regular code reviews",
        "Maintain test coverage",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Cursor AI Superuser Guide
        </h1>
        <p className="text-xl text-gray-600">
          Master Cursor AI with these advanced tips and best practices
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Ready to Level Up?
        </h2>
        <p className="text-gray-600 mb-8">
          Check out our detailed documentation and resources to become a Cursor
          AI expert.
        </p>
        <div className="space-x-4">
          <Link
            href="/docs/superuser-guide"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Read Full Guide
          </Link>
          <Link
            href="/prompts/live-tuning"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View Prompt Templates
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuperuserGuidePage;
