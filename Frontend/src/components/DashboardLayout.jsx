import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Section */}
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Scrollable Content Area */}
        <main
          className={`pt-16 px-4 lg:px-6 bg-gray-50 min-h-screen overflow-auto
            ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"}
          `}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
