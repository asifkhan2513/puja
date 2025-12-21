import React from "react";

const VindhyachalDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-100 font-sans scroll-smooth">
      {/* HERO SECTION */}
      <div
        className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center text-center overflow-hidden shadow-2xl"
        style={{
          backgroundImage:
            "url(https://www.varanasi-tourism.in/img/vindhyachal.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-amber-900/60"></div>
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2 px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:border-orange-400 border border-white/30 transition-all duration-300 font-bold tracking-wide shadow-lg cursor-pointer text-sm sm:text-base"
        >
          ← Back
        </button>

        <div className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 drop-shadow-2xl font-serif tracking-wide mb-4 sm:mb-6">
            Vindhyachal
          </h1>
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 sm:px-8 py-2 sm:py-3 rounded-2xl border-2 border-white/30 shadow-xl">
            <p className="text-lg sm:text-xl md:text-3xl text-white font-semibold max-w-3xl mx-auto leading-relaxed font-serif italic">
              The Abode of the Divine Mother
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 sm:space-y-14">
        {/* INTRO */}
        <div className="bg-gradient-to-br from-white via-orange-50/50 to-amber-50/50 p-6 sm:p-8 rounded-3xl border-4 border-orange-200 shadow-2xl hover:shadow-orange-200/50 transition-all duration-500">
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-800 font-medium font-serif">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-orange-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              Situated on the holy River Ganges, referred to as Ganga,
              Vindhyachal sits in the lap of Vindhya and is one of the most
              revered Shakti Peethas in India. Unlike other Shakti Peethas in
              which part of the Goddess Sati is worshipped, at Vindhyachal, the
              entire body of the goddess was seen. According to the local
              legends, Goddess Durga had made this place her home after she
              slaughtered Mahishasura.
            </p>
            <p className="text-gray-700">
              The city is deeply connected to Durga Saptashati and Ramayana. The
              Goddess is believed to have appeared as the daughter of Yashoda on
              the dark fortnight and fled into the forests, where she took
              refuge in these mountains. Lord Rama, also the great epic legend,
              set his feet on these sacred hills during his exile.
            </p>
          </div>
        </div>

        {/* SPIRITUAL SIGNIFICANCE */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 font-serif mb-2">
              Maa Vindhyavasini Temple
            </h2>
            <p className="text-lg sm:text-xl text-orange-600 font-semibold italic">
              (The form of Goddess Lakshmi)
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-orange-300 to-amber-300 ring-4 ring-orange-100 hover:ring-orange-200 transition-all duration-500">
            <img
              src="https://images.pexels.com/photos/33151151/pexels-photo-33151151.jpeg"
              alt="Vrindavan Temples"
              className="w-full h-64 sm:h-80 md:h-[500px] object-cover hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>

          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800 font-medium">
            <p className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 sm:p-6 rounded-2xl border-l-4 border-orange-500 shadow-lg">
              The Vindhyavasini Temple is the core of pilgrimage. Personal
              Beliefs The resident deity, Maa Vindhyavasini, is considered a
              form of Mahalaxmi, the goddess of wealth and well-being.
            </p>

            <p className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 sm:p-6 rounded-2xl border-l-4 border-amber-500 shadow-lg">
              <span className="font-bold text-orange-700">
                Architectural and Symbolism:
              </span>{" "}
              The temple is constructed in the Nagara style. The idol of the
              Goddess in the center is of black stone and shows with silver face
              with a crown over her head, seated on her vahan lion.
            </p>

            <p className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 sm:p-6 rounded-2xl border-l-4 border-yellow-500 shadow-lg">
              <span className="font-bold text-amber-700">
                The Mool Mandir Link:
              </span>{" "}
              The mool mandir or devotion shop is often referred to as the "root
              shrine," which acts as the starting point for anyone starting off
              with devotion. (Fun fact:
            </p>

            <p className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 sm:p-6 rounded-2xl border-l-4 border-orange-500 shadow-lg">
              the Indian Standard Time (IST) line crosses right from above when
              viewed neelkanth – which is what the Goddess Durga's idol here
              faces).
            </p>

            <p className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 sm:p-6 rounded-2xl border-l-4 border-amber-500 shadow-lg">
              <span className="font-bold text-orange-700">
                Religious Significance:
              </span>{" "}
              Devotees worship here and seek the fulfillment of their wishes,
              saying, "Instant benediction is sought by visiting this place".
            </p>
          </div>
        </div>

        {/* Kali Khoh */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-orange-600 to-amber-700 font-serif mb-2">
              Kali Khoh Temple
            </h2>
            <p className="text-lg sm:text-xl text-red-600 font-semibold italic">
              (The Form of Mahakali)
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-red-300 ring-4 ring-red-100 hover:ring-red-200 transition-all duration-500">
            <img
              src="https://temple.yatradham.org/public/Product/temple/temple_8sU07nBL_202507041638290.webp"
              alt="Kali"
              className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>

          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800 font-medium">
            <p className="bg-gradient-to-r from-red-50 to-orange-50 p-4 sm:p-6 rounded-2xl border-l-4 border-red-500 shadow-lg">
              Situated at a distance of around 2 km from the main Vindhyavasini
              temple, the Kali Khoh Temple is dedicated to Maa Mahakali. Here,
              the divine feminine energy is in her fiercest aspect.
            </p>

            <p className="bg-gradient-to-r from-orange-50 to-red-50 p-4 sm:p-6 rounded-2xl border-l-4 border-orange-500 shadow-lg">
              <span className="font-bold text-red-700">The Holy Cave:</span>{" "}
              This temple is one of its kind in the sense that it is located
              within an immense rock cave, which many believe is centuries old.
              It is encircled by thick forests, which lend the place a magical
              feel.
            </p>

            <p className="bg-gradient-to-r from-red-50 to-pink-50 p-4 sm:p-6 rounded-2xl border-l-4 border-red-500 shadow-lg">
              <span className="font-bold text-red-700">
                Legend of Raktabija:
              </span>{" "}
              The temple celebrates a battle in which Maa Kali defeated the
              asuras (demons) after taking the form of goddess Durga, and
              drinking every drop of blood from their bodies to prevent it from
              falling on earth.
            </p>

            <p className="bg-gradient-to-r from-pink-50 to-red-50 p-4 sm:p-6 rounded-2xl border-l-4 border-pink-500 shadow-lg">
              <span className="font-bold text-red-700">Objective:</span>{" "}
              Pilgrims come to Kali Khoh for protection and strength, or to
              overcome counselling demons within themselves.
            </p>
          </div>
        </div>

        {/* Ashtbuja */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 font-serif mb-2">
              Ashtabhuja Temple
            </h2>
            <p className="text-lg sm:text-xl text-blue-600 font-semibold italic">
              (The Form of Mahasaraswati)
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-300 ring-4 ring-blue-100 hover:ring-blue-200 transition-all duration-500">
            <img
              src="https://www.seawatersports.com/images/places/ashtabhuja-temple.png"
              alt="Ashtabhuja"
              className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>

          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800 font-medium">
            <p className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-2xl border-l-4 border-blue-500 shadow-lg">
              The Ashtabhuja Temple is located on a hillock some 3 km away from
              the town; it is dedicated to Maa Mahasaraswati, regarded as the
              goddess of wisdom and knowledge.
            </p>

            <p className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 sm:p-6 rounded-2xl border-l-4 border-purple-500 shadow-lg">
              <span className="font-bold text-blue-700">
                Connected with Krishna:
              </span>{" "}
              This temple is related to Yogmaya, the goddess who was born as the
              sister of Lord Krishna and took the form of the Eight-armed
              Goddess Ashtabhuja after taking incarnation from Kansa.
            </p>

            <p className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 sm:p-6 rounded-2xl border-l-4 border-indigo-500 shadow-lg">
              <span className="font-bold text-purple-700">
                Spiritual Usage:
              </span>{" "}
              It is believed that if a person worships in this place, then they
              can get creative ideas, wisdom, and spiritual awakening.
            </p>

            <p className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-2xl border-l-4 border-blue-500 shadow-lg">
              <span className="font-bold text-blue-700">The Scenery:</span>{" "}
              Being at the top of the religious trail, the temple offers a
              scenic view from the Vindhyachal hills and the river Ganges.
            </p>
          </div>
        </div>

        {/* Trikone */}
        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-6 sm:p-8 rounded-3xl border-4 border-amber-300 shadow-2xl space-y-6 sm:space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 font-serif mb-2">
              The Trikone Yaatra
            </h2>
            <p className="text-lg sm:text-xl text-amber-600 font-semibold italic">
              The sacred triangle
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-gray-800 font-medium text-center">
            The most important pilgrimage that is undertaken in Vindhyachal is
            the Trikona Parikrama (or Yatra), which includes covering the three
            main temples in a fixed sequence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-orange-200 shadow-lg text-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mx-auto mb-2"></div>
              <p className="font-bold text-orange-700">Vindhyavasini</p>
              <p className="text-sm text-gray-600">(Mahalaxmi)</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-red-200 shadow-lg text-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-2"></div>
              <p className="font-bold text-red-700">Kali Khoh</p>
              <p className="text-sm text-gray-600">(Mahakali)</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-blue-200 shadow-lg text-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
              <p className="font-bold text-blue-700">Ashtabhuja</p>
              <p className="text-sm text-gray-600">(Mahasaraswati)</p>
            </div>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-gray-800 font-medium text-center">
            This triangle journey is of 8km and signifies the worship of The
            Entire Divine Feminine Power. Once this circuit is completed, it's
            said to wash away one's soul and grant their deepest desires.
          </p>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-br from-white via-amber-50/50 to-orange-50/50 p-6 sm:p-8 rounded-3xl border-4 border-amber-200 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600 font-serif mb-4 text-center">
            Conclusion
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 font-medium text-center">
            Vindhyachal is not simply a number of temples, but an entire
            spiritual terrain where the powers of wealth, safety, and knowledge
            coalesce. While you are passing through the magical cave of Kali
            Khoh, or climbing up hill to Ashtabhuja, it's an intense encounter
            with the divine mother.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VindhyachalDetails;
