import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PATH } from "../../config/Path";

const MaiharDetail = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-orange-100">
      {/* HERO SECTION */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1919487842/photo/goddess-mahagauri-devi-for-the-eighth-navadurga-of-navratri-festival.jpg?b=1&s=612x612&w=0&k=20&c=3nyWAFwHv_k7Ult9U-0TFCqH1wdnhT2qo7-CngMDBcA=)",
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
            Maihar
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-3xl">
            The sacred necklace of the Divine Mother, where wisdom, devotion,
            and power unite.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* INTRO */}
        <p className="text-lg leading-loose text-gray-700">
          Maihar is a small town in the Indian state of Madhya Pradesh, yet
          spiritually it holds immense significance. Its very name carries
          divine meaning — Mai, the Mother, and Har, the Necklace — together
          forming “The Mother’s Necklace.”
        </p>

        <p className="text-lg leading-loose text-gray-700">
          This sacred land is home to one of the most powerful shrines of the
          Divine Feminine — Maa Sharda Mandir. Perched high upon the Trikut
          Mountain, the temple radiates a presence that devotees feel long
          before they reach its sanctum.
        </p>

        {/* IMAGE BREAK */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://www.maihartemple.com/wp-content/uploads/sri-maihar-devi-temple_1412844211.jpg"
            alt="Maihar Temple"
            className="w-full h-64 md:h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* SHARDA MATA */}
        <p className="text-lg leading-loose text-gray-700">
          The presiding deity of Maihar is Goddess Sharda, an incarnation of
          Goddess Saraswati — the embodiment of learning, wisdom, and knowledge.
          Devotees approach her not with fear, but with humility, seeking
          clarity of mind and purity of intellect.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          Maihar is revered as a Shakti Peetha. According to sacred tradition,
          when Lord Shiva wandered the cosmos in grief after the loss of Sati,
          parts of her divine body fell upon the earth. It is believed that her
          necklace, or haar, fell here — sanctifying Maihar forever.
        </p>

        {/* LOCATION & ASCENT */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://www.maihartemple.com/wp-content/uploads/sri-maihar-devi-temple_1412844211.jpg"
            alt="Maihar Steps"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />

          <p className="text-lg leading-loose text-gray-700">
            The temple rests 600 feet above ground on Trikut Hill.
            Traditionally, pilgrims climb between 1,001 and 1,063 steps to reach
            the shrine. Each step is considered an act of devotion — a physical
            offering mirroring inner surrender.
          </p>
        </div>

        <p className="text-lg leading-loose text-gray-700">
          For those unable to climb, a ropeway now offers access, yet many still
          choose the steps, believing that effort itself pleases the Mother.
          Here, prayers are offered for wisdom, success, and clarity — blessings
          said to be granted through knowledge and reason.
        </p>

        {/* LEGEND OF ALHA & UDAL */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://thumbs.dreamstime.com/b/maihar-mata-temple-madh-pradesh-india-trust-place-many-people-visit-here-maihar-mata-temple-madh-pradesh-state-hd-quality-167481149.jpg"
            alt="Alha and Udal Legend"
            className="w-full h-64 md:h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        <p className="text-lg leading-loose text-gray-700">
          One of the most captivating legends of Maihar is that of the warrior
          brothers Alha and Udal. It is believed they were the first devotees to
          discover the shrine hidden amidst dense forests.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          Alha performed intense tapasya for twelve uninterrupted years. Pleased
          by his devotion, the Goddess granted him immortality. Even today,
          local belief holds that Alha visits the temple daily during Brahma
          Muhurta — before sunrise — to worship Maa Sharda and adorn her with
          flowers.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          Devotees feel an emotional bond with this unseen guardian. His
          presence is believed to enhance the temple’s mystique, reminding
          visitors that devotion never fades — it only transforms.
        </p>

        {/* CLOSING */}
        <p className="text-lg leading-loose text-gray-700 font-medium">
          Maihar is not just a shrine of stone and steps. It is a living
          testimony to devotion, wisdom, and the eternal compassion of the
          Divine Mother.
        </p>
      </div>
    </div>
  );
};

export default MaiharDetail;
