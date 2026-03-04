import React from 'react';

const ResolvedBanner = () => {
    return (
        <div className="flex flex-col justify-center align-middle text-center gap-5  bg-linear-to-tl from-teal-600 to-green-400 h-48 w-1/2 text-white rounded-xl">
          <p className="text-xl font-semibold">Resolved</p>
          <h1 className="text-2xl font-bold">Count:</h1>
        </div>
    );
};

export default ResolvedBanner;