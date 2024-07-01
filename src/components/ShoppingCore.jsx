import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import { Link } from "react-router-dom";
import { useNotification } from "../context/NotificationContext";
import { useLocalStorage } from "../utils/useLocalStorage";

const ShoppingCore = ({ productsArrProp }) => {
  const [productsArr, setProducts] = useState(productsArrProp);
  const { setItem } = useLocalStorage("cartArr");

  useEffect(() => {
    setProducts(productsArrProp);
  }, [productsArrProp]);

  const { show } = useNotification();

  const handleAddToCart = (currentProduct) => {
    setItem(currentProduct.id - 1);
    show();
  };

  return (
    <div className="bg-gray-100 w-5/6 p-4">
      <div className="grid grid-cols-4 gap-4">
        {productsArr &&
          productsArr.map((product, index) => (
            <div key={index} className="bg-white p-4 shadow rounded-lg">
              <Link to={`/products/${parseInt(product.id - 1)}`}>
                <img
                  src={product.url}
                  alt={product.description}
                  className="w-full h-2/3 object-cover rounded-lg mb-2 "
                />
                <div className="font-bold mb-1">{product.name}</div>
                <Bar value={product.approvement} />
                <div className="font-bold text-xl text-slate-600 mt-2 mb-4">
                  {product.price}
                </div>
              </Link>
              <Link
                to={`/products/${parseInt(product.id - 1)}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold
                rounded-[8px] p-2"
                onClick={() => handleAddToCart(product)}
              >
                {" "}
                Sepete ekle
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShoppingCore;
