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
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h3 className="text-lg font-bold text-gray-700 mb-4">New Admission</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 focus:outline-blue-500"
        />
        <input
          name="class"
          placeholder="Class"
          value={formData.class}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 focus:outline-blue-500"
        />
        <input
          name="totalFees"
          placeholder="Total Fees"
          value={formData.totalFees}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 focus:outline-blue-500"
        />
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Add Student
      </button>
    </div>
  );
};

export default AdmissionForm;
