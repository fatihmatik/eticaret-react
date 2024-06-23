import React from "react";
import ArrayCategories from "../components/ArrayCategories";
import { imagesArr } from "../utils/imagesArr";
import Careousel from "../components/Careousel";
import Footer from "../components/Footer";
import BottomCategories from "../components/BottomCategories";

let remainingElements;

const Home = () => {
  function getRandomElements(array, numElements) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray.slice(0, numElements);
  }
  const randomElements = getRandomElements(imagesArr, 3);

  // filter the randomElements' elements from the imagesArr
  remainingElements = imagesArr.filter(
    (element) => !randomElements.includes(element)
  );

  return (
    <>
      <div className="bg-gray-100">
        <ArrayCategories imageURLs={randomElements} />
        <Careousel images={remainingElements} textTitle="Çok Satanlar" />
        <Careousel images={remainingElements} textTitle="İndirimdekiler" />
        <BottomCategories imagesArray={remainingElements} />
        <Footer />
      </div>
    </>
  );
};

export { remainingElements };
export default Home;
