import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";
import productsArr from "../utils/productsArr";

const Cart = () => {
  const { getItem, removeItem } = useLocalStorage("cartArr");

  const [pageCartArray, setPageCartArray] = useState(() => {
    const currentCartArr = getItem();
    return Array.isArray(currentCartArr) ? currentCartArr : [];
  });

  const localProductsArr = productsArr;

  function reloadCartHandler() {
    const currentCartArr = getItem();
    setPageCartArray(Array.isArray(currentCartArr) ? currentCartArr : []);
  }

  useEffect(() => {
    reloadCartHandler();
  });

  const handleDeleteCart = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your cart completely?"
    );
    if (confirmDelete) {
      removeItem();
      setPageCartArray([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Welcome to the Cart
      </h2>
      <div className="flex justify-center mb-6">
        <button
          className="text-white bg-blue-500 px-6 py-3 rounded-lg mr-4"
          onClick={reloadCartHandler}
        >
          Reload the Cart
        </button>
        <button
          className="text-white bg-red-500 px-6 py-3 rounded-lg"
          onClick={handleDeleteCart}
        >
          Delete the Cart
        </button>
      </div>
      {pageCartArray.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pageCartArray.map((index, key) => {
            const product = localProductsArr[index];
            return (
              <div key={key} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="object-cover w-full h-[360px] rounded-[8px]"
                  src={product[0]}
                  alt=""
                />
                <h1 className="font-bold text-2xl mb-2">{product[1]}</h1>
                <p className="text-lg text-green-500 mb-4">{product[4]}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
