'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Menu, X, Cloud, Bitcoin, Newspaper, LayoutDashboard,
  User, Settings, Activity, Bell, LogOut, BarChart
} from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-black p-2 rounded-md"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-72 bg-[#0f172a] text-white p-6 border-r border-slate-700 z-40 shadow-lg
          overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:block
        `}
      >
        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-10">
          <LayoutDashboard size={28} />
          <span className="text-xl font-bold tracking-wide">Dashboard</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <NavItem href="/dashboard/weather" icon={<Cloud size={20} />} label="Weather" onClick={() => setIsOpen(false)} />
          <NavItem href="/dashboard/crypto-prices" icon={<Bitcoin size={20} />} label="Crypto Prices" onClick={() => setIsOpen(false)} />
          <NavItem href="/dashboard/crypto-news" icon={<Newspaper size={20} />} label="Crypto News" onClick={() => setIsOpen(false)} />
          <NavItem href="" icon={<Bell size={20} />} label="Notifications" onClick={() => setIsOpen(false)} />
          <NavItem href="" icon={<User size={20} />} label="Users" onClick={() => setIsOpen(false)} />
          <NavItem href="" icon={<Settings size={20} />} label="Settings" onClick={() => setIsOpen(false)} />

          <hr className="my-4 border-slate-700" />

          <NavItem href="/" icon={<LogOut size={20} />} label="Logout" onClick={() => setIsOpen(false)} />
        </nav>
      </aside>
    </>
  );
}

// Reusable NavItem component
function NavItem({ href, icon, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}


