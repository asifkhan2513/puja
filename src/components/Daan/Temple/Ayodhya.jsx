import React from "react";

const Ayodhya = () => {
  const ayodhyaDetails = [
    {
      title: "Shri Ram Janmabhoomi Darshan",
      desc: "Experience the divine presence of Bhagwan Shri Ram at the sacred Janmabhoomi.",
    },
    {
      title: "Ayodhya Temple Seva",
      desc: "Contribute to daily seva, rituals, and temple maintenance offerings.",
    },
    {
      title: "Ram Charit Manas Path",
      desc: "Participate in sacred chanting of Ramayana for peace and blessings.",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Ayodhya Sacred Services
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Ayodhya, the birthplace of Bhagwan Shri Ram, is one of the holiest
          cities in Sanatan Dharma. Explore seva, darshan, and spiritual
          offerings performed in the divine presence of Shri Ram Lalla.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ayodhyaDetails.map((item, index) => (
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

export default Ayodhya;
