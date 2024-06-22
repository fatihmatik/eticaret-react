import React from "react";
import ShoppingLeftSide from "../components/ShoppingLeftSide";
import ShoppingCore from "../components/ShoppingCore";
import productsArr from "../utils/productsArr";

const Shopping = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex">
        <ShoppingLeftSide />
        <ShoppingCore productsArr={productsArr} />
      </div>
    </div>
  );
};

export default Shopping;
