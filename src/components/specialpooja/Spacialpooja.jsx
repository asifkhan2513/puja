import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Star,
  Clock,
  Users,
  Calendar,
  Heart,
  Shield,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Play,
  Gift,
  Flame,
  Book,
  Target,
  ArrowLeft,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Spacialcontent, spclPoojalist, poojaData } from "./Spacialpooja.js";

const SpacialPooja = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedDuration, setSelectedDuration] = useState(0);

  // Utility function to create slug from name
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .trim();
  };

  // Find puja by slug
  const findPujaBySlug = (slug) => {
    return Spacialcontent.find(
      (puja) =>
        createSlug(puja.name) === slug || createSlug(puja.title) === slug,
    );
  };

  // Check if we're viewing a specific puja detail
  const selectedPuja = slug ? findPujaBySlug(slug) : null;
  const isDurgaPuja = slug === "durga-shatchandi-puja";

  // If slug exists but no puja found, show not found
  if (slug && !selectedPuja && !isDurgaPuja) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-orange-50/20 py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Puja Not Found
          </h1>
          <button
            onClick={() => navigate("/special-pooja")}
            className="bg-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition-colors duration-300"
          >
            Back to Special Poojas
          </button>
        </div>
      </div>
    );
  }

  const translations = {
    hindi: {
      title: "विशेष पूजा सेवाएं",
      subtitle: "प्रामाणिक वैदिक अनुष्ठान और दिव्य आशीर्वाद",
      bookNow: "अभी बुक करें",
      learnMore: "और जानें",
      features: "विशेषताएं",
      benefits: "लाभ",
      process: "प्रक्रिया",
      requirements: "आवश्यकताएं",
      pricing: "मूल्य निर्धारण",
      contact: "संपर्क करें",
      duration: "अवधि",
      price: "मूल्य",
      includes: "शामिल है",
      whyPerform: "क्यों करें",
      ritualFlow: "अनुष्ठान प्रवाह",
      bookingSteps: "बुकिंग चरण",
      auspiciousTiming: "शुभ समय",
      targetAudience: "किसके लिए",
      overview: "अवलोकन",
      details: "विवरण",
      schedule: "कार्यक्रम",
      selectDuration: "अवधि चुनें",
      dailySchedule: "दैनिक कार्यक्रम",
      totalChants: "कुल मंत्र जाप",
      purpose: "उद्देश्य",
    },
    english: {
      title: "Special Pooja Services",
      subtitle: "Authentic Vedic Rituals and Divine Blessings",
      bookNow: "Book Now",
      learnMore: "Learn More",
      features: "Features",
      benefits: "Benefits",
      process: "Process",
      requirements: "Requirements",
      pricing: "Pricing",
      contact: "Contact",
      duration: "Duration",
      price: "Price",
      includes: "Includes",
      whyPerform: "Why Perform",
      ritualFlow: "Ritual Flow",
      bookingSteps: "Booking Steps",
      auspiciousTiming: "Auspicious Timing",
      targetAudience: "Target Audience",
      overview: "Overview",
      details: "Details",
      schedule: "Schedule",
      selectDuration: "Select Duration",
      dailySchedule: "Daily Schedule",
      totalChants: "Total Chants",
      purpose: "Purpose",
    },
  };

  const t = translations[language];

  const PujaCard = ({ puja }) => (
    <div className="group bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl border-2 border-amber-200/60 hover:border-amber-400/80 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 to-orange-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
          <div className="flex-1">
            <h3
              className={`text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight ${language === "hindi" ? "font-['Noto_Sans_Devanagari']" : "font-serif"}`}
            >
              {language === "hindi" ? puja.name : puja.title}
            </h3>
            <div className="flex items-center gap-2 text-amber-600 mb-2">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold text-sm md:text-base">
                {puja.brand}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">
                {puja.ritualSpecs?.duration || "1 Day"}
              </span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-xl shadow-md">
              <div className="text-lg md:text-xl lg:text-2xl font-bold">
                {puja.price}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 md:p-5 mb-6 border border-amber-200/50 shadow-sm">
          <p
            className={`text-gray-700 leading-relaxed text-sm md:text-base ${language === "hindi" ? "font-['Noto_Sans_Devanagari']" : ""}`}
          >
            {puja.detailedDescription.length > 200
              ? puja.detailedDescription.slice(0, 200) + "..."
              : puja.detailedDescription}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {puja.features?.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3 bg-white/80 rounded-lg border border-amber-200/50 hover:bg-amber-50/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span
                className={`text-xs md:text-sm text-gray-700 font-medium ${language === "hindi" ? "font-['Noto_Sans_Devanagari']" : ""}`}
              >
                {feature.length > 30 ? feature.slice(0, 30) + "..." : feature}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate(`/special-pooja/${createSlug(puja.name)}`)}
            className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 border-2 border-transparent hover:border-amber-300"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm md:text-base">{t.learnMore}</span>
          </button>
          <button className="flex-1 bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-50 hover:border-amber-600 font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
            <Phone className="w-5 h-5" />
            <span className="text-sm md:text-base">{t.bookNow}</span>
          </button>
        </div>
      </div>
    </div>
  );

  const DurgaPujaCard = () => (
    <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-divine-xl border-3 border-purple-300/60 hover:border-purple-500/80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-float-up-down">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/20 rounded-3xl blur-sm"></div>

      <div className="relative">
        {/* Header */}
        <div className="text-center mb-6">
          <h3
            className={`text-2xl md:text-3xl font-bold text-gray-900 mb-2 ${language === "hindi" ? "hindi-heading" : ""}`}
          >
            {language === "hindi" ? poojaData.name : poojaData.englishName}
          </h3>
          <div className="flex items-center justify-center gap-2 text-purple-600">
            <Flame className="w-5 h-5" />
            <span className="font-semibold">
              {language === "hindi" ? poojaData.brand : poojaData.englishBrand}
            </span>
          </div>
        </div>

        {/* Duration Options */}
        <div className="mb-6">
          <h4
            className={`text-lg font-semibold text-gray-800 mb-3 ${language === "hindi" ? "hindi-heading" : ""}`}
          >
            {t.selectDuration}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {poojaData.availableOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedDuration(index)}
                className={`p-3 rounded-xl border-2 transition-all duration-300 text-sm font-medium ${
                  selectedDuration === index
                    ? "border-purple-500 bg-purple-50 text-purple-700"
                    : "border-purple-200 hover:border-purple-400 hover:bg-purple-50/50"
                }`}
              >
                {language === "hindi" ? option.format : option.english}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Duration Details */}
        {poojaData.dailySchedule[selectedDuration] && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 mb-6 border-2 border-purple-200/50">
            <h5
              className={`font-semibold text-purple-800 mb-2 ${language === "hindi" ? "hindi-heading" : ""}`}
            >
              {language === "hindi"
                ? poojaData.dailySchedule[selectedDuration].title
                : poojaData.dailySchedule[selectedDuration].englishTitle}
            </h5>
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1 text-sm text-purple-700">
                <Target className="w-4 h-4" />
                <span>
                  {t.totalChants}:{" "}
                  {poojaData.dailySchedule[selectedDuration].totalChants}
                </span>
              </div>
            </div>
            <p
              className={`text-gray-700 text-sm ${language === "hindi" ? "hindi-body" : ""}`}
            >
              {language === "hindi"
                ? poojaData.dailySchedule[selectedDuration].purpose
                : poojaData.dailySchedule[selectedDuration].englishPurpose}
            </p>
          </div>
        )}

        {/* Description */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 mb-6 border-2 border-purple-200/50">
          <p
            className={`text-gray-700 leading-relaxed ${language === "hindi" ? "hindi-body" : ""}`}
          >
            {language === "hindi"
              ? poojaData.description
              : poojaData.englishDescription}
          </p>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 p-3 bg-white/80 rounded-xl border border-purple-200/50">
            <Clock className="w-5 h-5 text-purple-600" />
            <div>
              <div className="text-sm font-medium text-gray-800">
                {t.duration}
              </div>
              <div
                className={`text-xs text-gray-600 ${language === "hindi" ? "hindi-body" : ""}`}
              >
                {language === "hindi"
                  ? poojaData.duration
                  : poojaData.englishDuration}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 bg-white/80 rounded-xl border border-purple-200/50">
            <Calendar className="w-5 h-5 text-purple-600" />
            <div>
              <div className="text-sm font-medium text-gray-800">
                {t.auspiciousTiming}
              </div>
              <div
                className={`text-xs text-gray-600 ${language === "hindi" ? "hindi-body" : ""}`}
              >
                {language === "hindi"
                  ? poojaData.auspiciousDates
                  : poojaData.englishAuspiciousDates}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate("/special-pooja/durga-shatchandi-puja")}
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Book className="w-5 h-5" />
            {t.learnMore}
          </button>
          <button className="flex-1 bg-white border-2 border-purple-500 text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            {t.bookNow}
          </button>
        </div>
      </div>
    </div>
  );

  const DetailModal = ({ puja, onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <h2
              className={`text-2xl md:text-3xl font-bold text-gray-900 ${language === "hindi" ? "hindi-heading" : ""}`}
            >
              {language === "hindi" ? puja.name : puja.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              ✕
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {["overview", "benefits", "process", "requirements"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-amber-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-amber-100"
                }`}
              >
                {t[tab] || tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200/50">
                <p
                  className={`text-gray-700 leading-relaxed ${language === "hindi" ? "hindi-body" : ""}`}
                >
                  {puja.detailedDescription}
                </p>
              </div>

              {puja.ritualSpecs && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white border border-amber-200 rounded-xl">
                    <Users className="w-6 h-6 text-amber-600 mb-2" />
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Vedic Expertise
                    </h4>
                    <p className="text-sm text-gray-600">
                      {puja.ritualSpecs.vedicExpertise}
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-amber-200 rounded-xl">
                    <Clock className="w-6 h-6 text-amber-600 mb-2" />
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Duration
                    </h4>
                    <p className="text-sm text-gray-600">
                      {puja.ritualSpecs.duration}
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-amber-200 rounded-xl">
                    <Calendar className="w-6 h-6 text-amber-600 mb-2" />
                    <h4 className="font-semibold text-gray-800 mb-1">Timing</h4>
                    <p className="text-sm text-gray-600">
                      {puja.ritualSpecs.timing}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "benefits" && (
            <div className="space-y-4">
              {puja.benefits?.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span
                    className={`text-gray-700 ${language === "hindi" ? "hindi-body" : ""}`}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "process" && (
            <div className="space-y-4">
              {puja.ritualFlow?.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200"
                >
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4
                      className={`font-semibold text-gray-800 mb-1 ${language === "hindi" ? "hindi-heading" : ""}`}
                    >
                      {step.title}
                    </h4>
                    <p
                      className={`text-gray-600 text-sm ${language === "hindi" ? "hindi-body" : ""}`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "requirements" && puja.requirements && (
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Pandit Requirements
                </h4>
                <p
                  className={`text-gray-700 text-sm ${language === "hindi" ? "hindi-body" : ""}`}
                >
                  {puja.requirements.pandit}
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Samagri Requirements
                </h4>
                <p
                  className={`text-gray-700 text-sm ${language === "hindi" ? "hindi-body" : ""}`}
                >
                  {puja.requirements.samagri}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-3xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              {t.bookNow}
            </button>
            <button className="flex-1 bg-white border-2 border-amber-500 text-amber-600 font-bold py-3 px-6 rounded-full hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              {t.contact}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Detail View Component for individual puja
  const PujaDetailView = ({ puja }) => (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-orange-50/20 py-12 px-4">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto mb-8">
        <button
          onClick={() => navigate("/special-pooja")}
          className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Special Poojas
        </button>
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-3 border-amber-300/60">
          <h1
            className={`text-4xl md:text-6xl font-bold text-gray-900 mb-4 pt-serif-bold ${language === "hindi" ? "hindi-heading" : ""}`}
          >
            {language === "hindi" ? puja.name : puja.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-amber-600 mb-4">
            <Star className="w-6 h-6 fill-current" />
            <span className="font-semibold text-xl">{puja.brand}</span>
          </div>
          <div className="text-3xl font-bold text-orange-600 mb-4">
            {puja.price}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex gap-2 justify-center overflow-x-auto">
          {["overview", "benefits", "process", "requirements"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeTab === tab
                  ? "bg-amber-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-amber-100 border border-amber-200"
              }`}
            >
              {t[tab] || tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-3 border-amber-300/60">
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200/50">
                <p
                  className={`text-gray-700 leading-relaxed text-lg ${language === "hindi" ? "hindi-body" : ""}`}
                >
                  {puja.detailedDescription}
                </p>
              </div>

              {puja.ritualSpecs && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white border-2 border-amber-200 rounded-xl shadow-lg">
                    <Users className="w-8 h-8 text-amber-600 mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">
                      Vedic Expertise
                    </h4>
                    <p className="text-gray-600">
                      {puja.ritualSpecs.vedicExpertise}
                    </p>
                  </div>
                  <div className="p-6 bg-white border-2 border-amber-200 rounded-xl shadow-lg">
                    <Clock className="w-8 h-8 text-amber-600 mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">
                      Duration
                    </h4>
                    <p className="text-gray-600">{puja.ritualSpecs.duration}</p>
                  </div>
                  <div className="p-6 bg-white border-2 border-amber-200 rounded-xl shadow-lg">
                    <Calendar className="w-8 h-8 text-amber-600 mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">
                      Timing
                    </h4>
                    <p className="text-gray-600">{puja.ritualSpecs.timing}</p>
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {puja.features?.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span
                      className={`text-gray-700 font-medium ${language === "hindi" ? "hindi-body" : ""}`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "benefits" && (
            <div className="space-y-4">
              {puja.benefits?.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-green-50 rounded-xl border border-green-200 shadow-sm"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span
                    className={`text-gray-700 text-lg ${language === "hindi" ? "hindi-body" : ""}`}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "process" && (
            <div className="space-y-6">
              {puja.ritualFlow?.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 bg-blue-50 rounded-xl border border-blue-200 shadow-sm"
                >
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4
                      className={`font-semibold text-gray-800 mb-2 text-lg ${language === "hindi" ? "hindi-heading" : ""}`}
                    >
                      {step.title}
                    </h4>
                    <p
                      className={`text-gray-600 ${language === "hindi" ? "hindi-body" : ""}`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "requirements" && puja.requirements && (
            <div className="space-y-6">
              <div className="p-6 bg-purple-50 rounded-xl border border-purple-200 shadow-sm">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2 text-lg">
                  <Users className="w-6 h-6" />
                  Pandit Requirements
                </h4>
                <p
                  className={`text-gray-700 ${language === "hindi" ? "hindi-body" : ""}`}
                >
                  {puja.requirements.pandit}
                </p>
              </div>
              <div className="p-6 bg-orange-50 rounded-xl border border-orange-200 shadow-sm">
                <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2 text-lg">
                  <Gift className="w-6 h-6" />
                  Samagri Requirements
                </h4>
                <p
                  className={`text-gray-700 ${language === "hindi" ? "hindi-body" : ""}`}
                >
                  {puja.requirements.samagri}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border-3 border-amber-300/60">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-lg">
              <Phone className="w-6 h-6" />
              {t.bookNow}
            </button>
            <button className="flex-1 bg-white border-2 border-amber-500 text-amber-600 font-bold py-4 px-8 rounded-full hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-lg">
              <Mail className="w-6 h-6" />
              {t.contact}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Durga Puja Detail View
  const DurgaPujaDetailView = () => (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-pink-50/20 py-12 px-4">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto mb-8">
        <button
          onClick={() => navigate("/special-pooja")}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Special Poojas
        </button>
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-3 border-purple-300/60">
          <h1
            className={`text-4xl md:text-6xl font-bold text-gray-900 mb-4 pt-serif-bold ${language === "hindi" ? "hindi-heading" : ""}`}
          >
            {language === "hindi" ? poojaData.name : poojaData.englishName}
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-600 mb-4">
            <Flame className="w-6 h-6" />
            <span className="font-semibold text-xl">
              {language === "hindi" ? poojaData.brand : poojaData.englishBrand}
            </span>
          </div>
        </div>
      </div>

      {/* Duration Selection */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-3 border-purple-300/60">
          <h3
            className={`text-2xl font-bold text-center text-gray-900 mb-6 ${language === "hindi" ? "hindi-heading" : ""}`}
          >
            {t.selectDuration}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {poojaData.availableOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedDuration(index)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 font-medium ${
                  selectedDuration === index
                    ? "border-purple-500 bg-purple-50 text-purple-700 shadow-lg"
                    : "border-purple-200 hover:border-purple-400 hover:bg-purple-50/50"
                }`}
              >
                {language === "hindi" ? option.format : option.english}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Duration Details */}
      {poojaData.dailySchedule[selectedDuration] && (
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-3 border-purple-300/60">
            <h4
              className={`text-2xl font-bold text-purple-800 mb-4 text-center ${language === "hindi" ? "hindi-heading" : ""}`}
            >
              {language === "hindi"
                ? poojaData.dailySchedule[selectedDuration].title
                : poojaData.dailySchedule[selectedDuration].englishTitle}
            </h4>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-purple-700 bg-purple-100 px-4 py-2 rounded-full">
                <Target className="w-5 h-5" />
                <span className="font-semibold">
                  {t.totalChants}:{" "}
                  {poojaData.dailySchedule[selectedDuration].totalChants}
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200/50">
              <p
                className={`text-gray-700 leading-relaxed text-lg text-center ${language === "hindi" ? "hindi-body" : ""}`}
              >
                {language === "hindi"
                  ? poojaData.dailySchedule[selectedDuration].purpose
                  : poojaData.dailySchedule[selectedDuration].englishPurpose}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Description */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-3 border-purple-300/60">
          <h3
            className={`text-2xl font-bold text-center text-gray-900 mb-6 ${language === "hindi" ? "hindi-heading" : ""}`}
          >
            About This Puja
          </h3>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200/50">
            <p
              className={`text-gray-700 leading-relaxed text-lg ${language === "hindi" ? "hindi-body" : ""}`}
            >
              {language === "hindi"
                ? poojaData.description
                : poojaData.englishDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border-3 border-purple-300/60">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-lg">
              <Phone className="w-6 h-6" />
              {t.bookNow}
            </button>
            <button className="flex-1 bg-white border-2 border-purple-500 text-purple-600 font-bold py-4 px-8 rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-lg">
              <Mail className="w-6 h-6" />
              {t.contact}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // If viewing a specific puja detail
  if (selectedPuja) {
    return <PujaDetailView puja={selectedPuja} />;
  }

  // If viewing Durga Puja detail
  if (isDurgaPuja) {
    return <DurgaPujaDetailView />;
  }

  // Main listing page
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-orange-50/20 py-12 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-3 border-amber-300/60 hover:border-amber-500/80 transition-all duration-500 transform hover:scale-105">
          <h1
            className={`text-4xl md:text-6xl font-bold text-gray-900 mb-4 pt-serif-bold ${language === "hindi" ? "hindi-heading" : ""}`}
          >
            {t.title}
          </h1>
          <p
            className={`text-xl text-gray-700 max-w-3xl mx-auto ${language === "hindi" ? "hindi-body" : ""}`}
          >
            {t.subtitle}
          </p>
          <div className="flex justify-center gap-2 mt-6">
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

      {/* Spacial Content Poojas */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 ${language === "hindi" ? "hindi-heading" : ""}`}
        >
          Premium Vedic Rituals
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 max-w-2xl">
            {Spacialcontent.map((puja) => (
              <PujaCard key={puja.id} puja={puja} />
            ))}
          </div>
        </div>
      </div>

      {/* Durga Puja Section */}
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 ${language === "hindi" ? "hindi-heading" : ""}`}
        >
          {language === "hindi"
            ? "दुर्गा शतचंडी पूजा"
            : "Durga Shatchandi Puja"}
        </h2>
        <div className="max-w-4xl mx-auto">
          <DurgaPujaCard />
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-3 border-amber-300/60 text-center">
          <h3
            className={`text-2xl md:text-3xl font-bold text-gray-900 mb-6 ${language === "hindi" ? "hindi-heading" : ""}`}
          >
            {language === "hindi"
              ? "अधिक जानकारी के लिए संपर्क करें"
              : "Contact for More Information"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-2 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <Phone className="w-5 h-5 text-amber-600" />
              <span className="font-medium text-gray-800">+91 7054790404</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <Mail className="w-5 h-5 text-amber-600" />
              <span className="font-medium text-gray-800">
                bhagwanpoojalive@gmail.com
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <MapPin className="w-5 h-5 text-amber-600" />
              <span className="font-medium text-gray-800">
                {language === "hindi"
                  ? "दारागंज प्रयागराज, उत्तर प्रदेश"
                  : "daraganj prayagraj Uttarpradesh"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacialPooja;
