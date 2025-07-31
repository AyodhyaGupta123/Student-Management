import React from "react";
import FeesStatus from "../components/FeesStatus";

const FeesPage = ({ students, setStudents }) => {
  return <FeesStatus students={students} setStudents={setStudents} />;
};

export default FeesPage;

