import React from "react";

const Career_Job_Pooja = () => {
  const Poojas = [
    {
      title: "Karya Siddhi Pooja",
      desc: "A powerful ritual for career success, completing pending tasks, and achieving goals.",
      amount: "₹1101",
    },
    {
      title: "Baglamukhi Pooja for Job",
      desc: "Performed to remove obstacles, competition, and negativity in career growth.",
      amount: "₹1501",
    },
    {
      title: "Shani Dosh Nivaran Pooja",
      desc: "A Pooja done to remove the negative effects of Shani for stability in career and job.",
      amount: "₹1301",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Career & Job Related Poojas
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          These Poojas are performed to remove job obstacles, attract better
          opportunities, gain promotions, and bring stability to professional
          life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Poojas.map((Pooja, index) => (
            <div
              key={index}
              className="bg-white border border-amber-100 rounded-2xl shadow p-6 hover:shadow-md transition"
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

export default Career_Job_Pooja;
