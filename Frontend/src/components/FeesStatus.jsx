import React, { useState } from "react";

const FeesStatus = ({ students, setStudents }) => {
  const [amount, setAmount] = useState({});

  const handlePay = (id) => {
    const updated = students.map((student) => {
      if (student.id === id) {
        const payAmount = parseInt(amount[id] || 0);
        const paid = student.fees.paid + payAmount;
        return {
          ...student,
          fees: { ...student.fees, paid },
          pendingFees: student.fees.total - paid,
        };
      }
      return student;
    });
    setStudents(updated);
    setAmount({});
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-6 mt-20">
      <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-4">Fees Status</h3>
      <div className="space-y-3 sm:space-y-4">
        {students.map((s) => (
          <div
            key={s.id}
            className="bg-gray-50 p-3 sm:p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-800 text-sm sm:text-base truncate">{s.name}</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Paid: ₹{s.fees.paid} / ₹{s.fees.total}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
              <input
                type="number"
                placeholder="Pay Amount"
                value={amount[s.id] || ""}
                onChange={(e) => setAmount({ ...amount, [s.id]: e.target.value })}
                className="border rounded-lg px-3 py-2 text-sm sm:text-base w-full sm:w-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base font-medium w-full sm:w-auto"
                onClick={() => handlePay(s.id)}
              >
                Pay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeesStatus;
