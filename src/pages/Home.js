import React, { useEffect, useState } from "react";
import ArrayCategories from "../components/ArrayCategories";
import { imagesArr } from "../utils/imagesArr";
import Careousel from "../components/Careousel";
import Footer from "../components/Footer";
import BottomCategories from "../components/BottomCategories";
import lodash from "lodash";

const Home = () => {
  const [randomElements, setRandomElements] = useState([]);
  const [remainingElements, setRemainingElements] = useState([]);

  function getRandomElements(array, numElements) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setRandomElements(shuffledArray.slice(0, numElements));
    setRemainingElements(
      array.filter((element) => !randomElements.includes(element))
    );
  }

  useEffect(() => {
    getRandomElements(imagesArr, 3);
  }, []);
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex justify-center">
          <button
            className="text-white font-bold bg-blue-500 p-4 rounded-2xl flex"
            onClick={() => getRandomElements(imagesArr, 3)}
          >
            renew the banner images
          </button>
        </div>
        <ArrayCategories imageURLs={randomElements} />
        <Careousel images={remainingElements} textTitle="Çok Satanlar" />
        <Careousel
          images={lodash.shuffle(remainingElements)}
          textTitle="İndirimdekiler"
        />
        <BottomCategories imagesArray={remainingElements} />
        <Footer />
      </div>
    </>
  );
};

// export { remainingElements };
export default Home;
