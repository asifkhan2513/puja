import React from "react";

const Yearly_Rashifal = () => {
  const yearlyData = [
    {
      sign: "Aries (Mesh)",
      year: "2025",
      desc: "A transformative year bringing career growth, stability, and strong financial gains.",
    },
    {
      sign: "Taurus (Vrishabha)",
      year: "2025",
      desc: "Harmonious relationships and positive developments in personal life.",
    },
    {
      sign: "Gemini (Mithun)",
      year: "2025",
      desc: "Communication and networking bring long-term benefits. Health needs care.",
    },
    {
      sign: "Cancer (Kark)",
      year: "2025",
      desc: "A spiritually uplifting year with emotional clarity and family support.",
    },
    {
      sign: "Leo (Singh)",
      year: "2025",
      desc: "Leadership shines. Promotions, recognition, and personal success likely.",
    },
    {
      sign: "Virgo (Kanya)",
      year: "2025",
      desc: "Consistent efforts bring financial growth. Avoid overthinking.",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-amber-900 text-center mb-10">
          Yearly Rashifal
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Read your complete yearly Vedic astrology predictions for career,
          finance, relationships, opportunities, and challenges ahead.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {yearlyData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-2xl border border-amber-100 p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-amber-800">
                {item.sign}
              </h3>

              <p className="text-sm text-amber-700 mb-2">{item.year}</p>

              <p className="text-gray-600">{item.desc}</p>

              <button className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition text-sm">
                Read Yearly Prediction
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Yearly_Rashifal;
