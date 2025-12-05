import React from "react";

const Mithun_Gemini = () => {
  const details = {
    sign: "Mithun (Gemini)",
    dateRange: "May 21 – June 20",
    rulingPlanet: "Mercury",
    element: "Air",
    luckyColor: "Yellow, Light Green, Sky Blue",
    luckyNumber: "3, 5",
    description:
      "Gemini individuals are intelligent, adaptable, curious, and excellent communicators. They enjoy learning, socializing, and exploring new ideas. Ruled by Mercury, they are witty, expressive, and thrive in dynamic environments.",
  };

  const dailyInsights = [
    "A great day for communication and networking.",
    "New ideas may bring exciting opportunities.",
    "Stay focused—avoid multitasking too much.",
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <h2 className="text-4xl font-extrabold text-amber-900 text-center mb-8">
          Mithun (Gemini)
        </h2>

        {/* Overview Section */}
        <div className="bg-white border border-amber-100 rounded-2xl shadow p-8 mb-10">
          <h3 className="text-2xl font-semibold text-amber-800 mb-4">About Gemini</h3>

          <p className="text-gray-700 mb-4">{details.description}</p>

          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="font-semibold text-amber-900">Date Range:</span> {details.dateRange}
            </li>
            <li>
              <span className="font-semibold text-amber-900">Ruling Planet:</span> {details.rulingPlanet}
            </li>
            <li>
              <span className="font-semibold text-amber-900">Element:</span> {details.element}
            </li>
            <li>
              <span className="font-semibold text-amber-900">Lucky Colors:</span> {details.luckyColor}
            </li>
            <li>
              <span className="font-semibold text-amber-900">Lucky Numbers:</span> {details.luckyNumber}
            </li>
          </ul>
        </div>

        {/* Daily Horoscope */}
        <div className="bg-white border border-amber-100 rounded-2xl shadow p-8">
          <h3 className="text-2xl font-semibold text-amber-800 mb-4">Today’s Insights</h3>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {dailyInsights.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>

          <button className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition font-medium">
            Read Full Horoscope
          </button>
        </div>

      </div>
    </section>
  );
};

export default Mithun_Gemini;
