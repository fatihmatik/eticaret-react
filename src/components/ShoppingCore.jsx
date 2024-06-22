import React from "react";
import Bar from "./Bar";
import { Link } from "react-router-dom";

const ShoppingCore = ({ productsArr }) => {
  return (
    <div className="bg-gray-100 w-2/3 p-4">
      <div className="grid grid-cols-4 gap-4">
        {productsArr.map((product, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg">
            <img
              src={product[0]}
              alt={product[1]}
              className="w-full h-2/3 object-cover rounded-lg mb-2 "
            />
            <div className="font-bold mb-1">{product[1]}</div>
            <Bar value={product[3]} />
            <div className="font-bold text-xl text-slate-600 mt-2 mb-1">
              {product[4]}
            </div>
            <Link to={`/products/${index}`}>{product[1]} Sepete ekle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCore;
