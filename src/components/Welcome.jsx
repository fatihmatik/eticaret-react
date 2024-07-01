import React from "react";
import profilePicture from "../assets/images/defaultprofile.png"; // Ensure you have a profile picture in this path
import { Link } from "react-router-dom";

const Welcome = ({ userName, logFunc }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg ">
      <img
        src={profilePicture}
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <h1 className="text-2xl font-semibold text-gray-800">
        Welcome, {userName}!
      </h1>
      <p className="mt-2 text-gray-600">
        We're glad to have you here. Explore your profile and get started!
      </p>
      <Link
        to="#a"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Let's Shop!
      </Link>
      <button
        onClick={logFunc}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Log out
      </button>
    </div>
  );
};

export default Welcome;
