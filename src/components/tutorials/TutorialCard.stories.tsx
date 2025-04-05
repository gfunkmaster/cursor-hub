import type { Meta, StoryObj } from "@storybook/react";
import { TutorialCard } from "./TutorialCard";

const meta: Meta<typeof TutorialCard> = {
  title: "Components/TutorialCard",
  component: TutorialCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TutorialCard>;

export const Beginner: Story = {
  args: {
    tutorial: {
      id: "getting-started",
      title: "Getting Started with Cursor AI",
      description: "Learn the basics of using Cursor AI for development",
      difficulty: "beginner",
      duration: "15 minutes",
      topics: ["Cursor AI", "Basics", "Setup"],
      steps: [
        {
          title: "Understanding Commands",
          description: "Learn basic commands",
          code: "// Example code",
        },
      ],
    },
  },
};

export const Intermediate: Story = {
  args: {
    tutorial: {
      id: "advanced-prompting",
      title: "Advanced Prompting Techniques",
      description: "Master the art of writing effective prompts",
      difficulty: "intermediate",
      duration: "25 minutes",
      topics: ["Prompts", "AI", "Efficiency"],
      steps: [
        {
          title: "Context-Rich Prompts",
          description: "Write better prompts",
          code: "// Example code",
        },
      ],
    },
  },
};

export const Advanced: Story = {
  args: {
    tutorial: {
      id: "project-workflow",
      title: "Project Workflow Optimization",
      description: "Optimize your development workflow",
      difficulty: "advanced",
      duration: "30 minutes",
      topics: ["Workflow", "Productivity", "Best Practices"],
      steps: [
        {
          title: "Project Setup",
          description: "Optimize setup",
          code: "// Example code",
        },
      ],
    },
  },
};
