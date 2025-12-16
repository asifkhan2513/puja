import React from "react";
import Ayodhya from "../../../assets/craousel2.jpg";
import Krishna from "../../../assets/dummy2.jpg";
import Radha from "../../../assets/dummy19.jpg";
import ChhitraKoot from "../../../assets/dummy15.jpg";
import MaiharImg from "../../../assets/temple.jpg";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PATH } from "../../config/Path";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100 px-6 py-12">
      {/* Header with Back Button */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-12 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 
          bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full text-orange-700 
          font-semibold hover:bg-orange-100 hover:-translate-x-1 transition-all duration-300 shadow-sm cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" /> Back
        </button>

        <h1 className="w-full text-center text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 drop-shadow-sm font-serif">
          Spiritual Places
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
        {places.map((place, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-200/50 
            transition-all duration-500 hover:-translate-y-2 border border-orange-50 w-full max-w-sm"
          >
            {/* Image Section */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={place.img}
                alt={place.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg font-bold drop-shadow-md translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {place.title.split("–")[0].trim()}
                </h3>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col h-auto">
              <h2 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-1">
                {place.title}
              </h2>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                {place.desc}
              </p>

              <button
                onClick={() => (place.path ? navigate(place.path) : null)}
                className={`mt-auto w-full py-3 rounded-xl font-bold tracking-wide transition-all duration-300 shadow-md cursor-pointer
                ${
                  place.path
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 hover:shadow-lg hover:scale-[1.02]"
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
