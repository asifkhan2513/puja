import React from "react";

const VrindavanDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-100 font-sans scroll-smooth">
      {/* HERO SECTION */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden shadow-2xl"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/16228306/pexels-photo-16228306.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-amber-900/40"></div>
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-[#FFA500] hover:border-[#FFA500] border border-white/30 transition-all font-bold tracking-wide shadow-lg cursor-pointer"
        >
          ← Back
        </button>

        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#FFA500] drop-shadow-lg font-serif tracking-wide mb-6">
            Vrindavan
          </h1>
          <p className="text-xl md:text-3xl text-yellow-50 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md font-serif italic">
            The Land of Eternal Love
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* INTRO */}
        <div className="space-y-6 text-lg leading-loose text-gray-800 font-medium font-serif">
          <p>
            Welcome to Braj Bhoomi, a holy tract in India where even a speck of
            dust is supposed to echo the divine lovers’ names, Radha and
            Krishna. In this country is a center called Vrindavan, a town of
            mysteries replete with temples, groves, and the atmosphere of
            selfless love (Bhakti).
          </p>
          <p>
            Vrindavan itself is the foundation of this spiritual journey. Its
            name means "forest of Vrinda (Tulsi or Holy Basil)," the favourite
            plant of Lord Krishna.
          </p>
          <p>
            This is not a mere destination; in fact, we can call it a place of
            pilgrimage for the soul, where you visit and walk on the same ground
            where Little Lord Krishna played as a child and grew up.
          </p>
        </div>

        {/* SPIRITUAL SIGNIFICANCE */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif border-l-8 border-yellow-500 pl-6">
            Spiritual Significance
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 ring-1 ring-yellow-200">
            <img
              src="https://images.pexels.com/photos/33151151/pexels-photo-33151151.jpeg"
              alt="Vrindavan Temples"
              className="w-full h-80 md:h-[500px] object-cover hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/60 p-6 rounded-2xl shadow-sm border border-yellow-100">
              <p className="text-lg leading-loose text-gray-800 font-medium">
                <span className="font-bold text-amber-700 block mb-2 text-xl">
                  The Eternal Abode
                </span>
                Followers of Lord Krishna believe Vrindavan is a part of the
                spiritual world that descended to earth. This land is known as
                nitya-dham (the eternal abode) of the fun and loving pastimes
                (leelas) of Radha and Krishna, in contrast to other places,
                which may appear or disappear..
              </p>
            </div>
            <div className="bg-white/60 p-6 rounded-2xl shadow-sm border border-yellow-100">
              <p className="text-lg leading-loose text-gray-800 font-medium">
                <span className="font-bold text-amber-700 block mb-2 text-xl">
                  The Energy of Love
                </span>
                Vrindavan's dominant mood is of divine love (prema). Here, God,
                far from being looked at as a severe king, is the familiar,
                attractive friend, son, or lover. Millions of pilgrims come here
                to soak up this love, searching for truth in devotion.
              </p>
            </div>
          </div>

          <p className="text-lg leading-loose text-gray-800 font-medium bg-amber-50 p-6 rounded-2xl border border-amber-200">
            <span className="font-bold text-amber-800">
              A Never-ending Festival -
            </span>{" "}
            The entire town throbs with devotional intoxication. People will be
            forever calling you “Radhe Radhe”; they recognize that unfoldment is
            taking place in every man and woman, acknowledging Radha, the divine
            symbol of pure devotion, in each other.
          </p>
        </div>

        {/* BANKE BIHARI */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif border-b-2 border-yellow-200 pb-2 inline-block">
            Banke Bihari Temple: The Bent Enchanter
          </h2>
          <p className="text-lg leading-loose text-gray-800 font-medium">
            Of the thousands of temples, Banke Bihari Temple is at the heart of
            Vrindavan. It is the residence of one of the most popular gods in
            Braj.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white/80 ring-1 ring-yellow-200 h-full">
              <img
                src="https://images.pexels.com/photos/11511275/pexels-photo-11511275.jpeg"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
                alt="Banke Bihari Temple"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-800 font-serif">
                The Spiritual Significance
              </h3>
              <p className="text-lg leading-loose text-gray-800 font-medium">
                <span className="font-bold text-amber-700">
                  The "Bent" Form:
                </span>{" "}
                The name Banke Bihari means "the enjoyer who is bent." Krishna
                is depicted standing in the beautiful Tribhanga (bent at three
                places) posture, which is incredibly charming and captivating.
              </p>
              <p className="text-lg leading-loose text-gray-800 font-medium">
                <span className="font-bold text-amber-700">
                  A Self-Made Deity:
                </span>{" "}
                The murti is considered as Swayambhu (self-manifested), formed
                from the heart of Swami Haridas when he was incarnated as a
                saint. This makes the deity very personal and spiritually
                connected to its worshipper.
              </p>
              <p className="text-lg leading-loose text-gray-800 font-medium">
                <span className="font-bold text-amber-700">
                  Glimpses of Divine Love:
                </span>{" "}
                One special tradition here is to raise and lower a curtain,
                giving only brief glimpses (darshan) of the image. The idol is
                supposedly so potent and enchanting that a prolonged gaze at the
                deity can render an entire devotee unconscious. This playful
                custom epitomizes the private and passionate aspect of divine
                love.
              </p>
            </div>
          </div>
        </div>

        {/* RADHA RAMAN */}
        <div className="space-y-8 bg-yellow-50/50 p-8 rounded-3xl border border-yellow-200">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif">
            Radha Raman Lal Ji: Pairs Appearances of the Beloved
          </h2>
          <p className="text-lg leading-loose text-gray-800 font-medium">
            Another ancient and highly revered religious place is the Radha
            Raman Temple, which has an emotional and divine story attached to
            it.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 ring-1 ring-yellow-200">
            <img
              src="https://images.pexels.com/photos/12462435/pexels-photo-12462435.jpeg"
              alt="Radha Raman Temple"
              className="w-full h-64 md:h-[400px] object-cover hover:scale-105 transition duration-1000"
            />
          </div>

          <h3 className="text-2xl font-bold text-amber-800 font-serif">
            The Spiritual Significance
          </h3>
          <ul className="list-disc space-y-4 pl-6 text-lg text-gray-800 font-medium marker:text-amber-500">
            <li>
              <span className="font-bold text-amber-700">
                The Self-Manifestation Miracle:
              </span>{" "}
              The deity, Radha Raman Lal, appeared miraculously from a sacred
              stone (shaligram shila) when the revered saint Gopal Bhatta
              Goswami intensely desired a three-fold bent form of Krishna to
              worship.
            </li>
            <li>
              <span className="font-bold text-amber-700">
                God of Love Exchange:
              </span>{" "}
              Radha Raman, which means "lover of Radha." The deity is called
              Prayojana Vigraha, where the Lord directly reciprocates and
              satisfies the heart's desire of the devotee, which at its core is
              pure love.
            </li>
            <li>
              <span className="font-bold text-amber-700">
                An Eternal Flame:
              </span>{" "}
              The cooking fire (chulha) burning at the temple residence kitchen
              has been kept alight for over 500 years since the temple was
              founded. It represents the never-ending love and serving of the
              Lord. Interesting point: here, there is no special deity of Radha;
              she resides in the heart of Krishna, showing their relationship is
              integral.
            </li>
          </ul>
        </div>

        {/* GOVARDHAN */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif border-b-2 border-yellow-200 pb-2 inline-block">
            Govardhan Parikrama: The Path of Protection
          </h2>
          <p className="text-lg leading-loose text-gray-800 font-medium">
            Govardhan Hill near Vrindavan is no ordinary hill; it is worshipped
            as Lord Krishna’s sacred form in a personal sense. The spiritual
            practice of walking around this sacred hill (walking path) is known
            as Govardhan Parikrama.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white/80 ring-1 ring-yellow-200">
              <img
                src="https://images.pexels.com/photos/11526024/pexels-photo-11526024.jpeg"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
                alt="Govardhan Parikrama"
              />
            </div>
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-amber-800 font-serif mb-4">
                The Spiritual Significance
              </h3>
              <p className="text-lg leading-loose text-gray-800 font-medium mb-4">
                <span className="font-bold text-amber-700">
                  Lord Krishna’s Act of Protection -
                </span>
                The Parikrama reminds us of the monumental leela when
                seven-year-old Krishna raised and kept the Govardhan mountain on
                his little finger for a period of seven days. He did so to save
                all of the people of Braj from an arrogant Lord Indra's
                relentless rain. The lesson had been given that protection was
                all from God, not in any degree from demigods.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-yellow-100">
              <p className="text-lg leading-loose text-gray-800 font-medium">
                <span className="font-bold text-amber-700 block mb-2 text-xl">
                  The Sacred Walk
                </span>
                The Parikrama route is around 21 km (13 miles) in circumference.
                Traversing this path, which is commonly done without shoes, is
                an act of great devotion, faith, and submission. Each foot rise
                is thought to bring a great deal of spiritual cleansing and an
                intimate experience with the Lord.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-yellow-100">
              <p className="text-lg leading-loose text-gray-800 font-medium">
                <span className="font-bold text-amber-700 block mb-2 text-xl">
                  The Hill, as God
                </span>
                Devotees worship the hill as Giriraj Maharaj (King of Hills).
                They feel that as they circle the hill, so do they circle
                Krishna. It is a deep, meditative trek accompanied by chants of
                “Radhe Radhe” and “Jai Giriraj Maharaj.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VrindavanDetail;
