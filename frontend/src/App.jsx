import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home.jsx";

import Progress from "./components/Progress.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { GrDashboard } from "react-icons/gr";
import DaaLab from "./components/Lab/DaaLab.jsx";
import StudentSingUp from "./components/Student/StudentSingUp.jsx";
import StudentLogin from "./components/Student/StudentLogin.jsx";
import AdminLogin from "./components/Admin/AdminLogin.jsx";
import TeacherLogin from "./components/Teacher/TeacherLogin.jsx";
import TeacherSingUp from "./components/Teacher/TeacherSingUp.jsx";
import StudentDashboard from "./components/Dashboard/StudentDashboard/StudentDashboard.jsx";
import TeacherDashboard from "./components/Dashboard/TeacherDashboard/TeacherDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard/AdminDashboard.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import { getTeacherDetails, loadTeachers } from "./action/teacherAction.js";
import { getStudentDetails, loadStudents } from "./action/studentAction.js";
import LoginPage from "./components/Helper/LoginPage.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { getUserType } from "./Utility/tokenUtils.js";
import { getAssignmentDetails, getSectionDetails, getStudentWorkDetails, loadAssignment} from "./action/assignmentAction.js";

function App() {
  const dispatch = useDispatch();
  const userType = getUserType();

  useEffect(() => {
    dispatch(getStudentDetails());
    dispatch(getTeacherDetails());
    dispatch(loadStudents());
    dispatch(loadTeachers());
    dispatch(loadAssignment())
    dispatch(getAssignmentDetails());
    dispatch(getSectionDetails())
    dispatch(getStudentWorkDetails())
  }, [dispatch])

  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: state.student?.isAuthenticated || state.teacher?.isAuthenticated,
  }));

  const { teacher} = useSelector((state) => state.teacher);
  const { student} = useSelector((state) => state.student);
  const { assignment } = useSelector((state) => state.assignment );
  const {section } = useSelector((state) => state.section );
  const { studentWork } = useSelector((state) => state.studentWork );
 
  // console.log("work test ; ", studentWork);
  

  return (
    <>
      <ToastContainer 
        position="top-center"  // This will show the toast in the center of the screen
        autoClose={3000}  // Toast will disappear after 4 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/dashboard/student" element={isAuthenticated && userType === "student" ? <StudentDashboard student={student?.data} /> : <StudentLogin /> } />
            <Route path="/dashboard/teacher" element={isAuthenticated && userType === "teacher" ? <TeacherDashboard teacher={teacher?.data} section={section?.data} assignment={assignment?.data} studentWork={studentWork?.data} /> : <TeacherLogin /> } />
            <Route path="/dashboard/admin" element={isAuthenticated && userType === "teacher" ? <AdminDashboard /> : <AdminLogin />} />
            <Route path="/daalab" element={<DaaLab />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/student/signup" element={<StudentSingUp />} />
            <Route path="/teacher/login" element={<TeacherLogin />} />
            <Route path="/teacher/signup" element={<TeacherSingUp />} />


          </Routes>
          {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
