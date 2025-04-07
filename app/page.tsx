// app/page.js
'use client'; // This is a client component

import Link from 'next/link';
import { useEffect } from 'react';

export default function LandingPage() {
  useEffect(() => {
    console.log("Landing page loaded");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to CryptoWeather Nexus
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          Your one-stop dashboard for weather and crypto insights.
        </p>
      </header>

      <main className="flex flex-col items-center space-y-4">
        <Link href="/dashboard">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
          >
            Go to Dashboard
          </button>
        </Link>
        <p className="text-sm text-gray-500 mt-6">
          Powered by Next.js, React, and Tailwind CSS.
        </p>
      </main>

      <footer className="mt-8 text-center text-gray-400">
        <p>&copy; 2025 CryptoWeather Nexus</p>
      </footer>
    </div>
  );
}
