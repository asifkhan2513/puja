import React from "react";
 import Trident from "../assets/Trident.png"

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      <div className="relative w-16 h-16 md:w-20 md:h-20 border-4 border-amber-500 border-t-transparent rounded-full animate-spin">
        <img
          src={Trident}
          alt="Trident"
          className="absolute inset-0 w-8 h-8 md:w-10 md:h-10 m-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Loader;
