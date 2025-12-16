const ChitrakootDetail = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-slate-100">
      {/* HERO SECTION */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

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
            src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2"
            alt="Chitrakoot Forests"
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
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
            src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c"
            alt="Chitrakoot Ashrams"
            className="rounded-2xl shadow-xl"
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
            src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96"
            alt="Kamadgiri Parvat"
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
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
            src="https://images.unsplash.com/photo-1585136917971-74684aa99c50"
            alt="Kamadgiri Parikrama"
            className="rounded-2xl shadow-xl"
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
