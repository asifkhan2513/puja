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
            Chitrakoot: The Hill of Many Wonders
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-3xl">
            Chitrakoot, the 'Hill of many wonders', is located in the northern
            Vindhya range of mountains, spread over the states of Uttar Pradesh
            and Madhya Pradesh. It is of great religious significance for Hindus
            due to its association with the Ramayana, a great epic in Hindu
            mythology.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* INTRO */}
        <h2 className="mt-6 text-5xl font-bold">Lord Rama's Abode in Exile</h2>
        <p className="text-lg leading-loose text-gray-700">
          Chitrakoot is a sacred place, for it is the area where Lord Rama, his
          wife Sita, and his brother Lakshmana lived when he was in their
          fourteen years of exile. So every stone, stream, or hill here is
          sacred; they were all blessed by their divine feet.
        </p>
        <h2 className="mt-6 text-5xl font-bold">
          The Highest Place of Pilgrimage
        </h2>
        <ul className="list-disc space-y-2">
          <li>
            According to some ancient religious scriptures and local beliefs,
            Chitrakoot is considered to possess spiritual merit even greater
            than Prayagraj (formerly known as the king of all pilgrimage
            destinations).
          </li>
          <li>
            Purification: One common belief is that Chitrakoot Dham is the
            single holy place where all other tirthas (holy rivers and places)
            in the world come to take a bath in the Mandakini River, not to
            bestow but to seek purification for themselves from sins they
            accumulate through overenthusiastic pilgrims. This highlights
            Chitrakoot's supreme sanctity
          </li>
          <li>
            The Spirit of Tapas: The Vibe at the temple is one of serene tapas
            (austerity) and introspection, which simply mirrors what Lord Rama
            led along with his family members while on their exile.
          </li>
        </ul>

        <h2 className="mt-6 text-5xl font-bold">Sages and Saints</h2>
        <ul className="list-disc space-y-2">
          <li>
            In addition to the divine trio, the forested region has been the
            home of many great sages and saints; thus, it is a thousand-year-old
            center of spiritual wisdom.
          </li>
          <li>
            Literary Giants: It was the residence of Maharishi Valmiki, who
            wrote the epic Ramayana in Sanskrit.
          </li>
          <li>
            <span className="font-bold">Great Rishis:</span> There were other
            great sages, such as Maharshi Atri, who was here with his saintly
            wife Mata Anusuya, who was known for her great wisdom and piety, to
            whom Sita used to pay visits for advice. Its visit contributed to
            making Chitrakoot an abiding place of profound spiritual
            enlightenment.
          </li>
        </ul>

        <h2 className="mt-6 text-5xl font-bold">
          Kamadgiri Parvat - The Heart Of Chitrakoot{" "}
        </h2>
        <p className="text-lg leading-loose text-gray-700">
          Kamadgiri Parvat, the most sacred spiritual centre in Chitrakoot, is a
          densely wooded hill that serves as a focal point for all religious and
          pilgrimage activities.
        </p>

        <h2 className="mt-6 text-5xl font-bold">
          The Wish-Fulfilling Mountain
        </h2>
        <p className="text-lg leading-loose text-gray-700">
          Kamadgiri is a Sanskrit word combination of kama (wish/desire) and
          giri (peak/mountain). It translates to the Mountain of
          fulfilling wishes. There is placed the divine hill of Chitrakut
          itself. It is said by the believers that if one completes a Parikrama
          around the mountain with the pure intention of wishing for something,
          then their wish will be fulfilled.
        </p>

        <h2 className="mt-6 text-5xl font-bold">
          The Sacred Walk: Kamadgiri Parikrama
        </h2>
        <p className="text-lg leading-loose text-gray-700">
          For every pilgrim visiting Chitrakoot, the single most important and
          popular religious activity is circumambulation or Parikrama
          of Kamadgiri Parvat.
        </p>
        <h2 className="mt-6 text-5xl font-bold">
          The Ceremony: Humility and Respect
        </h2>
        <p className="text-lg leading-loose text-gray-700">
          The pilgrimage path: The sacred pathway runs around the entire hill
          and measures about five kilometers.
        </p>

        <h3 className="mt-6 text-5xl font-bold">The Ritual</h3>
        <p className="text-lg leading-loose text-gray-700">
          Devotees are known to walk this path totally barefoot as it introduces
          Mysticism in their hearts out of their profound devotion to Lord Rama
          & total respect and humility. The footpath leads pilgrims through many
          smaller temples and attractive overlooks of the hill.
        </p>
        <h3 className="mt-6 text-5xl font-bold">Spiritual ambience</h3>
        <p className="text-lg leading-loose text-gray-700">
          The footpath is aesthetically laid with age-old temples on both sides
          of the path. The air is literally vibrating with the sounds of hymns,
          bhajans, and chanting, which adds a peace and spiritual experience.
        </p>

        <h2 className="mt-6 text-5xl font-bold">
          Spiritual Merit and Fulfillment
        </h2>
        <p className="text-lg leading-loose text-gray-700">
          There is a very strong belief that doing the Kamadgiri Parikrama
          benefits immensely in religious terms. It is widely thought to:
          <ul className="list-disc space-y-2">
            <li>The sins of previous acts are all washed away.</li>
            <li>
              Accrue the spiritual merit that aligns itself with the process
              towards freedom.
            </li>
            <li>Ensure prosperity and well-being.</li>
            <li>
              Accomplish the genuine wishes and lofty meanings of those who have
              true faith in it.
            </li>
          </ul>
        </p>
        <h2 className="mt-6 text-5xl font-bold">
          The Ultimate Reunion: Bharat Milap
        </h2>
        <p className="text-lg leading-loose text-gray-700">
          One of the sentimental points on the Arikrama path is the Bharat Milap
          Temple. This temple is the spot historically and emotionally known as
          where Lord Rama’s younger brother, Bharat, came to meet him during his
          banishment in order to ask him with a pure supplicant heart if he
          would return and rule over the kingdom. With them as witnesses, the
          place stands for that unique love and sacrifice between two brothers,
          and the triumph of duty (Dharma) over desire.
        </p>
      </div>
    </div>
  );
};

export default ChitrakootDetail;
