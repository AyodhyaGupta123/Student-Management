import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const StudentDetails = ({ students }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((s) => s.id === parseInt(id));
  if (!student)
    return (
      <div className="text-center mt-10">
        <p className="text-gray-600">Student not found</p>
      </div>
    );

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{student.name}</h2>
      <p className="text-gray-600 mb-2">Class: {student.class}</p>
      <p className="text-gray-600 mb-2">Subjects Today: {student.subjectsToday}</p>
      <p className="text-gray-600 mb-2">
        Fees Paid: ₹{student.fees.paid} / ₹{student.fees.total}
      </p>
      <p className="text-red-500 mb-4">
        Pending Fees: ₹{student.fees.total - student.fees.paid}
      </p>

      <h4 className="font-semibold text-gray-700 mb-2">Attendance History</h4>
      <ul className="space-y-1">
        {student.attendance.length > 0 ? (
          student.attendance.map((att, i) => (
            <li key={i} className="text-gray-600">
              {att.date} -{" "}
              <span
                className={`${
                  att.present ? "text-green-600" : "text-red-600"
                } font-medium`}
              >
                {att.present ? "Present" : "Absent"}
              </span>
            </li>
          ))
        ) : (
          <li className="text-gray-400">No attendance marked yet</li>
        )}
      </ul>

      <button
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => navigate("/students")}
      >
        Back
      </button>
    </div>
  );
};

export default StudentDetails;
