import React from "react";

const Daily_Rashifal = () => {
  const rashis = [
    {
      sign: "Aries (Mesh)",
      desc: "A productive day. Good news in career or finances.",
      color: "#FF7043",
    },
    {
      sign: "Taurus (Vrishabha)",
      desc: "Favorable time for family matters and stability.",
      color: "#8D6E63",
    },
    {
      sign: "Gemini (Mithun)",
      desc: "Communication will bring opportunities today.",
      color: "#42A5F5",
    },
    {
      sign: "Cancer (Kark)",
      desc: "Emotional balance and peace will be restored.",
      color: "#26C6DA",
    },
    {
      sign: "Leo (Singh)",
      desc: "Leadership qualities will shine. Good for decisions.",
      color: "#FFA726",
    },
    {
      sign: "Virgo (Kanya)",
      desc: "Focus on details. Health improvement indicated.",
      color: "#66BB6A",
    },
    {
      sign: "Libra (Tula)",
      desc: "Harmony in relationships. Financial balance improves.",
      color: "#AB47BC",
    },
    {
      sign: "Scorpio (Vrishchik)",
      desc: "Favorable for deep thinking and career shift.",
      color: "#EC407A",
    },
    {
      sign: "Sagittarius (Dhanu)",
      desc: "Travel or learning opportunities may arise.",
      color: "#FFCA28",
    },
    {
      sign: "Capricorn (Makar)",
      desc: "Hard work pays off. Good day for planning.",
      color: "#8D6E63",
    },
    {
      sign: "Aquarius (Kumbh)",
      desc: "Unexpected gains and social support likely.",
      color: "#29B6F6",
    },
    {
      sign: "Pisces (Meen)",
      desc: "Spiritual growth and mental calmness today.",
      color: "#5C6BC0",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-amber-900 text-center mb-10">
          Daily Rashifal
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Read today's horoscope for all zodiac signs. Get insights on career,
          finance, health, and relationships based on Vedic astrology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rashis.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-2xl border border-amber-100 p-6 hover:shadow-md transition"
            >
              <div
                className="w-12 h-12 rounded-full mb-4"
                style={{ backgroundColor: item.color }}
              ></div>

              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                {item.sign}
              </h3>

              <p className="text-gray-600">{item.desc}</p>

              <button className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition text-sm">
                Read Full Rashifal
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Daily_Rashifal;
