import React, { useState } from "react";

const AdmissionForm = ({ students, setStudents }) => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    totalFees: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!formData.name || !formData.class || !formData.totalFees) return;

    const newStudent = {
      id: students.length + 1,
      name: formData.name,
      class: formData.class,
      pendingFees: parseInt(formData.totalFees),
      fees: { total: parseInt(formData.totalFees), paid: 0 },
      attendance: [],
      subjectsToday: "",
    };

    setStudents([...students, newStudent]);
    setFormData({ name: "", class: "", totalFees: "" });
  };

  return (
    <div className="bg-white p-3 sm:p-6 rounded-xl shadow mb-6 w-full max-w-4xl mx-auto mt-20">
      <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-4 text-center">
        New Admission
      </h3>
      <div className="flex flex-col gap-3 sm:gap-4">
        <input
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg px-3 py-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-base"
        />
        <input
          name="class"
          placeholder="Class"
          value={formData.class}
          onChange={handleChange}
          className="border rounded-lg px-3 py-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-base"
        />
        <input
          name="totalFees"
          placeholder="Total Fees"
          value={formData.totalFees}
          onChange={handleChange}
          className="border rounded-lg px-3 py-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-base"
        />
      </div>
      <button
        className="bg-blue-600 text-white px-6 py-3 sm:py-2 rounded-lg mt-4 hover:bg-blue-700 active:bg-blue-800 w-full text-base font-medium transition-colors duration-200"
        onClick={handleSubmit}
      >
        Add Student
      </button>
    </div>
  );
};

export default AdmissionForm;
