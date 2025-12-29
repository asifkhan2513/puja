import React from "react";

const Checkout_Cart_Summary = () => {
  const items = [
    {
      title: "Rudrabhishek Pooja",
      price: 1201,
    },
    {
      title: "Temple Donation (Daan)",
      price: 501,
    },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="py-12 bg-amber-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-amber-900 text-center mb-8">
          Checkout Cart Summary
        </h2>

        <div className="bg-white rounded-2xl shadow border border-amber-100 p-8">
          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-200 pb-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-amber-800">
                    {item.title}
                  </h3>
                </div>

                <span className="text-lg font-bold text-amber-900">
                  ₹{item.price}
                </span>
              </div>
            ))}

            <div className="flex justify-between items-center pt-4 text-xl font-semibold text-amber-900">
              <span>Total Amount</span>
              <span>₹{total}</span>
            </div>

            <button className="w-full mt-6 bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition font-medium">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout_Cart_Summary;
