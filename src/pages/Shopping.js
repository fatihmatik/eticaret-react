import React, { useCallback, useState } from "react";
import ShoppingLeftSide from "../components/ShoppingLeftSide";
import ShoppingCore from "../components/ShoppingCore";
import productsArr from "../utils/productsArr";

const Shopping = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    marka: [],
    beden: [],
    sex: [],
  });

  const handleFilterChange = useCallback((filterType, filter) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[filterType].includes(filter)) {
        newFilters[filterType] = newFilters[filterType].filter(
          (f) => f !== filter
        );
      } else {
        newFilters[filterType].push(filter);
      }
      return newFilters;
    });
  }, []);

  const filteredProducts = productsArr.filter((product) => {
    const metadata = product[6];
    const [marka, sex, beden] = metadata.split(" ");
    const filters = { marka, sex, beden };

    return Object.keys(selectedFilters).every(
      (filterType) =>
        selectedFilters[filterType].length === 0 ||
        selectedFilters[filterType].includes(filters[filterType])
    );
  });
  console.log(selectedFilters);
  return (
    <div className="bg-gray-100">
      <div className="flex">
        <ShoppingLeftSide
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
        <ShoppingCore productsArr={filteredProducts} />
      </div>
    </div>
  );
};

export default Shopping;
