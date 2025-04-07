// app/page.js
'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function LandingPage() {
  useEffect(() => {
    console.log("Landing page loaded");
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-white to-purple-100 text-center text-gray-800">
      {/* Multi-colored, fading blobs */}
      <div className="absolute w-[30rem] h-[30rem] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blobFade top-[-5rem] left-[-5rem] z-0" />
      <div className="absolute w-[35rem] h-[35rem] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blobFade animation-delay-2000 top-[25%] right-[-10rem] z-0" />
      <div className="absolute w-[40rem] h-[40rem] bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blobFade animation-delay-4000 bottom-[-10rem] left-[10%] z-0" />

      {/* Sparkles */}
      <div className="absolute top-16 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-80 z-10" />
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-pink-200 rounded-full animate-bounce z-10" />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-fuchsia-200 rounded-full animate-float z-10" />

      {/* Main Content */}
      <header className="z-10">
        <h1 className="text-5xl font-bold text-pink-600 drop-shadow-lg">Welcome to CryptoWeather Nexus</h1>
        <p className="mt-4 text-lg text-gray-700">Your one-stop dashboard for weather and crypto insights.</p>
      </header>

      <main className="z-10 mt-10">
        <Link href="/dashboard">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all">
            Go to Dashboard
          </button>
        </Link>
        <p className="mt-6 text-sm text-gray-500">Powered by Next.js, React, and Tailwind CSS.</p>
      </main>

      <footer className="z-10 mt-12 text-gray-400 text-sm">
        <p>&copy; 2025 CryptoWeather Nexus</p>
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        @keyframes blobFade {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }
        .animate-blobFade {
          animation: blobFade 8s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
