import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Flower,
  Gift,
  ShoppingCart,
  ArrowRight,
  Sparkles,
  Users,
  Heart,
  Phone,
  
  Info,
  Star,
  Quote,
} from "lucide-react";

import LazyImage from "../LazyImage";
import { PATH } from "../config/Path";
import { useLanguage } from "../../contexts/LanguageContext";

// Import images
import temple from "../../assets/temple.jpg";
import carousel1 from "../../assets/craousel1.jpg";
import carousel2 from "../../assets/craousel2.jpg";
import carousel3 from "../../assets/craousel3.jpg";
import heroDummy from "../../assets/hero-section-img.webp";

const HomePage = () => {
  const { language } = useLanguage();

  // Carousel State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = [temple, carousel1, carousel2, carousel3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const Services = [
    {
      icon: Flower,
      name: language === "english" ? "Poojas" : "पूजा",
      link: PATH.POOJA,
      description:
        language === "english"
          ? "Book online pujas anytime, anywhere and get prasad delivered to your home."
          : "ऑनलाइन पूजा बुक करें कभी भी, कहीं भी और प्रसाद घर पर प्राप्त करें।",
    },
    {
      icon: Gift,
      name: language === "english" ? "Chadhava" : "चढ़ावा",
      link: "/chadhava",
      description:
        language === "english"
          ? "Offer Chadhava at India's renowned temples to solve life's problems and receive divine blessings."
          : "भारत के प्रसिद्ध मंदिरों में चढ़ावा चढ़ाएं और जीवन की समस्याओं का समाधान पाएं।",
    },
    {
      icon: ShoppingCart,
      name: language === "english" ? "Products" : "उत्पाद",
      link: PATH.PRODUCTS,
      description:
        language === "english"
          ? "Everything for your devotion — now just a tap away. Shop puja essentials, powerful Siddh items & more — delivered to your doorstep."
          : "आपकी भक्ति के लिए सब कुछ — अब बस एक टैप की दूरी पर। पूजा की आवश्यक वस्तुएं, शक्तिशाली सिद्ध वस्तुएं और बहुत कुछ खरीदें।",
    },
    {
      icon: Phone,
      name: language === "english" ? "Contact Us" : "संपर्क करें",
      link: "/contactus",
      description:
        language === "english"
          ? "Get in touch with our spiritual experts for personalized guidance and support for all your religious needs."
          : "अपनी सभी धार्मिक आवश्यकताओं के लिए व्यक्तिगत मार्गदर्शन और सहायता के लिए हमारे आध्यात्मिक विशेषज्ञों से संपर्क करें।",
    },
    {
      icon: Info,
      name: language === "english" ? "About Us" : "हमारे बारे में",
      link: "/about-us",
      description:
        language === "english"
          ? "Learn about our mission to bring authentic spiritual experiences and connect devotees with divine blessings."
          : "प्रामाणिक आध्यात्मिक अनुभव लाने और भक्तों को दिव्य आशीर्वाद से जोड़ने के हमारे मिशन के बारे में जानें।",
    },
  ];

  const News = [
    {
      image: "",
      name: "",
      description: "",
    },
    {
      image: "",
      name: "",
      description: "",
    },
  ];
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: language === "english" ? "Priya Sharma" : "प्रिया शर्मा",
      location: language === "english" ? "Mumbai" : "मुंबई",
      rating: 5,
      review:
        language === "english"
          ? "The Pooja was performed with utmost devotion and authenticity. I felt truly blessed and received the prasad at my doorstep. Highly recommended!"
          : "पूजा अत्यंत भक्ति और प्रामाणिकता के साथ की गई। मैंने वास्तव में धन्य महसूस किया और प्रसाद मेरे घर तक पहुंचा। अत्यधिक अनुशंसित!",
      date: language === "english" ? "2 days ago" : "2 दिन पहले",
    },
    {
      id: 2,
      name: language === "english" ? "Rajesh Kumar" : "राजेश कुमार",
      location: language === "english" ? "Delhi" : "दिल्ली",
      rating: 5,
      review:
        language === "english"
          ? "Excellent service and very professional pandits. The online booking was smooth and the ritual was performed exactly as requested. Thank you!"
          : "उत्कृष्ट सेवा और बहुत ही पेशेवर पंडित। ऑनलाइन बुकिंग आसान थी और अनुष्ठान बिल्कुल वैसे ही किया गया जैसा मांगा था। धन्यवाद!",
      date: language === "english" ? "1 week ago" : "1 सप्ताह पहले",
    },
    {
      id: 3,
      name: language === "english" ? "Anita Desai" : "अनीता देसाई",
      location: language === "english" ? "Pune" : "पुणे",
      rating: 5,
      review:
        language === "english"
          ? "Amazing experience! The chadhava was offered at the temple as promised and I received photos and videos. Very convenient and trustworthy service."
          : "अद्भुत अनुभव! चढ़ावा वादे के अनुसार मंदिर में चढ़ाया गया और मुझे फोटो और वीडियो मिले। बहुत सुविधाजनक और भरोसेमंद सेवा।",
      date: language === "english" ? "3 days ago" : "3 दिन पहले",
    },
    {
      id: 4,
      name: language === "english" ? "Vikram Singh" : "विक्रम सिंह",
      location: language === "english" ? "Jaipur" : "जयपुर",
      rating: 5,
      review:
        language === "english"
          ? "The pandits were knowledgeable and performed the puja with proper mantras. I could feel the positive energy even from home. Great initiative!"
          : "पंडित जी बहुत जानकार थे और उन्होंने सही मंत्रों के साथ पूजा की। घर से ही मैं सकारात्मक ऊर्जा महसूस कर सका। बेहतरीन पहल!",
      date: language === "english" ? "5 days ago" : "5 दिन पहले",
    },
    {
      id: 5,
      name: language === "english" ? "Meera Patel" : "मीरा पटेल",
      location: language === "english" ? "Ahmedabad" : "अहमदाबाद",
      rating: 5,
      review:
        language === "english"
          ? "Wonderful service! The products quality is excellent and delivery was on time. The spiritual items are authentic and blessed. Will order again!"
          : "शानदार सेवा! उत्पादों की गुणवत्ता उत्कृष्ट है और डिलीवरी समय पर हुई। आध्यात्मिक वस्तुएं प्रामाणिक और आशीर्वादित हैं। फिर से ऑर्डर करूंगी!",
      date: language === "english" ? "1 day ago" : "1 दिन पहले",
    },
  ];

  // Testimonials carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-slide testimonials every 2 seconds
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Background */}
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <LazyImage
              src={image}
              alt={`Sacred Hindu Temple ${index + 1}`}
              priority={index === 0}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40 z-10 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {language === "english"
                ? "Divine Blessings at Your"
                : "दिव्य आशीर्वाद आपके"}{" "}
              <span className="text-amber-400 block">
                {language === "english" ? "Doorstep" : "द्वार पर"}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white font-semibold mb-8 max-w-3xl mx-auto">
              {language === "english"
                ? "Book authentic Poojas performed by experienced pandits from sacred temples across India"
                : "भारत के पवित्र मंदिरों से अनुभवी पंडितों द्वारा किए जाने वाले प्रामाणिक पूजा बुक करें"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to={PATH.POOJA}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-3xl hover:from-amber-600 hover:to-orange-700 shadow-2xl hover:shadow-amber/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {language === "english" ? "Book a Pooja" : "पूजा बुक करें"}
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/about-us"
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-3xl border-2 border-white hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {language === "english" ? "Learn More" : "और जानें"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Second Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="w-full max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeIn">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-gray-800 animate-slideInLeft">
                    {language === "english"
                      ? "India's Temples"
                      : "भारत के मंदिर"}
                  </span>
                  <span className="block text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text animate-slideInLeft delay-200">
                    {language === "english"
                      ? "Now on Your Mobile"
                      : "अब आपके मोबाइल पर"}
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 font-semibold animate-slideInLeft delay-300">
                  {language === "english"
                    ? "Perform Puja and Offer Chadhava, Anywhere, Anytime"
                    : "पूजा करें और चढ़ाएं चढ़ावा, कहीं भी, कभी भी"}
                </p>

                <div className="flex items-center gap-3 text-lg font-bold text-amber-700 animate-slideInLeft delay-400">
                  <Users className="w-6 h-6" />
                  <span>
                    {language === "english"
                      ? "2 Lakh+ Devotees Trust"
                      : "2 लाख+ भक्तों का विश्वास"}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-slideInLeft delay-500">
                <Link
                  to="/chadhava"
                  className="group px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold rounded-2xl hover:from-amber-600 hover:via-orange-600 hover:to-red-600 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 border-2 border-transparent hover:border-amber-300"
                >
                  {language === "english" ? "Book Chadhava" : "चढ़ावा बुक करें"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-slideInRight">
              <div className="relative z-10 group">
                <LazyImage
                  src={heroDummy}
                  alt="Hindu Temple and Devotion"
                  className="w-full h-auto object-cover rounded-3xl shadow-2xl border-4 border-white hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105"
                />

                {/* Image Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Left Decorative Element Only */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 animate-pulse delay-1000"></div>

              {/* Floating Animation Elements */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-amber-400 rounded-full animate-bounce delay-700"></div>
              <div className="absolute bottom-20 right-5 w-3 h-3 bg-orange-500 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="w-full max-w-screen-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {language === "english" ? "Our Services" : "हमारी सेवाएं"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "english"
                ? "Experience divine blessings through our comprehensive spiritual services designed for modern devotees"
                : "आधुनिक भक्तों के लिए डिज़ाइन की गई हमारी व्यापक आध्यात्मिक सेवाओं के माध्यम से दिव्य आशीर्वाद का अनुभव करें"}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {Services.map((service, index) => {
              const Icon = service.icon;
              const colors = [
                "from-amber-500 to-orange-600",
                "from-orange-500 to-red-600",
                "from-red-500 to-pink-600",
                "from-blue-500 to-purple-600",
                "from-green-500 to-teal-600",
              ];

              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`relative z-10 w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-amber-700 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-4 transition-all">
                      <span>
                        {language === "english" ? "Explore Now" : "अभी देखें"}
                      </span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${colors[index]} opacity-10 rounded-bl-full`}
                  ></div>
                </Link>
              );
            })}
          </div>

          {/* Testimonials Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {language === "english"
                  ? "What Our Devotees Say"
                  : "हमारे भक्त क्या कहते हैं"}
              </h3>
              <p className="text-lg text-gray-600">
                {language === "english"
                  ? "Trusted by thousands of satisfied devotees across India"
                  : "भारत भर के हजारों संतुष्ट भक्तों का भरोसा"}
              </p>
            </div>

            {/* Testimonial Slider */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-amber-200">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Testimonial Content */}
                <div className="relative z-10 text-center">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-amber-400 text-amber-400"
                        />
                      )
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                    "{testimonials[currentTestimonial].review}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex flex-col items-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 mb-2">
                      {testimonials[currentTestimonial].location}
                    </p>
                    <p className="text-sm text-amber-600 font-semibold">
                      {testimonials[currentTestimonial].date}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full opacity-50"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-30"></div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-amber-500 w-8"
                        : "bg-gray-300 hover:bg-amber-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl">
              <Sparkles className="w-6 h-6 text-amber-600" />
              <span className="text-lg font-semibold text-gray-800">
                {language === "english"
                  ? "Join thousands of satisfied devotees today"
                  : "आज ही हजारों संतुष्ट भक्तों से जुड़ें"}
              </span>
              <Heart className="w-6 h-6 text-red-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Bhagwan Poojas in News */}

      {/* Customers Reviews */}
    </div>
  );
};

export default HomePage;
