import React from "react";
import Dashboard from "../components/Dashboard";

const HomePage = ({ students }) => {
  return (
    <div className="min-h-screen">

      <Dashboard students={students} />
    </div>
  );
};

export default HomePage;
