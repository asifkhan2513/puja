import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { items, howItWorksData } from "./Chadava";
import { useLanguage } from "../../contexts/LanguageContext";

import Loader from "../Loader";
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
import LazyImage from "../LazyImage";

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
          (i) => createSlug(i.titleEn || i.title) === slug,
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
    return <Loader />;
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
                    `/chadhava/${createSlug(item.titleEn || item.title)}`,
                  )
                }
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer border-2 border-orange-100/50 hover:border-orange-300 transform hover:scale-[1.03] animate-fade-in-up relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full  group-hover:opacity-70 transition-opacity"></div>

                {/* Image Section */}
                <div className="relative h-64 md:h-55 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                  <LazyImage
                    src={item.image}
                    alt={isHindi ? item.title : item.titleEn}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop";
                    }}
                  />

                  {/* Sacred Badge */}
                  <div className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-orange-200 shadow-md transform group-hover:scale-105 transition-transform">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-orange-500 animate-pulse" />
                      <span className="text-xs font-semibold text-orange-700 uppercase tracking-wide">
                        {isHindi ? "पवित्र" : "Sacred"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}

                <div className="p-6 relative z-10">
                  <p className="text-orange-800 font-bold text-sm font-medium flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {isHindi ? item.name : item.nameEn}
                  </p>
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
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full px-4 py-2 font-bold text-sm flex items-center gap-2 hover:from-orange-700 hover:to-red-700 transition-all shadow-lg cursor-pointer transform group-hover:scale-105 hover:shadow-xl">
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
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 shrink-0">
            <div className="relative w-102 max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-xl border-2 border-white transform hover:scale-[1.02] transition-transform duration-500">
              <div className="w-102 h-60 bg-gray-100 mx-auto">
                <LazyImage
                  src={selectedItem.image}
                  alt={isHindi ? selectedItem.title : selectedItem.titleEn}
                  className="w-102 h-60 object-cover rounded-2xl"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop";
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-orange-200 shadow-md">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
                  <span className="text-sm font-semibold text-orange-700">
                    {isHindi ? "पवित्र चढ़ावा" : "Sacred Offering"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full">
            <div className="space-y-6">
              {/* Title Section */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 leading-tight font-serif">
                  {isHindi ? selectedItem.title : selectedItem.titleEn}
                </h1>
                <p className="text-lg md:text-xl text-orange-600 font-semibold mb-4">
                  {isHindi ? selectedItem.name : selectedItem.nameEn}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">
                    {isHindi ? "शास्त्रसम्मत विधि" : "Scriptural Method"}
                  </span>
                </div>
              </div>

              {/* Importance Section */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="p-2 bg-orange-100 rounded-lg shadow-sm">
                    <BookOpen className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="text-orange-800 font-bold text-lg">
                    {isHindi
                      ? "महत्व एवं शास्त्रीय आधार"
                      : "Importance & Scriptural Basis"}
                  </h3>
                </div>

                <div className="relative z-10">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {showFullImportance
                      ? isHindi
                        ? selectedItem.importance
                        : selectedItem.importanceEn
                      : (isHindi
                          ? selectedItem.importance
                          : selectedItem.importanceEn
                        ).slice(0, 250) + "..."}
                  </p>

                  <button
                    onClick={() => setShowFullImportance(!showFullImportance)}
                    className="text-orange-600 font-semibold text-sm hover:underline mt-3 flex items-center gap-1"
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
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

          <div className="flex items-center gap-3 mb-5 relative z-10">
            <div className="p-2 bg-green-100 rounded-lg shadow-sm">
              <Sparkles className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-green-800 font-bold text-lg">
              {isHindi ? "लाभ एवं फल" : "Benefits & Results"}
            </h3>
          </div>

          <div className="space-y-3 relative z-10">
            {(showFullBenefits
              ? isHindi
                ? selectedItem.benefits
                : selectedItem.benefitsEn
              : (isHindi
                  ? selectedItem.benefits
                  : selectedItem.benefitsEn
                ).slice(0, 3)
            ).map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-green-50/50 rounded-lg hover:bg-green-50 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium leading-relaxed text-sm md:text-base">
                  {benefit}
                </span>
              </div>
            ))}

            {(isHindi ? selectedItem.benefits : selectedItem.benefitsEn)
              .length > 3 && (
              <button
                onClick={() => setShowFullBenefits(!showFullBenefits)}
                className="text-green-600 font-semibold text-sm hover:underline mt-3 flex items-center gap-1"
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
      </div>

      {/* Why Section */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="p-2 bg-blue-100 rounded-lg shadow-sm">
              <Heart className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-blue-800 font-bold text-lg">
              {isHindi ? "क्यों अर्पित करें?" : "Why Offer?"}
            </h3>
          </div>

          <div className="relative z-10">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {isHindi ? selectedItem.why.hindi : selectedItem.why.english}
            </p>
          </div>
        </div>
      </div>

      {/* Mantra Section (if available) */}
      {selectedItem.mantra && (
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

            <div className="flex items-center gap-3 mb-5 relative z-10">
              <div className="p-2 bg-purple-100 rounded-lg shadow-sm">
                <Quote className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-purple-800 font-bold text-lg">
                {isHindi ? "मंत्र" : "Mantra"}
              </h3>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="bg-purple-50/50 p-4 rounded-lg">
                <p className="text-base md:text-lg font-semibold text-gray-800 text-center leading-relaxed">
                  {selectedItem.mantra.sanskrit}
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 italic text-center">
                  {selectedItem.mantra.transliteration}
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-gray-700 text-center">
                  <strong>{isHindi ? "अर्थ:" : "Meaning:"}</strong>{" "}
                  {selectedItem.mantra.translation}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Button - Centered and Responsive */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-xl shadow-lg shadow-orange-200 transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 mx-auto text-sm md:text-base w-full sm:w-auto max-w-xs sm:max-w-none">
          <Heart className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-center">
            {isHindi ? "श्रद्धापूर्वक अर्पित करें" : "Offer with Devotion"}
          </span>
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* How it Works Section */}
      <div className="max-w-6xl mx-auto px-4 mt-16 mb-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {isHindi ? howItWorksData.headingHi : howItWorksData.heading}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            {isHindi ? "सरल और दिव्य प्रक्रिया" : "Simple and Divine Process"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {howItWorksData.steps.map((step, idx) => (
            <div key={step.id} className="relative group">
              {/* Decorative Background */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform opacity-40"></div>

              <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-orange-100 h-full flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="relative mb-6">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shadow-md border-2 border-orange-100">
                    <LazyImage
                      src={step.image}
                      alt={isHindi ? step.titleHi : step.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white flex items-center justify-center font-bold shadow-md text-sm md:text-base border-2 border-white">
                    {idx + 1}
                  </div>
                </div>

                <h4 className="font-bold text-lg md:text-xl text-gray-800 mb-3 leading-tight">
                  {isHindi ? step.titleHi : step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed flex-1 text-sm md:text-base">
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
