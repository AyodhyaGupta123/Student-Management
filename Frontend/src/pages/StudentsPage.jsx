import React from "react";
import StudentList from "../components/StudentList";

const StudentsPage = ({ students, setStudents }) => {
  return <StudentList students={students} setStudents={setStudents} />;
};

export default StudentsPage;
