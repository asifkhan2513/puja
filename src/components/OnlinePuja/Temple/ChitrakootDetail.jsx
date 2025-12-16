import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PATH } from "../../config/Path";

const ChitrakootDetail = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-slate-100">
      {/* HERO SECTION */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNa7klp1QY0r3hmQVruXJF7hD5txrghLNlw&s)",
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-300">
            Chitrakoot
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-3xl">
            The sacred forested hill where Lord Rama walked, lived, and
            sanctified every stone with his presence.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* INTRO */}
        <p className="text-lg leading-loose text-gray-700">
          Chitrakoot, revered as the “Hill of Many Wonders,” lies in the
          northern Vindhya range of mountains, gently spread across the sacred
          lands of Uttar Pradesh and Madhya Pradesh. This timeless region holds
          profound spiritual importance due to its deep association with the
          Ramayana — the epic that defines dharma, devotion, and righteousness.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          For devotees, Chitrakoot is not merely a geographical location. It is
          a living pilgrimage, where forests whisper ancient truths and rivers
          carry memories of divine footsteps.
        </p>

        {/* IMAGE BREAK */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://holydham.com/wp-content/uploads/2012/10/Chitrakoot.jpg"
            alt="Chitrakoot Forests"
            className="w-full h-64 md:h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* LORD RAMA IN EXILE */}
        <p className="text-lg leading-loose text-gray-700">
          Chitrakoot is sanctified as the land where Lord Rama, accompanied by
          Sita and his loyal brother Lakshmana, resided during the fourteen
          years of exile. Every stream, hill, and stone here is believed to have
          been touched by their divine feet, transforming the land into sacred
          ground.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          According to revered scriptures, Chitrakoot holds such spiritual
          purity that it surpasses even Prayagraj. It is said that all holy
          places journey here to bathe in the Mandakini River, seeking
          purification from the sins of countless ages.
        </p>

        {/* SAGES */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/65/b3/b1/caption.jpg?w=1200&h=-1&s=1"
            alt="Chitrakoot Ashrams"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />

          <p className="text-lg leading-loose text-gray-700">
            The silent forests of Chitrakoot have long been home to sages and
            saints. Maharshi Valmiki, the composer of the Ramayana, along with
            Maharshi Atri and Mata Anasuya, meditated in these tranquil woods,
            filling the land with wisdom and spiritual resonance.
          </p>
        </div>

        {/* KAMADGIRI */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://static.toiimg.com/thumb/msid-103572394,width-1070,height-580,resizemode-75/103572394,pt-32,y_pad-40/103572394.jpg"
            alt="Kamadgiri Parvat"
            className="w-full h-64 md:h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        <p className="text-lg leading-loose text-gray-700">
          At the heart of Chitrakoot rises Kamadgiri Parvat — the most sacred
          spiritual center of the region. The name Kamadgiri combines Kama
          (desire) and Giri (mountain), signifying the “Mountain that fulfills
          wishes.” It is believed to be the original form of Chitrakoot itself.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          The mountain is worshipped as Lord Kamtanath, the principal deity and
          an incarnation of Lord Rama. Devotees regard Kamadgiri not as stone
          and soil, but as a living divine presence.
        </p>

        {/* PARIKRAMA */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-lg leading-loose text-gray-700">
            The most revered practice at Chitrakoot is the Kamadgiri Parikrama —
            a sacred circumambulation of the hill. The path spans approximately
            five kilometers and is traditionally walked barefoot, symbolizing
            humility and surrender.
          </p>

          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/65/b3/b1/caption.jpg?w=1200&h=-1&s=1"
            alt="Kamadgiri Parikrama"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
        </div>

        <p className="text-lg leading-loose text-gray-700">
          Pilgrims believe that completing this parikrama cleanses sins,
          accumulates spiritual merit, and fulfills sincere desires. The path is
          lined with ancient temples, where chants, hymns, and bells create an
          atmosphere of deep peace and devotion.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          Along this sacred route lies the Bharat Milap Temple — the place where
          Bharat met Lord Rama during exile, pleading with him to return and
          rule Ayodhya. Their meeting stands as a timeless symbol of love,
          sacrifice, and dharma.
        </p>

        {/* CLOSING */}
        <p className="text-lg leading-loose text-gray-700 font-medium">
          Chitrakoot is not merely remembered — it is felt. A place where the
          soul slows down, listens, and finds its way home.
        </p>
      </div>
    </div>
  );
};

export default ChitrakootDetail;
