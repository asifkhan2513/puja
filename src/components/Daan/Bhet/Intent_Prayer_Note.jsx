import React from "react";

const Intent_Prayer_Note = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 text-center mb-10">
          Intent & Prayer Note
        </h2>

        <div className="bg-amber-50/40 border border-amber-100 rounded-2xl shadow p-8">
          <p className="text-gray-700 mb-6">
            Share your prayer intention, wish, or personal message. This note
            will be offered during your Pooja / daan ritual by our pandits.
          </p>

          <form className="space-y-5">
            <textarea
              rows="6"
              placeholder="Write your prayer note or intention..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-300 outline-none"
            ></textarea>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-300 outline-none"
            />

            <input
              type="text"
              placeholder="Gotra (optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-300 outline-none"
            />

            <button className="w-full bg-amber-600 text-white py-3 rounded-xl font-medium hover:bg-amber-700 transition">
              Save Prayer Note
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Intent_Prayer_Note;
