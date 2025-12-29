import { Shield, Award, Users, Heart } from "lucide-react";

const Mission_Trust_Signals = () => {
  const missions = [
    {
      icon: Shield,
      title: "Our Mission",
      description:
        "At Bhagwan Pooja, our mission is to make sacred Hindu rituals accessible to every devotee by offering authentic online Pooja services performed by experienced pandits with complete devotion and Vedic purity.",
      gradient: "from-orange-500 via-amber-500 to-yellow-400",
    },
    {
      icon: Award,
      title: "Our Vision",
      description:
        "To become the most trusted spiritual platform by preserving ancient Hindu traditions while embracing modern technology to serve devotees across the world.",
      gradient: "from-red-500 via-orange-500 to-amber-500",
    },
  ];

  const trustSignals = [
    {
      icon: Users,
      number: "50,000+",
      label: "Happy Devotees",
      gradient: "from-emerald-500 via-green-500 to-lime-400",
    },
    {
      icon: Heart,
      number: "100+",
      label: "Expert Pandits",
      gradient: "from-pink-500 via-rose-500 to-red-400",
    },
    {
      icon: Shield,
      number: "25+",
      label: "Sacred Temples",
      gradient: "from-blue-500 via-sky-500 to-cyan-400",
    },
    {
      icon: Award,
      number: "10,000+",
      label: "Poojas Performed",
      gradient: "from-orange-500 via-amber-500 to-yellow-400",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-amber-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="w-full max-w-screen-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 pt-serif-bold">
            Our Mission &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 pt-serif-bold-italic">
              Vision
            </span>
          </h1>
          <p className="text-xl text-gray-800 font-semibold mb-16 max-w-3xl mx-auto">
            Connecting devotees with divine blessings through authentic and
            trusted online Pooja services
          </p>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {missions.map((mission, index) => {
              const Icon = mission.icon;
              return (
                <div
                  key={index}
                  className="
                    group p-10 rounded-3xl
                    bg-white/90 backdrop-blur-md
                    border border-amber-200
                    shadow-lg hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all duration-500
                  "
                >
                  <div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-br ${mission.gradient}
                    shadow-lg group-hover:scale-110 group-hover:rotate-6
                    transition-all duration-500 mb-6`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <h2 className="text-3xl font-bold text-black mb-4 pt-serif-bold">
                    {mission.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="w-full max-w-screen-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16 pt-serif-bold">
            Trusted by Thousands of Devotees
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <div
                  key={index}
                  className="
                    group text-center p-8 rounded-3xl
                    bg-white/90 backdrop-blur-md
                    border border-amber-200
                    shadow-md hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all duration-500
                  "
                >
                  <div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-br ${signal.gradient}
                    shadow-lg group-hover:scale-110 transition-all duration-500 mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-4xl font-bold text-black mb-2 pt-serif-bold">
                    {signal.number}
                  </div>
                  <div className="text-gray-700 font-semibold">
                    {signal.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="w-full max-w-screen-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16 pt-serif-bold">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                desc: "All Poojas are performed according to traditional Vedic rituals by experienced and verified pandits.",
              },
              {
                title: "Transparency",
                desc: "Complete visibility with live Pooja streaming, clear processes, and trusted communication.",
              },
              {
                title: "Devotion",
                desc: "Every ritual is performed with sincere devotion, purity, and respect for Hindu traditions.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="
                  p-8 text-center rounded-3xl
                  bg-white/90 backdrop-blur-md
                  border border-amber-200
                  shadow-md hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all duration-500
                "
              >
                <h3 className="text-2xl font-bold text-black mb-4 pt-serif-bold">
                  {value.title}
                </h3>
                <p className="text-gray-700 font-semibold">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission_Trust_Signals;
