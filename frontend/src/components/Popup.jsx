// src/components/Popup.jsx

import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"; // Updated import for v2

/**
 * Popup Component
 *
 * @param {Object} props
 * @param {string} props.message - The message to display inside the popup.
 * @param {function} props.setShowPopup - Function to control the visibility of the popup.
 * @param {boolean} props.showPopup - Boolean indicating whether the popup is visible.
 * @param {string} [props.type] - Type of the popup (e.g., 'error', 'success') to apply different styles.
 */
const Popup = ({ message, setShowPopup, showPopup, type = "error" }) => {
  if (!showPopup) return null;

  // Define styles based on the type of popup
  const typeStyles = {
    error: {
      bgColor: "bg-red-100",
      textColor: "text-red-800",
      borderColor: "border-red-400",
    },
    success: {
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-400",
    },
    info: {
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      borderColor: "border-blue-400",
    },
  };

  const currentStyle = typeStyles[type] || typeStyles.error;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => setShowPopup(false)}
      ></div>

      {/* Popup Content */}
      <div
        className={`bg-white rounded-lg shadow-lg z-10 w-11/12 max-w-md p-6 border-l-4 ${currentStyle.bgColor} ${currentStyle.borderColor} transition transform duration-300 animate-fade-in`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className={`text-lg font-semibold ${currentStyle.textColor}`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </h3>
          <button
            onClick={() => setShowPopup(false)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <p className={`text-sm ${currentStyle.textColor}`}>{message}</p>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setShowPopup(false)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
