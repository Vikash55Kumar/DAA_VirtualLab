import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function DaaLab() {
  const [activeUnit, setActiveUnit] = useState(null);

  const units = [
    {
      name: "Unit 1",
      topics: [
        { name: "Topic 1.1", path: "/unit1/topic1" },
        { name: "Topic 1.2", path: "/unit1/topic2" },
        { name: "Topic 1.3", path: "/unit1/topic3" },
        { name: "Topic 1.4", path: "/unit1/topic4" },
        { name: "Topic 1.5", path: "/unit1/topic5" },
      ],
    },
    {
      name: "Unit 2",
      topics: [
        { name: "Topic 2.1", path: "/unit2/topic1" },
        { name: "Topic 2.2", path: "/unit2/topic2" },
        { name: "Topic 2.3", path: "/unit2/topic3" },
        { name: "Topic 2.4", path: "/unit2/topic4" },
        { name: "Topic 2.5", path: "/unit2/topic5" },
      ],
    },
    {
      name: "Unit 3",
      topics: [
        { name: "Topic 3.1", path: "/unit3/topic1" },
        { name: "Topic 3.2", path: "/unit3/topic2" },
        { name: "Topic 3.3", path: "/unit3/topic3" },
        { name: "Topic 3.4", path: "/unit3/topic4" },
        { name: "Topic 3.5", path: "/unit3/topic5" },
      ],
    },
    {
      name: "Unit 4",
      topics: [
        { name: "Topic 4.1", path: "/unit4/topic1" },
        { name: "Topic 4.2", path: "/unit4/topic2" },
        { name: "Topic 4.3", path: "/unit4/topic3" },
        { name: "Topic 4.4", path: "/unit4/topic4" },
        { name: "Topic 4.5", path: "/unit4/topic5" },
      ],
    },
    {
      name: "Unit 5",
      topics: [
        { name: "Topic 5.1", path: "/unit5/topic1" },
        { name: "Topic 5.2", path: "/unit5/topic2" },
        { name: "Topic 5.3", path: "/unit5/topic3" },
        { name: "Topic 5.4", path: "/unit5/topic4" },
        { name: "Topic 5.5", path: "/unit5/topic5" },
      ],
    },
  ];

  const toggleUnit = (index) => {
    setActiveUnit(activeUnit === index ? null : index);
  };

  // Framer Motion variants for the accordion content
  const variants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
  };

  // Variants for each topic item
  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  // Download function
  const handleDownload = () => {
    const url = "/path/to/your/syllabus.pdf"; // Update this to your actual file path
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "syllabus.pdf"); // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white pt-5 pb-10 overflow-y-auto">
        <div className="px-6 mb-10">
          <h1 className="text-2xl font-bold">DaaLab</h1>
        </div>
        <nav className="px-4">
          <ul className="space-y-2">
            {units.map((unit, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleUnit(index)}
                  className="w-full flex justify-between items-center py-2 px-3 bg-gray-700 hover:bg-gray-600 rounded-md focus:outline-none"
                >
                  <span>{unit.name}</span>
                  <motion.svg
                    className="w-4 h-4 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{
                      rotate: activeUnit === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence initial={false}>
                  {activeUnit === index && (
                    <motion.ul
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={variants}
                      className="mt-2 space-y-1 pl-4 overflow-hidden"
                    >
                      {unit.topics.map((topic, tIndex) => (
                        <motion.li key={tIndex} variants={itemVariants}>
                          <Link
                            to={topic.path}
                            className="block py-1 px-2 text-gray-400 hover:text-white rounded-md"
                          >
                            {topic.name}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="mt-4 w-full py-2 px-3 bg-blue-600 hover:bg-blue-500 rounded-md focus:outline-none"
          >
            Download Syllabus
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default DaaLab;
