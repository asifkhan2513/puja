import React, { useState, useEffect } from "react";
import Ayodhya from "../../../assets/craousel2.jpg";
import Krishna from "../../../assets/dummy2.jpg";
import Radha from "../../../assets/dummy19.jpg";
import ChhitraKoot from "../../../assets/dummy15.jpg";
import MaiharImg from "../../../assets/temple.jpg";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
    <div className="min-h-screen bg-orange-50/50 px-6 py-12">
      {/* Header - No Back Button */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center mb-16 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full text-orange-700 font-semibold hover:bg-orange-100 hover:-translate-x-1 transition-all duration-300 shadow-sm cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" /> Back
        </button>
        <h1 className="text-center text-4xl md:text-6xl font-extrabold text-orange-700 drop-shadow-sm font-serif mb-4">
          Spiritual Places
        </h1>
        <div className="w-32 h-1 bg-amber-500 rounded-full"></div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 justify-items-center">
        {places.map((place, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 
            transition-all duration-500 hover:-translate-y-2 border-2 border-orange-100 hover:border-orange-400 w-full max-w-sm flex flex-col"
          >
            {/* Image Section */}
            <div className="relative h-56 md:h-64 overflow-hidden border-b-4 border-amber-500">
              <LazyImage
                src={place.img}
                alt={place.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-xl font-bold drop-shadow-md translate-y-1 group-hover:translate-y-0 transition-transform duration-500 font-serif">
                  {place.title.split("–")[0].trim()}
                </h3>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-white to-orange-50/30">
              <h2 className="text-xl font-bold text-orange-800 group-hover:text-amber-700 transition-colors mb-2 font-serif">
                {place.title}
              </h2>

              <p className="mt-3 text-gray-700 text-base leading-relaxed mb-8 flex-grow">
                {place.desc}
              </p>

              <button
                onClick={() => handlePlaceClick(place.path)}
                className={`mt-auto w-full py-3.5 rounded-xl font-bold tracking-wide transition-all duration-300 shadow-md cursor-pointer border border-transparent
                ${
                  place.path
                    ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-700 hover:shadow-orange-300/50 hover:scale-[1.02]"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!place.path}
              >
                {place.path ? "Explore Now" : "Coming Soon"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpiritualPlaces;
