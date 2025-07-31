import React from "react";
import Attendance from "../components/Attendance";

const AttendancePage = ({ students, setStudents }) => {
  return <Attendance students={students} setStudents={setStudents} />;
};

export default AttendancePage;
