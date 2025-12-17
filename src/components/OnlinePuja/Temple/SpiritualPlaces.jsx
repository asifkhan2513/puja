import React, { useState, useEffect } from "react";
import Ayodhya from "../../../assets/craousel2.jpg";
import Krishna from "../../../assets/dummy2.jpg";
import Radha from "../../../assets/dummy19.jpg";
import ChhitraKoot from "../../../assets/dummy15.jpg";
import MaiharImg from "../../../assets/temple.jpg";
import { useNavigate } from "react-router-dom";

import { PATH } from "../../config/Path";
import LazyImage from "../../LazyImage";

const places = [
  {
    title: "Ayodhya – Ram Janmabhoomi",
    desc: "The eternal city of Lord Ram, filled with devotion, ghats and divine history.",
    img: Ayodhya,
    path: PATH.SPIRITUAL_PLACES_AYODHYA,
  },
  {
    title: "Vrindavan – Land of Krishna",
    desc: "Where every breath chants Radhe Radhe and divine love flows.",
    img: Krishna,
    path: PATH.SPIRITUAL_PLACES_VRINDAVAN,
  },
  {
    title: "Barsana – Radha Rani Dham",
    desc: "Birthplace of divine love and devotion.",
    img: Radha,
    path: PATH.SPIRITUAL_PLACES_BARSANA,
  },
  {
    title: "Chitrakoot – Forest of Ram",
    desc: "Sacred exile land of Lord Ram, Sita & Lakshman.",
    img: ChhitraKoot,
    path: PATH.SPIRITUAL_PLACES_CHITRAKOOT,
  },
  {
    title: "Maihar – Shakti Peeth",
    desc: "Abode of Maa Sharda, where devotion meets divine power.",
    img: MaiharImg,
    path: PATH.SPIRITUAL_PLACES_MAIHAR,
  },
];

const SpiritualPlaces = () => {
  const navigate = useNavigate();

  // Scroll restoration logic only
  useEffect(() => {
    const savedPos = sessionStorage.getItem("spiritualScrollPos");
    if (savedPos) {
      window.scrollTo(0, parseInt(savedPos, 10));
      sessionStorage.removeItem("spiritualScrollPos");
    }
  }, []);

  const handlePlaceClick = (path) => {
    if (path) {
      sessionStorage.setItem("spiritualScrollPos", window.scrollY.toString());
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 py-16 px-4 md:px-8">
      {/* Header - No Back Button */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold text-red-900 drop-shadow-sm font-serif mb-6 tracking-wide">
          Temples
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto" />
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
        {places.map((place, index) => (
          <div
            key={index}
            className="group w-full max-w-[24rem] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 
            transition-all duration-500 hover:-translate-y-3 border border-orange-100 flex flex-col relative"
          >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
              <LazyImage
                src={place.img}
                alt={place.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Overlay Title for small screens or decorative purpose */}
              <div className="absolute bottom-4 left-5 right-5">
                <h3 className="text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-serif">
                  DIvine Destination
                </h3>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col flex-grow bg-white relative z-10">
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-4 -mt-4 -z-10 group-hover:bg-orange-100 transition-colors" />

              <h2 className="text-2xl font-bold text-red-900 mb-3 font-serif leading-tight">
                {place.title}
              </h2>
              <div className="h-1 w-12 bg-amber-500 mb-4 rounded-full group-hover:w-20 transition-all duration-300"></div>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-grow font-medium">
                {place.desc}
              </p>

              <button
                onClick={() => handlePlaceClick(place.path)}
                className={`w-full py-3.5 rounded-xl font-bold tracking-wide transition-all duration-300 shadow-md transform active:scale-95
                ${
                  place.path
                    ? "bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 hover:shadow-lg hover:shadow-orange-500/40"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!place.path}
              >
                {place.path ? "Explore Journey" : "Coming Soon"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpiritualPlaces;
