import React from "react";
import {
  Sparkles,
  Flame,
  Globe,
  Flower,
  Star,
  Heart,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import AboutImage1 from "../../assets/Aboutus image1 (1).png";
import AboutImage2 from "../../assets/Aboutus image1 (2).png";

const About = () => {
  const { language } = useLanguage();

  const translations = {
    hindi: {
      heroTitle: "परंपरा और प्रौद्योगिकी को",
      heroSubtitle: "दिव्य भक्ति के माध्यम से जोड़ना",
      welcomeText:
        "BhagwanPooja.com में आपका स्वागत है, डिजिटल युग में प्रामाणिक आध्यात्मिक सेवाओं के लिए आपका प्रमुख गंतव्य।",
      missionText:
        "हम समझते हैं कि आज की तेज़-तर्रार दुनिया में, एक विद्वान पुरोहित खोजना या मंदिर जाना हमेशा संभव नहीं होता। हमारा मिशन मंदिर को आपके घर तक लाना है। हम देश के सर्वश्रेष्ठ पुरोहितों द्वारा किए जाने वाले ऑनलाइन पूजाओं की सुविधा में विशेषज्ञ हैं, यह सुनिश्चित करते हुए कि आपकी प्रार्थनाएं सुनी जाएं और आपकी परंपराओं का सम्मान हो, चाहे आप कहीं भी हों।",
      expertsTitle: "अनुष्ठानों के पीछे के हाथ: हमारे विशेषज्ञ पुरोहित",
      expertsDescription:
        "हम मानते हैं कि प्रार्थना की शक्ति इसकी सटीकता में निहित है। इसीलिए BhagwanPooja.com केवल उच्च योग्य, वैदिक-प्रमाणित पुरोहितों और पंडितों के साथ साझेदारी करता है। हमारे प्रत्येक पुजारी को शास्त्रों के गहरे ज्ञान, संस्कृत मंत्रों की निपुणता और पवित्र विधियों के प्रदर्शन में वर्षों के अनुभव के लिए चुना गया है। संकल्प के सही उच्चारण से लेकर हवन की सूक्ष्म व्यवस्था तक, हमारे पुरोहित यह सुनिश्चित करते हैं कि आपकी भक्ति प्राचीन परंपराओं के अनुसार दिव्य तक पहुंचे।",
      onlineBenefitTitle: "ऑनलाइन पूजा का लाभ",
      onlineBenefitDesc:
        "दूरी कभी भी आपकी आस्था में बाधक नहीं होनी चाहिए। हमारी ऑनलाइन पूजा सेवाएं आधुनिक भक्त के लिए डिज़ाइन की गई हैं जो व्यस्त कार्यक्रम या भौगोलिक दूरी के बावजूद गहरा आध्यात्मिक संबंध चाहते हैं।",
      liveParticipation:
        "लाइव भागीदारी: उच्च गुणवत्ता वाली वीडियो स्ट्रीमिंग के माध्यम से अपनी पूजा में शामिल हों और हमारे पुरोहितों के साथ अनुष्ठान करें।",
      personalizedSankalp:
        "व्यक्तिगत संकल्प: हर समारोह विशेष रूप से आपके नाम और गोत्र में किया जाता है ताकि आपको पूर्ण आध्यात्मिक लाभ मिले।",
      pristineSamagri:
        "शुद्ध सामग्री: हम केवल सबसे शुद्ध, सबसे प्रामाणिक पूजा सामग्री का उपयोग करते हैं, यह सुनिश्चित करते हुए कि आपके अनुष्ठान की पवित्रता कभी समझौता न हो।",
      whyTrustTitle: "BhagwanPooja.com पर भरोसा क्यों करें?",
      bestPurohits: "सर्वश्रेष्ठ पुरोहित",
      bestPurohitsDesc:
        "हमारा प्लेटफॉर्म आपको अनुभवी पंडितों से जोड़ता है जो वैदिक अनुष्ठानों, शांति पाठ और विशेष हवनों के विशेषज्ञ हैं।",
      authenticityGuaranteed: "प्रामाणिकता की गारंटी",
      authenticityDesc:
        "हर अनुष्ठान वेदों और पुराणों के सख्त दिशानिर्देशों का पालन करता है, जो उच्चतम आध्यात्मिक कंपन सुनिश्चित करता है।",
      hassleFree: "परेशानी मुक्त अनुभव",
      hassleFreeDesc:
        "पूजा सामग्री की व्यवस्था से लेकर मुहूर्त तय करने तक, हम रसद को संभालते हैं ताकि आप पूरी तरह से अपनी भक्ति पर ध्यान केंद्रित कर सकें।",
      globalReach: "वैश्विक पहुंच",
      globalReachDesc:
        "चाहे आप भारत में हों या विदेश में, हम दिव्य के लिए आपके डिजिटल पुल के रूप में काम करते हैं। BhagwanPooja.com पर, हम केवल अनुष्ठान नहीं करते; हम शांति, समृद्धि और आध्यात्मिक विकास के लिए एक स्थान विकसित करते हैं। आज ही दिव्य कृपा का अनुभव करें। हमारे विशेषज्ञ पुरोहितों के साथ अपनी पहली ऑनलाइन पूजा बुक करें।",
      experienceTitle: "दिव्य संबंध का अनुभव करें",
      experienceDesc:
        "भगवान पूजा के साथ, भक्ति प्रौद्योगिकी से मिलती है। हजारों भक्तों के साथ जुड़ें जो हम पर भरोसा करते हैं कि हम उनके पवित्र अनुष्ठानों को श्रद्धा, पवित्रता और भक्ति के साथ करें।",
    },
    english: {
      heroTitle: "Bridging Tradition",
      heroSubtitle: "and Technology through Divine Devotion",
      welcomeText:
        "Welcome to BhagwanPooja.com, your premier destination for authentic spiritual services in the digital age.",
      missionText:
        "We understand that in today's fast-paced world, finding a learned Purohit or visiting a temple isn't always possible. Our mission is to bring the temple to your home. We specialize in facilitating Online Poojas performed by the best Purohits in the country, ensuring that your prayers are heard and your traditions are honored, no matter where you are",
      expertsTitle: "The Hands Behind the Rituals: Our Expert Purohits",
      expertsDescription:
        "We believe that the power of a prayer lies in its precision. That is why BhagwanPooja.com partners exclusively with highly qualified, Vedic-certified Purohits and Pandits. Each of our priests is handpicked for their deep knowledge of the Shastras, mastery of Sanskrit Mantras, and years of experience in performing sacred Vidhis. From the correct pronunciation of the Sankalp to the meticulous arrangement of the Havan, our Purohits ensure that your devotion reaches the Divine exactly as prescribed by ancient traditions.",
      onlineBenefitTitle: 'The "Online Pooja" Benefit',
      onlineBenefitDesc:
        "Distance should never be a barrier to your faith. Our Online Pooja Services are designed for the modern devotee who seeks a deep spiritual connection despite a busy schedule or geographical distance.",
      liveParticipation:
        "Live Participation: Join your Pooja via high-quality video streaming and perform the rituals alongside our Purohits.",
      personalizedSankalp:
        "Personalized Sankalp: Every ceremony is performed specifically in your name and Gothra to ensure you receive the full spiritual merit.",
      pristineSamagri:
        "Pristine Samagri: We use only the purest, most authentic Pooja materials, ensuring the sanctity of your ritual is never compromised.",
      whyTrustTitle: "Why Trust BhagwanPooja.com?",
      bestPurohits: "Best-In-Class Purohits",
      bestPurohitsDesc:
        "Our platform connects you with seasoned Pandits who are experts in Vedic rituals, Shanti Paath, and specialized Havans.",
      authenticityGuaranteed: "Authenticity Guaranteed",
      authenticityDesc:
        "Every ritual follows the strict guidelines of the Vedas and Puranas, ensuring the highest spiritual vibration.",
      hassleFree: "Hassle-Free Experience",
      hassleFreeDesc:
        "From arranging the Pooja Samagri to scheduling the Muhurat, we handle the logistics so you can focus entirely on your devotion.",
      globalReach: "Global Reach",
      globalReachDesc:
        "Whether you are in India or abroad, we serve as your digital bridge to the divine.At BhagwanPooja.com, we don't just perform rituals; we cultivate a space for peace, prosperity, and spiritual growth. ​Experience the divine grace today. Book your first Online Pooja with our expert Purohits.",
      experienceTitle: "Experience Divine Connection",
      experienceDesc:
        "With Bhagwan Pooja, devotion meets technology. Join thousands of devotees who trust us to perform their sacred rituals with faith, purity, and devotion.",
    },
  };

  const t = translations[language];

  const features = [
    {
      icon: Flame,
      title: t.bestPurohits,
      desc: t.bestPurohitsDesc,
      gradient: "from-orange-500 via-amber-500 to-yellow-400",
    },
    {
      icon: Flower,
      title: t.authenticityGuaranteed,
      desc: t.authenticityDesc,
      gradient: "from-pink-500 via-rose-500 to-red-400",
    },
    {
      icon: Sparkles,
      title: t.hassleFree,
      desc: t.hassleFreeDesc,
      gradient: "from-blue-500 via-sky-500 to-cyan-400",
    },
    {
      icon: Globe,
      title: t.globalReach,
      desc: t.globalReachDesc,
      gradient: "from-emerald-500 via-green-500 to-lime-400",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-amber-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 min-h-screen flex items-center bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl animate-rotate-slow"></div>
        </div>

        <div className="relative max-w-screen-xl mx-auto text-center z-10">
          {/* Enhanced Typography Box */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-divine-xl border-gradient-amber hover:shadow-glow-amber transition-all duration-500 transform hover:scale-105 animate-scale-pulse">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/30 rounded-3xl blur-sm"></div>

            <div className="relative">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 pt-serif-bold leading-tight text-shadow-soft">
                <span
                  className={`inline-block transform hover:scale-110 transition-transform duration-300 ${language === "hindi" ? "hindi-heading" : ""}`}
                >
                  {t.heroTitle}
                </span>
                <br />
                <span
                  className={`bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 animate-gradient-x inline-block transform hover:scale-110 transition-transform duration-300 text-shadow-glow ${language === "hindi" ? "hindi-heading" : ""}`}
                >
                  {t.heroSubtitle}
                </span>
              </h1>

              {/* Enhanced Welcome Text Box */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-6 border-gradient-amber shadow-glow-amber hover:shadow-divine-xl transition-all duration-300 transform hover:-translate-y-1 animate-float-up-down">
                <p
                  className={`text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed ${language === "hindi" ? "hindi-body" : ""}`}
                >
                  {t.welcomeText}
                </p>
              </div>

              {/* Enhanced Mission Text Box */}
              <div
                className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border-gradient-orange shadow-glow-orange hover:shadow-divine-xl transition-all duration-300 transform hover:-translate-y-1 animate-float-up-down"
                style={{ animationDelay: "1s" }}
              >
                <p
                  className={`text-lg md:text-xl text-gray-700 leading-relaxed ${language === "hindi" ? "hindi-body" : ""}`}
                >
                  {t.missionText}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="flex justify-center gap-4 mt-8">
                <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse delay-200"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content - Enhanced */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20 bg-pattern-dots">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content Box */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-divine-xl border-gradient-amber hover:shadow-glow-amber transition-all duration-500 transform hover:scale-105 animate-float-up-down">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-orange-50/20 rounded-3xl blur-sm"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full animate-scale-pulse">
                    <Star className="w-6 h-6 text-amber-600" />
                  </div>
                  <h2
                    className={`text-3xl md:text-4xl font-bold text-gray-900 pt-serif-bold text-shadow-soft ${language === "hindi" ? "hindi-heading" : ""}`}
                  >
                    {t.expertsTitle}
                  </h2>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-gradient-amber shadow-inner">
                  <p
                    className={`text-gray-700 text-lg leading-relaxed ${language === "hindi" ? "hindi-body" : ""}`}
                  >
                    {t.expertsDescription}
                  </p>
                </div>

                {/* Feature Points */}
                <div className="mt-6 space-y-3">
                  {[
                    language === "hindi"
                      ? "वैदिक-प्रमाणित पुरोहित"
                      : "Vedic-Certified Purohits",
                    language === "hindi"
                      ? "संस्कृत मंत्रों की निपुणता"
                      : "Sanskrit Mantra Mastery",
                    language === "hindi"
                      ? "पवित्र विधियों का अनुभव"
                      : "Sacred Ritual Experience",
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/80 rounded-xl border-gradient-amber shadow-md hover:shadow-glow-amber hover:bg-amber-50/50 transition-all duration-300 transform hover:translate-x-2 animate-float-up-down"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 animate-scale-pulse" />
                      <span
                        className={`text-gray-700 font-medium ${language === "hindi" ? "hindi-body" : ""}`}
                      >
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Container */}
          <div className="flex justify-center animate-fadeInUp">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-scale-pulse"></div>

              {/* Main Image Container */}
              <div className="relative w-full max-w-md p-8 rounded-3xl bg-white/95 backdrop-blur-xl border-4 border-amber-300/60 hover:border-amber-500/80 shadow-divine-xl hover:shadow-glow-amber transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-float-up-down">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-200/20 to-amber-200/20 blur-xl"></div>

                <div className="relative text-center space-y-6">
                  {/* Image with Enhanced Styling */}
                  <div className="relative overflow-hidden rounded-2xl shadow-divine-xl">
                    <img
                      src={AboutImage1}
                      alt="About Us - Expert Purohits"
                      className="w-full h-[450px] object-cover transition-transform duration-500 hover:scale-110 border-4 border-amber-300/60 hover:border-amber-500/80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Sacred Symbol with Animation */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 border-3 border-amber-300/50 shadow-inner">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3 animate-pulse hindi-heading text-shadow-glow">
                      ॐ नमः शिवाय
                    </h3>
                    <p
                      className={`text-gray-700 font-medium leading-relaxed ${language === "hindi" ? "hindi-body" : ""}`}
                    >
                      {language === "hindi"
                        ? "पवित्र अनुष्ठानों के माध्यम से भक्तों को दिव्य ऊर्जा से जोड़ना।"
                        : "Connecting devotees with divine energy through sacred rituals."}
                    </p>
                  </div>

                  {/* Decorative Stars */}
                  <div className="flex justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-500 fill-current animate-pulse"
                        style={{ animationDelay: `${i * 200}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Pooja Benefits Section - Enhanced */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50/70 to-orange-50/50 relative overflow-hidden bg-pattern-grid">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, #f59e0b 2px, transparent 2px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Image Container */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative group">
                {/* Multiple Glow Layers */}
                <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/15 to-orange-500/15 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700 animate-scale-pulse"></div>
                <div className="absolute -inset-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                {/* Main Container */}
                <div className="relative w-full max-w-md p-8 rounded-3xl bg-white/95 backdrop-blur-xl border-4 border-orange-300/60 hover:border-orange-500/80 shadow-divine-xl hover:shadow-glow-orange transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 animate-float-up-down">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-200/15 to-orange-200/15 blur-sm"></div>

                  <div className="relative">
                    {/* Image with Overlay Effects */}
                    <div className="relative overflow-hidden rounded-2xl shadow-divine-xl group-hover:shadow-glow-orange transition-all duration-500">
                      <img
                        src={AboutImage2}
                        alt="Online Pooja Benefits"
                        className="w-full h-[450px] object-cover transition-all duration-700 group-hover:scale-110 border-4 border-orange-300/60 hover:border-orange-500/80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-orange-500/10"></div>

                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg animate-float-gentle">
                        <Heart className="w-5 h-5 text-red-500" />
                      </div>
                      <div
                        className="absolute bottom-4 left-4 p-2 bg-white/90 rounded-full shadow-lg animate-float-gentle"
                        style={{ animationDelay: "1s" }}
                      >
                        <Sparkles className="w-5 h-5 text-amber-500" />
                      </div>
                    </div>

                    {/* Decorative Border */}
                    <div className="absolute -inset-2 border-2 border-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Content Box */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-divine-xl border-gradient-orange hover:shadow-glow-orange transition-all duration-500 transform hover:scale-105 animate-float-up-down">
                <div className="relative">
                  {/* Title with Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full animate-pulse">
                      <Globe className="w-6 h-6 text-orange-600" />
                    </div>
                    <h1
                      className={`text-3xl md:text-4xl font-bold text-gray-900 pt-serif-bold text-shadow-soft ${language === "hindi" ? "hindi-heading" : ""}`}
                    >
                      {t.onlineBenefitTitle}
                    </h1>
                  </div>

                  {/* Description Box */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 mb-6 border-gradient-orange shadow-inner">
                    <p
                      className={`text-gray-700 text-lg leading-relaxed ${language === "hindi" ? "hindi-body" : ""}`}
                    >
                      {t.onlineBenefitDesc}
                    </p>
                  </div>

                  {/* Enhanced Benefit Points */}
                  <div className="space-y-4">
                    {[
                      { text: t.liveParticipation, icon: "🎥" },
                      { text: t.personalizedSankalp, icon: "🙏" },
                      { text: t.pristineSamagri, icon: "✨" },
                    ].map((benefit, index) => (
                      <div
                        key={index}
                        className="group p-4 bg-white/80 rounded-2xl border-2 border-orange-200/60 hover:border-orange-400/80 shadow-md hover:shadow-glow-orange hover:bg-orange-50/50 transition-all duration-300 transform hover:translate-x-3 hover:-translate-y-1 animate-float-up-down"
                        style={{ animationDelay: `${index * 300}ms` }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-2xl group-hover:scale-125 transition-transform duration-300 animate-scale-pulse">
                            {benefit.icon}
                          </div>
                          <p
                            className={`text-gray-700 leading-relaxed flex-1 ${language === "hindi" ? "hindi-body" : ""}`}
                          >
                            {benefit.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-amber-50/40 to-orange-50/30 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-3xl animate-float-gentle"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-400 to-red-400 rounded-full blur-3xl animate-float-gentle"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-screen-xl mx-auto">
          {/* Enhanced Title Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-divine-xl border-gradient-amber hover:shadow-glow-amber transition-all duration-500 transform hover:scale-105 animate-scale-pulse">
              <h2
                className={`text-4xl md:text-5xl font-bold text-gray-900 pt-serif-bold mb-4 text-shadow-soft ${language === "hindi" ? "hindi-heading" : ""}`}
              >
                {t.whyTrustTitle}
              </h2>
              <div className="flex justify-center gap-2 mt-4">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative animate-float-up-down"
                  style={{ animationDelay: `${index * 500}ms` }}
                >
                  {/* Card Glow Effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                  {/* Main Card */}
                  <div className="relative p-8 rounded-3xl text-center bg-white/95 backdrop-blur-md border-gradient-amber shadow-divine-xl hover:shadow-glow-amber hover:-translate-y-4 transition-all duration-500 transform hover:scale-105 h-full">
                    {/* Background Pattern */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-5"
                      style={{
                        backgroundImage: `radial-gradient(circle at center, ${item.gradient.includes("orange") ? "#f59e0b" : item.gradient.includes("pink") ? "#ec4899" : item.gradient.includes("blue") ? "#3b82f6" : "#10b981"} 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    ></div>

                    <div className="relative">
                      {/* Enhanced Icon Container */}
                      <div className="relative mb-6">
                        <div
                          className={`inline-flex p-6 rounded-full bg-gradient-to-br ${item.gradient} shadow-divine-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-scale-pulse`}
                        >
                          <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                        </div>

                        {/* Icon Glow */}
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
                        ></div>
                      </div>

                      {/* Enhanced Title */}
                      <h3
                        className={`text-xl font-bold text-gray-900 mt-6 mb-4 group-hover:text-amber-600 transition-colors duration-300 text-shadow-soft ${language === "hindi" ? "hindi-heading" : ""}`}
                      >
                        {item.title}
                      </h3>

                      {/* Enhanced Description Box */}
                      <div className="bg-gradient-to-r from-gray-50 to-amber-50/30 rounded-2xl p-4 border-gradient-amber group-hover:shadow-glow-amber transition-all duration-300">
                        <p
                          className={`text-gray-700 leading-relaxed ${language === "hindi" ? "hindi-body" : ""}`}
                        >
                          {item.desc}
                        </p>
                      </div>

                      {/* Hover Indicator */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Section - Enhanced */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50/60 to-orange-50/40 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #f59e0b 25%, transparent 25%), linear-gradient(-45deg, #f59e0b 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f59e0b 75%), linear-gradient(-45deg, transparent 75%, #f59e0b 75%)",
              backgroundSize: "30px 30px",
              backgroundPosition: "0 0, 0 15px, 15px -15px, -15px 0px",
            }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Multiple Layer Container */}
          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-amber-500/10 via-orange-500/15 to-red-500/10 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700 animate-scale-pulse"></div>

            {/* Middle Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/15 to-amber-500/15 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500"></div>

            {/* Main Container */}
            <div className="relative bg-white/95 backdrop-blur-xl p-12 md:p-16 rounded-3xl border-4 border-amber-300/60 hover:border-amber-500/80 shadow-divine-xl hover:shadow-glow-amber animate-fadeInUp hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-float-up-down">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-50/30 via-orange-50/20 to-red-50/10 blur-sm"></div>

              <div className="relative">
                {/* Title with Enhanced Styling */}
                <div className="mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full animate-pulse">
                      <Heart className="w-12 h-12 text-red-500" />
                    </div>
                  </div>

                  <h2
                    className={`text-3xl md:text-5xl font-bold text-gray-900 mb-6 pt-serif-bold text-shadow-soft ${language === "hindi" ? "hindi-heading" : ""}`}
                  >
                    {t.experienceTitle}
                  </h2>

                  {/* Decorative Line */}
                  <div className="flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-full animate-scale-pulse"></div>
                  </div>
                </div>

                {/* Enhanced Description Box */}
                <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 rounded-2xl p-8 border-gradient-amber shadow-inner mb-8">
                  <p
                    className={`text-gray-700 text-lg md:text-xl leading-relaxed ${language === "hindi" ? "hindi-body" : ""}`}
                  >
                    {t.experienceDesc}
                  </p>
                </div>

                {/* Call to Action Button */}
                <div className="flex justify-center">
                  <Link
                    to="/pooja"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold rounded-full shadow-divine-xl hover:shadow-glow-amber transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 text-lg animate-scale-pulse"
                  >
                    <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                    <span className={language === "hindi" ? "hindi-body" : ""}>
                      {language === "hindi" ? "अभी बुक करें" : "Book Now"}
                    </span>
                    <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </Link>
                </div>

                {/* Bottom Decorative Elements */}
                <div className="flex justify-center gap-3 mt-8">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 200}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
