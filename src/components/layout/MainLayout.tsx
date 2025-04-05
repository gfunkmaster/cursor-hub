"use client";

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { GuideSearch } from "@/components/GuideSearch";
import { loadGuideContent } from "@/utils/guides";

interface MainLayoutProps {
  children: ReactNode;
}

interface NavItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

const navigation: NavItem[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    icon: "🎯",
    description: "Learn the basics of Cursor AI",
  },
  {
    title: "Project Setup",
    href: "/project-setup",
    icon: "🏗️",
    description: "Set up your projects effectively",
  },
  {
    title: "Daily Workflow",
    href: "/daily-workflow",
    icon: "💻",
    description: "Optimize your development process",
  },
  {
    title: "Advanced Tips",
    href: "/advanced",
    icon: "🔧",
    description: "Advanced techniques and tips",
  },
  {
    title: "Live Examples",
    href: "/examples",
    icon: "🎮",
    description: "Real-world examples and demos",
  },
];

export default function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [guides, setGuides] = useState<Record<string, string>>({});

  useEffect(() => {
    // Load guide content on client side
    const content = loadGuideContent();
    setGuides(content);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
          <div className="flex items-center mb-5 space-x-2">
            <span className="text-2xl">🚀</span>
            <h1 className="text-xl font-bold">Cursor AI Guide</h1>
          </div>

          {/* Search Component */}
          <div className="mb-4">
            <GuideSearch guides={navigation} />
          </div>

          <nav className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className={`p-4 ${isSidebarOpen ? "ml-64" : ""}`}>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
        >
          {isSidebarOpen ? "←" : "→"}
        </button>
        <main className="container mx-auto py-4">{children}</main>
      </div>
    </div>
  );
}
