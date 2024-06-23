import React from "react";
import Bar from "./Bar";
import { Link } from "react-router-dom";

const ShoppingCore = ({ productsArr }) => {
  console.log(productsArr);
  return (
    <div className="bg-gray-100 w-2/3 p-4">
      <div className="grid grid-cols-4 gap-4">
        {productsArr.map((product, index) => (
          <Link
            to={`/products/${parseInt(product[0] - 1)}`}
            key={index}
            className="bg-white p-4 shadow rounded-lg"
          >
            <img
              src={product[1]}
              alt={product[2]}
              className="w-full h-2/3 object-cover rounded-lg mb-2 "
            />
            <div className="font-bold mb-1">{product[2]}</div>
            <Bar value={product[3]} />
            <div className="font-bold text-xl text-slate-600 mt-2 mb-4">
              {product[5]}
            </div>
            <Link
              to={`/products/${index}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-[8px] p-2"
            >
              Sepete ekle
            </Link>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCore;
