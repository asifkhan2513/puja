import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  ArrowLeft,
  Share2,
  Shield,
  Heart,
  Zap,
  Award,
  Sun,
  Moon,
  Sparkles,
  ChevronRight,
  Flame,
  Flower,
  Music,
} from "lucide-react";
import UpcomingEvent, { howItWorksData } from "./UpcomingEvent";
import { format, parseISO } from "date-fns";

const createSlug = (text) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

const PoojaDetailView = ({ slug, language = "hindi" }) => {
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (slug) {
      const foundEvent = UpcomingEvent.find((e) => {
        const hindiSlug = createSlug(e.poojaName);
        const englishSlug = createSlug(e.poojaNameEn);
        return hindiSlug === slug || englishSlug === slug;
      });
      setEvent(foundEvent);
    }
  }, [slug]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  const getCostLabel = (key) => {
    switch (key) {
      case "single":
        return "Single Person (एक व्यक्ति)";
      case "twoPersons":
        return "Couple (दो व्यक्ति)";
      case "familyOf4":
        return "Family of 4 (4 लोग)";
      case "familyOf6":
        return "Family of 6 (6 लोग)";
      default:
        return key
          .replace(/([A-Z])/g, " $1")
          .trim()
          .replace(/^./, (str) => str.toUpperCase());
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <div className="text-center animate-pulse">
          <Flower className="w-12 h-12 text-orange-500 mx-auto mb-4 animate-spin-slow" />
          <p className="text-gray-600 font-medium">Loading divine details...</p>
        </div>
      </div>
    );
  }

  const isHindi = language === "hindi";
  const eventDate = parseISO(event.date);

  // Helper to render dynamic icons based on index or content could be enhanced
  const getSectionIcon = (index) => {
    const icons = [Flame, Sparkles, MapPin, Award, Sun, Moon];
    const Icon = icons[index % icons.length];
    return <Icon className="w-5 h-5" />;
  };

  const getSectionColor = (index) => {
    const colors = [
      "bg-orange-100 text-orange-600",
      "bg-amber-100 text-amber-600",
      "bg-red-100 text-red-600",
      "bg-yellow-100 text-yellow-600",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-orange-50 font-sans pb-24">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] bg-gray-900/90 text-white px-6 py-3 rounded-full shadow-2xl backdrop-blur-sm flex items-center gap-3 animate-fade-in-up border border-white/20">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <span className="font-medium">Link copied to clipboard!</span>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-amber-600 to-orange-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Sun className="w-64 h-64 text-yellow-300 animate-spin-slow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-12 sm:pt-16 sm:pb-20 relative z-10">
          {/* Back Button within Hero */}
          <div className="flex justify-between items-start mb-6">
            <button
              onClick={() => navigate(-1)}
              className="group flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm border-1 "
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back</span>
            </button>
            <button
              onClick={handleShare}
              className="p-2 border-1 text-white/90 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Image */}
            <div className="w-full md:w-1/3 max-w-sm shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src={event.image}
                  alt={event.poojaName}
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-yellow-300 text-sm font-bold mb-1">
                    <MapPin className="w-4 h-4" />
                    {isHindi ? "प्रयागराज" : "Prayagraj"}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3 text-white text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wider uppercase mb-4 text-yellow-200 border border-yellow-200/30">
                {event.tithi} • {event.paksha}
              </div>{" "}
              <br />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight shadow-sm bg-white/20 backdrop-blur-sm rounded-full p-2 py-4 text-white! px-8 inline-block">
                {isHindi ? event.poojaName : event.poojaNameEn}
              </h1>
              {/* Display only Page 1 Content here as requested */}
              {event.detailedPages && (
                <div className="mb-4">
                  <p className="text-2xl font-bold">
                    {(() => {
                      const page1 = event.detailedPages.find(
                        (p) => p.pageNumber === 1
                      );
                      return page1
                        ? isHindi
                          ? page1.content
                          : page1.contentEn
                        : "";
                    })()}
                  </p>
                </div>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 mb-8">
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                  <div className="text-yellow-300 text-lg font-bold mb-1">
                    {event.dateFormatted || format(eventDate, "dd/MM")}
                  </div>
                  <div className="text-xs text-white/80 uppercase tracking-widest">
                    Date
                  </div>
                </div>
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                  <div className="text-yellow-300 text-lg font-bold mb-1">
                    {event.dayHi || format(eventDate, "EEEE")}
                  </div>
                  <div className="text-xs text-white/80 uppercase tracking-widest">
                    Day
                  </div>
                </div>
                {event.nakshatra && (
                  <div className="bg-black/20 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center hidden sm:block">
                    <div className="text-yellow-300 text-lg font-bold mb-1">
                      {event.nakshatra}
                    </div>
                    <div className="text-xs text-white/80 uppercase tracking-widest">
                      Nakshatra
                    </div>
                  </div>
                )}
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                  <div className="text-yellow-300 text-lg font-bold mb-1">
                    {event.time.split(" ")[0]}
                  </div>
                  <div className="text-xs text-white/80 uppercase tracking-widest">
                    Time
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {event.laabh.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white text-orange-700 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg"
                  >
                    <CheckCircle className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Curvy Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-[calc(116%+1.3px)] h-[60px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-orange-50"
            ></path>
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 mt-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Dynamic Rendering of Detailed Pages (Excluding Page 1) */}
            {event.detailedPages &&
              event.detailedPages
                .filter((page) => page.pageNumber !== 1)
                .map((page, idx) => (
                  <div
                    key={idx}
                    className={`rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-orange-100 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group ${
                      idx % 2 === 0
                        ? "bg-white"
                        : "bg-linear-to-br from-amber-50 to-orange-50"
                    }`}
                  >
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/20 rounded-bl-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <span
                          className={`p-3 rounded-2xl shadow-md ${getSectionColor(
                            idx
                          )}`}
                        >
                          {getSectionIcon(page.pageNumber)}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-serif tracking-wide">
                          {isHindi ? page.title : page.titleEn || page.title}
                        </h2>
                      </div>

                      {page.content ? (
                        <p className="text-gray-700 text-lg leading-loose font-medium opacity-90">
                          {isHindi
                            ? page.content
                            : page.contentEn || page.content}
                        </p>
                      ) : null}

                      {page.blessings && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                          {page.blessings.map((blessing, bIdx) => (
                            <div
                              key={bIdx}
                              className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-orange-100 hover:border-orange-300 flex items-start gap-3 transition-colors duration-200"
                            >
                              <div className="mt-1 bg-linear-to-br from-green-100 to-green-200 p-1.5 rounded-full text-green-700 shrink-0 shadow-inner">
                                <CheckCircle className="w-4 h-4" />
                              </div>
                              <span className="font-semibold text-gray-800 text-sm leading-snug">
                                {blessing}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

            {/* About / Context Section - Dynamic */}
            {(event.whyChoose || event.whyChooseEn) && (
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-100 hover:shadow-orange-100/50 transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3 font-serif">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    <Flower className="w-6 h-6" />
                  </div>
                  {isHindi ? "पूजन के बारे में" : "About the Pooja"}
                </h2>
                <div className="space-y-4">
                  <ul className="grid grid-cols-1 gap-4">
                    {(isHindi
                      ? event.whyChoose
                      : event.whyChooseEn || event.whyChoose
                    ).map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-4 p-4 rounded-2xl bg-orange-50/50 hover:bg-orange-50 transition-colors border border-transparent hover:border-orange-100 group"
                      >
                        <div className="h-3 w-3 rounded-full bg-linear-to-r from-orange-400 to-red-500 mt-2 shrink-0 group-hover:scale-125 transition-transform duration-300 shadow-md"></div>
                        <span className="text-gray-700 font-medium leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Detailed Benefits Grid - Dynamic */}
            {event.detailedBenefits && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3 pl-2 font-serif">
                  <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                    <Award className="w-6 h-6" />
                  </div>
                  {isHindi ? "पूजा लाभ" : "Pooja Benefits"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.detailedBenefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-6 border-b-4 border-orange-400 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>

                      <div className="flex items-center gap-4 mb-4 relative z-10">
                        <div className="flex items-center justify-center w-10 h-10 bg-linear-to-br from-orange-400 to-red-500 text-white font-bold text-lg rounded-xl shadow-md group-hover:rotate-6 transition-transform duration-300">
                          {idx + 1}
                        </div>
                        <h3 className="font-bold text-xl text-gray-800 leading-tight">
                          {isHindi
                            ? benefit.title
                            : benefit.titleEn || benefit.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium pl-14 opacity-80 relative z-10">
                        {isHindi
                          ? benefit.description
                          : benefit.descriptionEn || benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking Card (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Dynamic Booking Card */}
              <div className="bg-white rounded-3xl shadow-2xl border border-orange-200 overflow-hidden transform transition-all hover:scale-[1.02]">
                <div className="bg-linear-to-r from-orange-500 to-amber-600 text-white p-6 text-center">
                  <h3 className="text-xl font-bold mb-1 text-white!">
                    {isHindi ? "विशेष पूजा अनुष्ठान" : "Special Pooja Ritual"}
                  </h3>
                  <p className="text-orange-100 text-sm">
                    {isHindi ? "सीमित स्लॉट उपलब्ध" : "Limited slots available"}
                  </p>
                </div>

                <div className="p-6">
                  {/* Dynamic Cost Listing */}
                  {event.cost && (
                    <div className="space-y-4 mb-8">
                      {Object.entries(event.cost).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex items-center justify-between p-3 rounded-xl border border-orange-100 hover:border-orange-400 hover:bg-orange-50 transition-colors cursor-pointer group"
                        >
                          <span className="font-medium text-gray-700 text-sm group-hover:text-orange-700">
                            {getCostLabel(key)}
                          </span>
                          <div className="flex items-center text-lg font-bold text-gray-800 group-hover:text-orange-600">
                            <span className="text-sm mr-1">₹</span>
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-3 mb-8 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm p-3 bg-gray-50 rounded-xl">
                      <span className="text-gray-600">Date</span>
                      <span className="font-bold text-gray-800">
                        {event.dateFormatted}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm p-3 bg-gray-50 rounded-xl">
                      <span className="text-gray-600">Location</span>
                      <span className="font-bold text-gray-800 text-right w-1/2">
                        {isHindi ? event.place : event.placeEn}
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-linear-to-r from-orange-600 to-red-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 active:scale-95 transition-all text-lg flex items-center justify-center gap-2 group">
                    {isHindi ? "अभी बुक करें" : "BOOK NOW"}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Safe & Secure Payment
                  </p>
                </div>
              </div>

              {/* Inclusions Card - Dynamic */}
              {(event.inclusions || event.inclusionsEn) && (
                <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-6">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {isHindi ? "समावेशन" : "Inclusions"}
                  </h3>
                  <ul className="space-y-3">
                    {(isHindi
                      ? event.inclusions
                      : event.inclusionsEn || event.inclusions
                    ).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <span className="bg-orange-100 text-orange-600 rounded-full p-0.5 mt-0.5">
                          <CheckCircle className="w-3 h-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* How it Works Section - Dynamic */}
        <div className="mt-16 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              {isHindi ? howItWorksData.headingHi : howItWorksData.heading}
            </h2>
            <p className="text-gray-500 mt-2">
              {isHindi ? "सरल और दिव्य प्रक्रिया" : "Simple and Divine Process"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute top-0 left-0 w-full h-full bg-orange-100 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-orange-50 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3">
                    {isHindi ? step.titleHi : step.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {isHindi ? step.descriptionHi : step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoojaDetailView;
