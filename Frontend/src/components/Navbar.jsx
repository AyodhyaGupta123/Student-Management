import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, ChevronDown, Search, Menu, X, PanelLeft } from "lucide-react";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Students", path: "/students" },
    { name: "Attendance", path: "/attendance" },
    { name: "Fees", path: "/fees" },
    { name: "Admissions", path: "/admission" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md px-3 sm:px-4 lg:px-6 py-2 sm:py-3 flex items-center justify-between">
      {/* Logo */}
      <div>
        <h1 className="text-lg lg:text-xl font-bold text-white">Broadway</h1>
      </div>

      {/* Search (Desktop) */}
      <div className="hidden sm:flex flex-1 justify-center max-w-md mx-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search students, fees, attendance..."
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-yellow-500 text-sm"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Right Side (Desktop) */}
      <div className="hidden lg:flex items-center gap-4">
        {/* Notifications */}
        <button className="relative text-white hover:text-yellow-300 transition">
          <Bell size={20} />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 bg-white px-2 py-1 rounded-full hover:bg-gray-100"
          >
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.MO6xGNKf9xvRoloTn_B92AHaHa?pid=Api&P=0&h=220"
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-yellow-300"
            />
            <span className="hidden lg:block text-gray-800 text-sm">Admin</span>
            <ChevronDown
              size={16}
              className={`text-gray-600 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md py-2">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                My Profile
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </button>
              <hr />
              <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Controls */}
      <div className="flex lg:hidden items-center gap-2">
        <button className="text-white hover:text-yellow-300">
          <Search size={18} />
        </button>
        <button className="text-white hover:text-yellow-300">
          <Bell size={18} />
        </button>
        {/* Sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white hover:text-yellow-300"
        >
          <PanelLeft size={20} />
        </button>
        {/* Mobile menu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white hover:text-yellow-300"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t">
          <div className="p-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 rounded-lg text-sm ${
                  location.pathname === item.path
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
