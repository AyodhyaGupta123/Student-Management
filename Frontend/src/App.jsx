import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import AdmissionPage from "./pages/AdmissionPage";
import AttendancePage from "./pages/AttendancePage";
import FeesPage from "./pages/FeesPage";
import StudentsPage from "./pages/StudentsPage";
import StudentDetails from "./pages/StudentDetails";

const App = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ayodhya Gupta",
      class: "ADCA",
      pendingFees: 2000,
      fees: { total: 5000, paid: 3000 },
      attendance: [],
      subjectsToday: "C++,EXCEL,JAVA,PYTHON",
    },
    {
      id: 2,
      name: "Sateesh Kumar",
      class: "ADCA",
      pendingFees:2000,
      fees: { total: 4000, paid: 2000 },
      attendance: [],
      subjectsToday: "C++,EXCEL,JAVA,PYTHON",
    },
  ]);

  const [sidebarOpen, setSidebarOpen] = useState(() => {
    // Initialize from localStorage or default to true
    try {
      const saved = localStorage.getItem('sidebarOpen');
      return saved !== null ? JSON.parse(saved) : true;
    } catch (error) {
      // If there's an error parsing, clear the invalid value and return default
      localStorage.removeItem('sidebarOpen');
      return true;
    }
  });

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex flex-1 relative">
          {/* Responsive Sidebar */}
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
          
          {/* Main Content Area - Responsive layout */}
          <div className={`flex-1 bg-gray-100 p-4 lg:p-6 overflow-y-auto transition-all duration-300 ease-in-out ${
            sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
          }`}>
            <Routes>
              <Route path="/" element={<HomePage students={students} />} />
              <Route
                path="/admission"
                element={<AdmissionPage students={students} setStudents={setStudents} />}
              />
              <Route
                path="/attendance"
                element={<AttendancePage students={students} setStudents={setStudents} />}
              />
              <Route
                path="/fees"
                element={<FeesPage students={students} setStudents={setStudents} />}
              />
              <Route
                path="/students"
                element={<StudentsPage students={students} setStudents={setStudents} />}
              />
              <Route
                path="/student/:id"
                element={<StudentDetails students={students} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
