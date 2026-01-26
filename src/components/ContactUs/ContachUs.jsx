import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContachUs = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [showSpecialReq, setShowSpecialReq] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          e.target.reset();
          setIsLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          const errorMessage =
            error?.text || "Failed to send message, please try again.";
          toast.error(errorMessage);
          setIsLoading(false);
        }
      );
  };

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

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md border border-amber-200 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-center text-black mb-8 pt-serif-bold">
              Send us a <span className="text-amber-600">Message</span>
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white/50"
                  placeholder="Enter your full name"
                />
              </div>

              {/* City & State */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="user_city"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white/50"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="user_state"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white/50"
                    placeholder="Enter state"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white/50"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white/50"
                    placeholder="Enter email address"
                  />
                </div>
              </div>

              {/* Select Pooja */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Select Pooja
                </label>
                <select
                  name="pooja_type"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white/50"
                >
                  <option value="General Pooja">General Pooja</option>
                  <option value="Special Pooja">Special Pooja</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Notes{" "}
                  <span className="text-gray-400 text-sm font-normal">
                    (Max 120 characters)
                  </span>
                </label>
                <textarea
                  maxLength={120}
                  name="message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white/50 h-24 resize-none"
                  placeholder="Enter your notes here..."
                ></textarea>
              </div>

              {/* Special Requirements Checkbox */}
              <div className="flex flex-col space-y-4">
                <label className="flex items-center space-x-3 cursor-pointer w-fit">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-amber-600 rounded border-gray-300 focus:ring-amber-500"
                    checked={showSpecialReq}
                    onChange={(e) => setShowSpecialReq(e.target.checked)}
                  />
                  <span className="text-gray-700 font-semibold">
                    Special requirements
                  </span>
                </label>

                {showSpecialReq && (
                  <div className="animate-fade-in-down">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Special Requirement Details
                    </label>
                    <textarea
                      name="special_requirements"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white/50 h-24"
                      placeholder="Please emphasize on..."
                    ></textarea>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-linear-to-r from-amber-500 to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>Processing...</>
                ) : (
                  <>
                    Submit Request <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Grid */}
          <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
