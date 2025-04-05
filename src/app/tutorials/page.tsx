"use client";

import React, { useState } from "react";
import {
  TutorialCard,
  type Tutorial,
} from "@/components/tutorials/TutorialCard";

const TUTORIALS: Tutorial[] = [
  {
    id: "getting-started-cursor",
    title: "Getting Started with Cursor AI",
    description: "Learn the basics of using Cursor AI for development",
    difficulty: "beginner",
    duration: "15 minutes",
    topics: ["Cursor AI", "Basics", "Setup"],
    steps: [
      {
        title: "Understanding Cursor AI Commands",
        description: "Learn the basic commands",
        code: "// Basic commands example",
      },
      // ... other steps
    ],
  },
  {
    id: "advanced-prompting",
    title: "Advanced Prompting Techniques",
    description: "Master the art of writing effective prompts",
    difficulty: "intermediate",
    duration: "25 minutes",
    topics: ["Prompts", "AI", "Efficiency"],
    steps: [
      {
        title: "Context-Rich Prompts",
        description: "Learn to write detailed prompts",
        code: "// Advanced prompt example",
      },
      // ... other steps
    ],
  },
  {
    id: "project-workflow",
    title: "Project Workflow Optimization",
    description: "Optimize your development workflow with Cursor AI",
    difficulty: "advanced",
    duration: "30 minutes",
    topics: ["Workflow", "Productivity", "Best Practices"],
    steps: [
      {
        title: "Setting Up Projects",
        description: "Optimize project setup",
        code: "// Project setup example",
      },
      // ... other steps
    ],
  },
];

export default function TutorialsPage() {
  const [filter, setFilter] = useState<
    "all" | "beginner" | "intermediate" | "advanced"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTutorials = TUTORIALS.filter((tutorial) => {
    const matchesDifficulty =
      filter === "all" || tutorial.difficulty === filter;
    const matchesSearch =
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.topics.some((topic) =>
        topic.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesDifficulty && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Interactive Tutorials</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Learn how to use Cursor AI effectively with our interactive tutorials.
          From basic commands to advanced workflows, we've got you covered.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2">
            {(["all", "beginner", "intermediate", "advanced"] as const).map(
              (difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setFilter(difficulty)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    filter === difficulty
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutorials.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>

      {filteredTutorials.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            No tutorials found
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}
