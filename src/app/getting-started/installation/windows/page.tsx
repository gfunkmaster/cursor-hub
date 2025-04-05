import { FC } from "react";
import Link from "next/link";
import { ArrowLeftIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const WindowsInstallation: FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link
        href="/getting-started/installation"
        className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to Installation Guide
      </Link>

      <h1 className="text-4xl font-bold mb-8">Installing Cursor on Windows</h1>

      <div className="space-y-8">
        {/* Prerequisites */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Prerequisites</h2>
          <div className="bg-background/50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                <div>
                  <span className="font-medium">Windows 10 or Windows 11</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    64-bit version required for AI features
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                <div>
                  <span className="font-medium">4GB RAM minimum</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    8GB or more recommended for optimal AI performance
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                <div>
                  <span className="font-medium">Internet Connection</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Required for AI features and language model updates
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Installation Steps */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Installation Steps</h2>
          <div className="space-y-6">
            <div className="bg-background/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">1. Download Cursor</h3>
              <p className="mb-4">
                Download the latest version of Cursor for Windows:
              </p>
              <Link
                href="https://cursor.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
              >
                Download Cursor
              </Link>
            </div>

            <div className="bg-background/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">2. Install Cursor</h3>
              <ol className="space-y-3 list-decimal list-inside">
                <li>Run the downloaded installer</li>
                <li>Accept the license agreement</li>
                <li>Choose installation location (default recommended)</li>
                <li>Wait for the installation to complete</li>
                <li>Launch Cursor when installation finishes</li>
              </ol>
            </div>

            <div className="bg-background/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">3. First Launch</h3>
              <ul className="space-y-3">
                <li>
                  • Cursor will download required AI models on first launch
                </li>
                <li>
                  • You may be prompted to sign in (optional but recommended)
                </li>
                <li>
                  • The editor will configure itself for optimal performance
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Troubleshooting</h2>
          <div className="bg-background/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Common Issues</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">AI Features Not Working</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Check your internet connection and ensure AI models are fully
                  downloaded
                </p>
              </div>
              <div>
                <h4 className="font-medium">Performance Issues</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Try closing other resource-intensive applications and ensure
                  you meet the minimum system requirements
                </p>
              </div>
              <div>
                <h4 className="font-medium">Installation Errors</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Try running the installer as administrator and check Windows
                  Defender settings
                </p>
              </div>
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
              <h3 className="text-xl font-semibold mb-3">Configure Cursor</h3>
              <p className="text-sm">
                Set up your AI preferences and editor settings
              </p>
            </Link>
            <Link
              href="/getting-started/first-steps"
              className="block p-6 bg-background/50 rounded-lg hover:bg-background/70 transition"
            >
              <h3 className="text-xl font-semibold mb-3">Learn AI Features</h3>
              <p className="text-sm">Get started with AI-powered development</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WindowsInstallation;
