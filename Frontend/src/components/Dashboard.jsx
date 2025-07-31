import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = ({ students }) => {
  // Data calculations
  const totalStudents = students.length;
  const today = new Date().toISOString().split("T")[0];
  const presentToday = students.filter((s) =>
    s.attendance.some((a) => a.date === today && a.present)
  ).length;
  const pendingFees = students.reduce((sum, s) => sum + s.pendingFees, 0);

  // Attendance chart data (last 7 days)
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().split("T")[0];
  });

  const attendanceData = last7Days.map((day) =>
    students.filter((s) =>
      s.attendance.some((a) => a.date === day && a.present)
    ).length
  );

  const attendanceChartData = {
    labels: last7Days,
    datasets: [
      {
        label: "Present Students",
        data: attendanceData,
        backgroundColor: "#3b82f6",
        borderRadius: 6,
      },
    ],
  };

  // Fees chart data
  const totalFees = students.reduce((sum, s) => sum + s.fees.total, 0);
  const paidFees = students.reduce((sum, s) => sum + s.fees.paid, 0);

  const feesChartData = {
    labels: ["Paid", "Pending"],
    datasets: [
      {
        data: [paidFees, totalFees - paidFees],
        backgroundColor: ["#10b981", "#ef4444"],
      },
    ],
  };

  // Class-wise bar chart data
  const classes = [...new Set(students.map((s) => s.class))];
  const classCounts = classes.map(
    (cls) => students.filter((s) => s.class === cls).length
  );

  const classBarChartData = {
    labels: classes,
    datasets: [
      {
        label: "Students",
        data: classCounts,
        backgroundColor: "#f59e0b",
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h4 className="text-lg font-semibold text-gray-700">Total Students</h4>
          <p className="text-3xl font-bold text-blue-600 mt-2">{totalStudents}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h4 className="text-lg font-semibold text-gray-700">Attendance Today</h4>
          <p className="text-2xl mt-2 text-green-600 font-semibold">
            {presentToday}/{totalStudents} Present
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h4 className="text-lg font-semibold text-gray-700">Pending Fees</h4>
          <p className="text-2xl text-red-500 mt-2 font-semibold">₹{pendingFees}</p>
        </div>
      </div>

      {/* Attendance Chart */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h4 className="text-lg font-semibold mb-4 text-gray-700">
          Attendance (Last 7 Days)
        </h4>
        <Bar
          data={attendanceChartData}
          options={{ responsive: true, plugins: { legend: { display: false } } }}
        />
      </div>

      {/* Fees Chart + Class-wise Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">
            Fees Collection
          </h4>
          <Doughnut
            data={feesChartData}
            options={{
              plugins: {
                legend: { position: "bottom", labels: { font: { size: 14 } } },
              },
            }}
          />
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">
            Class-wise Students
          </h4>
          <Bar
            data={classBarChartData}
            options={{ responsive: true, plugins: { legend: { display: false } } }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
