import React from "react";

const Marriage_Relationship_Puja = () => {
  const pujas = [
    {
      title: "Gauri Shankar Puja",
      desc: "Performed for marital harmony, strong bonding, and peaceful relationships.",
      amount: "₹1001",
    },
    {
      title: "Rati Kamdev Puja",
      desc: "A ritual dedicated to enhancing love, attraction, and understanding between partners.",
      amount: "₹1501",
    },
    {
      title: "Mangal Dosh Nivaran Puja",
      desc: "Helps reduce the negative effects of Mangal dosh that impact marriage and relationships.",
      amount: "₹1801",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Marriage & Relationship Pujas
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          These sacred rituals help strengthen relationships, remove obstacles
          in marriage, and promote harmony, trust, and understanding between
          partners.
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

export default Marriage_Relationship_Puja;
