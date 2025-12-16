const AyodhyaDetail = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-orange-100">
      {/* HERO */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1624561172888-ac93c696e10c)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

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
            src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2"
            alt="Ram Mandir"
            className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
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
            src="https://images.unsplash.com/photo-1586769852836-6318b47c7c8f"
            className="rounded-2xl shadow-xl"
          />
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="rounded-2xl shadow-xl"
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
