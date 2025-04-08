'use client';

import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Navbar from '../ui/dashboard/navbar/navbar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex bg-[#0f172a] text-white min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen ml-0 md:ml-72 z-0 relative">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 md:left-72 right-0 z-30">
          <Navbar />
        </div>

        {/* Page Content */}
        <main className="pt-16 p-6 bg-[#0f172a] flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}




