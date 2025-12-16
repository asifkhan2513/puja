const VrindavanDetail = () => {
  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-green-100">
      {/* HERO SECTION */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600861194942-f883de0dfe96)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-300">
            Vrindavan
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-3xl">
            The sacred land where divine love breathes, where Radha and Krishna
            eternally reside.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* INTRO */}
        <p className="text-lg leading-loose text-gray-700">
          Welcome to Braj Bhoomi — a holy land where even a speck of dust is
          believed to echo the divine names of Radha and Krishna. Within this
          sacred expanse lies Vrindavan, a town woven with mystery, devotion,
          temples, sacred groves, and the soft fragrance of selfless love known
          as Bhakti.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          The name Vrindavan means the forest of Vrinda — the holy Tulsi plant,
          beloved to Lord Krishna. This land is not merely visited; it is felt.
          Walking through Vrindavan is like stepping into the childhood
          playground of Shri Krishna, where every tree, path, and breeze carries
          a memory of divine leelas.
        </p>

        {/* IMAGE BREAK */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1585136917971-74684aa99c50"
            alt="Vrindavan Temples"
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* SPIRITUAL SIGNIFICANCE */}
        <p className="text-lg leading-loose text-gray-700">
          Devotees believe Vrindavan is not bound by time. It is Nitya-Dham —
          the eternal abode of Radha and Krishna, a divine realm that descended
          to earth. Unlike worldly places that rise and fade, Vrindavan remains
          forever alive in devotion, untouched by decay.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          The dominant mood of Vrindavan is divine love — Prema. Here, God is
          not distant or commanding. He is a beloved friend, a mischievous
          child, a divine lover. The greeting “Radhe Radhe” is not merely
          spoken; it is lived — recognizing the divine presence within every
          soul.
        </p>

        {/* BANKE BIHARI */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1624365168734-1b1a54cde0c5"
            className="rounded-2xl shadow-xl"
            alt="Banke Bihari Temple"
          />

          <p className="text-lg leading-loose text-gray-700">
            At the heart of Vrindavan stands Banke Bihari Temple — the home of
            Krishna in his most enchanting form. Depicted in the graceful
            Tribhanga posture, the Lord appears irresistibly charming, drawing
            hearts toward him effortlessly.
          </p>
        </div>

        <p className="text-lg leading-loose text-gray-700">
          The deity is believed to be self-manifested, emerging from the
          devotion of Swami Haridas. In a unique tradition, the curtains are
          drawn and lifted repeatedly, allowing only fleeting glimpses. It is
          said that gazing too long upon Banke Bihari could overwhelm the
          devotee — such is the intensity of divine love here.
        </p>

        {/* RADHA RAMAN */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Radha Raman Temple"
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        <p className="text-lg leading-loose text-gray-700">
          Another sacred jewel of Vrindavan is the Radha Raman Temple. Here,
          Lord Krishna manifested miraculously from a sacred Shaligram stone,
          fulfilling the heartfelt desire of saint Gopal Bhatta Goswami. Known
          as the Prayojana Vigraha, Radha Raman responds directly to the love of
          the devotee.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          Within the temple burns an eternal flame — the kitchen fire that has
          remained lit for over five centuries. There is no separate idol of
          Radha here; she resides within Krishna himself, symbolizing the
          inseparable nature of divine love.
        </p>

        {/* GOVARDHAN */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-lg leading-loose text-gray-700">
            Near Vrindavan rises Govardhan Hill — not merely a hill, but a
            living form of Lord Krishna. Walking the sacred Govardhan Parikrama
            is an act of surrender, humility, and faith.
          </p>

          <img
            src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2"
            className="rounded-2xl shadow-xl"
            alt="Govardhan Parikrama"
          />
        </div>

        <p className="text-lg leading-loose text-gray-700">
          The 21-kilometer barefoot journey retraces the divine act where young
          Krishna lifted Govardhan to protect Braj from destruction. Devotees
          chant “Radhe Radhe” and “Jai Giriraj Maharaj,” feeling protection,
          purification, and deep communion with the Lord at every step.
        </p>

        {/* CLOSING */}
        <p className="text-lg leading-loose text-gray-700 font-medium">
          Vrindavan is not a place you leave behind. It follows you — softly,
          lovingly, eternally.
        </p>
      </div>
    </div>
  );
};

export default VrindavanDetail;
