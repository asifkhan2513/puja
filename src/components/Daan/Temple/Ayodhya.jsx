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
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#FFA500] text-center mb-6 font-serif drop-shadow-sm">
          Ayodhya Sacred Services
        </h2>
        <div className="w-24 h-1.5 bg-[#FFA500] rounded-full mx-auto mb-10"></div>

        <p className="text-center text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
          Ayodhya, the birthplace of Bhagwan Shri Ram, is one of the holiest
          cities in Sanatan Dharma. Explore seva, darshan, and spiritual
          offerings performed in the divine presence of Shri Ram Lalla.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ayodhyaDetails.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-orange-100 shadow-lg hover:shadow-2xl hover:shadow-orange-200/50 p-8 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-red-900 mb-4 font-serif group-hover:text-[#FFA500] transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed text-base">
                {item.desc}
              </p>

              <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl shadow-md hover:from-orange-600 hover:to-red-700 hover:shadow-lg transition-all duration-300 transform active:scale-95">
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
