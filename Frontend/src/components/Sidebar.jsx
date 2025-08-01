import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  DollarSign,
  User,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      return saved !== null ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const menu = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
    { name: "Admission", path: "/admission", icon: <Users size={20} /> },
    {
      name: "Attendance",
      path: "/attendance",
      icon: <ClipboardList size={20} />,
    },
    { name: "Fees", path: "/fees", icon: <DollarSign size={20} /> },
    { name: "Students", path: "/students", icon: <User size={20} /> },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen shadow-lg z-40 transition-all duration-300
    ${isOpen ? "w-64" : "w-20"}
    ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"}
    ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
  `}
      >
        {/* Header */}
        <div
          className={`p-3 border-b ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center gap-2 ${
                !isOpen && "justify-center"
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SM</span>
              </div>
              {isOpen && (
                <span
                  className={`font-bold text-base ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  Student Management
                </span>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-md ${
                  isDark
                    ? "hover:bg-gray-700 text-gray-300"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Collapse Toggle (Desktop) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`hidden lg:block p-2 rounded-md ${
                  isDark
                    ? "hover:bg-gray-700 text-gray-300"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                {isOpen ? (
                  <ChevronLeft size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>

              {/* Close (Mobile) */}
              <button
                onClick={() => setIsOpen(false)}
                className={`lg:hidden p-2 rounded-md ${
                  isDark
                    ? "hover:bg-gray-700 text-gray-300"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="px-2 py-3 space-y-1">
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium text-sm lg:text-base relative
                ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                    : isDark
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
