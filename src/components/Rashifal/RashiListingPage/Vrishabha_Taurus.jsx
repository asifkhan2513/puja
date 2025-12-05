import React from "react";

const Vrishabha_Taurus = () => {
  const details = {
    sign: "Vrishabha (Taurus)",
    dateRange: "April 20 – May 20",
    rulingPlanet: "Venus",
    element: "Earth",
    luckyColor: "Green, Pink, White",
    luckyNumber: "2, 6",
    description:
      "Taurus individuals are calm, reliable, patient, and dedicated. Ruled by Venus, they appreciate comfort, beauty, and stability. They are hardworking, practical, and enjoy steady progress toward their goals.",
  };

  const dailyInsights = [
    "A stable day with progress in personal matters.",
    "Financial planning or investments may bring benefits.",
    "Avoid stubbornness—be open to new perspectives.",
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <h2 className="text-4xl font-extrabold text-amber-900 text-center mb-8">
          Vrishabha (Taurus)
        </h2>

        {/* Overview Section */}
        <div className="bg-white border border-amber-100 rounded-2xl shadow p-8 mb-10">
          <h3 className="text-2xl font-semibold text-amber-800 mb-4">About Taurus</h3>

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

export default Vrishabha_Taurus;
