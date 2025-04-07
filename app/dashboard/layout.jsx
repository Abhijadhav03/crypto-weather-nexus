
'use client';

import DashboardPage from './page';
import Navbar from '../ui/dashboard/navbar/navbar';
import Sidebar from '../ui/dashboard/sidebar/sidebar';

const Layout = () => {
  return (
    <div className="flex bg-[#0f172a] text-white min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-h-screen ml-0 md:ml-72">
        {/* Top Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="p-6 bg-[#0f172a] flex-1 overflow-y-auto">
          <DashboardPage />
        </main>
      </div>
    </div>
  );
};

export default Layout;
