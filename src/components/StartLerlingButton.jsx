import React from 'react'
import { Link } from 'react-router-dom';
function StartLerlingButton() {
  return (
    <>
      <div className="h-full w-full p-8 bg-gray-100 flex flex-col items-center gap-1">
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 hover:text-gray-400 transition duration-300 ease-in-out  p-4  rounded-lg ">
          At the Design and Algo Lab, we empower you to master algorithm design
          and performance analysis through hands-on experience. Our innovative
          approach transforms theoretical concepts into practical skills,
          preparing you for real-world challenges. By engaging in collaborative
          projects and interactive simulations, you will deepen your
          understanding of complex algorithms and their applications in various
          fields. We emphasize critical thinking and problem-solving, ensuring
          that you are not just learning but also applying your knowledge in
          meaningful ways.
        </p>

        <Link to="/daalab"
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Start Learning
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}

export default StartLerlingButton
