import React from "react";
import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg px-6 py-4 flex justify-between items-center">
      {/* Logo / Title */}
      <h1 className="text-xl font-bold text-white tracking-wide">
        Broadway Infosys <span className="text-yellow-300">Training Center</span>
      </h1>

      {/* Right Section */}
      <div className="flex items-center space-x-5">
        {/* Notification Icon */}
        <button className="relative text-white hover:text-yellow-300 transition">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Welcome Text */}
        <span className="text-white font-medium hidden md:block">
          Welcome, Admin
        </span>

        {/* Logout Button */}
        <button className="bg-yellow-300 text-gray-900 px-4 py-1.5 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
