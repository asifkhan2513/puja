import { Award, BookOpen, Heart } from "lucide-react";
import LazyImage from "../LazyImage";
import dummy13 from "../../assets/dummy13.jpg";
import dummy14 from "../../assets/dummy14.jpg";
import dummy15 from "../../assets/dummy15.jpg";
import dummy16 from "../../assets/dummy16.jpg";

const Team_Pandits = () => {
  const pandits = [
    {
      name: "Pandit Rajesh Sharma",
      title: "Senior Vedic Scholar",
      experience: "25+ Years",
      specialization: "Vedic Rituals & Yajnas",
      image: dummy13,
    },
    {
      name: "Pandit Anil Kumar",
      title: "Temple Priest",
      experience: "20+ Years",
      specialization: "Deity Worship & Poojas",
      image: dummy14,
    },
    {
      name: "Pandit Suresh Mishra",
      title: "Astrology Expert",
      experience: "18+ Years",
      specialization: "Astrological Remedies",
      image: dummy15,
    },
    {
      name: "Pandit Vijay Tiwari",
      title: "Sanskrit Scholar",
      experience: "22+ Years",
      specialization: "Mantra Chanting",
      image: dummy16,
    },
  ];

  const qualifications = [
    {
      icon: Award,
      title: "Certified Experts",
      description:
        "All our pandits are certified by renowned Vedic institutions",
      gradient: "from-orange-500 via-amber-500 to-yellow-400",
    },
    {
      icon: BookOpen,
      title: "Deep Scriptural Knowledge",
      description:
        "Profound understanding of Vedas, Puranas, and sacred traditions",
      gradient: "from-blue-500 via-sky-500 to-cyan-400",
    },
    {
      icon: Heart,
      title: "Devoted Service",
      description:
        "Serving devotees with devotion, discipline, and spiritual integrity",
      gradient: "from-pink-500 via-rose-500 to-red-400",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-amber-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="w-full max-w-screen-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 pt-serif-bold">
            Our Expert{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 pt-serif-bold-italic">
              Pandits
            </span>
          </h1>
          <p className="text-xl text-gray-800 font-semibold mb-16 max-w-3xl mx-auto">
            Meet our team of experienced and certified Vedic scholars dedicated
            to performing authentic Hindu rituals with devotion
          </p>

          {/* Qualifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {qualifications.map((qual, index) => {
              const Icon = qual.icon;
              return (
                <div
                  key={index}
                  className="
                    group p-8 text-center rounded-3xl
                    bg-white/90 backdrop-blur-md
                    border border-amber-200
                    shadow-md hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all duration-500
                  "
                >
                  <div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-br ${qual.gradient}
                    shadow-lg group-hover:scale-110 group-hover:rotate-6
                    transition-all duration-500 mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2 pt-serif-bold">
                    {qual.title}
                  </h3>
                  <p className="text-gray-700 font-semibold">
                    {qual.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Pandits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pandits.map((pandit, index) => (
              <div
                key={index}
                className="
                  group overflow-hidden rounded-3xl
                  bg-white/90 backdrop-blur-md
                  border border-amber-200
                  shadow-md hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all duration-500
                "
              >
                <div className="h-64 overflow-hidden">
                  <LazyImage
                    src={pandit.image}
                    alt={pandit.name}
                    className="
                      w-full h-full object-cover
                      transform group-hover:scale-110
                      transition-transform duration-700
                    "
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-black mb-1 pt-serif-bold">
                    {pandit.name}
                  </h3>
                  <p className="text-amber-600 font-semibold mb-3">
                    {pandit.title}
                  </p>

                  <div className="text-sm text-gray-700 space-y-1 font-semibold">
                    <p>
                      <span className="text-black">Experience:</span>{" "}
                      {pandit.experience}
                    </p>
                    <p>
                      <span className="text-black">Specialization:</span>{" "}
                      {pandit.specialization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-orange-500 ">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white! mb-6 pt-serif-bold">
            Book a Pooja with Our Expert Pandits
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Experience authentic Vedic rituals performed with devotion and
            spiritual excellence
          </p>

          <a
            href="/Poojas/devi-maa"
            className="
              inline-flex items-center gap-2
              px-12 py-4
              bg-white text-amber-600
              font-bold text-lg
              rounded-3xl
              shadow-2xl
              hover:bg-gray-100
              hover:scale-105
              active:scale-95
              transition-all duration-500
            "
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team_Pandits;
