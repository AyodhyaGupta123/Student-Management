import React from "react";
import { useNavigate } from "react-router-dom";

const StudentList = ({ students, setStudents }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Student List</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Class</th>
              <th className="py-2 px-4 text-left">Pending Fees</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr
                key={s.id}
                className="border-t hover:bg-gray-50 transition-all"
              >
                <td className="py-2 px-4">{s.name}</td>
                <td className="py-2 px-4">{s.class}</td>
                <td className="py-2 px-4">₹{s.pendingFees}</td>
                <td className="py-2 px-4">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                    onClick={() => navigate(`/student/${s.id}`)}
                  >
                    View
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(s.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
