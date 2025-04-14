import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-32 flex flex-col items-center justify-center text-center">
        {/* Logo/Branding */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="h-16 w-16 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-400 tracking-tight">
            Snippeto
          </h1>
          <p className="text-xl md:text-2xl mt-4 max-w-2xl mx-auto text-gray-300">
            Store, organize, and share your code snippets with ease
          </p>
        </div>

        {/* Get Started Button */}
        <Link href="/home">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-6 px-8 rounded-lg font-medium transition-all transform hover:scale-105">
            Get Started
          </Button>
        </Link>

        {/* Features Preview */}
        <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="h-12 w-12 bg-indigo-900/40 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-indigo-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Save Snippets</h3>
            <p className="text-gray-400">
              Store your code snippets securely in one place
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="h-12 w-12 bg-indigo-900/40 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-indigo-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Edit with Ease</h3>
            <p className="text-gray-400">
              Powerful editor with syntax highlighting for all languages
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="h-12 w-12 bg-indigo-900/40 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-indigo-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Share Code</h3>
            <p className="text-gray-400">
              Share your snippets with teammates instantly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}