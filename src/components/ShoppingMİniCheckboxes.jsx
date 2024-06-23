import React from "react";

const ShoppingMİniCheckboxes = ({
  items,
  prefix,
  selectedFilters,
  onFilterChange,
}) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedFilters.includes(item)}
              onChange={() => onFilterChange(prefix, item)}
              className="mr-2"
            />
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ShoppingMİniCheckboxes;
