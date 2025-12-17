import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PATH } from "../../config/Path";

const BarsanaDetail = () => {
  return (
    <div className="bg-gradient-to-b from-rose-50 via-white to-pink-100">
      {/* HERO SECTION */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/15893245/pexels-photo-15893245.jpeg)",
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-300">
            Barsana: The Birth Place of Divine Love
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* INTRO */}
        <p className="mt-6 text-lg text-black max-w-3xl">
          <span className="font-bold">Barsana</span> is not just a town; it is a
          sacred pilgrimage site, famously known as the “Land of Radha Rani,”
          and is considered one of the holiest places in all of India. This spot
          is completely steeped in the eternal and purified loving tale of Shri
          Radha with Lord Krishna. For devotees, Barsana is more an experience
          than a mere location; it’s the very essence of devotion, or Bhakti.
          The spiritual vibration here is said to be tangible, a living witness
          of the divine pastimes (leelas) of Radha and Krishna. It offers a
          profound journey into the heart of pure, selfless love that transcends
          the material world.
        </p>
        <h2 className="text-4xl font-bold text-pink-300">
          Shri Radha Rani Mandir: Heart of Barsana
        </h2>
        <p className="text-lg leading-loose text-black">
          The beautiful Shri Radha Rani Mandir, more lovingly referred to as the
          Shriji Mandir or Ladli Lal Ji Temple (Temple of the dearest Daughter
          and Son), happens to be the best attraction of Barsana. In Braj
          (Barsana-Vrindavan and Mathura), she is received as the Goddess of
          Braj in the prayers of villagers. To them, she is not just lord
          Krishna's lover, but he incarnation of his spiritual energy and divine
          power. She is regarded as the epitome of prem and the finest form of
          bhakti.
        </p>
        {/* IMAGE BREAK */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/13426981/pexels-photo-13426981.jpeg"
            alt="Barsana Hills"
            className="w-full h-64 md:h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>
        {/* RADHA RANI MANDIR */}
        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold"> Symbol of Devotion -</span> The symbol of
          devotion, Radha’s love for Krishna, is here the supreme, essential
          element in religious life. Visiting this temple means praying to her
          for real devotion in our own lives. The disciples beg a particle of
          her eternal prema-bhakti.
        </p>
        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold">Divine Worship:</span> Lord Krishna
          predominates in many temples of India. But here in Barsana, Radha Rani
          (also popular as Shriji) is of great and unique importance and reigns
          supreme. This love is nothing but the proof of her sovereignty and
          supreme place in the heart of devotees, being the centre of their
          souls' happiness.
        </p>
        {/* IMAGE + TEXT */}
        <h2 className="text-4xl font-bold ">The Hilltop Haven</h2>
        <p className="text-lg leading-loose text-gray-700">
          The temple is located at a beautiful site on the top of the Bhanugarh
          Hill (also known as Brahmagiri Hill).
        </p>
        <h2 className="text-4xl font-bold ">Significance of The Hill</h2>
        <p className="text-lg leading-loose ">
          It was named after Radha Rani’s dad, Vrishbhanu Maharaj. As legends
          and old texts say, this is the place where Radha Rani was born and
          spent her childhood blissfully. The entire nearby area is filled with
          places where she and Krishna used to play, thereby making every nook
          and corner a sacred one.
        </p>

        <h2 className="text-4xl font-bold ">Architecture </h2>
        <ul className="list-disc space-y-2">
          <li>
            The temple is a beautiful blend of Rajasthan and Mughal styles of
            architecture predominantly, based on striking red sandstone and
            yellow sandstone.
          </li>
          <li>
            Striking Beauty: The beautiful carvings, large domes and lattice
            work in Jali makes the eyes feel the charm, just a sign of
            architectural master strokes apt for the Goddess to reside.
          </li>
          <li>
            Color Meaning: The abundance of red and yellow stones is also richly
            symbolic. The colours reportedly reflect the lost love between Radha
            and Krishna.
          </li>
        </ul>
        <h2 className="text-4xl font-bold ">
          The Sacred Connection Between Villages
        </h2>
        <ul className="list-disc space-y-2">
          <li>
            The epic love story of Radha and Krishna symbolizes the union of
            their respective homes:
          </li>
          <li>
            Radha's Home: Barsana, the home of Shri Radha Rani and her family
            (Vrishbhanu Maharaj).
          </li>
          <li>
            Krishna’s Abode: Nandgaon, the adjacent village where Lord Krishna
            grew up with his foster-father, Nand Maharaj.
          </li>
          <li>
            The Leela Source: These two villages are so close to each other that
            Radha Krishna, along with the sakhi friends, would play leelas in
            the groves and forests of Varsana and Nandgaon. This daily exchange
            is the basis of innumerable devotional poems, songs, and spiritual
            stories.
          </li>
          <li>
            Shri Radha Rani Mandir at Barsana is a religious paradise dedicated
            to the surrealism of divine love. It provides pilgrims with a chance
            to escape, if only temporarily, from the material world and to
            immerse themselves in the transcendental sweetness of Radha and
            Krishna’s eternal relationship by experiencing peace and a deep
            devotional connection that stays with them long after they depart.{" "}
          </li>
        </ul>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.pexels.com/photos/31203531/pexels-photo-31203531.jpeg"
            alt="Radha Rani Temple"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold ">The Ascent to the Divine</h2>
        <p className="text-lg leading-loose ">
          There are steps - about 200 or so in all - to climb by pilgrims to get
          into the main sanctum. This ascent is an act of penitence as well as
          profound devotion, which brings the devotee figuratively closer and
          closer to the spirit being invoked or offered worship. There are now
          alternate paths and modern facilities like lifts for those who cannot
          undertake the rigorous climb, which makes it possible even for
          nonchalant devotees to have darshan (sight) of the Goddess.
        </p>

        {/* HILLTOP HAVEN */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/15196472/pexels-photo-15196472.jpeg"
            alt="Bhanugarh Hill Barsana"
            className="w-full h-64 md:h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>
        <p className="text-lg leading-loose text-gray-700">
          The temple crowns the Bhanugarh Hill, also known as Brahmagiri Hill,
          named after Radha Rani’s father, Vrishbhanu Maharaj. Legends tell that
          Radha Rani was born here and spent her childhood amidst these sacred
          hills, where countless divine leelas took place.
        </p>
        <p className="text-lg leading-loose text-gray-700">
          Traditionally, pilgrims ascend nearly 200 steps to reach the sanctum.
          Each step is considered an offering of humility and devotion. For
          those unable to climb, alternative paths and lifts now allow everyone
          to experience the divine presence.
        </p>
        {/* ARCHITECTURE */}
        <p className="text-lg leading-loose text-gray-700">
          Architecturally, the temple is a stunning blend of Rajasthani and
          Mughal styles. Crafted from red and yellow sandstone, its domes,
          carvings, and lattice work reflect both strength and grace. The colors
          themselves symbolize Radha and Krishna — eternally united, never
          apart.
        </p>
        {/* CLOSING */}
        <p className="text-lg leading-loose text-gray-700 font-medium">
          Barsana is a sanctuary of divine love. Those who visit carry its peace
          within them long after they depart, touched forever by the sweetness
          of Radha and Krishna’s eternal bond.
        </p>
      </div>
    </div>
  );
};

export default BarsanaDetail;
