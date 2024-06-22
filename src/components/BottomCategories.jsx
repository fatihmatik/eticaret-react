import React from "react";

const BottomCategories = ({ imagesArray }) => {
  return (
    <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto">
    {imagesArray.map((image, index) => (
      <img src={image} key={index} alt="" className="w-1/3 p-2 h-auto rounded-[32px]" />
    ))}
  </div>
  
  );
};

export default BottomCategories;
