import React from "react";

const Payment_Confirmation_Page = () => {
  return (
    <section className="py-20 bg-amber-50/40">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border border-amber-100 shadow-lg rounded-2xl p-10">
          <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 mb-4">
            Payment Confirmed
          </h2>

          <p className="text-gray-700 mb-6">
            Thank you for your contribution. Your puja / seva / daan booking has
            been successfully completed. A confirmation message has been sent to
            your email.
          </p>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 text-left mb-6">
            <p className="text-gray-700">
              <span className="font-semibold text-amber-900">
                Transaction ID:
              </span>{" "}
              TXN987654321
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold text-amber-900">Amount Paid:</span>{" "}
              ₹1,501
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold text-amber-900">
                Service Type:
              </span>{" "}
              Rudrabhishek Puja
            </p>
          </div>

          <a
            href="/"
            className="inline-block mt-4 px-6 py-3 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition font-medium"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default Payment_Confirmation_Page;
