import { Link } from "react-router-dom";
import {
  Sparkles,
  Heart,
  Users,
  Calendar,
  ArrowRight,
  Star,
} from "lucide-react";
import LazyImage from "../LazyImage";
import { PATH } from "../config/Path";

// Import images
import temple from "../../assets/temple.jpg";
import carousel1 from "../../assets/craousel1.jpg";
import carousel2 from "../../assets/craousel2.jpg";
import carousel3 from "../../assets/craousel3.jpg";
import dummy1 from "../../assets/dummy1.jpg";
import dummy2 from "../../assets/dummy2.jpg";
import dummy3 from "../../assets/dummy3.jpg";
import dummy4 from "../../assets/dummy4.jpg";
import dummy5 from "../../assets/dummy5.jpg";
import dummy6 from "../../assets/dummy6.jpg";

const HomePage = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Authentic Pujas",
      description: "Traditional rituals performed by experienced pandits",
      color: "text-amber-600 dark:text-amber-400",
    },
    {
      icon: Heart,
      title: "Divine Blessings",
      description: "Connect with divine energy from sacred temples",
      color: "text-rose-600 dark:text-rose-400",
    },
    {
      icon: Users,
      title: "Expert Pandits",
      description: "Certified and experienced spiritual guides",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book pujas at your convenient time",
      color: "text-green-600 dark:text-green-400",
    },
  ];

  const pujaCategories = [
    {
      title: "Devi Maa Pujas",
      description: "Invoke the divine feminine energy",
      image: dummy1,
      link: PATH.PUJAS_DEVI_MAA,
    },
    {
      title: "Lord Ganesha",
      description: "Remove obstacles from your path",
      image: dummy2,
      link: PATH.PUJAS_GANESHA,
    },
    {
      title: "Lord Shiva",
      description: "Seek blessings of the destroyer of evil",
      image: dummy3,
      link: PATH.PUJAS_SHIVA,
    },
    {
      title: "Lord Vishnu",
      description: "Preserve and protect your well-being",
      image: dummy4,
      link: PATH.PUJAS_VISHNU,
    },
    {
      title: "Career & Job",
      description: "Enhance professional success",
      image: dummy5,
      link: PATH.PUJAS_CAREER_JOB,
    },
    {
      title: "Health & Protection",
      description: "Ensure wellness and safety",
      image: dummy6,
      link: PATH.PUJAS_HEALTH_PROTECTION,
    },
  ];

  const temples = [
    { name: "Ayodhya", image: carousel1, link: PATH.TEMPLES_AYODHYA },
    { name: "Kashi Vishwanath", image: carousel2, link: PATH.TEMPLES_KASHI },
    { name: "Ujjain Mahakal", image: carousel3, link: PATH.TEMPLES_UJJAIN },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The puja was performed with utmost devotion. I felt truly blessed!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      text: "Excellent service and very professional pandits. Highly recommended!",
      rating: 5,
    },
    {
      name: "Anita Desai",
      text: "Convenient booking and authentic rituals. Thank you!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-white dark:from-dark dark:to-dark-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <LazyImage
          src={temple}
          alt="Temple"
          className="absolute inset-0 w-full h-full object-cover rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 pt-serif-bold">
            Divine Blessings at Your{" "}
            <span className="text-amber-400 pt-serif-bold-italic">
              Doorstep
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-inter">
            Book authentic pujas performed by experienced pandits from sacred
            temples across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={PATH.PUJAS_DEVI_MAA}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-3xl hover:from-accent hover:to-accent-dark shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Book a Puja <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={PATH.ABOUT_MISSION}
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-3xl border-2 border-white hover:bg-white hover:text-accent transition-all duration-300 flex items-center justify-center gap-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="w-full max-w-screen-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4 pt-serif-bold">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Experience authentic spiritual services with modern convenience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="card p-6 text-center hover:shadow-2xl transition-all duration-300 animate-slideUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 mb-4`}
                  >
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 pt-serif-bold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Puja Categories Section */}
      <section className="py-20 px-4 bg-white dark:bg-dark-50">
        <div className="w-full max-w-screen-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4 pt-serif-bold">
            Explore Our{" "}
            <span className="text-amber-600 dark:text-amber-400 pt-serif-bold-italic">
              Puja Services
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Choose from a wide range of traditional pujas for every occasion
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pujaCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group card overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="image-hover-zoom h-64 relative overflow-hidden rounded-t-2xl">
                  <LazyImage
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent dark:group-hover:text-accent-light transition-colors pt-serif-bold">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-amber-600 dark:text-accent-light font-semibold group-hover:gap-4 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Temples Section */}
      <section className="py-20 px-4">
        <div className="w-full max-w-screen-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4 pt-serif-bold">
            Sacred Temples of{" "}
            <span className="text-amber-600 dark:text-amber-400 pt-serif-bold-italic">
              Bharat
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Connect with divine energy from India's most revered temples
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {temples.map((temple, index) => (
              <Link
                key={index}
                to={temple.link}
                className="group relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <LazyImage
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-2 pt-serif-bold">
                    {temple.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-accent-light font-semibold group-hover:gap-4 transition-all">
                    Visit Temple <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-dark-50 dark:to-dark">
        <div className="w-full max-w-screen-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4 pt-serif-bold">
            What Our{" "}
            <span className="text-amber-600 dark:text-amber-400 pt-serif-bold-italic">
              Devotees Say
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Trusted by thousands of satisfied devotees across India
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 pt-serif-italic text-lg">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-gray-900 dark:text-white">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-accent-dark dark:to-accent">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 pt-serif-bold">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your puja today and receive divine blessings from sacred
            temples
          </p>
          <Link
            to={PATH.PUJAS_DEVI_MAA}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-amber-600 font-bold rounded-3xl hover:bg-gray-100 shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105"
          >
            Book Now <Sparkles className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
