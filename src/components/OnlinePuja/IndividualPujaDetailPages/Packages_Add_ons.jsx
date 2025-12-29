import React from "react";

const Packages_Add_ons = () => {
  const packages = [
    {
      title: "Basic Pooja Package",
      desc: "Includes essential Pooja samagri and pandit mantra recitation.",
      price: "₹701",
    },
    {
      title: "Standard Pooja Package",
      desc: "Includes full Pooja samagri, flowers, prasad & pandit chanting.",
      price: "₹1101",
    },
    {
      title: "Premium Pooja Package",
      desc: "Includes samagri, flowers, prasad, havan & personalized rituals.",
      price: "₹1501",
    },
  ];

  const addons = [
    {
      name: "Extra Flowers",
      price: "₹151",
    },
    {
      name: "Additional Prasad Pack",
      price: "₹201",
    },
    {
      name: "Video Recording of Pooja",
      price: "₹351",
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-amber-900 text-center mb-10">
          Packages & Add-ons
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Packages */}
          <div className="bg-white border border-amber-100 rounded-2xl shadow p-8">
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">
              Pooja Packages
            </h3>

            <div className="space-y-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="border border-amber-100 rounded-xl p-6 hover:shadow-md transition bg-amber-50/30"
                >
                  <h4 className="text-xl font-bold text-amber-900 mb-1">
                    {pkg.title}
                  </h4>
                  <p className="text-gray-600 mb-3">{pkg.desc}</p>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg text-amber-900">
                      {pkg.price}
                    </span>
                    <button className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition">
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div className="bg-white border border-amber-100 rounded-2xl shadow p-8">
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">
              Additional Add-ons
            </h3>

            <div className="space-y-6">
              {addons.map((addon, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border border-amber-100 rounded-xl p-4 bg-amber-50/30 hover:shadow-md transition"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-amber-900">
                      {addon.name}
                    </h4>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-amber-900">
                      {addon.price}
                    </span>
                    <button className="px-3 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition text-sm">
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages_Add_ons;
