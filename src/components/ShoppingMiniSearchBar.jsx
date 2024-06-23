import React, { useState } from "react";

const ShoppingMiniSearchBar = ({ placeholderInput }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = () => {
  //   console.log(`Searching for: ${searchTerm}`);
  // };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholderInput}
      />
    </div>
  );
};

export default ShoppingMiniSearchBar;
