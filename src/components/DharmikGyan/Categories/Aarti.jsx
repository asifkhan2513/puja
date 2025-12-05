import React from "react";

const Aarti = () => {
  const aartiList = [
    {
      title: "Shri Ram Aarti",
      desc: "Sacred aarti dedicated to Bhagwan Shri Ram, recited daily for divine blessings.",
    },
    {
      title: "Shiv Aarti",
      desc: "Powerful aarti sung in devotion to Lord Shiva for protection and peace.",
    },
    {
      title: "Durga Maa Aarti",
      desc: "Aarti offered to Maa Durga invoking strength, courage, and prosperity.",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Daily Aarti Collection
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Explore devotional aartis dedicated to various deities. Chant along or read 
          the verses to receive divine grace and mental peace.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {aartiList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-amber-100 shadow p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-amber-800 mb-2">{item.title}</h3>

              <p className="text-gray-600 mb-4">{item.desc}</p>

              <button className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition">
                Read Aarti
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Aarti;
