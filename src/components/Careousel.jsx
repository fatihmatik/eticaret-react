import { useState, useEffect } from "react";

const Careousel = ({ images }) => {
  console.log(images);
  const [state, setState] = useState([0, 1, 2]);

  useEffect(() => {
    const intervalId = setInterval(handleRight, 3000);
    return () => clearInterval(intervalId);
  }, []);

  function handleRight() {
    setState(prevState => prevState.map(number => (number + 1) % 6));
  }

  function handleLeft() {
    setState(prevState => prevState.map(number => (number - 1 + 6) % 6));
  }

  return (
    <div
    className="flex justify-center items-center m-6"
    >
      <button className="text-2xl bg-blue-500 px-2 rounded-full" onClick={handleLeft}>{"<"}</button>
      {state.map((itr, mapIndex) => (
        <img
          key={mapIndex}
          src={images[itr]}
          alt={mapIndex}
          className="p-[2px] h-auto w-1/4"
        />
      ))}
      <button className="text-xl bg-blue-500 px-2 rounded-full" onClick={handleRight}>{">"}</button>
    </div>
  );
};

export default Careousel;
