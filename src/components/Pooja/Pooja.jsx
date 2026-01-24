import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader";
import {
  Flame,
  Sparkles,
  Sun,
  Moon,
  Flower,
  Shield,
  Crown,
  Zap,
  Music,
  Mountain,
  Clock,
  Orbit,
  User,
  Search,
  ArrowRight,
  ChevronRight,
  Heart,
  Star,
  Eye,
  Coins,
  Filter,
  X,
  Calendar,
  MapPin,
  Timer,
  BookOpen,
  Sparkle,
  ChevronDown,
} from "lucide-react";
import poojaCategories from "./poojaCategories";
import UpcomingEvent, { howItWorksData } from "./UpcomingEvent";
import PoojaDetailView from "./PoojaDetailView";
import { format, parseISO, isAfter } from "date-fns";
import { useLanguage } from "../../contexts/LanguageContext";

// Utility function to create URL-friendly slugs from pooja names
const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim();
};

// Utility function to find event by slug
const findEventBySlug = (slug) => {
  return UpcomingEvent.find((event) => {
    const hindiSlug = createSlug(event.poojaName);
    const englishSlug = createSlug(event.poojaNameEn);
    return hindiSlug === slug || englishSlug === slug;
  });
};

// Inline styles for custom animations and effects
const styles = `
  @keyframes marquee {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .animate-marquee-scroll {
    display: flex;
    width: max-content;
    animation: marquee 40s linear infinite;
  }
  .animate-marquee-scroll:hover {
    animation-play-state: paused;
  }
  .text-3d {
    text-shadow: 
      0 1px 0 #c2410c, 
      0 2px 0 #9a3412, 
      0 3px 0 #7c2d12, 
      0 4px 0 #7c2d12, 
      0 6px 1px rgba(0,0,0,.1), 
      0 0 5px rgba(0,0,0,.1), 
      0 1px 3px rgba(0,0,0,.3), 
      0 3px 5px rgba(0,0,0,.2), 
      0 5px 10px rgba(0,0,0,.25);
  }
`;

