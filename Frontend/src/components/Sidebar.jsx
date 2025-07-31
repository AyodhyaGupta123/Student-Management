import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, ClipboardList, DollarSign, User } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const menu = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={18} /> },
    { name: "Admission", path: "/admission", icon: <Users size={18} /> },
    { name: "Attendance", path: "/attendance", icon: <ClipboardList size={18} /> },
    { name: "Fees", path: "/fees", icon: <DollarSign size={18} /> },
    { name: "Students", path: "/students", icon: <User size={18} /> },
  ];

  return (
    <div className="bg-white shadow-lg h-full p-5 space-y-4 rounded-tr-2xl rounded-br-2xl">
      {menu.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            location.pathname === item.path
              ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span>{item.icon}</span>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
