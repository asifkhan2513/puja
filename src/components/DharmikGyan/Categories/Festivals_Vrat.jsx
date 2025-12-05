import React from "react";

const Festivals_Vrat = () => {
  const festivals = [
    {
      title: "Ekadashi Vrat",
      desc: "A sacred fasting day dedicated to Lord Vishnu for spiritual cleansing and blessings.",
    },
    {
      title: "Karwa Chauth",
      desc: "A traditional fast observed for the well-being and longevity of one's partner.",
    },
    {
      title: "Mahashivratri",
      desc: "A powerful night of devotion to Lord Shiva, observed with fasting and meditation.",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Festivals & Vrat
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Discover important Hindu festivals and vrat observances along with
          their significance, rituals, and spiritual benefits.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {festivals.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-amber-100 shadow p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-4">{item.desc}</p>

              <button className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition">
                Explore Vrat
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Festivals_Vrat;