const Pooja = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDeity, setSelectedDeity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPoojaId, setSelectedPoojaId] = useState(null);
  const { language } = useLanguage(); // Use global language context
  const navigate = useNavigate();
  const { slug } = useParams(); // Changed from id to slug
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // If slug is present, show detail view
  if (slug) {
    return <PoojaDetailView slug={slug} language={language} />;
  }

  // Loader
  if (isLoading) {
    return <Loader />;
  }

  // Handle participation - now uses slug instead of ID
  const handleParticipateNow = (event) => {
    // Always use English slug for SEO-friendly URLs
    const poojaSlug = createSlug(event.poojaNameEn);
    navigate(`/pooja/${poojaSlug}`);
  };

  // Map categories to icons and images
  const getCategoryIcon = (heading) => {
    if (heading.includes("रोग") || heading.includes("स्वास्थ्य")) {
      return <Heart className="w-6 h-6" />;
    } else if (heading.includes("विवाह")) {
      return <Crown className="w-6 h-6" />;
    } else if (heading.includes("व्यापार") || heading.includes("नौकरी")) {
      return <Coins className="w-6 h-6" />;
    } else if (heading.includes("शत्रु")) {
      return <Shield className="w-6 h-6" />;
    } else if (heading.includes("लक्ष्मी")) {
      return <Star className="w-6 h-6" />;
    } else if (heading.includes("भय") || heading.includes("बाधा")) {
      return <Eye className="w-6 h-6" />;
    }
    return <Flower className="w-6 h-6" />;
  };

  const getCategoryImage = (heading) => {
    if (heading.includes("रोग") || heading.includes("स्वास्थ्य")) {
      return "https://images.pexels.com/photos/8078361/pexels-photo-8078361.jpeg";
    } else if (heading.includes("विवाह")) {
      return "https://images.pexels.com/photos/15893245/pexels-photo-15893245.jpeg";
    } else if (heading.includes("व्यापार") || heading.includes("नौकरी")) {
      return "https://images.pexels.com/photos/12462435/pexels-photo-12462435.jpeg";
    } else if (heading.includes("शत्रु")) {
      return "https://images.pexels.com/photos/11526024/pexels-photo-11526024.jpeg";
    } else if (heading.includes("लक्ष्मी")) {
      return "https://images.pexels.com/photos/13426981/pexels-photo-13426981.jpeg";
    } else if (heading.includes("भय") || heading.includes("बाधा")) {
      return "https://images.pexels.com/photos/16228306/pexels-photo-16228306.jpeg";
    }
    return "https://images.pexels.com/photos/30218192/pexels-photo-30218192.jpeg";
  };

  const getDeityIcon = (deity) => {
    if (deity.includes("गणेश")) return <Crown className="w-5 h-5" />;
    if (deity.includes("शिव")) return <Flame className="w-5 h-5" />;
    if (deity.includes("विष्णु") || deity.includes("कृष्ण"))
      return <Shield className="w-5 h-5" />;
    if (deity.includes("दुर्गा") || deity.includes("काली"))
      return <Zap className="w-5 h-5" />;
    if (deity.includes("सूर्य")) return <Sun className="w-5 h-5" />;
    if (deity.includes("हनुमान")) return <Mountain className="w-5 h-5" />;
    if (deity.includes("लक्ष्मी")) return <Star className="w-5 h-5" />;
    if (deity.includes("भैरव")) return <Clock className="w-5 h-5" />;
    return <Flower className="w-5 h-5" />;
  };

  // Filter logic
  const filteredCategories = poojaCategories.filter((category) => {
    const matchesCategory = selectedCategory
      ? category.heading === selectedCategory
      : true;
    const matchesDeity = selectedDeity
      ? category.subCategories.some((sub) =>
          sub.deity?.toLowerCase().includes(selectedDeity.toLowerCase()),
        )
      : true;
    const matchesSearch = searchQuery
      ? category.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.subCategories.some(
          (sub) =>
            sub.deity?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            sub.benefits?.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : true;
    return matchesCategory && matchesDeity && matchesSearch;
  });

  // Get all subcategories for display
  const getAllSubCategories = () => {
    if (selectedCategory) {
      const category = poojaCategories.find(
        (cat) => cat.heading === selectedCategory,
      );
      let subCats = category ? category.subCategories : [];

      // Filter by deity if selected
      if (selectedDeity) {
        subCats = subCats.filter((sub) =>
          sub.deity?.toLowerCase().includes(selectedDeity.toLowerCase()),
        );
      }

      return subCats;
    }
    return [];
  };

  // Get filtered category poojas based on deity
  const getFilteredCategoryPoojas = () => {
    if (!selectedDeity) return [];

    const filteredPoojas = [];
    poojaCategories.forEach((category) => {
      category.subCategories.forEach((sub) => {
        if (
          sub.deity &&
          sub.deity.toLowerCase().includes(selectedDeity.toLowerCase())
        ) {
          filteredPoojas.push({
            ...sub,
            categoryHeading: category.heading,
            categoryId: category.id,
          });
        }
      });
    });
    return filteredPoojas;
  };

  const filteredCategoryPoojas = getFilteredCategoryPoojas();
  const subCategories = getAllSubCategories();

  // Event Card Component
  const EventCard = ({ event, type }) => {
    const eventDate = parseISO(event.date);

    // Always use English slug for SEO-friendly URLs
    const getEventSlug = () => {
      return createSlug(event.poojaNameEn);
    };

    return (
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-orange-100 overflow-hidden transition-all duration-300 w-full hover-trident">
        {/* Image with Date Badge - Made smaller */}
        <div
          className="relative h-32 sm:h-36 overflow-hidden cursor-pointer"
          onClick={() => navigate(`/pooja/${getEventSlug()}`)}
        >
          <img
            src={event.image}
            alt={language === "english" ? event.poojaNameEn : event.poojaName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

          {/* Date Badge - Top Right */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/95 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-lg">
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-bold text-amber-600">
                {format(eventDate, "dd")}
              </div>
              <div className="text-xs font-semibold text-gray-700 uppercase">
                {format(eventDate, "MMM")}
              </div>
              <div className="text-xs text-gray-500">
                {format(eventDate, "yyyy")}
              </div>
            </div>
          </div>

          {/* Event Title */}
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
            <p className="text-xs sm:text-sm text-amber-100">
              {event.day} • {event.time}
            </p>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-sm sm:text-lg font-bold text-white mb-1 line-clamp-2">
            {language === "english" ? event.poojaNameEn : event.poojaName}
          </h3>{" "}
          {/* Event Details */}
          <div className="space-y-3 mb-4">
            <div>
              <h4 className="font-bold text-gray-700 text-sm mb-1">
                {language === "english" ? "Deities:" : "देवता:"}
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {event.deity.map((god, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium"
                  >
                    {god}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-700 text-sm mb-1">
                {language === "english" ? "Benefits:" : "लाभ:"}
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {(language === "english"
                  ? event.laabhEn || []
                  : event.laabh || []
                )
                  .slice(0, 2)
                  .map((benefit, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs"
                    >
                      {benefit}
                    </span>
                  ))}
              </div>
            </div>
            {/* Location */}
            <div>
              <h4 className="font-bold text-gray-700 text-sm mb-1">
                {language === "english" ? "Location:" : "स्थान:"}
              </h4>
              <p className="text-gray-600 text-sm">
                {language === "english" ? event.placeEn : event.place}
              </p>
            </div>
            {/* Starting Price */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  {language === "english" ? "Starting from:" : "शुरुआती मूल्य:"}
                </span>
                <span className="text-lg font-bold text-amber-600">
                  ₹{Math.min(...Object.values(event.cost))}
                </span>
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="space-y-2">
            <button
              onClick={() => navigate(`/pooja/${getEventSlug()}`)}
              className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-orange-500/30 transform hover:scale-105 text-sm sm:text-base"
            >
              {language === "english" ? "Participate Now" : "अभी भाग लें"}
              <User className="w-4 h-4" />
            </button>

            <div className="text-center">
              <button
                onClick={() => navigate(`/pooja/${getEventSlug()}`)}
                className="text-amber-600 hover:text-amber-700 text-sm font-medium hover:underline"
              >
                {language === "english"
                  ? "View Full Details"
                  : "पूरा विवरण देखें"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen  bg-gradient-to-b from-orange-50 via-amber-50 to-red-100 font-sans scroll-smooth pb-20">
      {/* Hero Header */}
      <style>{styles}</style>

      {/* Dynamic Header Section */}
      <div className="max-w-7xl pt-5 mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center mb-8">
          {!selectedCategory ? (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {language === "hindi"
                  ? "आगामी पूजा और श्रेणी के अनुसार पूजा ब्राउज़ करें"
                  : "Browse Upcoming Pooja and Poojas by Category"}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                {language === "hindi"
                  ? "अपनी आध्यात्मिक आवश्यकताओं के अनुरूप पवित्र अनुष्ठान और दिव्य आशीर्वाद खोजें"
                  : "Discover sacred rituals and divine blessings tailored to your spiritual needs"}
              </p>
              <div className="flex items-center justify-center gap-4 mt-6">
                {/* Location Filter */}
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className={`appearance-none bg-white border rounded-lg px-4 py-2.5 pr-10 text-sm font-medium shadow-sm min-w-[160px] transition-all duration-200 ${
                      selectedLocation
                        ? "border-amber-400 bg-amber-50 text-amber-800"
                        : "border-gray-300 text-gray-700 hover:border-amber-400"
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                  >
                    <option value="" className="text-gray-500">
                      {language === "english" ? "Location" : "स्थान"}
                    </option>
                    <option value="वाराणसी" className="text-gray-800">
                      वाराणसी (Varanasi)
                    </option>
                    <option value="प्रयागराज" className="text-gray-800">
                      प्रयागराज (Prayagraj)
                    </option>
                    <option value="अयोध्या" className="text-gray-800">
                      अयोध्या (Ayodhya)
                    </option>
                    <option value="मथुरा" className="text-gray-800">
                      मथुरा (Mathura)
                    </option>
                    <option value="हरिद्वार" className="text-gray-800">
                      हरिद्वार (Haridwar)
                    </option>
                  </select>

                  {/* Custom dropdown arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronRight
                      className={`w-4 h-4 transform transition-transform ${
                        selectedLocation
                          ? "rotate-90 text-amber-600"
                          : "rotate-90 text-gray-400"
                      }`}
                    />
                  </div>

                  {selectedLocation && (
                    <button
                      onClick={() => setSelectedLocation("")}
                      className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-amber-600 transition-colors shadow-md"
                      title="Clear location filter"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Deity Filter */}
                <div className="relative">
                  <select
                    value={selectedDeity}
                    onChange={(e) => setSelectedDeity(e.target.value)}
                    className={`appearance-none bg-white border rounded-lg px-4 py-2.5 pr-10 text-sm font-medium shadow-sm min-w-[160px] transition-all duration-200 ${
                      selectedDeity
                        ? "border-purple-400 bg-purple-50 text-purple-800"
                        : "border-gray-300 text-gray-700 hover:border-purple-400"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  >
                    <option value="" className="text-gray-500">
                      {language === "english" ? "Deity" : "देवता"}
                    </option>
                    <option value="गणेश" className="text-gray-800">
                      श्री गणेश जी (Lord Ganesha)
                    </option>
                    <option value="शिव" className="text-gray-800">
                      भगवान शिव (Lord Shiva)
                    </option>
                    <option value="विष्णु" className="text-gray-800">
                      भगवान विष्णु (Lord Vishnu)
                    </option>
                    <option value="कृष्ण" className="text-gray-800">
                      श्री कृष्ण (Lord Krishna)
                    </option>
                    <option value="राम" className="text-gray-800">
                      श्री राम (Lord Rama)
                    </option>
                    <option value="हनुमान" className="text-gray-800">
                      हनुमान जी (Lord Hanuman)
                    </option>
                    <option value="दुर्गा" className="text-gray-800">
                      माता दुर्गा (Goddess Durga)
                    </option>
                    <option value="लक्ष्मी" className="text-gray-800">
                      माता लक्ष्मी (Goddess Lakshmi)
                    </option>
                    <option value="सरस्वती" className="text-gray-800">
                      माता सरस्वती (Goddess Saraswati)
                    </option>
                    <option value="काली" className="text-gray-800">
                      माता काली (Goddess Kali)
                    </option>
                    <option value="सूर्य" className="text-gray-800">
                      सूर्य देव (Lord Surya)
                    </option>
                    <option value="भैरव" className="text-gray-800">
                      भैरव बाबा (Lord Bhairav)
                    </option>
                  </select>

                  {/* Custom dropdown arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronRight
                      className={`w-4 h-4 transform transition-transform ${
                        selectedDeity
                          ? "rotate-90 text-purple-600"
                          : "rotate-90 text-gray-400"
                      }`}
                    />
                  </div>

                  {selectedDeity && (
                    <button
                      onClick={() => setSelectedDeity("")}
                      className="absolute -top-2 -right-2 bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-purple-600 transition-colors shadow-md"
                      title="Clear deity filter"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {selectedCategory} Poojas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized poojas for your spiritual needs
              </p>
            </>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-xl border border-orange-100 sticky top-24">
              <div className="flex items-center gap-2 mb-4 lg:mb-6 pb-3 lg:pb-4 border-b border-orange-100/50">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Filter className="w-4 h-4 lg:w-5 lg:h-5 text-amber-600" />
                </div>
                <span className="text-gray-800 underline font-bold text-base lg:text-lg">
                  {language === "english"
                    ? "Filter by Category"
                    : "श्रेणी के अनुसार फ़िल्टर करें"}
                </span>
              </div>
              <div className="space-y-2 max-h-[500px] lg:max-h-[600px] overflow-y-auto pr-2">
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-xl text-sm transition-all duration-300 flex items-center justify-between group ${
                    !selectedCategory
                      ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/30"
                      : "text-gray-600 hover:bg-orange-50 hover:pl-4 lg:hover:pl-5"
                  }`}
                >
                  <span className="font-semibold">
                    {language === "english"
                      ? "All Categories"
                      : "सभी श्रेणियां"}
                  </span>
                  {!selectedCategory && <ChevronRight className="w-4 h-4" />}
                </button>
                {poojaCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.heading)}
                    className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-xl text-sm transition-all duration-300 flex items-center justify-between group ${
                      selectedCategory === category.heading
                        ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 font-semibold"
                        : "text-gray-600 hover:bg-orange-50 hover:pl-4 lg:hover:pl-5"
                    }`}
                  >
                    <span className="leading-tight text-xs lg:text-sm">
                      {category.heading}
                    </span>
                    {selectedCategory === category.heading && (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Filter select */}
          <div className="lg:hidden mb-6 space-y-4">
            {/* Category Filter */}
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-orange-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Filter className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-gray-800 font-bold text-base">
                  {language === "english"
                    ? "Filter by Category"
                    : "श्रेणी के अनुसार फ़िल्टर करें"}
                </span>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-medium shadow-sm"
              >
                <option value="">
                  {language === "english" ? "All Categories" : "सभी श्रेणियां"}
                </option>
                {poojaCategories.map((category) => (
                  <option key={category.id} value={category.heading}>
                    {category.heading}
                  </option>
                ))}
              </select>
            </div>

            {/* Deity Filter */}
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-orange-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Crown className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-gray-800 font-bold text-base">
                  {language === "english"
                    ? "Filter by Deity"
                    : "देवता के अनुसार फ़िल्टर करें"}
                </span>
              </div>
              <select
                value={selectedDeity}
                onChange={(e) => setSelectedDeity(e.target.value)}
                className="w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-medium shadow-sm"
              >
                <option value="">सभी देवी-देवता (All Deities)</option>
                <option value="गणेश">श्री गणेश जी (Lord Ganesha)</option>
                <option value="शिव">भगवान शिव (Lord Shiva)</option>
                <option value="विष्णु">भगवान विष्णु (Lord Vishnu)</option>
                <option value="कृष्ण">श्री कृष्ण (Lord Krishna)</option>
                <option value="राम">श्री राम (Lord Rama)</option>
                <option value="हनुमान">हनुमान जी (Lord Hanuman)</option>
                <option value="दुर्गा">माता दुर्गा (Goddess Durga)</option>
                <option value="लक्ष्मी">माता लक्ष्मी (Goddess Lakshmi)</option>
                <option value="सरस्वती">
                  माता सरस्वती (Goddess Saraswati)
                </option>
                <option value="काली">माता काली (Goddess Kali)</option>
                <option value="सूर्य">सूर्य देव (Lord Surya)</option>
                <option value="भैरव">भैरव बाबा (Lord Bhairav)</option>
              </select>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-3">
            {/* Results Count and Clear Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 lg:mb-6 gap-3 sm:gap-0">
              <span className="text-gray-600 font-medium text-base lg:text-lg">
                {selectedCategory ? (
                  <>
                    {language === "english"
                      ? `Showing ${subCategories.length} Poojas in "${selectedCategory}"`
                      : `"${selectedCategory}" में ${subCategories.length} पूजा दिखा रहे हैं`}
                  </>
                ) : (
                  <>
                    {language === "english"
                      ? `Showing ${filteredCategories.length} Categories`
                      : `${filteredCategories.length} श्रेणियां दिखा रहे हैं`}
                  </>
                )}
              </span>
              {(selectedCategory || selectedDeity || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory("");
                    setSelectedDeity("");
                    setSearchQuery("");
                  }}
                  className="flex items-center gap-2 text-amber-600 font-semibold hover:underline text-sm lg:text-base"
                >
                  <X className="w-4 h-4" />
                  {language === "english"
                    ? "Clear Filters"
                    : "फ़िल्टर साफ़ करें"}
                </button>
              )}
            </div>

            {/* Show Subcategories when category is selected */}
            {selectedCategory && subCategories.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
                {subCategories.map((sub) => (
                  <div
                    key={sub.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-orange-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover-trident"
                  >
                    <div className="relative h-32 bg-gradient-to-br from-amber-500 to-orange-600 p-6 flex items-center justify-between overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <div className="w-20 h-20 rounded-full border-6 border-white"></div>
                      </div>
                      <div className="absolute -bottom-4 -left-4 bg-white/10 w-20 h-20 rounded-full blur-xl"></div>

                      <div className="relative z-10 flex items-center gap-3">
                        <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                          {getDeityIcon(sub.deity)}
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {sub.deity}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      {sub.disease && (
                        <div className="mb-4 p-3 bg-red-50 rounded-lg border border-red-100">
                          <h4 className="font-semibold text-red-800 text-sm mb-1">
                            समस्या:
                          </h4>
                          <p className="text-red-700 text-sm">{sub.disease}</p>
                        </div>
                      )}

                      {sub.benefits && (
                        <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
                          <h4 className="font-semibold text-green-800 text-sm mb-1">
                            लाभ:
                          </h4>
                          <p className="text-green-700 text-sm">
                            {sub.benefits}
                          </p>
                        </div>
                      )}

                      {sub.mantra && (
                        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                          <h4 className="font-semibold text-blue-800 text-sm mb-1">
                            मंत्र:
                          </h4>
                          <p className="text-blue-700 text-sm font-mono">
                            {sub.mantra}
                          </p>
                        </div>
                      )}

                      {sub.path && (
                        <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
                          <h4 className="font-semibold text-purple-800 text-sm mb-1">
                            पूजा विधि:
                          </h4>
                          <p className="text-purple-700 text-sm">{sub.path}</p>
                        </div>
                      )}

                      {sub.pooja && (
                        <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-100">
                          <h4 className="font-semibold text-amber-800 text-sm mb-1">
                            पूजा:
                          </h4>
                          <p className="text-amber-700 text-sm">{sub.pooja}</p>
                        </div>
                      )}

                      <button className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-orange-500/30 transform hover:scale-105">
                        Book This Pooja
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Show Upcoming Poojas when no specific category is selected and no deity filter */}
            {!selectedCategory && !selectedDeity && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 mb-12 lg:mb-16">
                {UpcomingEvent.filter((event) => {
                  const isUpcoming = isAfter(parseISO(event.date), new Date());
                  const matchesLocation = selectedLocation
                    ? event.place
                        .toLowerCase()
                        .includes(selectedLocation.toLowerCase()) ||
                      event.placeEn
                        .toLowerCase()
                        .includes(selectedLocation.toLowerCase())
                    : true;
                  return isUpcoming && matchesLocation;
                }).map((event) => (
                  <EventCard key={event.id} event={event} type="upcoming" />
                ))}
              </div>
            )}

            {/* Show Category-based Poojas when deity filter is applied */}
            {!selectedCategory && selectedDeity && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 mb-12 lg:mb-16">
                {filteredCategoryPoojas.map((pooja, index) => (
                  <div
                    key={`${pooja.categoryId}-${pooja.id}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-orange-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover-trident"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: "fadeInUp 0.6s ease-out forwards",
                    }}
                  >
                    <div className="relative h-32 bg-gradient-to-br from-amber-500 to-orange-600 p-6 flex items-center justify-between overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <div className="w-20 h-20 rounded-full border-6 border-white"></div>
                      </div>
                      <div className="absolute -bottom-4 -left-4 bg-white/10 w-20 h-20 rounded-full blur-xl"></div>

                      <div className="relative z-10 flex items-center gap-3">
                        <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                          {getDeityIcon(pooja.deity)}
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {pooja.deity}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {pooja.categoryHeading}
                        </span>
                      </div>

                      {pooja.disease && (
                        <div className="mb-4 p-3 bg-red-50 rounded-lg border border-red-100">
                          <h4 className="font-semibold text-red-800 text-sm mb-1">
                            समस्या:
                          </h4>
                          <p className="text-red-700 text-sm">
                            {pooja.disease}
                          </p>
                        </div>
                      )}

                      {pooja.benefits && (
                        <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
                          <h4 className="font-semibold text-green-800 text-sm mb-1">
                            लाभ:
                          </h4>
                          <p className="text-green-700 text-sm">
                            {pooja.benefits}
                          </p>
                        </div>
                      )}

                      {pooja.mantra && (
                        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                          <h4 className="font-semibold text-blue-800 text-sm mb-1">
                            मंत्र:
                          </h4>
                          <p className="text-blue-700 text-sm font-mono">
                            {pooja.mantra}
                          </p>
                        </div>
                      )}

                      {pooja.path && (
                        <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
                          <h4 className="font-semibold text-purple-800 text-sm mb-1">
                            पूजा विधि:
                          </h4>
                          <p className="text-purple-700 text-sm">
                            {pooja.path}
                          </p>
                        </div>
                      )}

                      {pooja.pooja && (
                        <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-100">
                          <h4 className="font-semibold text-amber-800 text-sm mb-1">
                            पूजा:
                          </h4>
                          <p className="text-amber-700 text-sm">
                            {pooja.pooja}
                          </p>
                        </div>
                      )}

                      {pooja.method && (
                        <div className="mb-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                          <h4 className="font-semibold text-indigo-800 text-sm mb-1">
                            विधि:
                          </h4>
                          <p className="text-indigo-700 text-sm">
                            {pooja.method}
                          </p>
                        </div>
                      )}

                      <button className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-orange-500/30 transform hover:scale-105">
                        Book This Pooja
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {((selectedCategory && subCategories.length === 0) ||
              (!selectedCategory && filteredCategories.length === 0)) && (
              <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-dashed border-gray-300">
                <div className="inline-flex p-4 rounded-full bg-orange-50 mb-4">
                  <Search className="w-8 h-8 text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  No Poojas Found
                </h3>
                <p className="text-gray-500 max-w-sm mx-auto">
                  We couldn't find any poojas matching your current filters. Try
                  changing the category or search terms.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("");
                    setSelectedDeity("");
                    setSearchQuery("");
                  }}
                  className="mt-6 text-amber-600 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pooja;
