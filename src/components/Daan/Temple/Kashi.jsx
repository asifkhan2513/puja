import React from "react";

const Kashi = () => {
  const kashiDetails = [
    {
      title: "Kashi Vishwanath Darshan",
      desc: "Seek blessings of Bhagwan Shiva at the sacred Kashi Vishwanath Temple.",
    },
    {
      title: "Ganga Aarti Seva",
      desc: "Participate in or sponsor the divine Ganga Aarti performed every evening.",
    },
    {
      title: "Pitru Tarpan Rituals",
      desc: "Perform sacred tarpan rituals for ancestors at the holy Ganga ghat.",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Kashi Sacred Services
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Kashi (Varanasi), the city of Shiv ji, is a divine spiritual
          destination. Explore seva services, rituals, and sacred offerings
          performed along the holy Ganga and inside the ancient temples of
          Kashi.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {kashiDetails.map((item, index) => (
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

export default Kashi;
