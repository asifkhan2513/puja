import React from "react";

const Marriage_Relationship_Daan = () => {
  const daanOptions = [
    {
      title: "Marriage Blessings Daan",
      desc: "Support rituals that help remove obstacles in marriage and bring harmony.",
      amount: "₹501",
    },
    {
      title: "Relationship Healing Daan",
      desc: "Contribute to pujas done for improving love, bonding & understanding.",
      amount: "₹351",
    },
    {
      title: "Manglik Dosh Relief Daan",
      desc: "Help in performing rituals for Manglik dosh neutralization.",
      amount: "₹701",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Marriage & Relationship Daan
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Support rituals and acts of daan that strengthen relationship bonds,
          remove hurdles in marriage, and bring harmony and peace within
          families.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {daanOptions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-amber-100 shadow p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-4">{item.desc}</p>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-amber-900">
                  {item.amount}
                </span>
                <button className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition">
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marriage_Relationship_Daan;
