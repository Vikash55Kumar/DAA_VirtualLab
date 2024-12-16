// src/pages/StudentDashboard.jsx

import React, { useEffect, useState } from "react";
import {
  AcademicCapIcon,
  UsersIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline"; // Updated import paths
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Popup from "../Popup.jsx";
import Loader from "../Loader/Loader.jsx"; // Ensure this component is implemented

const performanceData = [
  { month: "Jan", grade: 75 },
  { month: "Feb", grade: 80 },
  { month: "Mar", grade: 78 },
  { month: "Apr", grade: 85 },
  { month: "May", grade: 90 },
  { month: "Jun", grade: 88 },
  { month: "Jul", grade: 92 },
  { month: "Aug", grade: 85 },
  { month: "Sep", grade: 87 },
  { month: "Oct", grade: 90 },
  { month: "Nov", grade: 93 },
  { month: "Dec", grade: 95 },
];

const recentActivities = [
  {
    id: 1,
    title: "Assignment 1: Introduction to Algorithms",
    date: "2023-10-01",
    status: "Completed",
  },
  {
    id: 2,
    title: "Assignment 2: Data Structures",
    date: "2023-10-05",
    status: "Completed",
  },
  {
    id: 3,
    title: "Assignment 3: Sorting Algorithms",
    date: "2023-10-10",
    status: "Pending",
  },
  // Add more activities as needed
];

function StudentDashboard() {
  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  // Simulate data fetching
  useEffect(() => {
    setLoader(true);
    // Simulate API call
    const timer = setTimeout(() => {
      setLoader(false);
      // Uncomment the lines below to simulate an error
      // setMessage("Failed to load data. Please try again.");
      // setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader && <Loader />}
      {showPopup && (
        <Popup
          message={message}
          setShowPopup={setShowPopup}
          showPopup={showPopup}
          type="error"
        />
      )}
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Student Dashboard
          </h1>
          <nav className="flex space-x-4">
            <a
              href="/student/dashboard"
              className="text-gray-600 hover:text-gray-800"
            >
              Dashboard
            </a>
            <a
              href="/student/profile"
              className="text-gray-600 hover:text-gray-800"
            >
              Profile
            </a>
            <a href="/logout" className="text-red-600 hover:text-red-800">
              Logout
            </a>
          </nav>
        </header>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Completed Assignments */}
          <div className="bg-white shadow rounded-lg p-6 flex items-center transform transition duration-300 hover:scale-105">
            <AcademicCapIcon className="h-12 w-12 text-blue-500 mr-4" />
            <div>
              <p className="text-2xl font-semibold text-gray-800">5</p>
              <p className="text-gray-500">Completed Assignments</p>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6 flex items-center transform transition duration-300 hover:scale-105">
            <UsersIcon className="h-12 w-12 text-yellow-500 mr-4" />
            <div>
              <p className="text-2xl font-semibold text-gray-800">2</p>
              <p className="text-gray-500">Pending Assignments</p>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6 flex items-center transform transition duration-300 hover:scale-105">
            <PresentationChartBarIcon className="h-12 w-12 text-green-500 mr-4" />
            <div>
              <p className="text-2xl font-semibold text-gray-800">20</p>
              <p className="text-gray-500">Classmates</p>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Recent Activities
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Activity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentActivities.map((activity) => (
                  <tr key={activity.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {activity.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {activity.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          activity.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Performance Over Time
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#a0aec0" />
              <YAxis stroke="#a0aec0" domain={[70, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="grade"
                stroke="#3182ce"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
