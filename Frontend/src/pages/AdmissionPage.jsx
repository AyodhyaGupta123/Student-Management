import React from "react";
import AdmissionForm from "../components/AdmissionForm";

const AdmissionPage = ({ students, setStudents }) => {
  return <AdmissionForm students={students} setStudents={setStudents} />;
};

export default AdmissionPage;
