import React from "react";

const Wealth_Business_Puja = () => {
  const pujas = [
    {
      title: "Lakshmi Kubera Puja",
      desc: "A powerful ritual for wealth, abundance, financial stability, and prosperity.",
      amount: "₹1501",
    },
    {
      title: "Lakshmi Puja",
      desc: "Bring divine blessings of Maa Lakshmi for financial growth and good fortune.",
      amount: "₹1101",
    },
    {
      title: "Business Success Puja",
      desc: "Performed for removing hurdles in business, attracting clients, and boosting growth.",
      amount: "₹1801",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Wealth & Business Related Pujas
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Perform these sacred rituals to remove financial obstacles, improve
          business success, attract abundance, and ensure prosperity in personal
          or professional life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pujas.map((puja, index) => (
            <div
              key={index}
              className="bg-white border border-amber-100 shadow rounded-2xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                {puja.title}
              </h3>

              <p className="text-gray-600 mb-4">{puja.desc}</p>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-amber-900">
                  {puja.amount}
                </span>

                <button className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition">
                  Book Puja
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wealth_Business_Puja;
