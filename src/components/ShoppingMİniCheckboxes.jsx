import React from 'react';

const ShoppingMiniCheckboxes = ({ items, prefix }) => {
  const checkboxes = items.map((item, index) => (
    <div key={index} className="flex items-center mb-2">
      <input 
        type="checkbox" 
        id={`${prefix}-checkbox-${index}`} 
        className="form-checkbox text-blue-600 h-4 w-4 mr-2" 
      />
      <label htmlFor={`${prefix}-checkbox-${index}`} className="text-gray-700 hover:text-blue-600 cursor-pointer">
        {item}
      </label>
    </div>
  ));

  return (
    <div className="p-4 bg-white shadow rounded-lg hover:shadow-md transition-shadow duration-300">
      {checkboxes}
    </div>
  );
};

export default ShoppingMiniCheckboxes;
