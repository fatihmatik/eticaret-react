import React, { useCallback, useEffect, useState } from "react";
import ShoppingLeftSide from "../components/ShoppingLeftSide";
import ShoppingCore from "../components/ShoppingCore";
// import productsArr from "../utils/productsArr";
import { useDispatch, useSelector } from "react-redux";
import { fetctmydata } from "../redux/slicer";

const Shopping = () => {
  /////////////////////////////////////// fetching data with react redux
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetctmydata());
  }, [dispatch]);

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

  const filteredProducts = data.mydata.data.filter((product) => {
    const metadata = product.filterData;
    if (!metadata) {
      return false;
    }
    const [marka, sex, beden] = metadata.split(" ");
    const filters = { marka, sex, beden };
    return Object.keys(selectedFilters).every(
      (filterType) =>
        selectedFilters[filterType].length === 0 ||
        selectedFilters[filterType].includes(filters[filterType])
    );
  });

  return (
    <div className="bg-gray-100">
      <div className="flex">
        <ShoppingLeftSide
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
        <ShoppingCore productsArrProp={filteredProducts} />
      </div>
    </div>
  );
};

export default Shopping;
