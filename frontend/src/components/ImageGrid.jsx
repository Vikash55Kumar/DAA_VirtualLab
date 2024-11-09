import React from "react";

function ImageGrid() {
  // Array of image URLs. You can replace these with your actual image URLs.
  const images = [
    "https://via.placeholder.com/150?text=Image+1",
    "https://via.placeholder.com/150?text=Image+2",
    "https://via.placeholder.com/150?text=Image+3",
    "https://via.placeholder.com/150?text=Image+4",
    "https://via.placeholder.com/150?text=Image+5",
    "https://via.placeholder.com/150?text=Image+6",
    "https://via.placeholder.com/150?text=Image+7",
    "https://via.placeholder.com/150?text=Image+8",
   
  ];

  return (
    <div className="h-full w-full p-8 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to Design And Algo Lab
      </h1>

      <div className="grid grid-cols-4 gap-4 bg-black w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex justify-center items-center border border-gray-300 rounded-lg overflow-hidden w-[200px] "
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
