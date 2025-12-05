import React from "react";

const Health_related_Daan = () => {
  const healthDaanList = [
    {
      title: "Medical Help Daan",
      desc: "Support someone’s treatment or medical needs through kind donations.",
      amount: "₹501",
    },
    {
      title: "Food Donation for Patients",
      desc: "Provide healthy meals to patients & their families in hospitals.",
      amount: "₹301",
    },
    {
      title: "Medicine Support Daan",
      desc: "Help people by contributing essential medicines.",
      amount: "₹251",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Health Related Daan
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Contribute to health-focused daan and support those in need of treatment, 
          nourishment, and care. Your daan helps save lives and brings hope.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthDaanList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-amber-100 shadow p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>

              <div className="flex justify-between items-center mt-4">
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

export default Health_related_Daan;
