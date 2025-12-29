import React from "react";
import { Calendar, Video, BookOpen, Heart } from "lucide-react";

const App_Features = () => {
  const features = [
    {
      title: "Easy Pooja Booking",
      desc: "Book any Pooja or seva instantly with a seamless and simple process.",
      icon: Heart,
    },
    {
      title: "Daily Panchang",
      desc: "Check tithi, nakshatra, rashi & muhurat details updated every day.",
      icon: Calendar,
    },
    {
      title: "Live Aarti & Darshan",
      desc: "Watch live aarti streams from sacred temples across Bharat.",
      icon: Video,
    },
    {
      title: "Mantras & Stotra",
      desc: "Read or listen to powerful mantras and devotional hymns.",
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-16 bg-amber-50/40 dark:bg-gray-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 dark:text-amber-100 text-center mb-10 italic">
          App Features
        </h2>

        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12 font-bold">
          Our app brings devotion, convenience, and spiritual services together
          in one place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-amber-100 dark:border-gray-700 shadow p-6 hover:shadow-md transition text-center"
            >
              <div className="text-4xl mb-4 text-amber-600 dark:text-amber-400">
                <feature.icon size={48} />
              </div>

              <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App_Features;
