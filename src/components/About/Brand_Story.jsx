import React from "react";

const Brand_Story = () => {
  return (
    <section className="relative py-16 bg-linear-to-br from-amber-50 via-white to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 dark:text-amber-100 leading-tight">
              Our Brand Story
            </h2>

            <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
              We started with a simple belief — to create something meaningful,
              impactful, and rooted in trust. What began as a small vision soon
              turned into a mission to inspire, guide, and support people across
              the world.
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed font-bold">
              Every step of our journey is driven by purpose and passion.
              Through innovation, dedication, and a deep understanding of our
              community, we continue to grow while staying true to our values.
            </p>

            <button className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-full font-medium shadow hover:bg-amber-700 transition dark:bg-amber-500 dark:hover:bg-amber-600">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-amber-300/20 blur-xl group-hover:blur-2xl transition dark:bg-amber-500/20"></div>
            <img
              src="/src/assets/temple.jpg"
              alt="Brand Story"
              loading="lazy"
              className="relative rounded-3xl shadow-xl w-full object-cover h-80 md:h-[420px] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand_Story;
