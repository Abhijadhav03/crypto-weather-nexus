'use client';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ onToggleSidebar }) {
  return (
    <header className="w-full bg-[#1e293b] text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-2xl mx-auto">
        {/* Mobile Toggle Button */}
        <button
          onClick={onToggleSidebar}
          className="flex md:hidden text-white hover:text-gray-300 transition"
        >
          <Menu size={24} />
        </button>

        {/* Dashboard Title */}
        <h1 className="text-xl md:text-2xl font-semibold">Dashboard</h1>

        {/* Right Side Content */}
        <div className="text-slate-300 text-sm md:text-base">Welcome, user</div>
      </div>
    </header>
  );
}
