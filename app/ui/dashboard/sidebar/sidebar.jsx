// Sidebar Component

'use client';

import { useState } from 'react';
import Link from 'next/link'; // <-- Added import for Link
import {
  ChevronsLeft,
  ChevronsRight,
  Cloud,
  Bitcoin,
  Newspaper,
  LayoutDashboard,
  User,
  Settings,
  Bell,
  LogOut,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Sidebar({ isOpen, setIsOpen, isCollapsed, setIsCollapsed }) {
  const collapsedClass = isCollapsed ? 'w-16' : 'w-72'; // Adjusting width
  const showLabel = !isCollapsed;

  return (
    <aside
      className={`fixed top-0 left-0 h-screen ${collapsedClass} bg-[#0f172a] text-white p-4 border-r border-slate-700 z-40 shadow-lg overflow-y-auto transform-gpu transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:flex md:flex-col`}
    >
      {/* Brand Header */}
      <div className="flex items-center gap-3 mb-6 px-2">
        <LayoutDashboard size={24} />
        {showLabel && <span className="text-lg font-bold tracking-wide"></span>}
      </div>

      {/* Navigation Items */}
      <nav className="space-y-2">
        <NavItem href="/dashboard/weather" icon={<Cloud size={20} />} label="Weather" onClick={() => setIsOpen(false)} showLabel={showLabel} />
        <NavItem href="/dashboard/cryptoprices" icon={<Bitcoin size={20} />} label="Crypto Prices" onClick={() => setIsOpen(false)} showLabel={showLabel} />
        <NavItem href="/dashboard/cryptonews" icon={<Newspaper size={20} />} label="Crypto News" onClick={() => setIsOpen(false)} showLabel={showLabel} />
        <NavItem href="#" icon={<Bell size={20} />} label="Notifications" onClick={() => setIsOpen(false)} showLabel={showLabel} />
        <NavItem href="#" icon={<User size={20} />} label="Users" onClick={() => setIsOpen(false)} showLabel={showLabel} />
        <NavItem href="#" icon={<Settings size={20} />} label="Settings" onClick={() => setIsOpen(false)} showLabel={showLabel} />
        <hr className="my-4 border-slate-700" />
        <NavItem href="/" icon={<LogOut size={20} />} label="Logout" onClick={() => setIsOpen(false)} showLabel={showLabel} />
      </nav>

      {/* Collapse Toggle (Centered vertically) */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center justify-center absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded hover:bg-slate-800"
      >
        {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
      </button>
    </aside>
  );
}

function NavItem({ href, icon, label, onClick, showLabel }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${isActive ? 'bg-slate-700' : 'hover:bg-slate-800'}`}
    >
      {icon}
      {showLabel && <span className="truncate">{label}</span>}
    </Link>
  );
}
