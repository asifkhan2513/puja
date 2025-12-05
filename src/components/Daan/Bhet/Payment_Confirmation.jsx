import React from "react";

const Payment_Confirmation = () => {
  return (
    <section className="py-20 bg-amber-50/40">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="bg-white shadow-lg rounded-2xl border border-amber-100 p-10">

          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-3xl font-extrabold text-amber-900 mb-3">
            Payment Successful
          </h2>

          <p className="text-gray-700 mb-6">
            Your daan payment has been successfully processed.  
            A confirmation receipt and details have been sent to your email.
          </p>

          <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-6 mb-6 text-left">
            <p className="text-gray-700">
              <span className="font-semibold text-amber-900">Daan Type:</span> Temple Donation
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold text-amber-900">Amount Paid:</span> ₹1,100
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold text-amber-900">Transaction ID:</span> TXN123456789
            </p>
          </div>

          <a
            href="/"
            className="inline-block mt-4 px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition font-medium"
          >
            Go to Home
          </a>

        </div>

      </div>
    </section>
  );
};

export default Payment_Confirmation;
