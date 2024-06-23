import { useState, useEffect, useCallback } from "react";

const Careousel = ({ images, textTitle }) => {
  const [state, setState] = useState([0, 1, 2]);
  const imagesLen = Object.keys(images).length;

  const handleRight = useCallback(() => {
    setState((prevState) =>
      prevState.map((number) => (number + 1) % imagesLen)
    );
  }, [imagesLen]);

  function handleLeft() {
    setState((prevState) =>
      prevState.map((number) => (number - 1 + imagesLen) % imagesLen)
    );
  }

  useEffect(() => {
    const interval = setInterval(handleRight, 2500);
    return () => clearInterval(interval);
  }, [handleRight]);

  return (
    <div className="flex flex-col m-12 bg-white rounded-3xl shadow-md py-2 mx-32 ">
      <p className="ml-8 text-blue-500 pb-2 font-bold text-xl hover:text-blue-400">
        {textTitle}
      </p>
      <div className="flex justify-center items-center pb-4">
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
            className="h-auto w-1/3 "
          />
        ))}
        <button
          className="text-2xl bg-blue-500 text-white px-4 py-2 rounded-full shadow-md ml-4"
          onClick={handleRight}
        >
          {">"}
        </button>
        <div />
      </div>
    </div>
  );
};

export default Careousel;
