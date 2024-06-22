import React from "react";

const ArrayCategories = ({ imageURLs }) => {
  return (
    <div className="flex flex-wrap justify-center mt-8 gap-4">
      {imageURLs.map((url, index) => (
        <img
          key={index}
          className="p-4 sm:p-8 h-48 sm:h-64 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 object-cover"
          style={{ borderRadius: "4rem" }}
          src={url}
          alt={`Placeholder ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ArrayCategories;
