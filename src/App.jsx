import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Progress from "./components/Progress.jsx";
import Signup from "./components/Singup.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { GrDashboard } from "react-icons/gr";
import DaaLab from "./components/DaaLab.jsx";
import StudentSingUp from "./components/Student/StudentSingUp.jsx";
import StudentLogin from "./components/Student/StudentLogin.jsx";
import AdminSingUp from "./components/Admin/AdminSingUp.jsx";
import AdminLogin from "./components/Admin/AdminLogin.jsx";
import TeacherLogin from "./components/Teacher/TeacherLogin.jsx";
import TeacherSingUp from "./components/Teacher/TeacherSingUp.jsx";
import StudeDash from "./components/StudentDashboard/StudeDash.jsx";
import TeacherDash from "./components/TeacherDashboard.jsx/TeacherDash.jsx";
import AdminDash from "./components/AdminDash/AdminDash.jsx";
import Footer from "../src/components/Footer.jsx";
import "./App.css";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const teamMembers = [
    {
      name: "Mannu Jha",
      role: "Project Manager",
      info: "Specialized in DataStructure and Algorithms",
      isHead: true,
      photo: "/Profile.png",
    },
    {
      name: "Sumit Kumar",
      role: "FullStack Developer",
      info: "Expert in Node.js and React.",
      isHead: false,
      photo: "/images/jane.jpg",
    },
    {
      name: "Vikas Kumar",
      role: "FullStack Developer",
      info: "Specialized in Node.js and Database",
      isHead: false,
      photo: "/Profile.png",
    },
    {
      name: "Yashika Solanki",
      role: "Designer",
      info: "Creates stunning user interfaces And Prentation",
      isHead: false,
      photo: "/images/alice.jpg",
    },
  ];

  return (
    <Router>
      <div
        className="app-container"
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <nav className="border-gray-200 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="/logo.png" className="h-14" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </Link>

            <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="/Profile.png"
                  alt="User"
                />
              </button>

              {dropdownOpen && (
                <div className="z-50 my-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-0 top-full">
                  <div className="px-4 py-3">
                    <span className="block text-sm dark:text-white">
                      Bonnie Green
                    </span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link
                        to="/student/dashboard"
                        className="block px-4 py-2 text-sm dark:text-gray-200 dark:hover:bg-gray-600"
                      >
                        StudeDash
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/dashboard"
                        className="block px-4 py-2 text-sm dark:text-gray-200 dark:hover:bg-gray-600"
                      >
                        AdminDash
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/teacher/dashboard"
                        className="block px-4 py-2 text-sm dark:text-gray-200 dark:hover:bg-gray-600"
                      >
                        TeachDash
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signout"
                        className="block px-4 py-2 text-sm dark:text-gray-200 dark:hover:bg-gray-600"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <nav class="navbar navbar-expand">
              <div class="container">
                <div class="navbar-nav">
                  <Link class="nav-item nav-link" to="/">
                    Home
                  </Link>
                  <Link class="nav-item nav-link" to="/about">
                    About
                  </Link>
                  <Link class="nav-item nav-link" to="/contact">
                    Contact
                  </Link>
                  <Link class="nav-item nav-link" to="/contact">
                    DaaLab
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </nav>

        <div style={{ flex: "1" }}>
          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/singup" element={<Signup />} />
            <Route path="/student/dashboard" element={<StudeDash />} />
            <Route path="/teacher/dashboard" element={<TeacherDash />} />
            <Route path="/admin/dashboard" element={<AdminDash />} />
            <Route path="/daalab" element={<DaaLab />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/signup" element={<AdminSingUp />} />
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/student/signup" element={<StudentSingUp />} />
            <Route path="/teacher/login" element={<TeacherLogin />} />
            <Route path="/teacher/signup" element={<TeacherSingUp />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer teamMembers={teamMembers} />
      </div>
    </Router>
  );
}

export default App;
