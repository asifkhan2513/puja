import React from "react";

const Kashi_Vishwanath_Poojas = () => {
  const Poojas = [
    {
      title: "Kashi Vishwanath Rudrabhishek",
      desc: "A powerful abhishek offered to Lord Shiva for peace, prosperity & removal of doshas.",
      amount: "₹1501",
    },
    {
      title: "Maha Mrityunjaya Jaap",
      desc: "Performed for healing, protection from negativity, and long life blessings.",
      amount: "₹1801",
    },
    {
      title: "Ganga Aarti Seva",
      desc: "Sponsor the divine Ganga Aarti performed every evening at Kashi ghats.",
      amount: "₹1101",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Kashi Vishwanath Poojas
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Perform sacred Poojas in the holy city of Kashi. Seek Mahadev’s divine
          blessings, purification, spiritual upliftment, and protection from
          negative influences.
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

export default Kashi_Vishwanath_Poojas;
