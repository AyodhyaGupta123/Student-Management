import React from "react";
import { useNavigate } from "react-router-dom";

const StudentList = ({ students, setStudents }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow mt-20">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Student List</h3>
      <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="min-w-full border rounded-lg overflow-hidden hidden md:table">
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
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600 text-sm"
                    onClick={() => navigate(`/student/${s.id}`)}
                  >
                    View
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                    onClick={() => handleDelete(s.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {students.map((s) => (
            <div
              key={s.id}
              className="border rounded-lg p-4 bg-white hover:bg-gray-50 transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800">{s.name}</h4>
                  <p className="text-sm text-gray-600">Class: {s.class}</p>
                  <p className="text-sm text-gray-600">Pending Fees: ₹{s.pendingFees}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 text-sm flex-1"
                  onClick={() => navigate(`/student/${s.id}`)}
                >
                  View Details
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 text-sm flex-1"
                  onClick={() => handleDelete(s.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
