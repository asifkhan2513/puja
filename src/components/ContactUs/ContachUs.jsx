import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ContachUs = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@divinepuja.com",
      link: "mailto:info@divinepuja.com",
      gradient: "from-orange-400 via-amber-500 to-yellow-400",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 123 456 7890",
      link: "tel:+911234567890",
      gradient: "from-red-500 via-orange-500 to-amber-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Temple Street, New Delhi, India 110001",
      link: "#",
      gradient: "from-emerald-500 via-green-500 to-lime-400",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sun: 6:00 AM - 9:00 PM",
      link: "#",
      gradient: "from-blue-500 via-sky-500 to-cyan-400",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-amber-50 dark:from-dark dark:to-dark-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="w-full max-w-screen-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-black mb-6 pt-serif-bold">
            Get in{" "}
            <span className="text-amber-600 dark:text-amber-400 pt-serif-bold-italic">
              Touch
            </span>
          </h1>
          <p className="text-xl text-center text-gray-900 font-semibold mb-16 max-w-3xl mx-auto">
            Have questions? We're here to help you with your spiritual journey
          </p>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Link
                  key={index}
                  to={info.link}
                  className="
                      card p-6 text-center group
                      bg-white/80 backdrop-blur-md
                      border border-amber-200
                      rounded-3xl
                      shadow-md hover:shadow-2xl
                      hover:-translate-y-2
                      transition-all duration-500
"
                >
                  <div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-br ${info.gradient}
                       shadow-lg group-hover:shadow-2xl
                        group-hover:rotate-6 group-hover:scale-110
                        transition-all duration-500`}
                  >
                    {" "}
                    <Icon className="w-8 h-8 text-white drop-shadow-md" />{" "}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2 pt-serif-bold">
                    {info.title}
                  </h3>
                  <p className="text-gray-900 font-semibold">{info.details}</p>
                </Link>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div
              className="
                  card p-10 rounded-3xl
                  bg-white/90 backdrop-blur-xl
                  border border-amber-200
                  shadow-xl hover:shadow-2xl
                  transition-all duration-500
  "
            >
              {" "}
              <h2 className="text-3xl font-bold text-black mb-6 pt-serif-bold text-center">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-black font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="
  w-full px-5 py-4 rounded-2xl
  border border-amber-200
  bg-gradient-to-br from-white to-amber-50
  text-black
  shadow-inner
  focus:outline-none
  focus:ring-2 focus:ring-amber-400
  focus:border-amber-400
  focus:shadow-lg
  transition-all duration-300
"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="
  w-full px-5 py-4 rounded-2xl
  border border-amber-200
  bg-gradient-to-br from-white to-amber-50
  text-black
  shadow-inner
  focus:outline-none
  focus:ring-2 focus:ring-amber-400
  focus:border-amber-400
  focus:shadow-lg
  transition-all duration-300
"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="
  w-full px-5 py-4 rounded-2xl
  border border-amber-200
  bg-gradient-to-br from-white to-amber-50
  text-black
  shadow-inner
  focus:outline-none
  focus:ring-2 focus:ring-amber-400
  focus:border-amber-400
  focus:shadow-lg
  transition-all duration-300
"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-black focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="
                    w-full px-8 py-4
                    bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400
                    text-white text-lg font-bold
                    rounded-2xl
                    shadow-lg
                    hover:shadow-2xl
                    hover:scale-105
                    hover:from-red-500 hover:to-orange-500
                    active:scale-95
                    transition-all duration-500
  "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContachUs;
