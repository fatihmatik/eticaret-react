import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-4">Fatih Tezcan</h2>
        <p className="text-gray-700 mb-4">
          I’m a Mathematical Engineering graduate from Yıldız Technical
          University who is a motivated team player and eager to learn and
          contribute to Data Science, Machine Learning, and Web Design.
          Currently, I am actively seeking work experience to further develop my
          skills in the field of Data. Additionally, I am working on personal
          projects and completing courses related to my field.
        </p>
        <p className="text-blue-700">Check out my Portfolio!</p>
        <a
          href="fatihmatik.github.io/portfoglio-react/"
          className="text-blue-700 font-medium text-xl pt-2"
        >
          fatihmatik.github.io/portfoglio-react/
        </a>
      </div>
    </div>
  );
};

export default About;
