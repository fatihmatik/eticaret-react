import React from "react";

const BottomCategories = ({ imagesArray }) => {
  return (
    <div className="flex flex-wrap justify-center w-2/3 mx-auto">
      {imagesArray.map((image, index) => (
        <img
          src={image}
          key={index}
          alt=""
          className="w-full sm:w-1/3 p-2 h-auto rounded-[32px] "
        />
      ))}
    </div>
  );
};

export default BottomCategories;
