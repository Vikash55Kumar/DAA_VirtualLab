import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    collegeEmail: "",
    name: "",
    branch: "",
    password: "",
    profileImage: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        profileImage: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign-Up Clicked");
  };

  return (
    <div>
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl gap-2">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
          }}
        ></div>

        <div className="w-full px-2 py-2 md:px-4 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-6 sm:h-7"
              src="https://merakiui.com/images/logo.svg"
              alt="Logo"
            />
          </div>

          <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-900">
            Register as a Student
          </p>

          {/* Google Sign-Up Button */}
          <div className="flex items-center justify-center mt-3">
            <button
              onClick={handleGoogleSignUp}
              className="flex items-center justify-center w-full px-2 py-1 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <div className="px-2 py-1">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG paths */}
                </svg>
              </div>
              <span className="w-5/6 px-2 py-1 font-semibold text-center">
                Sign in with Google
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-between mt-3">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
            <span className="text-xs text-gray-500 uppercase dark:text-gray-400">
              or register with email
            </span>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="mt-4">
            {/* College Email Address */}
            <div className="mt-2">
              <label
                className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-700"
                htmlFor="collegeEmail"
              >
                College Email Address
              </label>
              <input
                id="collegeEmail"
                className="block w-full px-3 py-1 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                value={formData.collegeEmail}
                onChange={handleChange}
                required
              />
            </div>

            {/* Name */}
            <div className="mt-2">
              <label
                className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                className="block w-full px-3 py-1 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Branch */}
            <div className="mt-2">
              <label
                className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-700"
                htmlFor="branch"
              >
                Branch
              </label>
              <input
                id="branch"
                className="block w-full px-3 py-1 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={formData.branch}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="mt-2">
              <label
                className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                className="block w-full px-3 py-1 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Profile Image Upload */}
            <div className="mt-2">
              <label
                className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-700"
                htmlFor="profileImage"
              >
                Profile Image
              </label>
              <input
                id="profileImage"
                className="block w-full px-3 py-1 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="file"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <div className="mt-2">
                  <img
                    src={imagePreview}
                    alt="Profile Preview"
                    className="w-20 h-20 rounded-full mx-auto"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-3 text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Login here   
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
