import React from "react";

const ChitrakootDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-orange-50 to-amber-100 font-sans scroll-smooth">
      {/* HERO SECTION */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden shadow-2xl"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNa7klp1QY0r3hmQVruXJF7hD5txrghLNlw&s)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-900/40"></div>
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-[#FFA500] hover:border-[#FFA500] border border-white/30 transition-all font-bold tracking-wide shadow-lg cursor-pointer"
        >
          ← Back
        </button>

        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#FFA500] drop-shadow-lg font-serif tracking-wide mb-6">
            Chitrakoot
          </h1>
          <p className="text-4xl font-bold text-white">
            The Hill of Many Wonders
          </p>
          <p className="text-xl md:text-2xl text-stone-100 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md font-serif">
            The sacred sanctuary where Lord Rama spent his exile, blessing every
            stone and stream.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* INTRO */}
        <div className="bg-white/60 p-8 rounded-3xl border border-orange-100 shadow-sm">
          <p className="text-lg leading-loose text-gray-800 font-medium">
            Chitrakoot, the 'Hill of many wonders', is located in the northern
            Vindhya range of mountains, spread over the states of Uttar Pradesh
            and Madhya Pradesh. It is of great religious significance for Hindus
            due to its association with the Ramayana, a great epic in Hindu
            mythology.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif border-l-8 border-orange-500 pl-6">
            Lord Rama's Abode in Exile
          </h2>
          <p className="text-lg leading-loose text-gray-800 font-medium">
            Chitrakoot is a sacred place, for it is the area where Lord Rama,
            his wife Sita, and his brother Lakshmana lived when he was in their
            fourteen years of exile. So every stone, stream, or hill here is
            sacred; they were all blessed by their divine feet.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif border-l-8 border-orange-500 pl-6">
            The Highest Place of Pilgrimage
          </h2>
          <ul className="list-disc space-y-4 pl-6 text-lg text-gray-800 font-medium marker:text-orange-500">
            <li>
              According to some ancient religious scriptures and local beliefs,
              Chitrakoot is considered to possess spiritual merit even greater
              than Prayagraj (formerly known as the king of all pilgrimage
              destinations).
            </li>
            <li>
              <span className="font-bold text-amber-800">Purification:</span>{" "}
              One common belief is that Chitrakoot Dham is the single holy place
              where all other tirthas (holy rivers and places) in the world come
              to take a bath in the Mandakini River, not to bestow but to seek
              purification for themselves from sins they accumulate through
              overenthusiastic pilgrims. This highlights Chitrakoot's supreme
              sanctity
            </li>
            <li>
              <span className="font-bold text-amber-800">
                The Spirit of Tapas:
              </span>{" "}
              The Vibe at the temple is one of serene tapas (austerity) and
              introspection, which simply mirrors what Lord Rama led along with
              his family members while on their exile.
            </li>
          </ul>
        </div>

        <div className="space-y-6 bg-amber-50/50 p-8 rounded-3xl border border-amber-100">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif">
            Sages and Saints
          </h2>
          <ul className="list-disc space-y-4 pl-6 text-lg text-gray-800 font-medium marker:text-orange-500">
            <li>
              In addition to the divine trio, the forested region has been the
              home of many great sages and saints; thus, it is a
              thousand-year-old center of spiritual wisdom.
            </li>
            <li>
              <span className="font-bold text-amber-800">Literary Giants:</span>{" "}
              It was the residence of Maharishi Valmiki, who wrote the epic
              Ramayana in Sanskrit.
            </li>
            <li>
              <span className="font-bold text-amber-800">Great Rishis:</span>{" "}
              There were other great sages, such as Maharshi Atri, who was here
              with his saintly wife Mata Anusuya, who was known for her great
              wisdom and piety, to whom Sita used to pay visits for advice. Its
              visit contributed to making Chitrakoot an abiding place of
              profound spiritual enlightenment.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif border-b-2 border-orange-200 pb-2 inline-block">
            Kamadgiri Parvat - The Heart Of Chitrakoot
          </h2>
          <p className="text-lg leading-loose text-gray-800 font-medium">
            Kamadgiri Parvat, the most sacred spiritual centre in Chitrakoot, is
            a densely wooded hill that serves as a focal point for all religious
            and pilgrimage activities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-amber-800 font-serif">
                The Wish-Fulfilling Mountain
              </h2>
              <p className="text-lg leading-loose text-gray-800 font-medium">
                Kamadgiri is a Sanskrit word combination of kama (wish/desire)
                and giri (peak/mountain). It translates to the Mountain of
                fulfilling wishes. There is placed the divine hill of Chitrakut
                itself. It is said by the believers that if one completes a
                Parikrama around the mountain with the pure intention of wishing
                for something, then their wish will be fulfilled.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-amber-800 font-serif">
                The Sacred Walk: Kamadgiri Parikrama
              </h2>
              <p className="text-lg leading-loose text-gray-800 font-medium">
                For every pilgrim visiting Chitrakoot, the single most important
                and popular religious activity is circumambulation or Parikrama
                of Kamadgiri Parvat.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif border-l-8 border-orange-500 pl-6">
            The Ceremony: Humility and Respect
          </h2>
          <p className="text-lg leading-loose text-gray-800 font-medium">
            The pilgrimage path: The sacred pathway runs around the entire hill
            and measures about five kilometers.
          </p>

          <div className="grid md:grid-cols-2 gap-8 pt-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
              <h3 className="text-2xl font-bold text-amber-800 mb-3 font-serif">
                The Ritual
              </h3>
              <p className="text-lg leading-loose text-gray-800 font-medium">
                Devotees are known to walk this path totally barefoot as it
                introduces Mysticism in their hearts out of their profound
                devotion to Lord Rama & total respect and humility. The footpath
                leads pilgrims through many smaller temples and attractive
                overlooks of the hill.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
              <h3 className="text-2xl font-bold text-amber-800 mb-3 font-serif">
                Spiritual Ambience
              </h3>
              <p className="text-lg leading-loose text-gray-800 font-medium">
                The footpath is aesthetically laid with age-old temples on both
                sides of the path. The air is literally vibrating with the
                sounds of hymns, bhajans, and chanting, which adds a peace and
                spiritual experience.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-orange-50 p-8 rounded-3xl border border-orange-100">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif">
            Spiritual Merit and Fulfillment
          </h2>
          <div className="text-lg leading-loose text-gray-800 font-medium">
            There is a very strong belief that doing the Kamadgiri Parikrama
            benefits immensely in religious terms. It is widely thought to:
            <ul className="list-disc space-y-2 mt-4 pl-6 marker:text-amber-600">
              <li>The sins of previous acts are all washed away.</li>
              <li>
                Accrue the spiritual merit that aligns itself with the process
                towards freedom.
              </li>
              <li>Ensure prosperity and well-being.</li>
              <li>
                Accomplish the genuine wishes and lofty meanings of those who
                have true faith in it.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif border-b-2 border-orange-200 pb-2 inline-block">
            The Ultimate Reunion: Bharat Milap
          </h2>
          <p className="text-lg leading-loose text-gray-800 font-medium">
            One of the sentimental points on the Arikrama path is the Bharat
            Milap Temple. This temple is the spot historically and emotionally
            known as where Lord Rama’s younger brother, Bharat, came to meet him
            during his banishment in order to ask him with a pure supplicant
            heart if he would return and rule over the kingdom. With them as
            witnesses, the place stands for that unique love and sacrifice
            between two brothers, and the triumph of duty (Dharma) over desire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChitrakootDetail;
