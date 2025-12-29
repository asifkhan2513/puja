import React from "react";

const Peace__Protection_Daan = () => {
  const daanItems = [
    {
      title: "Shanti Daan",
      desc: "Support rituals that bring peace, calmness, and mental stability.",
      amount: "₹401",
    },
    {
      title: "Protection Ritual Daan",
      desc: "Contribute to Poojas performed for protection from negativity & obstacles.",
      amount: "₹551",
    },
    {
      title: "Navgrah Shanti Daan",
      desc: "Help in rituals that balance planetary energies for protection.",
      amount: "₹701",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Peace & Protection Daan
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Donate towards rituals focused on inner peace, protection from
          negative forces, and overall spiritual wellbeing. Your daan helps
          maintain positive energies around individuals and families.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {daanItems.map((item, index) => (
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

export default Peace__Protection_Daan;
