import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ContachUs = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: " bhagwanpoojalive@gmail.com",
      link: "mailto: bhagwanpoojalive@gmail.com",
      linear: "from-orange-400 via-amber-500 to-yellow-400",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 7054790404",
      link: "tel:+911234567890",
      linear: "from-red-500 via-orange-500 to-amber-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Address- daraganj prayagraj Uttarpradesh",
      link: "#",
      linear: "from-emerald-500 via-green-500 to-lime-400",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sun: 6:00 AM - 9:00 PM",
      link: "#",
      linear: "from-blue-500 via-sky-500 to-cyan-400",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-white to-amber-50 dark:from-dark dark:to-dark-50">
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
                      cursor-pointer
"
                >
                  <div
                    className={`inline-flex p-4 rounded-full bg-linear-to-br ${info.linear}
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
        </div>
      </section>
    </div>
  );
};

export default ContachUs;
