import React from "react";

const AyodhyaDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-red-50 to-orange-100 font-sans scroll-smooth">
      {/* HERO */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden shadow-2xl"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/32106228/pexels-photo-32106228.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-red-900/30"></div>
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-[#FFA500] hover:border-[#FFA500] border border-white/30 transition-all font-bold tracking-wide shadow-lg cursor-pointer"
        >
          ← Back
        </button>

        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#FFA500] drop-shadow-lg font-serif tracking-wide mb-6">
            Ayodhya
          </h1>
          <div className="w-32 h-1.5 bg-[#FFA500] rounded-full mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-orange-50 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md font-serif">
            The eternal city where faith walks, devotion breathes, and Lord Ram
            lives in every heart.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <div className="space-y-8 text-lg md:text-xl text-gray-800 leading-loose font-medium opacity-90">
          <p>
            Amid the pious Saryu River, in the heart of Uttar Pradesh, is a city
            that itself is not just a place but the soul of India’s spiritual
            grandeur, Ayodhya.
          </p>

          <p>
            Ayodhya is also referred to as "The city of gods". According to the
            Atharvaveda, it is a city of happiness and prosperity. Strolling
            down the streets of Ayodhya is like strolling through the pages of
            the Ramayana. Each gully and ghat, each temple has its story of the
            early life of Rama, his banishment and exile, and his triumphant
            return.
          </p>

          <p>
            The air is heavy with the smell of sandalwood and incense, filled
            with incessant chants of "Sita-Ram." It’s a land where devotion is
            the currency and faith is the speech. And the city is not just home
            to temples; it is a temple unto itself, welcoming its guests to
            offer up their mundane troubles and wallow in Bhakti (devotion). A
            visit to Ayodhya is not just a journey of holy places; it’s internal
            emancipation.
          </p>
        </div>

        <div className="border-l-8 border-amber-500 pl-8 py-2 bg-orange-50/50 rounded-r-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 font-serif mb-6">
            Spiritual Significance
          </h2>
          <div className="space-y-4 text-lg text-gray-800 leading-relaxed font-medium">
            <p>
              The First Mokshapuri: Scriptures list Ayodhya as the foremost city
              where the soul can attain liberation
            </p>
            <p>
              Capital of the Ikshvaku dynasty: It symbolizes transcendence,
              governance, duty, and truth.
            </p>
            <p className="text-lg leading-loose text-gray-700">
              From the security of Hanuman Garhi, to the purifying waters of
              Saryu, and finally through to the presence at Ram Mandir, one
              follows a route from preparation to purification to Realisation.
            </p>
          </div>
        </div>

        {/* Ram Mandir Section */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 font-serif border-b-2 border-orange-200 pb-4 inline-block">
            Ram Mandir: The Return of the King
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 ring-1 ring-orange-200 group">
            <img
              src="https://c.ndtvimg.com/2023-12/na2ncado_ram-mandir-3d_625x300_27_December_23.jpg"
              alt="Ram Mandir"
              className="w-full h-80 md:h-[500px] object-cover hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>

          <p className="text-lg leading-loose text-gray-800 font-medium">
            The spiritual center of Ayodhya is the Ram Mandir. It symbolises the
            deep faith and patience of millions of Hindus. It’s not just a house
            of stone – it’s a dream come true. Ram Lalla (an infant deity Ram)
            has returned to his real birthplace after hundreds of years of
            waiting!
          </p>

          <div className="bg-white/80 p-8 rounded-3xl shadow-lg border border-orange-100 space-y-6">
            <p className="text-lg leading-loose text-gray-800">
              <span className="font-bold text-red-700 text-xl block mb-2">
                The Main Shrine (Garbha Griha)
              </span>
              The Garbha Griha, or the inner room, is perhaps the most special
              component of a temple. Here resides the statue of Ram Lalla. The
              idol depicts Lord Rama in his childhood, as a teenager. He appears
              innocent, radiant with divine light. For a tourist, seeing this
              idol is the climax of the trip. It brings an intense feeling of
              peace and joy. The faithful believe that praying at this place
              brings them closer to Lord Rama’s goodness, truth, and nobility.
            </p>

            <p className="text-lg leading-loose text-gray-800">
              <span className="font-bold text-red-700 text-xl block mb-2">
                The Pilgrimage Experience
              </span>
              A visit to the Ram Mandir will make a difference in your life. And
              you are walking these big halls and hearing thousands of people
              chanting and singing. You can practically feel the devotion of
              their energy in the air. It’s the perfect place to close your
              eyes, pray, and remind yourself that good always defeats evil.
            </p>
          </div>
        </div>

        {/* Hanuman Garhi Section */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 font-serif border-b-2 border-orange-200 pb-4 inline-block">
            Hanuman Garhi: The Guardian of Ayodhya
          </h2>
          <p className="text-lg leading-loose text-gray-800 font-medium">
            Before meeting Lord Rama, a devotee must first meet his most
            dedicated and loyal server, Lord Hanuman. This brings us to Hanuman
            Garhi, a fortress-like temple on the hill at the heart of the town.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white/80 ring-1 ring-orange-200 h-full">
              <img
                src="https://images.pexels.com/photos/3519190/pexels-photo-3519190.jpeg"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
                alt="Hanuman Garhi"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-orange-100/50 p-6 rounded-2xl border border-orange-200">
                <p className="text-lg leading-loose text-gray-800">
                  <span className="font-bold text-red-800">
                    The City's Guard -
                  </span>{" "}
                  Lord Hanuman is salutation as Kotwal (the Guard) of Ayodhya!
                  Legend has it that after Lord Rama returned to heaven, Hanuman
                  never left. He pledged to protect the city and its inhabitants
                  for eternity. He still sacraments the holy birthplace, even
                  though you cannot see him.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-loose text-gray-800 font-medium">
            <p>
              <span className="font-bold text-red-700">
                The Steps of Faith :
              </span>
              The Main Shrine (Garbha Griha) In order to get to the main temple,
              you will have to walk up 76 long flight steps. This climb is like
              a test. The effort you expend is a costly way of shedding your
              pride and ego before you stand naked in front of God. Because it
              is designed like a fortress with towers on each corner, it
              confirms that Hanuman is keeping an eye on every part of the city
              and forward.
            </p>

            <p>
              <span className="font-bold text-red-700">
                The Special Statue :
              </span>
              The Hanuman murti is very unique over here. It depicts a young
              Hanuman who is sitting on the lap of his mother, Anjani. What
              makes this one special is that it reminds us that Hanuman doesn’t
              only possess strength but also a soft romantic side.
            </p>

            <p>
              <span className="font-bold text-red-700">
                What People Do There :
              </span>{" "}
              It is customary to give Besan ke Laddoo (confectionery) as prasad
              to the deity here. It’s a busy temple, people shouting out Hanuman
              Chalisa (a holy hymn). Lord Hanuman quickly gained popularity
              amongst the masses, and his worshipers seek strength from him.
              People worship him for his knowledge and power, which provide a
              check against evil forces. Your journey to Lord Rama is said to be
              unfinished unless you pay a visit to the protector Hanuman Garhi.
            </p>
          </div>
        </div>

        {/* Saryu River Section */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 font-serif border-b-2 border-orange-200 pb-4 inline-block">
            Saryu River: The Flow of Salvation
          </h2>
          <p className="text-lg leading-loose text-gray-800 font-medium">
            If Ayodhya is the body and Ram Mandir is the heart, then the Saryu
            River flowing here can be called as blood running through the veins.
            The saryu is not water but a living goddess. She’s the mute
            spectator of this epic, right from Lord Rama’s birth till his Jal
            Samadhi (passing into water).
          </p>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 ring-1 ring-orange-200">
            <img
              src="https://images.pexels.com/photos/35216366/pexels-photo-35216366.jpeg"
              className="w-full h-80 md:h-[450px] object-cover hover:scale-105 transition duration-1000"
              alt="Saryu River"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-6">
            <div className="bg-white/70 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-lg leading-loose text-gray-800">
                <span className="font-bold text-red-700 block mb-2 text-xl">
                  Bath in the Saryu River
                </span>
                Bathing here is one of the most pious things Hindus can do. It
                is believed that water washes away all the bad things (the sins)
                we've done in past lives, making your soul clean and ready to go
                into temples. Its riverbanks, known as ghats, are a hive of
                activity where people gather to pray, meditate in solitude, and
                respect their ancestors.
              </p>
            </div>
            <div className="bg-white/70 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-lg leading-loose text-gray-800">
                <span className="font-bold text-red-700 block mb-2 text-xl">
                  Evening Aarti
                </span>
                After the sunsets, the riverside transforms into a spectacle of
                light and sound in a ceremony called Saryu Aarti. Priests, the
                way they do with the famous Ganga Aarti, hold large brass lamps
                of fire and sway them in rhythmic circles as bells jingle and
                shells blow.
              </p>
            </div>
          </div>

          <p className="text-lg leading-loose text-gray-800 font-medium bg-amber-50 p-6 rounded-2xl border border-amber-100">
            Thousands of small earth lamps (diyas) are laid afloat on the river
            to carry off the locals' prayers. The reflection of these bright
            lights on the near water is like a carpet of sparkling stars.
            Sitting on the steps of the ghats (such as Ram Ki Paidi) and
            watching lamps float by, with solemn chants in the air, is a calming
            experience.
          </p>

          <p className="text-lg leading-loose text-gray-800 font-medium">
            <span className="font-bold text-red-700 text-xl font-serif">
              {" "}
              Guptar Ghat
            </span>{" "}
            Another significant place on the river is Guptar Ghat. According to
            local belief, it is at this holy place that Lord Rama decided to go
            out of the world. Here, he stepped into the waters to make his way
            back home in heaven (Vaikuntha). It is a tranquil, serene place for
            deep thought, far removed from the bustling main city.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AyodhyaDetail;
