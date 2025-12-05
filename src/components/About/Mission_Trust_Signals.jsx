import { Shield, Award, Users, Heart } from "lucide-react";

const Mission_Trust_Signals = () => {
  const missions = [
    {
      icon: Shield,
      title: "Our Mission",
      description:
        "To bridge the gap between devotees and divine blessings by providing authentic, accessible, and convenient puja services from sacred temples across India.",
    },
    {
      icon: Award,
      title: "Our Vision",
      description:
        "To become the most trusted platform for spiritual services, preserving ancient traditions while embracing modern technology for the benefit of devotees worldwide.",
    },
  ];

  const trustSignals = [
    {
      icon: Users,
      number: "50,000+",
      label: "Happy Devotees",
    },
    {
      icon: Heart,
      number: "100+",
      label: "Expert Pandits",
    },
    {
      icon: Shield,
      number: "25+",
      label: "Sacred Temples",
    },
    {
      icon: Award,
      number: "10,000+",
      label: "Pujas Performed",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-amber-50 dark:from-dark dark:to-dark-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="w-full max-w-screen-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-black mb-6 pt-serif-bold">
            Our Mission &{" "}
            <span className="text-amber-600 dark:text-amber-400 pt-serif-bold-italic">
              Vision
            </span>
          </h1>
          <p className="text-xl text-center text-gray-900 font-semibold mb-16 max-w-3xl mx-auto">
            Connecting devotees with divine blessings through authentic
            spiritual services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {missions.map((mission, index) => {
              const Icon = mission.icon;
              return (
                <div
                  key={index}
                  className="card p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 mb-6">
                    <Icon className="w-12 h-12 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black mb-4 pt-serif-bold">
                    {mission.title}
                  </h2>
                  <p className="text-lg text-gray-900 font-semibold leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 px-4 bg-white dark:bg-dark-50">
        <div className="w-full max-w-screen-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16 pt-serif-bold">
            Trusted by Thousands
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 card hover:shadow-2xl transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-black mb-2 pt-serif-bold">
                    {signal.number}
                  </div>
                  <div className="text-gray-900 font-semibold font-semibold">
                    {signal.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="w-full max-w-screen-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16 pt-serif-bold">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-black mb-4 pt-serif-bold">
                Authenticity
              </h3>
              <p className="text-gray-900 font-semibold">
                We ensure all pujas are performed according to traditional Vedic
                rituals by certified pandits.
              </p>
            </div>

            <div className="card p-8 text-center hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-black mb-4 pt-serif-bold">
                Transparency
              </h3>
              <p className="text-gray-900 font-semibold">
                Complete visibility into the puja process with live streaming
                and detailed documentation.
              </p>
            </div>

            <div className="card p-8 text-center hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-black mb-4 pt-serif-bold">
                Devotion
              </h3>
              <p className="text-gray-900 font-semibold">
                Every puja is performed with utmost devotion and respect for
                ancient traditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission_Trust_Signals;
