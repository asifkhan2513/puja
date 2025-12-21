import React from "react";

const AyodhyaDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-red-50 to-orange-100 font-sans scroll-smooth">
      {/* HERO */}
      <div
        className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center text-center overflow-hidden shadow-2xl"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/32106228/pexels-photo-32106228.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-red-900/60"></div>
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2 px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:border-orange-400 border border-white/30 transition-all duration-300 font-bold tracking-wide shadow-lg cursor-pointer text-sm sm:text-base"
        >
          ← Back
        </button>

        <div className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-yellow-300 drop-shadow-2xl font-serif tracking-wide mb-4 sm:mb-6">
            Ayodhya
          </h1>
          <div className="w-20 sm:w-32 h-1.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto mb-6 sm:mb-8 shadow-lg animate-pulse"></div>
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 sm:px-8 py-2 sm:py-3 rounded-2xl border-2 border-white/30 shadow-xl">
            <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold max-w-3xl mx-auto leading-relaxed font-serif">
              The eternal city where faith walks, devotion breathes, and Lord
              Ram lives in every heart.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
        {/* Intro Section */}
        <div className="bg-gradient-to-br from-white via-orange-50/50 to-red-50/50 p-6 sm:p-8 rounded-3xl border-4 border-orange-200 shadow-2xl hover:shadow-orange-200/50 transition-all duration-500">
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed font-medium opacity-90">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-red-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              Amid the pious Saryu River, in the heart of Uttar Pradesh, is a
              city that itself is not just a place but the soul of India's
              spiritual grandeur, Ayodhya.
            </p>

            <p className="text-gray-700">
              Ayodhya is also referred to as "The city of gods". According to
              the Atharvaveda, it is a city of happiness and prosperity.
              Strolling down the streets of Ayodhya is like strolling through
              the pages of the Ramayana. Each gully and ghat, each temple has
              its story of the early life of Rama, his banishment and exile, and
              his triumphant return.
            </p>

            <p className="text-gray-700">
              The air is heavy with the smell of sandalwood and incense, filled
              with incessant chants of "Sita-Ram." It's a land where devotion is
              the currency and faith is the speech. And the city is not just
              home to temples; it is a temple unto itself, welcoming its guests
              to offer up their mundane troubles and wallow in Bhakti
              (devotion). A visit to Ayodhya is not just a journey of holy
              places; it's internal emancipation.
            </p>
          </div>
        </div>

        {/* Spiritual Significance */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 sm:p-8 rounded-3xl border-l-8 border-red-500 shadow-2xl hover:shadow-red-200/50 transition-all duration-500 hover:-translate-y-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-orange-600 to-red-700 font-serif mb-4 sm:mb-6">
            Spiritual Significance
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
            <div className="bg-white/70 p-4 sm:p-6 rounded-2xl border-2 border-red-200 shadow-lg">
              <p>
                <span className="font-bold text-red-700">
                  The First Mokshapuri:
                </span>{" "}
                Scriptures list Ayodhya as the foremost city where the soul can
                attain liberation
              </p>
            </div>
            <div className="bg-white/70 p-4 sm:p-6 rounded-2xl border-2 border-orange-200 shadow-lg">
              <p>
                <span className="font-bold text-orange-700">
                  Capital of the Ikshvaku dynasty:
                </span>{" "}
                It symbolizes transcendence, governance, duty, and truth.
              </p>
            </div>
            <div className="bg-white/70 p-4 sm:p-6 rounded-2xl border-2 border-red-200 shadow-lg">
              <p>
                From the security of Hanuman Garhi, to the purifying waters of
                Saryu, and finally through to the presence at Ram Mandir, one
                follows a route from preparation to purification to Realisation.
              </p>
            </div>
          </div>
        </div>

        {/* Ram Mandir Section */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-orange-600 to-yellow-600 font-serif mb-2">
              Ram Mandir
            </h2>
            <p className="text-lg sm:text-xl text-red-600 font-semibold italic">
              The Return of the King
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-red-300 ring-4 ring-red-100 hover:ring-red-200 transition-all duration-500 group">
            <img
              src="https://c.ndtvimg.com/2023-12/na2ncado_ram-mandir-3d_625x300_27_December_23.jpg"
              alt="Ram Mandir"
              className="w-full h-64 sm:h-80 md:h-[500px] object-cover hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 sm:p-8 rounded-3xl border-4 border-red-200 shadow-2xl">
            <p className="text-base sm:text-lg leading-relaxed text-gray-800 font-medium mb-6">
              The spiritual center of Ayodhya is the Ram Mandir. It symbolises
              the deep faith and patience of millions of Hindus. It's not just a
              house of stone – it's a dream come true. Ram Lalla (an infant
              deity Ram) has returned to his real birthplace after hundreds of
              years of waiting!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 p-6 rounded-2xl shadow-lg border-2 border-red-200">
                <h3 className="font-bold text-red-700 text-lg sm:text-xl mb-3">
                  The Main Shrine (Garbha Griha)
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                  The Garbha Griha, or the inner room, is perhaps the most
                  special component of a temple. Here resides the statue of Ram
                  Lalla. The idol depicts Lord Rama in his childhood, as a
                  teenager. He appears innocent, radiant with divine light. For
                  a tourist, seeing this idol is the climax of the trip. It
                  brings an intense feeling of peace and joy.
                </p>
              </div>

              <div className="bg-white/80 p-6 rounded-2xl shadow-lg border-2 border-orange-200">
                <h3 className="font-bold text-orange-700 text-lg sm:text-xl mb-3">
                  The Pilgrimage Experience
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                  A visit to the Ram Mandir will make a difference in your life.
                  And you are walking these big halls and hearing thousands of
                  people chanting and singing. You can practically feel the
                  devotion of their energy in the air. It's the perfect place to
                  close your eyes, pray, and remind yourself that good always
                  defeats evil.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hanuman Garhi Section */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-red-600 to-yellow-600 font-serif mb-2">
              Hanuman Garhi
            </h2>
            <p className="text-lg sm:text-xl text-orange-600 font-semibold italic">
              The Guardian of Ayodhya
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 sm:p-8 rounded-3xl border-4 border-orange-200 shadow-2xl">
            <p className="text-base sm:text-lg leading-relaxed text-gray-800 font-medium mb-6">
              Before meeting Lord Rama, a devotee must first meet his most
              dedicated and loyal server, Lord Hanuman. This brings us to
              Hanuman Garhi, a fortress-like temple on the hill at the heart of
              the town.
            </p>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-orange-300 ring-4 ring-orange-100 hover:ring-orange-200 transition-all duration-500">
                <img
                  src="https://images.pexels.com/photos/3519190/pexels-photo-3519190.jpeg"
                  className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition duration-700"
                  alt="Hanuman Garhi"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-white/80 p-4 sm:p-6 rounded-2xl border-2 border-orange-200 shadow-lg">
                  <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                    <span className="font-bold text-orange-700">
                      The City's Guard -
                    </span>{" "}
                    Lord Hanuman is salutation as Kotwal (the Guard) of Ayodhya!
                    Legend has it that after Lord Rama returned to heaven,
                    Hanuman never left. He pledged to protect the city and its
                    inhabitants for eternity.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
              <div className="bg-white/80 p-4 sm:p-6 rounded-2xl border-2 border-red-200 shadow-lg">
                <h4 className="font-bold text-red-700 mb-2">
                  The Steps of Faith
                </h4>
                <p className="text-sm leading-relaxed text-gray-800">
                  To reach the main temple, you will have to walk up 76 long
                  flight steps. This climb is like a test. The effort you expend
                  is a costly way of shedding your pride and ego before you
                  stand naked in front of God.
                </p>
              </div>

              <div className="bg-white/80 p-4 sm:p-6 rounded-2xl border-2 border-orange-200 shadow-lg">
                <h4 className="font-bold text-orange-700 mb-2">
                  The Special Statue
                </h4>
                <p className="text-sm leading-relaxed text-gray-800">
                  The Hanuman murti is very unique over here. It depicts a young
                  Hanuman who is sitting on the lap of his mother, Anjani. What
                  makes this one special is that it reminds us that Hanuman
                  doesn't only possess strength but also a soft romantic side.
                </p>
              </div>

              <div className="bg-white/80 p-4 sm:p-6 rounded-2xl border-2 border-yellow-200 shadow-lg">
                <h4 className="font-bold text-yellow-700 mb-2">
                  What People Do There
                </h4>
                <p className="text-sm leading-relaxed text-gray-800">
                  It is customary to give Besan ke Laddoo (confectionery) as
                  prasad to the deity here. It's a busy temple, people shouting
                  out Hanuman Chalisa (a holy hymn). Your journey to Lord Rama
                  is said to be unfinished unless you pay a visit to the
                  protector Hanuman Garhi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Saryu River Section */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-600 to-cyan-600 font-serif mb-2">
              Saryu River
            </h2>
            <p className="text-lg sm:text-xl text-blue-600 font-semibold italic">
              The Flow of Salvation
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-3xl border-4 border-blue-200 shadow-2xl">
            <p className="text-base sm:text-lg leading-relaxed text-gray-800 font-medium mb-6">
              If Ayodhya is the body and Ram Mandir is the heart, then the Saryu
              River flowing here can be called as blood running through the
              veins. The saryu is not water but a living goddess. She's the mute
              spectator of this epic, right from Lord Rama's birth till his Jal
              Samadhi (passing into water).
            </p>

            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-300 ring-4 ring-blue-100 hover:ring-blue-200 transition-all duration-500 mb-6">
              <img
                src="https://vajiramandravi.com/current-affairs/wp-content/uploads/2025/04/saryu_river.webp"
                className="w-full h-64 sm:h-80 md:h-[450px] object-cover hover:scale-105 transition duration-1000"
                alt="Saryu River"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white/80 p-4 sm:p-6 rounded-2xl shadow-lg border-2 border-blue-200 hover:shadow-blue-200/50 transition-all duration-300">
                <h3 className="font-bold text-blue-700 text-lg sm:text-xl mb-3">
                  Bath in the Saryu River
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                  Bathing here is one of the most pious things Hindus can do. It
                  is believed that water washes away all the bad things (the
                  sins) we've done in past lives, making your soul clean and
                  ready to go into temples. Its riverbanks, known as ghats, are
                  a hive of activity where people gather to pray, meditate in
                  solitude, and respect their ancestors.
                </p>
              </div>
              <div className="bg-white/80 p-4 sm:p-6 rounded-2xl shadow-lg border-2 border-teal-200 hover:shadow-teal-200/50 transition-all duration-300">
                <h3 className="font-bold text-teal-700 text-lg sm:text-xl mb-3">
                  Evening Aarti
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                  After the sunsets, the riverside transforms into a spectacle
                  of light and sound in a ceremony called Saryu Aarti. Priests,
                  the way they do with the famous Ganga Aarti, hold large brass
                  lamps of fire and sway them in rhythmic circles as bells
                  jingle and shells blow.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 sm:p-6 rounded-2xl border-2 border-amber-200 shadow-lg mt-6">
              <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                Thousands of small earth lamps (diyas) are laid afloat on the
                river to carry off the locals' prayers. The reflection of these
                bright lights on the near water is like a carpet of sparkling
                stars. Sitting on the steps of the ghats (such as Ram Ki Paidi)
                and watching lamps float by, with solemn chants in the air, is a
                calming experience.
              </p>
            </div>

            <div className="bg-white/80 p-4 sm:p-6 rounded-2xl shadow-lg border-2 border-cyan-200 mt-6">
              <h3 className="font-bold text-cyan-700 text-lg sm:text-xl mb-3 font-serif">
                Guptar Ghat
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                Another significant place on the river is Guptar Ghat. According
                to local belief, it is at this holy place that Lord Rama decided
                to go out of the world. Here, he stepped into the waters to make
                his way back home in heaven (Vaikuntha). It is a tranquil,
                serene place for deep thought, far removed from the bustling
                main city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyodhyaDetail;
