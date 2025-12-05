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
      specialization: "Deity Worship & Pujas",
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
        "All our pandits are certified by recognized Vedic institutions",
    },
    {
      icon: BookOpen,
      title: "Deep Knowledge",
      description:
        "Extensive knowledge of Vedic scriptures and ancient traditions",
    },
    {
      icon: Heart,
      title: "Devoted Service",
      description: "Committed to serving devotees with utmost dedication",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-amber-50 dark:from-dark dark:to-dark-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="w-full max-w-screen-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-black mb-6 pt-serif-bold">
            Our Expert{" "}
            <span className="text-amber-600 dark:text-amber-400 pt-serif-bold-italic">
              Pandits
            </span>
          </h1>
          <p className="text-xl text-center text-gray-900 font-semibold mb-16 max-w-3xl mx-auto">
            Meet our team of experienced and certified Vedic scholars dedicated
            to performing authentic rituals
          </p>

          {/* Qualifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {qualifications.map((qual, index) => {
              const Icon = qual.icon;
              return (
                <div
                  key={index}
                  className="card p-6 text-center hover:shadow-2xl transition-all duration-300"
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 mb-4">
                    <Icon className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2 pt-serif-bold">
                    {qual.title}
                  </h3>
                  <p className="text-gray-900 font-semibold">
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
                className="card overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <LazyImage
                    src={pandit.image}
                    alt={pandit.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 pt-serif-bold">
                    {pandit.name}
                  </h3>
                  <p className="text-amber-600 dark:text-amber-400 font-semibold mb-2">
                    {pandit.title}
                  </p>
                  <p className="text-sm text-gray-900 font-semibold mb-1">
                    <span className="font-semibold">Experience:</span>{" "}
                    {pandit.experience}
                  </p>
                  <p className="text-sm text-gray-900 font-semibold">
                    <span className="font-semibold">Specialization:</span>{" "}
                    {pandit.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-accent-dark dark:to-accent">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 pt-serif-bold">
            Book a Puja with Our Expert Pandits
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience authentic Vedic rituals performed with devotion and
            expertise
          </p>
          <a
            href="/pujas/devi-maa"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-amber-600 font-bold rounded-3xl hover:bg-gray-100 shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team_Pandits;
