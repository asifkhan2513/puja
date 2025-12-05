import React from "react";

const Legal = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Legal & Policies
        </h2>

        <div className="space-y-8">
          <div className="bg-amber-50/40 border border-amber-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              Terms & Conditions
            </h3>
            <p className="text-gray-700">
              All puja, seva, and daan services are performed by verified
              pandits and temples. By using our platform, you agree to follow
              our service guidelines, booking policies, and payment terms.
            </p>
          </div>

          <div className="bg-amber-50/40 border border-amber-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              Privacy Policy
            </h3>
            <p className="text-gray-700">
              Your personal information is securely stored and never shared
              without consent. We follow strict privacy standards to ensure
              complete data protection.
            </p>
          </div>

          <div className="bg-amber-50/40 border border-amber-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              Refund Policy
            </h3>
            <p className="text-gray-700">
              Refunds are applicable only in cases where services cannot be
              fulfilled due to unforeseen circumstances. Completed rituals,
              pujas, and sevas are non-refundable.
            </p>
          </div>

          <div className="bg-amber-50/40 border border-amber-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              Disclaimer
            </h3>
            <p className="text-gray-700">
              Ritual results vary based on individual belief and devotion. Our
              platform facilitates puja and seva arrangements through authorized
              personnel and temples, but does not guarantee specific outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
