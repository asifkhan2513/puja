import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PATH } from "../../config/Path";

const AyodhyaDetail = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-orange-100">
      {/* HERO */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/32106228/pexels-photo-32106228.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Back Button */}
        <Link
          to={PATH.SPIRITUAL_PLACES}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all font-semibold"
        >
          <ArrowLeft className="w-5 h-5" /> Back
        </Link>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-amber-300">
            Ayodhya
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-3xl">
            The eternal city where faith walks, devotion breathes, and Lord Ram
            lives in every heart.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <p className="text-lg leading-loose text-gray-700">
          Amid the pious flow of the Saryu River, in the heart of Uttar Pradesh,
          stands Ayodhya — not merely as a city, but as the soul of India’s
          spiritual grandeur. Known as the “City of Gods”, Ayodhya has been
          described in the Atharvaveda as a land of happiness and prosperity.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          Walking through Ayodhya feels like walking through the Ramayana
          itself. Every ghat, every temple, every narrow lane carries stories of
          Lord Rama’s birth, exile, patience, and his triumphant return.
        </p>

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://c.ndtvimg.com/2023-12/na2ncado_ram-mandir-3d_625x300_27_December_23.jpg"
            alt="Ram Mandir"
            className="w-full h-64 md:h-[400px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        <p className="text-lg leading-loose text-gray-700">
          At the spiritual heart of Ayodhya stands the Ram Mandir — a symbol of
          unwavering faith. Built in the majestic Nagara style using pink
          sandstone, the temple rises without iron, reflecting the eternal
          strength of Sanatan Dharma.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          The Garbha Griha houses Ram Lalla — the child form of Lord Rama. His
          presence fills devotees with peace, humility, and divine joy. Many
          leave with tears, many with smiles, but all with faith renewed.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="https://images.pexels.com/photos/31991708/pexels-photo-31991708.jpeg"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1661963839850-b4be117aff11?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXlvZGh5YSUyMHJhbSUyMG1hbmRpcnxlbnwwfHwwfHx8MA%3D%3D"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
        </div>

        <p className="text-lg leading-loose text-gray-700">
          Before reaching Lord Rama, devotees bow at Hanuman Garhi — the eternal
          guardian of Ayodhya. And flowing beside the city, the sacred Saryu
          River witnesses every prayer, every lamp, every whispered “Sita Ram”.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          Ayodhya is not just visited. It is experienced. It is remembered. It
          is lived within.
        </p>
      </div>
    </div>
  );
};

export default AyodhyaDetail;
