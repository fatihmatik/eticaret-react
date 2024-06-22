import React from "react";

const NoPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-9xl font-bold text-gray-500">404</h1>
        <p className="text-2xl font-bold mt-6 text-gray-600">Page not found!</p>
        <p className="text-gray-500 mt-4">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
          Go back home
        </button>
      </div>
    </>
  );
};

export default NoPage;
