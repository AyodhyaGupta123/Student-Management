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
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-6 mt-20">
      <h3 className="text-base sm:text-lg font-bold text-gray-700 mb-4">
        Attendance (Today)
      </h3>
      <div className="space-y-3">
        {students.map((s) => (
          <div
            key={s.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 p-3 rounded-lg gap-3"
          >
            <span className="font-medium text-gray-800 text-sm sm:text-base truncate">
              {s.name}
            </span>
            <div className="flex space-x-2 sm:space-x-3">
              <button
                className="bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm hover:bg-green-600 transition-colors duration-200 flex-1 sm:flex-none min-w-[60px] sm:min-w-[80px]"
                onClick={() => markAttendance(s.id, true)}
              >
                Present
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm hover:bg-red-600 transition-colors duration-200 flex-1 sm:flex-none min-w-[60px] sm:min-w-[80px]"
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
