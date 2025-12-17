import { useState, useEffect } from "react";
import { RiLiveLine } from "react-icons/ri";
import { Eye } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { liveDarshanServices } from "./liveDarshanServices";
import LazyImage from "../../LazyImage";
import Loader from "../../Loader";

const LiveDarshan = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="min-h-screen bg-orange-50/30 font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-600 via-amber-600 to-orange-500 py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
        {/* Decorative Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150"></div>
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-amber-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative max-w-5xl mx-auto text-center text-white z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 drop-shadow-lg text-white font-serif">
            Live Darshan
          </h1>

          {/* Beautiful subtitle with white text and styled background */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-2xl border-2 border-white/30 shadow-2xl">
              <h2 className="text-lg sm:text-xl md:text-3xl text-white font-semibold italic leading-relaxed">
                "Experience Divine Blessings From Anywhere, Anytime"
              </h2>
            </div>
          </div>

          <div className="w-20 md:w-24 h-1.5 bg-amber-300 mx-auto rounded-full my-6 md:my-8 shadow-lg"></div>

          <div className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-orange-50 leading-relaxed space-y-4 px-4">
            <p>
              Bhakti is our slow and peaceful anchor in a world where everything
              moves fast. We at Bhagwaan Pooja believe that devotions should
              never be limited by distance, time, or circumstance. This is why
              we created a heartfelt digital space where you can experience live
              darshan from some of India's most sacred temples.
            </p>
            <p>
              Whether you are at home, at work, travelling abroad, or living far
              away from your hometown - your connection to your Ishta Dev should
              stay unbroken. That connection becomes easier and more personal
              with our Temple Live Darshan Services.
            </p>
          </div>

          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <Link
              to="/contactus"
              className="w-full sm:w-auto px-8 py-4 bg-white text-orange-700 rounded-full font-bold shadow-xl hover:bg-black hover:text-white transition-all transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="bg-gradient-to-b from-white via-orange-50/30 to-white py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-10"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Beautiful Hindi Text */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-amber-200 to-orange-200 blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 px-6 sm:px-12 md:px-16 py-6 sm:py-8 md:py-10 rounded-3xl border-4 border-orange-300 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 font-serif leading-tight">
                  "मंदिर नहीं जा पा रहे?
                  <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                    {" "}
                    कोई बात नहीं…
                  </span>
                  <br className="hidden sm:block" />
                  भगवान पूजा पर दर्शन मिलते रहेंगे।"
                </h2>
                <div className="mt-4 flex justify-center gap-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></span>
                  <span className="w-3 h-3 bg-amber-500 rounded-full animate-pulse delay-75"></span>
                  <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse delay-150"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Why Section */}
          <div className="flex justify-center">
            <div className="max-w-4xl w-full relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-300 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-300 rounded-full blur-3xl opacity-20"></div>

              <div className="relative bg-gradient-to-br from-white via-orange-50/50 to-amber-50/50 p-8 sm:p-10 md:p-12 rounded-3xl border-4 border-orange-200 shadow-2xl hover:shadow-orange-200/50 transition-all duration-500 hover:-translate-y-2">
                {/* Icon with glow effect */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl transform hover:rotate-12 transition-transform duration-300">
                      <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Title with decorative line */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 mb-3 font-serif">
                    Why Bhagwaan Pooja Live Darshan?
                  </h3>
                  <div className="flex justify-center gap-2 mb-4">
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-[-2px]"></div>
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 text-center">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                    Our live darshan temples in different locations stream from
                    some of the country's holiest pilgrimage sites. We create
                    the best-quality feeds so that your spiritual experience
                    feels pure and interruption-free.
                  </p>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                    Be it someone seeking blessings for a new beginning, wishing
                    to watch a sacred aarti, or simply wanting to start their
                    morning with divine energy - our platform brings temples to
                    your screen with unmatched clarity and devotion.
                  </p>
                </div>

                {/* Decorative bottom element */}
                <div className="mt-8 flex justify-center gap-3">
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-orange-500 rounded-full mt-0"></div>
                  <div className="w-6 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Heading */}
      <div
        id="streams"
        className="pt-12 md:pt-20 pb-8 md:pb-10 px-4 sm:px-6 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 font-serif px-4">
          Major Live Darshan Streams Available
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
          You'll find live darshan from almost every major spiritual destination
          loved by devotees across India.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {liveDarshanServices.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/live-darshan/${item.id}`)}
              className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100 flex flex-col h-full ring-1 ring-black/5"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <LazyImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={item.id === "mahakal-ujjain"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Live Badge */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 md:px-3 text-xs font-bold tracking-wide uppercase rounded-full bg-red-600 text-white shadow-lg animate-pulse ring-2 ring-red-400/50">
                    <RiLiveLine className="text-sm" /> Live
                  </span>
                </div>

                {/* Title Overlay on Image */}
                <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 z-10">
                  <h3 className="text-white text-lg md:text-xl font-bold font-serif leading-tight drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 flex flex-col flex-grow bg-white relative">
                {/* Location Tag */}
                <div className="flex items-center gap-2 mb-3 md:mb-4 text-xs md:text-sm font-medium text-amber-600 bg-amber-50 w-fit px-2.5 md:px-3 py-1 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  {item.location}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 md:mb-6 line-clamp-3 group-hover:text-gray-900 transition-colors">
                  {item.description}
                </p>

                <div className="mt-auto pt-3 md:pt-4 border-t border-gray-100">
                  <button className="w-full py-2.5 md:py-3 rounded-xl bg-white text-orange-700 font-bold border-2 border-orange-100 hover:bg-black hover:text-white hover:border-black transition-all duration-300 text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-2 group/btn shadow-md">
                    View Darshan{" "}
                    <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-br from-orange-600 via-amber-600 to-orange-500 py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 font-serif px-4">
            A Modern Way to Stay Connected With Tradition
          </h2>
          <p className="text-base sm:text-lg text-orange-50 mb-4 leading-relaxed px-4">
            Do you have elderly parents who cannot travel anymore? Kids who want
            to learn about Indian temples? Are you living abroad and missing the
            warmth of Indian Spirituality? Bhagwaan Pooja's Indian Temple Live
            Darshan helps narrow that emotional gap.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-6 md:mt-8 italic px-4">
            आपके घर से ही दिव्य दर्शन का आनंद, सिर्फ़ एक क्लिक दूर।
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveDarshan;
