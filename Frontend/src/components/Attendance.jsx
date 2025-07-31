import React from "react";

const Attendance = ({ students, setStudents }) => {
  const markAttendance = (id, present) => {
    const updated = students.map((student) =>
      student.id === id
        ? {
            ...student,
            attendance: [
              ...student.attendance,
              { date: new Date().toISOString().split("T")[0], present },
            ],
          }
        : student
    );
    setStudents(updated);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h3 className="text-lg font-bold text-gray-700 mb-4">
        Attendance (Today)
      </h3>
      <div className="space-y-3">
        {students.map((s) => (
          <div
            key={s.id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
          >
            <span className="font-medium text-gray-800">{s.name}</span>
            <div className="space-x-2">
              <button
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                onClick={() => markAttendance(s.id, true)}
              >
                Present
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => markAttendance(s.id, false)}
              >
                Absent
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
