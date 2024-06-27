import React from "react";
import { Link } from "react-router-dom";

const ArrayCategories = ({ imageURLs }) => {
  const headerInfo = {
    link: ["shopping", "shopping", "shopping"],
    title: ["Firsat Ürünleri", "Yaz ürünleri", "Off-Season"],
  };

  return (
    <div className="flex flex-wrap justify-center mt-8 gap-4">
      {imageURLs.map((url, index) => (
        <Link to={headerInfo.link[index]} key={index}>
          <div className="flex flex-col bg-white shadow-md rounded-2xl p-4 hover:-translate-y-2 transform transition-transform duration-200">
            <span
              className="text-blue-500 flex justify-center items-center pb-2 font-semibold text-xl hover:text-blue-400 "
              key={"span" + index}
            >
              {headerInfo.title[index]}
            </span>
            <img
              key={"img" + index}
              className="h-48 w-full object-cover rounded-2xl"
              src={url}
              alt={`Placeholder ${index + 1}`}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArrayCategories;
