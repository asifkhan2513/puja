import React from "react";
import { RiLiveLine } from "react-icons/ri";
import { Play, Eye } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { liveDarshanServices } from "./liveDarshanServices";
import LazyImage from "../../LazyImage";

const LiveDarshan = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-orange-50/30 font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-600 via-amber-600 to-orange-500 py-24 px-6 overflow-hidden">
        {/* Decorative Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative max-w-5xl mx-auto text-center text-white z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-amber-50 text-sm font-semibold tracking-wider mb-6 border border-white/10 uppercase">
            Sacred Digital Pilgrimage
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg font-serif">
            Live Darshan
          </h1>
          <h2 className="text-xl md:text-3xl max-w-3xl mx-auto font-light text-orange-100 italic leading-relaxed">
            "Experience Divine Blessings From Anywhere, Anytime"
          </h2>

          <div className="w-24 h-1.5 bg-amber-300 mx-auto rounded-full my-8 shadow-lg"></div>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-orange-50 leading-relaxed font-medium">
            Bhakti is our anchor in a fast-paced world. At Bhagwaan Pooja, we
            ensure distance and time never limit your devotion. Step into a
            heartfelt digital space where you can witness live aartis and
            darshan from India's most sacred temples.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() =>
                document
                  .getElementById("streams")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-white text-orange-700 rounded-full font-bold shadow-xl hover:bg-orange-50 hover:scale-105 transition-all"
            >
              View Live Darshan
            </button>
            <Link
              to="/contactus"
              className="px-8 py-4 bg-white text-orange-700 rounded-full font-bold shadow-xl hover:bg-orange-50 hover:scale-105 transition-all"
            >
              Get In touch
            </Link>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="bg-white py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
              “मंदिर नहीं जा पा रहे? <br className="hidden md:block" />
              <span className="text-orange-600">कोई बात नहीं…</span> भगवान पूजा
              पर दर्शन मिलते रहेंगे।”
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-orange-50 p-10 rounded-3xl border border-orange-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                <Eye className="w-8 h-8 text-current" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Why Bhagwaan Pooja Live Darshan?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our live streams come directly from the holy sanctums. We ensure
                high-definition quality so your spiritual connection feels pure,
                immediate, and interruption-free.
              </p>
            </div>

            <div className="bg-amber-50 p-10 rounded-3xl border border-amber-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                <RiLiveLine className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Experience True Divinity
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether it's the morning Bhasma Aarti or the evening Ganga
                Aarti, witness every ritual as if you were there. Start your day
                with divine energy and peace.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Heading */}
      <div id="streams" className="pt-20 pb-10 px-6 text-center">
        <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2 block">
          Available Streams
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
          Major Live Darshan Streams Available
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          You'll find live darshan from almost every major spiritual destination
          loved by devotees across India.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {liveDarshanServices.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/live-darshan/${item.id}`)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100 flex flex-col h-full ring-1 ring-black/5"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <LazyImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={item.id === "mahakal-ujjain"} // Prioritize first image if needed
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Live Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wide uppercase rounded-full bg-red-600 text-white shadow-lg animate-pulse ring-2 ring-red-400/50">
                    <RiLiveLine className="text-sm" /> Live
                  </span>
                </div>

                {/* Title Overlay on Image for style */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-white text-xl font-bold font-serif leading-tight drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow bg-white relative">
                {/* Location Tag */}
                <div className="flex items-center gap-2 mb-4 text-sm font-medium text-amber-600 bg-amber-50 w-fit px-3 py-1 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  {item.location}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-900 transition-colors">
                  {item.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <button className="w-full py-3 rounded-xl bg-orange-50 text-orange-700 font-bold hover:bg-orange-600 hover:text-white transition-all duration-300 text-sm uppercase tracking-wider flex items-center justify-center gap-2 group/btn">
                    View Darshan{" "}
                    <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveDarshan;
