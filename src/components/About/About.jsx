import React from "react";
import { Sparkles, Flame, Globe, Flower } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Flame,
      title: "Authentic Rituals",
      desc: "All Poojas are performed by experienced and verified pandits following proper Vedic traditions.",
      gradient: "from-orange-500 via-amber-500 to-yellow-400",
    },
    {
      icon: Flower,
      title: "Sacred & Pure",
      desc: "We ensure purity, devotion, and spiritual discipline in every ritual performed for you.",
      gradient: "from-pink-500 via-rose-500 to-red-400",
    },
    {
      icon: Globe,
      title: "Online Convenience",
      desc: "Participate in Poojas from anywhere in the world through live online arrangements.",
      gradient: "from-blue-500 via-sky-500 to-cyan-400",
    },
    {
      icon: Sparkles,
      title: "Divine Blessings",
      desc: "Receive blessings, prasad, and positive energy delivered directly to your home.",
      gradient: "from-emerald-500 via-green-500 to-lime-400",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-amber-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 pt-serif-bold">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              Bhagwan Pooja
            </span>
          </h1>

          <p className="text-xl text-gray-800 max-w-3xl mx-auto font-semibold leading-relaxed">
            Bhagwan Pooja is a divine online platform dedicated to connecting
            devotees with sacred Hindu rituals. We bring traditional Pooja
            services to your home with devotion, authenticity, and spiritual
            purity.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-black pt-serif-bold">
              Our Sacred Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to make Hindu rituals accessible to everyone,
              regardless of location. Through Bhagwan Pooja, devotees can
              participate in online Poojas, havans, and special ceremonies
              conducted by learned pandits from sacred temples across India.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              We uphold the values of dharma, bhakti, and shraddha, ensuring
              each ritual is performed with utmost care and spiritual
              discipline.
            </p>
          </div>

          {/* Image / Illustration */}
          <div className="flex justify-center animate-fadeInUp">
            <div className="relative w-full max-w-md p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-amber-200 shadow-xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-200/30 to-amber-200/30 blur-xl"></div>
              <div className="relative text-center">
                <Flower className="w-24 h-24 mx-auto text-pink-500 drop-shadow-lg mb-4" />
                <h3 className="text-2xl font-bold text-black mb-2">
                  ॐ नमः शिवाय
                </h3>
                <p className="text-gray-700 font-medium">
                  Connecting devotees with divine energy through sacred rituals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-16 pt-serif-bold">
            Why Choose <span className="text-amber-600">Bhagwan Pooja</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="
                    group p-8 rounded-3xl text-center
                    bg-white/90 backdrop-blur-md
                    border border-amber-200
                    shadow-md hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all duration-500
                  "
                >
                  <div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-br ${item.gradient}
                    shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-black mt-6 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-white/90 backdrop-blur-xl p-12 rounded-3xl border border-amber-200 shadow-xl animate-fadeInUp">
          <h2 className="text-3xl font-bold text-black mb-4 pt-serif-bold">
            Experience Divine Connection
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            With Bhagwan Pooja, devotion meets technology. Join thousands of
            devotees who trust us to perform their sacred rituals with faith,
            purity, and devotion.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
