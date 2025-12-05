import React from "react";

const Makar_Capricorn = () => {
  const details = {
    sign: "Makar (Capricorn)",
    dateRange: "December 22 – January 19",
    rulingPlanet: "Saturn",
    element: "Earth",
    luckyColor: "Black, Navy Blue, Brown",
    luckyNumber: "8, 10",
    description:
      "Capricorn individuals are disciplined, ambitious, reliable, and hardworking. They are natural leaders who value stability and long-term success. Ruled by Saturn, they excel through persistence, patience, and strong determination.",
  };

  const dailyInsights = [
    "A great day for career planning and long-term decisions.",
    "Financial stability improves. Avoid unnecessary expenses.",
    "Good time to reconnect with family and loved ones.",
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-amber-900 text-center mb-8">
          Makar (Capricorn)
        </h2>

        {/* Overview Section */}
        <div className="bg-white border border-amber-100 rounded-2xl shadow p-8 mb-10">
          <h3 className="text-2xl font-semibold text-amber-800 mb-4">About Capricorn</h3>

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

export default Makar_Capricorn;
