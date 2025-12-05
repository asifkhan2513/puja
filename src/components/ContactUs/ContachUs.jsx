import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContachUs = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@divinepuja.com",
      link: "mailto:info@divinepuja.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 123 456 7890",
      link: "tel:+911234567890",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Temple Street, New Delhi, India 110001",
      link: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sun: 6:00 AM - 9:00 PM",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-amber-50 dark:from-dark dark:to-dark-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="w-full max-w-screen-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-6 pt-serif-bold">
            Get in{" "}
            <span className="text-amber-600 dark:text-amber-400 pt-serif-bold-italic">
              Touch
            </span>
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
            Have questions? We're here to help you with your spiritual journey
          </p>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className="card p-6 text-center hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 pt-serif-bold">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {info.details}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pt-serif-bold text-center">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-100 bg-white dark:bg-dark-50 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-100 bg-white dark:bg-dark-50 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-100 bg-white dark:bg-dark-50 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-100 bg-white dark:bg-dark-50 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-2xl hover:from-accent hover:to-accent-dark shadow-lg transition-all duration-300 transform hover:scale-105"
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
