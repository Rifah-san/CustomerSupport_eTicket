import React from "react";

const ProgressBanner = ({ progress }) => {
  return (
    <div className="flex flex-col justify-center align-middle text-center gap-5 bg-linear-to-br from-violet-800 to-purple-200 h-48 w-full lg:w-1/2 text-white rounded-xl">
      <p className="text-xl font-semibold">In-Progress</p>
      <h1 className="text-4xl font-bold">{progress}</h1>
    </div>
  );
};

export default ProgressBanner;


