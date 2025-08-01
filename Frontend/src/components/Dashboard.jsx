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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = ({ students = [] }) => {
  // Data calculations
  const totalStudents = students.length;
  const today = new Date().toISOString().split("T")[0];

  const presentToday = students.filter((s) =>
    s.attendance?.some((a) => a.date === today && a.present)
  ).length;

  const pendingFees = students.reduce((sum, s) => sum + (s.pendingFees || 0), 0);

  // Attendance chart data (last 7 days)
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().split("T")[0];
  });

  const attendanceData = last7Days.map((day) =>
    students.filter((s) =>
      s.attendance?.some((a) => a.date === day && a.present)
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
  const totalFees = students.reduce((sum, s) => sum + (s.fees?.total || 0), 0);
  const paidFees = students.reduce((sum, s) => sum + (s.fees?.paid || 0), 0);

  const feesChartData = {
    labels: ["Paid Fees", "Pending Fees"],
    datasets: [
      {
        data: [paidFees, totalFees - paidFees],
        backgroundColor: ["#22c55e", "#ef4444"],
        hoverOffset: 6,
      },
    ],
  };

  // Class-wise bar chart data (fix reserved word issue)
  const classes = [...new Set(students.map((s) => s.className || "Unknown"))];
  const classCounts = classes.map(
    (cls) => students.filter((s) => (s.className || "Unknown") === cls).length
  );

  const classBarChartData = {
    labels: classes,
    datasets: [
      {
        label: "Students",
        data: classCounts,
        backgroundColor: "#fbbf24",
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="space-y-4 lg:space-y-8 mt-20" >
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-white rounded-lg shadow p-4 lg:p-5 text-center border border-gray-100">
          <h4 className="text-gray-600 text-sm font-medium">Total Students</h4>
          <p className="text-2xl lg:text-3xl font-bold text-gray-800 mt-2">{totalStudents}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 lg:p-5 text-center border border-gray-100">
          <h4 className="text-gray-600 text-sm font-medium">Attendance Today</h4>
          <p className="text-lg lg:text-xl font-semibold text-green-600 mt-2">
            {presentToday}/{totalStudents} Present
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 lg:p-5 text-center border border-gray-100 sm:col-span-2 lg:col-span-1">
          <h4 className="text-gray-600 text-sm font-medium">Pending Fees</h4>
          <p className="text-lg lg:text-xl font-semibold text-red-600 mt-2">₹{pendingFees}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
        {/* Attendance Chart */}
        <div className="bg-white rounded-lg shadow p-4 lg:p-6 border border-gray-100">
          <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">Attendance (Last 7 Days)</h3>
          <div className="h-48 lg:h-64">
            <Bar
              data={attendanceChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    ticks: {
                      maxRotation: 45,
                      minRotation: 45,
                    },
                  },
                  y: {
                    beginAtZero: true,
                    ticks: {
                      stepSize: 1,
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Fees Chart */}
        <div className="bg-white rounded-lg shadow p-4 lg:p-6 border border-gray-100">
          <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">Fees Overview</h3>
          <div className="h-48 lg:h-64 flex items-center justify-center">
            <div className="w-32 h-32 lg:w-48 lg:h-48">
              <Doughnut
                data={feesChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: {
                        padding: 10,
                        usePointStyle: true,
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Class Distribution Chart */}
      <div className="bg-white rounded-lg shadow p-4 lg:p-6 border border-gray-100">
        <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">Students by Class</h3>
        <div className="h-48 lg:h-64">
          <Bar
            data={classBarChartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  ticks: {
                    maxRotation: 45,
                    minRotation: 45,
                  },
                },
                y: {
                  beginAtZero: true,
                  ticks: {
                    stepSize: 1,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
