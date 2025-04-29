// app/dashboard/page.js
'use client';
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const DashboardPage = () => {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen p-6 rounded-lg shadow-md">
     
    </div>
  );
};

export default DashboardPage;
