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
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Fees Status</h3>
      <div className="space-y-4">
        {students.map((s) => (
          <div
            key={s.id}
            className="bg-gray-50 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-3"
          >
            <div>
              <p className="font-semibold text-gray-800">{s.name}</p>
              <p className="text-sm text-gray-500">
                Paid: ₹{s.fees.paid} / ₹{s.fees.total}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Pay Amount"
                value={amount[s.id] || ""}
                onChange={(e) => setAmount({ ...amount, [s.id]: e.target.value })}
                className="border rounded-lg px-3 py-2 w-32 focus:outline-blue-500"
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
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
