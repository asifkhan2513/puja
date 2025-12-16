const BarsanaDetail = () => {
  return (
    <div className="bg-gradient-to-b from-rose-50 via-white to-pink-100">
      {/* HERO SECTION */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1588072432836-e10032774350)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-300">
            Barsana
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-3xl">
            The sacred land of Radha Rani, where divine love was born and
            devotion still breathes in every step.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* INTRO */}
        <p className="text-lg leading-loose text-gray-700">
          Barsana is not merely a town — it is a living pilgrimage of the heart.
          Revered as the “Land of Radha Rani,” this sacred place stands among
          the holiest spiritual destinations of India. Every stone, every breeze
          here carries the eternal love story of Shri Radha and Lord Krishna.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          To devotees, Barsana is an experience rather than a destination. The
          spiritual vibrations here are said to be tangible, silently witnessing
          the divine leelas of Radha and Krishna that continue to unfold beyond
          time.
        </p>

        {/* IMAGE BREAK */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2"
            alt="Barsana Hills"
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* RADHA RANI MANDIR */}
        <p className="text-lg leading-loose text-gray-700">
          At the heart of Barsana rises the Shri Radha Rani Mandir, lovingly
          known as the Shriji Mandir or Ladli Lal Ji Temple. This sacred shrine
          is not only the pride of Barsana but also a powerful symbol of divine
          devotion.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          In the Braj region — encompassing Barsana, Vrindavan, and Mathura —
          Radha Rani is worshipped as the supreme spiritual energy of Lord
          Krishna. She is not merely his beloved, but the embodiment of divine
          power, devotion, and unconditional love. To devotees, she is the very
          soul of Bhakti.
        </p>

        {/* IMAGE + TEXT */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c"
            alt="Radha Rani Temple"
            className="rounded-2xl shadow-xl"
          />

          <p className="text-lg leading-loose text-gray-700">
            Unlike many temples where Lord Krishna is the central deity, Barsana
            places Radha Rani at the spiritual forefront. Her dominance in the
            hearts of devotees reflects the profound belief that pure devotion
            alone can lead one to divine grace.
          </p>
        </div>

        <p className="text-lg leading-loose text-gray-700">
          Visiting this temple is not just an act of worship — it is a heartfelt
          prayer for true devotion. Devotees bow before Radha Rani seeking
          purity of love, humility of spirit, and unwavering faith.
        </p>

        {/* HILLTOP HAVEN */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Bhanugarh Hill Barsana"
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
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
