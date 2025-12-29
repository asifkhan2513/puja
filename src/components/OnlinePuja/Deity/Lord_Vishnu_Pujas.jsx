import React from "react";

const Lord_Vishnu_Poojas = () => {
  const Poojas = [
    {
      title: "Satyanarayan Pooja",
      desc: "A sacred Pooja performed for prosperity, happiness, and fulfilling wishes.",
      amount: "₹1001",
    },
    {
      title: "Vishnu Sahasranama Path",
      desc: "Chanting of 1000 divine names of Lord Vishnu for peace and spiritual upliftment.",
      amount: "₹1301",
    },
    {
      title: "Lakshmi Narayan Pooja",
      desc: "A powerful ritual for wealth, harmony, and overall well-being.",
      amount: "₹1501",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Lord Vishnu Poojas
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Perform sacred Poojas dedicated to Lord Vishnu to bring peace,
          prosperity, protection, and divine blessings into your life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Poojas.map((Pooja, index) => (
            <div
              key={index}
              className="bg-white border border-amber-100 shadow rounded-2xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                {Pooja.title}
              </h3>

              <p className="text-gray-600 mb-4">{Pooja.desc}</p>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-amber-900">
                  {Pooja.amount}
                </span>

                <button className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition">
                  Book Pooja
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lord_Vishnu_Poojas;
