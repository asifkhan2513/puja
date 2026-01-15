import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { items, howItWorksData } from "./Chadava";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  MapPin,
  ChevronRight,
  ArrowLeft,
  CheckCircle,
  Sparkles,
  Clock,
  Share2,
  Check,
  BookOpen,
  Heart,
  Star,
  Quote,
} from "lucide-react";

// Helper to generate slug
const createSlug = (title) => {
  const text =
    typeof title === "string" ? title : title?.titleEn || title?.title || "";
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

const Chadhava = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const { language } = useLanguage();
  const [showFullBenefits, setShowFullBenefits] = useState(false);
  const [showFullImportance, setShowFullImportance] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const isHindi = language === "hindi";

  // Handle URL Slug / Selection
  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const found = items.find(
          (i) => createSlug(i.titleEn || i.title) === slug
        );
        if (found) {
          setSelectedItem(found);
        } else {
          navigate("/chadhava");
        }
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSelectedItem(null);
    }
  }, [slug, navigate]);

  const handleBack = () => {
    navigate("/chadhava");
  };

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-red-300 border-b-transparent rounded-full animate-spin animate-reverse"></div>
        </div>
      </div>
    );
  }

  // List View
  if (!selectedItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 p-4 font-sans relative pb-20">
        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-xl animate-bounce">
            <Check className="w-4 h-4" />
            <span className="text-sm font-medium">
              Link copied to clipboard!
            </span>
          </div>
        )}

        <div className="max-w-7xl mx-auto pt-8">
          {/* Header */}
          <header className="mb-16 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 via-red-200/20 to-yellow-200/20 rounded-3xl blur-3xl"></div>
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 mb-6 font-serif drop-shadow-sm animate-pulse">
                {isHindi ? "दिव्य चढ़ावा" : "Divine Offerings"}
              </h1>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
                {isHindi
                  ? "अपनी श्रद्धा और भक्ति को भगवान तक पहुँचाएं। शास्त्रसम्मत विधि से चढ़ावा अर्पित करें और दिव्य आशीर्वाद प्राप्त करें।"
                  : "Offer your devotion to the Divine with scriptural procedures and authentic rituals. Receive divine blessings through sacred offerings."}
              </p>
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-200 shadow-lg">
                  <Sparkles className="w-5 h-5 text-orange-500 animate-pulse" />
                  <span className="text-orange-700 font-semibold text-sm">
                    {isHindi
                      ? "पवित्र एवं शास्त्रसम्मत"
                      : "Sacred & Scriptural"}
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={item.id}
                onClick={() =>
                  navigate(
                    `/chadhava/${createSlug(item.titleEn || item.title)}`
                  )
                }
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer border-2 border-orange-100/50 hover:border-orange-300 transform hover:scale-[1.03] animate-fade-in-up relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>

                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                  <img
                    src={item.image}
                    alt={isHindi ? item.title : item.titleEn}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop";
                    }}
                  />

                  {/* Sacred Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl border-2 border-orange-200 shadow-lg transform group-hover:scale-110 transition-transform">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
                      <span className="text-xs font-bold text-orange-700 uppercase tracking-wider">
                        {isHindi ? "पवित्र" : "Sacred"}
                      </span>
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <p className="text-orange-200 text-sm font-medium flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      {isHindi ? item.name : item.nameEn}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative z-10">
                  <h2 className="text-2xl font-bold text-white leading-tight drop-shadow-lg mb-2">
                    {isHindi ? item.title : item.titleEn}
                  </h2>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="font-medium">
                        {isHindi ? "शास्त्रसम्मत विधि" : "Scriptural Method"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Benefits Preview */}
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {isHindi
                        ? item.importance.slice(0, 120) + "..."
                        : item.importanceEn.slice(0, 120) + "..."}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span>
                        {isHindi
                          ? "भक्ति से अर्पित करें"
                          : "Offer with Devotion"}
                      </span>
                    </div>
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full px-6 py-3 font-bold text-sm flex items-center gap-2 hover:from-orange-700 hover:to-red-700 transition-all shadow-lg cursor-pointer transform group-hover:scale-105 hover:shadow-xl">
                      {isHindi ? "अर्पित करें" : "Offer Now"}
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Detail View
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 font-sans pb-20">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-xl animate-bounce">
          <Check className="w-4 h-4" />
          <span className="text-sm font-medium">Link copied to clipboard!</span>
        </div>
      )}

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors text-sm font-medium bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 hover:shadow-xl transform hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          {isHindi ? "वापस" : "Back"}
        </button>

        <button
          onClick={handleShare}
          className="p-3 text-gray-600 hover:text-orange-600 bg-white rounded-full shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:scale-105"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 shrink-0">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src={selectedItem.image}
                alt={isHindi ? selectedItem.title : selectedItem.titleEn}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl border-2 border-orange-200 shadow-lg">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-500 animate-pulse" />
                  <span className="text-sm font-bold text-orange-700">
                    {isHindi ? "पवित्र चढ़ावा" : "Sacred Offering"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full">
            <div className="space-y-8">
              {/* Title Section */}
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight font-serif">
                  {isHindi ? selectedItem.title : selectedItem.titleEn}
                </h1>
                <p className="text-xl text-orange-600 font-semibold mb-6">
                  {isHindi ? selectedItem.name : selectedItem.nameEn}
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">
                    {isHindi ? "शास्त्रसम्मत विधि" : "Scriptural Method"}
                  </span>
                </div>
              </div>

              {/* Importance Section */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-100 hover:shadow-2xl transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>

                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="p-3 bg-orange-100 rounded-xl shadow-sm">
                    <BookOpen className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-orange-800 font-bold text-xl">
                    {isHindi
                      ? "महत्व एवं शास्त्रीय आधार"
                      : "Importance & Scriptural Basis"}
                  </h3>
                </div>

                <div className="relative z-10">
                  <p className="text-gray-700 leading-relaxed text-base">
                    {showFullImportance
                      ? isHindi
                        ? selectedItem.importance
                        : selectedItem.importanceEn
                      : (isHindi
                          ? selectedItem.importance
                          : selectedItem.importanceEn
                        ).slice(0, 300) + "..."}
                  </p>

                  <button
                    onClick={() => setShowFullImportance(!showFullImportance)}
                    className="text-orange-600 font-semibold text-sm hover:underline mt-4 flex items-center gap-1"
                  >
                    {showFullImportance
                      ? isHindi
                        ? "कम देखें"
                        : "Show less"
                      : isHindi
                      ? "और पढ़ें"
                      : "Read more"}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        showFullImportance ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-green-100 hover:shadow-2xl transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>

        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="p-3 bg-green-100 rounded-xl shadow-sm">
            <Sparkles className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-green-800 font-bold text-xl">
            {isHindi ? "लाभ एवं फल" : "Benefits & Results"}
          </h3>
        </div>

        <div className="space-y-4 relative z-10">
          {(showFullBenefits
            ? isHindi
              ? selectedItem.benefits
              : selectedItem.benefitsEn
            : (isHindi ? selectedItem.benefits : selectedItem.benefitsEn).slice(
                0,
                3
              )
          ).map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-3 bg-green-50/50 rounded-xl hover:bg-green-50 transition-colors"
            >
              <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
              <span className="text-gray-700 font-medium leading-relaxed">
                {benefit}
              </span>
            </div>
          ))}

          {(isHindi ? selectedItem.benefits : selectedItem.benefitsEn).length >
            3 && (
            <button
              onClick={() => setShowFullBenefits(!showFullBenefits)}
              className="text-green-600 font-semibold text-sm hover:underline mt-4 flex items-center gap-1"
            >
              {showFullBenefits
                ? isHindi
                  ? "कम देखें"
                  : "Show less"
                : isHindi
                ? "और देखें"
                : "Show more"}
              <ChevronRight
                className={`w-4 h-4 transition-transform ${
                  showFullBenefits ? "rotate-90" : ""
                }`}
              />
            </button>
          )}
        </div>
      </div>

      {/* Why Section */}
      <div className="mt-10 flex flex-col itemc-center! justify-center! bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-100 hover:shadow-2xl transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>

        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="p-3 bg-blue-100 rounded-xl shadow-sm">
            <Heart className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-blue-800 font-bold text-xl">
            {isHindi ? "क्यों अर्पित करें?" : "Why Offer?"}
          </h3>
        </div>

        <div className="relative z-10">
          <p className="text-gray-700 leading-relaxed text-base">
            {isHindi ? selectedItem.why.hindi : selectedItem.why.english}
          </p>
        </div>
      </div>

      {/* Mantra Section (if available) */}
      {selectedItem.mantra && (
        <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-100 hover:shadow-2xl transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-3 bg-purple-100 rounded-xl shadow-sm">
              <Quote className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-purple-800 font-bold text-xl">
              {isHindi ? "मंत्र" : "Mantra"}
            </h3>
          </div>

          <div className="space-y-4 relative z-10">
            <div className="bg-purple-50/50 p-6 rounded-xl">
              <p className="text-lg font-semibold text-gray-800 text-center leading-relaxed">
                {selectedItem.mantra.sanskrit}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-600 italic text-center">
                {selectedItem.mantra.transliteration}
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="text-sm text-gray-700 text-center">
                <strong>{isHindi ? "अर्थ:" : "Meaning:"}</strong>{" "}
                {selectedItem.mantra.translation}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Button - Centered and Responsive */}
      <div className="text-center pt-8">
        <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-8 sm:px-12 rounded-2xl shadow-xl shadow-orange-200 transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 mx-auto text-base sm:text-lg w-full sm:w-auto max-w-sm sm:max-w-none">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-center">
            {isHindi ? "श्रद्धापूर्वक अर्पित करें" : "Offer with Devotion"}
          </span>
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* How it Works Section */}
      <div className="max-w-6xl mx-auto px-4 mt-20 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {isHindi ? howItWorksData.headingHi : howItWorksData.heading}
          </h2>
          <p className="text-gray-600 text-lg">
            {isHindi ? "सरल और दिव्य प्रक्रिया" : "Simple and Divine Process"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorksData.steps.map((step, idx) => (
            <div key={step.id} className="relative group">
              {/* Decorative Background */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-50"></div>

              <div className="relative bg-white p-8 rounded-3xl shadow-xl border-2 border-orange-100 h-full flex flex-col items-center text-center transition-all hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative mb-8">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-orange-100">
                    <img
                      src={step.image}
                      alt={isHindi ? step.titleHi : step.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white flex items-center justify-center font-bold shadow-lg text-lg border-4 border-white">
                    {idx + 1}
                  </div>
                </div>

                <h4 className="font-bold text-xl text-gray-800 mb-4 leading-tight">
                  {isHindi ? step.titleHi : step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed flex-1">
                  {isHindi ? step.descriptionHi : step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chadhava;
