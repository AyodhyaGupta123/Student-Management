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
      name: "Amit Sharma",
      class: "10th",
      pendingFees: 2000,
      fees: { total: 5000, paid: 3000 },
      attendance: [],
      subjectsToday: "Math - Algebra",
    },
    {
      id: 2,
      name: "Riya Verma",
      class: "9th",
      pendingFees: 0,
      fees: { total: 4000, paid: 4000 },
      attendance: [],
      subjectsToday: "Science - Physics",
    },
  ]);

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1">
          <div className="w-60 bg-gray-50">
            <Sidebar />
          </div>
          <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
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
