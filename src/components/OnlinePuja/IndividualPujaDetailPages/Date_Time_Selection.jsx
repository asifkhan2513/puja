import React from "react";

const Date_Time_Selection = () => {
  const dates = [
    "12 March 2025",
    "14 March 2025",
    "16 March 2025",
    "18 March 2025",
  ];

  const times = ["6:00 AM", "9:00 AM", "12:00 PM", "4:00 PM", "7:00 PM"];

  return (
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-extrabold text-amber-900 text-center mb-8">
          Select Date & Time
        </h2>

        <div className="bg-white border border-amber-100 rounded-2xl shadow p-8">

          <h3 className="text-xl font-semibold text-amber-800 mb-4">
            Choose a Suitable Date
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {dates.map((date, index) => (
              <button
                key={index}
                className="py-3 px-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 font-medium hover:bg-amber-100 transition"
              >
                {date}
              </button>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-amber-800 mb-4">
            Choose a Time Slot
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {times.map((time, index) => (
              <button
                key={index}
                className="py-3 px-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 font-medium hover:bg-amber-100 transition"
              >
                {time}
              </button>
            ))}
          </div>

          <button className="w-full mt-8 bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition font-medium">
            Confirm Selection
          </button>

        </div>

      </div>
    </section>
  );
};

export default Date_Time_Selection;
