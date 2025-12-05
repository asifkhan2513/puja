import React from "react";

const Monthly_Rashifal = () => {
  const monthlyRashis = [
    {
      sign: "Aries (Mesh)",
      month: "March 2025",
      desc: "Career growth and financial stability improve. Good time for new ventures.",
    },
    {
      sign: "Taurus (Vrishabha)",
      month: "March 2025",
      desc: "Emotional wellbeing strengthens. Relationships become harmonious.",
    },
    {
      sign: "Gemini (Mithun)",
      month: "March 2025",
      desc: "Strong communication brings opportunities. Focus on health.",
    },
    {
      sign: "Cancer (Kark)",
      month: "March 2025",
      desc: "Personal life flourishes. Great time for spiritual activities.",
    },
    {
      sign: "Leo (Singh)",
      month: "March 2025",
      desc: "Leadership shines. Promotions or recognition likely.",
    },
    {
      sign: "Virgo (Kanya)",
      month: "March 2025",
      desc: "Workload increases but rewards follow. Health improves gradually.",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl font-extrabold text-amber-900 text-center mb-10">
          Monthly Rashifal
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Get detailed monthly astrology predictions for all zodiac signs based on 
          Vedic astrology. Know what the universe has planned for you this month.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {monthlyRashis.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-2xl border border-amber-100 p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-amber-800">
                {item.sign}
              </h3>

              <p className="text-sm text-amber-700 mb-2">{item.month}</p>

              <p className="text-gray-600">{item.desc}</p>

              <button className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition text-sm">
                Read Monthly Prediction
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Monthly_Rashifal;
