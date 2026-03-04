import React from "react";

const Banner = () => {
  return (
    <div className="flex align-middle justify-between gap-6 px-10 py-10">
      <div className="flex flex-col justify-center align-middle text-center gap-5 bg-linear-to-br from-violet-800 to-purple-200 w-1/2 h-48 text-white rounded-xl">
        <p>In-Progress</p>
        <h1>Count:</h1>
      </div>
      <div className="flex flex-col justify-center align-middle text-center gap-5  bg-linear-to-tl from-teal-600 to-green-400 w-1/2 h-48 text-white rounded-xl">
        <p>Resolved</p>
        <h1>Count:</h1>
      </div>
    </div>
  );
};

export default Banner;


