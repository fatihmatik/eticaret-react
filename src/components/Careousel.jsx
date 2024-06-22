import { useState, useEffect } from "react";

const Careousel = ({ images }) => {
  console.log(images);
  const [state, setState] = useState([0, 1, 2]);

  useEffect(() => {
    const intervalId = setInterval(handleRight, 3000);
    return () => clearInterval(intervalId);
  }, []);

  function handleRight() {
    setState((prevState) => prevState.map((number) => (number + 1) % 6));
  }

  function handleLeft() {
    setState((prevState) => prevState.map((number) => (number - 1 + 6) % 6));
  }

  return (
    <div className="flex justify-center items-center m-6 ">
      <button
        className="text-2xl bg-blue-500 text-white px-4 py-2 rounded-full shadow-md mr-4"
        onClick={handleLeft}
      >
        {"<"}
      </button>
      {state.map((itr, mapIndex) => (
        <img
          key={mapIndex}
          src={images[itr]}
          alt={mapIndex}
          className="h-auto w-1/4"
        />
      ))}
      <button
        className="text-2xl bg-blue-500 text-white px-4 py-2 rounded-full shadow-md ml-4"
        onClick={handleRight}
      >
        {">"}
      </button>
    </div>
  );
};

export default Careousel;
