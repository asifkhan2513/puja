import React from "react";

const Checkout = () => {
  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Daan Checkout
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow border border-amber-100">
            <h3 className="text-xl font-semibold text-amber-800 mb-6">
              Donor Information
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full py-3 px-4 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-3 px-4 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full py-3 px-4 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none"
              />

              <textarea
                rows="4"
                placeholder="Message or Intention for Daan (optional)"
                className="w-full py-3 px-4 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none"
              ></textarea>
            </form>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow border border-amber-100 h-fit">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">
              Your Daan Summary
            </h3>

            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between">
                <span>Daan Type:</span>
                <strong>Temple Donation</strong>
              </div>

              <div className="flex justify-between">
                <span>Amount:</span>
                <strong>₹1,001</strong>
              </div>

              <div className="flex justify-between">
                <span>Seva Charges:</span>
                <strong>₹99</strong>
              </div>

              <div className="border-t pt-3 flex justify-between text-lg font-semibold text-amber-900">
                <span>Total</span>
                <span>₹1,100</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition font-medium">
              Proceed to Pay
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Checkout;
