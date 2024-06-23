import React from "react";

const BottomCategories = ({ imagesArray }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-16">
      {imagesArray.map((image, index) => (
        <img
          src={image}
          key={index}
          alt=""
          className="w-full h-auto p-2 rounded-[32px]"
        />
      ))}
    </div>
  );
};

export default BottomCategories;
