import React from "react";

const Mantra_Stotra = () => {
  const mantraList = [
    {
      title: "Gayatri Mantra",
      desc: "A universal prayer that invokes divine wisdom and spiritual awakening.",
    },
    {
      title: "Maha Mrityunjaya Mantra",
      desc: "A powerful mantra dedicated to Lord Shiva for healing and protection.",
    },
    {
      title: "Hanuman Chalisa",
      desc: "A devotional hymn praising Lord Hanuman for strength and courage.",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Mantra & Stotra Collection
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Recite or read sacred mantras and stotras to attain peace, protection,
          strength, and divine blessings in life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mantraList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-amber-100 shadow p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-4">{item.desc}</p>

              <button className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition">
                Read Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mantra_Stotra;
