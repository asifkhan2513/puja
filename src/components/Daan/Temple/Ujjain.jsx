import React from "react";

const Ujjain = () => {
  const ujjainDetails = [
    {
      title: "Mahakaleshwar Darshan",
      desc: "Receive blessings from Lord Mahakaleshwar, one of the 12 Jyotirlingas.",
    },
    {
      title: "Bhasma Aarti Seva",
      desc: "Participate in the sacred early-morning Bhasma Aarti ritual.",
    },
    {
      title: "Kaal Sarp Dosh Pooja",
      desc: "Perform remedies and rituals to reduce the effects of Kaal Sarp Dosh.",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Ujjain Sacred Services
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Ujjain, home to the holy Mahakaleshwar Jyotirlinga, is a powerful
          spiritual center for rituals and ceremonies. Explore seva and Pooja
          offerings performed in this ancient city of devotion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ujjainDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-amber-100 shadow p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-4">{item.desc}</p>

              <button className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ujjain;
