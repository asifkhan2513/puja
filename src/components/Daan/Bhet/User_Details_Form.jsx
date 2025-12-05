import React from "react";

const User_Details_Form = () => {
  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          User Details Form
        </h2>

        <div className="bg-white rounded-2xl shadow border border-amber-100 p-8">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-amber-900 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-amber-900 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-amber-900 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone"
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-amber-900 mb-1">
                Gotra (optional)
              </label>
              <input
                type="text"
                placeholder="Enter your gotra"
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none"
              />
            </div>

            <div className="col-span-1 sm:col-span-2">
              <label className="block text-sm font-medium text-amber-900 mb-1">
                Address
              </label>
              <textarea
                rows="3"
                placeholder="Enter your complete address"
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none"
              ></textarea>
            </div>

            <div className="col-span-1 sm:col-span-2">
              <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition font-medium">
                Save Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default User_Details_Form;
