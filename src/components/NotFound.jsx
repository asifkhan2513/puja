import React from "react";

const NotFound = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-amber-50">
      <div className="bg-white shadow-lg border border-amber-200 rounded-2xl p-10 text-center">
        
        <h1 className="text-6xl font-extrabold text-amber-700 mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-amber-900 mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-700 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <a
          href="/"
          className="px-6 py-3 bg-amber-600 text-white rounded-full shadow hover:bg-amber-700 transition"
        >
          Back to Home
        </a>

      </div>
    </section>
  );
};

export default NotFound;
