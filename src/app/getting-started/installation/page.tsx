import { FC } from "react";
import Link from "next/link";
import {
  WindowIcon,
  CommandLineIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const InstallationGuide: FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">
        Installing Cursor - The AI-First Code Editor
      </h1>

      <div className="space-y-8">
        {/* System Requirements */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">System Requirements</h2>
          <div className="bg-background/50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li>• Operating System: Windows 10+, macOS 10.15+, or Linux</li>
              <li>
                • Memory: Minimum 4GB RAM (8GB recommended for optimal AI
                performance)
              </li>
              <li>
                • Disk Space: 500MB for the editor and additional space for
                language models
              </li>
              <li>• Internet Connection: Required for AI features</li>
              <li>
                • GPU: Optional, but recommended for better AI performance
              </li>
            </ul>
          </div>
        </section>

        {/* OS-specific Installation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Choose Your Platform</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Windows */}
            <Link
              href="/getting-started/installation/windows"
              className="block p-6 bg-background/50 rounded-lg hover:bg-background/70 transition"
            >
              <h3 className="text-xl font-semibold mb-3">Windows</h3>
              <ul className="space-y-2 text-sm">
                <li>• Windows 10 or higher</li>
                <li>• x64 architecture</li>
                <li>• DirectML support (optional)</li>
              </ul>
            </Link>

            {/* macOS */}
            <Link
              href="/getting-started/installation/macos"
              className="block p-6 bg-background/50 rounded-lg hover:bg-background/70 transition"
            >
              <h3 className="text-xl font-semibold mb-3">macOS</h3>
              <ul className="space-y-2 text-sm">
                <li>• macOS 10.15 or higher</li>
                <li>• Apple Silicon or Intel</li>
                <li>• Core ML support (optional)</li>
              </ul>
            </Link>

            {/* Linux */}
            <Link
              href="/getting-started/installation/linux"
              className="block p-6 bg-background/50 rounded-lg hover:bg-background/70 transition"
            >
              <h3 className="text-xl font-semibold mb-3">Linux</h3>
              <ul className="space-y-2 text-sm">
                <li>• Ubuntu 20.04+ / Fedora 35+</li>
                <li>• x64 architecture</li>
                <li>• CUDA support (optional)</li>
              </ul>
            </Link>
          </div>
        </section>

        {/* Direct Download */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Quick Download</h2>
          <div className="bg-background/50 p-6 rounded-lg space-y-4">
            <p>Download Cursor directly from the official website:</p>
            <Link
              href="https://cursor.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
            >
              Download Cursor
            </Link>
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What You'll Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">
                AI-Powered Features
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Intelligent code completion</li>
                <li>• Natural language to code conversion</li>
                <li>• Smart code refactoring</li>
                <li>• Context-aware suggestions</li>
              </ul>
            </div>
            <div className="bg-background/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">
                Developer Experience
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• VS Code-like interface</li>
                <li>• Extension compatibility</li>
                <li>• Git integration</li>
                <li>• Multi-language support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/getting-started/configuration"
              className="block p-6 bg-background/50 rounded-lg hover:bg-background/70 transition"
            >
              <h3 className="text-xl font-semibold mb-3">Editor Setup</h3>
              <p className="text-sm">
                Configure your AI settings and editor preferences
              </p>
            </Link>
            <Link
              href="/getting-started/first-steps"
              className="block p-6 bg-background/50 rounded-lg hover:bg-background/70 transition"
            >
              <h3 className="text-xl font-semibold mb-3">First Steps</h3>
              <p className="text-sm">
                Learn how to use AI features in your workflow
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InstallationGuide;
