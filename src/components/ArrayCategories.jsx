import React from "react";

const ArrayCategories = ({ imageURLs }) => {
  return (
    <div className="flex flex-wrap items-center justify-center mt-2">
      {imageURLs.map((url, index) => (
        <img
          key={index}
          className="p-8 h-64 w-128"
          style={{ borderRadius: "4rem" }}
          src={url}
          alt={`Placeholder ${index + 1}`}
        />
    ))}
    </div>
  );
};

export default ArrayCategories;
