import React from "react";

const Seva_Daan_Details = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Seva & Daan Details
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-amber-50/40 border border-amber-100 rounded-2xl shadow p-8">
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">
              About the Seva / Daan
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Seva and Daan are sacred acts of giving that support temple
              rituals, spiritual upliftment, and community welfare. Your
              contribution helps maintain temple traditions and ensures rituals
              are performed with devotion and authenticity.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Supports temple maintenance & daily Poojas</li>
              <li>Helps provide prasad & offerings</li>
              <li>Assists in community welfare programs</li>
              <li>Ensures rituals are performed on your behalf</li>
            </ul>

            <div className="mt-8 bg-white border border-amber-100 p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold text-amber-800 mb-3">
                What You Receive
              </h4>
              <p className="text-gray-700">
                A detailed Pooja report, prasad dispatch (if applicable), and
                confirmation from our pandits once the ritual is completed.
              </p>
            </div>
          </div>

          <div className="bg-white border border-amber-100 rounded-2xl shadow p-8 h-fit">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">
              Contribution Summary
            </h3>

            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between">
                <span>Daan Type:</span>
                <strong>Temple Seva</strong>
              </div>

              <div className="flex justify-between">
                <span>Recommended Daan:</span>
                <strong>₹501</strong>
              </div>

              <div className="flex justify-between">
                <span>Service Charges:</span>
                <strong>₹49</strong>
              </div>

              <div className="border-t pt-3 flex justify-between text-lg font-semibold text-amber-900">
                <span>Total</span>
                <span>₹550</span>
              </div>
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

export default Seva_Daan_Details;
