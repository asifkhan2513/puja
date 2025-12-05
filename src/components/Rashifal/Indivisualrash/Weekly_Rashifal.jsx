import React from "react";

const Weekly_Rashifal = () => {
  const weeklyRashis = [
    {
      sign: "Aries (Mesh)",
      week: "10 - 17 March",
      desc: "Career momentum builds. Good decisions lead to success.",
    },
    {
      sign: "Taurus (Vrishabha)",
      week: "10 - 17 March",
      desc: "Family support increases. Financial planning pays off.",
    },
    {
      sign: "Gemini (Mithun)",
      week: "10 - 17 March",
      desc: "Expressing your ideas brings opportunities. Stay focused.",
    },
    {
      sign: "Cancer (Kark)",
      week: "10 - 17 March",
      desc: "Emotional clarity improves. Spiritual activities favored.",
    },
    {
      sign: "Leo (Singh)",
      week: "10 - 17 March",
      desc: "Recognition and appreciation come your way.",
    },
    {
      sign: "Virgo (Kanya)",
      week: "10 - 17 March",
      desc: "Workload increases but results will be rewarding.",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl font-extrabold text-amber-900 text-center mb-10">
          Weekly Rashifal
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Read weekly Vedic astrology predictions for career, relationships, 
          finances, and personal growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {weeklyRashis.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-2xl border border-amber-100 p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-amber-800">{item.sign}</h3>

              <p className="text-sm text-amber-700 mb-2">{item.week}</p>

              <p className="text-gray-600">{item.desc}</p>

              <button className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition text-sm">
                Read Weekly Prediction
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Weekly_Rashifal;
