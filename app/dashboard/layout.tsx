'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '../ui/dashboard/navbar/navbar';
import Sidebar from '../ui/dashboard/sidebar/sidebar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Dynamically setting sidebar margin based on collapse state
  const sidebarWidth = isCollapsed ? 'md:w-16' : 'md:w-72';

  return (
    <div className="flex bg-[#0f172a] text-white min-h-screen relative">
      {/* Sidebar Component */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setSidebarOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      {/* Mobile Overlay (Visible when sidebar is open on mobile) */}
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-h-screen ml-0 ${sidebarWidth}`}>
        {/* Navbar Component */}
        <Navbar onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

        {/* Main Content with Padding */}
        <main className="pt-20 p-6 bg-[#0f172a] flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;


