import React from "react";
import { RiLiveLine } from "react-icons/ri";
import Ayodhya from "../../../assets/craousel2.jpg";

const darshans = [
  {
    name: "Mahakal Live Darshan – Ujjain",
    img: Ayodhya,
  },
  {
    name: "Kashi Vishwanath – Varanasi",
    img: Ayodhya,
  },
  {
    name: "Ayodhya Ram Mandir",
    img: Ayodhya,
  },
  {
    name: "Vrindavan Banke Bihari",
    img: Ayodhya,
  },
];

const LiveDarshan = () => {
  return (
    <section className="min-h-screen   text-black py-16 px-6 border">
      {/* Heading */}
      <div className="text-center mb-16 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest text-amber-400">
          Live Darshan
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Experience divine energy from anywhere in the world.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {darshans.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden
            bg-white/10 backdrop-blur-lg border border-white/10
            hover:border-amber-400 transition-all duration-500"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Text */}
            <div className="absolute bottom-0 p-4">
              <h3 className="text-lg font-semibold text-amber-300 group-hover:text-white transition">
                {item.name}
              </h3>
              <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-red-600 animate-pulse">
                <span>
                  <RiLiveLine />
                </span>{" "}
                LIVE
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveDarshan;
