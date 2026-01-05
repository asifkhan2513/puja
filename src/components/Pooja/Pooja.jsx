import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
} from "lucide-react";
import poojaCategories from "./poojaCategories";
import UpcomingEvent from "./UpcomingEvent";
import { format, parseISO, isAfter } from "date-fns";

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

// Pooja Detail View Component
const PoojaDetailView = ({ id }) => {
  const navigate = useNavigate();

  // Find the event by ID
  const event = UpcomingEvent.find((e) => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-red-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Pooja Not Found
          </h2>
          <button
            onClick={() => navigate("/puja")}
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
          >
            Back to Poojas
          </button>
        </div>
      </div>
    );
  }

  const eventDate = parseISO(event.date);
  const formattedDate = format(eventDate, "dd MMM yyyy");
  const formattedTime = format(eventDate, "hh:mm a");

  const handleParticipate = (packageType) => {
    // Handle participation logic here
    console.log(
      `Participating in ${event.poojaName} with ${packageType} package`
    );
    // You can navigate to checkout or show a modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-red-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate("/puja")}
            className="flex items-center gap-2 text-amber-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Poojas
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {event.poojaName}
          </h1>
          <p className="text-xl text-amber-100">{event.poojaNameEn}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Image and Basic Info */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img
                  src={event.image}
                  alt={event.poojaNameEn}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formattedDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Timer className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.placeEn}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Event Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <Crown className="w-5 h-5 text-amber-600" />
                      Deities
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {event.deity.map((god, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                        >
                          {god}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <Filter className="w-5 h-5 text-amber-600" />
                      Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {event.category.map((cat, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mantra and Jaap */}
                {event.mantra && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                    <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-amber-600" />
                      Mantra
                    </h3>
                    <p className="text-gray-700 font-mono text-lg">
                      {event.mantra}
                    </p>
                    {event.jaapSankhya && (
                      <p className="text-sm text-gray-600 mt-2">
                        Jaap Count: {event.jaapSankhya.toLocaleString()}
                      </p>
                    )}
                  </div>
                )}

                {/* Benefits */}
                <div className="mt-6">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Sparkle className="w-5 h-5 text-amber-600" />
                    Benefits (लाभ)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.laabh && event.laabh.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">
                          Hindi
                        </h4>
                        <ul className="space-y-1">
                          {event.laabh.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="text-gray-600 text-sm flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {event.laabhEn && event.laabhEn.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">
                          English
                        </h4>
                        <ul className="space-y-1">
                          {event.laabhEn.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="text-gray-600 text-sm flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-gray-800 mb-2">Description</h3>
                  <p className="text-gray-700 mb-2">{event.description}</p>
                  <p className="text-gray-600 text-sm italic">
                    {event.descriptionEn}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Pricing and Participation */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Participation Packages
              </h3>

              <div className="space-y-4">
                {Object.entries(event.cost).map(([type, price]) => (
                  <div
                    key={type}
                    className="border border-orange-100 rounded-xl p-4 hover:border-orange-300 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-gray-800 capitalize">
                        {type.replace(/([A-Z])/g, " $1").trim()}
                      </h4>
                      <span className="text-2xl font-bold text-amber-600">
                        ₹{price}
                      </span>
                    </div>
                    <button
                      onClick={() => handleParticipate(type)}
                      className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Participate Now
                      <User className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Location Info */}
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  Location
                </h4>
                <p className="text-gray-700 font-semibold">{event.place}</p>
                <p className="text-gray-600 text-sm">{event.placeEn}</p>
              </div>

              {/* Event Schedule */}
              <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                  Schedule
                </h4>
                <p className="text-gray-700">
                  <span className="font-semibold">{event.day}</span> •{" "}
                  {formattedDate}
                </p>
                <p className="text-gray-600 text-sm">{event.time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pooja = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // If ID is present, show detail view
  if (id) {
    return <PoojaDetailView id={id} />;
  }

  // Handle participation
  const handleParticipateNow = (eventId) => {
    navigate(`/puja/${eventId}`);
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
    const matchesSearch = searchQuery
      ? category.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.subCategories.some(
          (sub) =>
            sub.deity?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            sub.benefits?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : true;
    return matchesCategory && matchesSearch;
  });

  // Get all subcategories for display
  const getAllSubCategories = () => {
    if (selectedCategory) {
      const category = poojaCategories.find(
        (cat) => cat.heading === selectedCategory
      );
      return category ? category.subCategories : [];
    }
    return [];
  };

  const subCategories = getAllSubCategories();

  // Event Card Component
  const EventCard = ({ event, type }) => {
    const eventDate = parseISO(event.date);

    return (
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-orange-100 overflow-hidden transition-all duration-300 w-full">
        {/* Image with Date Badge - Made smaller */}
        <div
          className="relative h-32 sm:h-36 overflow-hidden cursor-pointer"
          onClick={() => navigate(`/puja/${event.id}`)}
        >
          <img
            src={event.image}
            alt={event.poojaNameEn}
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
            <h3 className="text-sm sm:text-lg font-bold text-white mb-1 line-clamp-2">
              {event.poojaName}
            </h3>
            <p className="text-xs sm:text-sm text-amber-100">
              {event.day} • {event.time}
            </p>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-6">
          {/* Event Details */}
          <div className="space-y-3 mb-4">
            <div>
              <h4 className="font-bold text-gray-700 text-sm mb-1">Deities:</h4>
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
                Benefits:
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {(event.laabhEn || event.laabh || [])
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
                Location:
              </h4>
              <p className="text-gray-600 text-sm">{event.placeEn}</p>
            </div>
            {/* Starting Price */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Starting from:</span>
                <span className="text-lg font-bold text-amber-600">
                  ₹{Math.min(...Object.values(event.cost))}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button
              onClick={() => navigate(`/puja/${event.id}`)}
              className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-orange-500/30 transform hover:scale-105 text-sm sm:text-base"
            >
              Participate Now
              <User className="w-4 h-4" />
            </button>

            <div className="text-center">
              <button
                onClick={() => navigate(`/puja/${event.id}`)}
                className="text-amber-600 hover:text-amber-700 text-sm font-medium hover:underline"
              >
                View Full Details
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

      {/* Filter by Category Section */}
      <div className="max-w-7xl pt-5 mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Browse Poojas by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover sacred rituals and divine blessings tailored to your
            spiritual needs
          </p>
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
                  Filter by Category
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
                  <span className="font-semibold">All Categories</span>
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
          <div className="lg:hidden mb-6">
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-orange-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Filter className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-gray-800 font-bold text-base">
                  Filter by Category
                </span>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-medium shadow-sm"
              >
                <option value="">All Categories</option>
                {poojaCategories.map((category) => (
                  <option key={category.id} value={category.heading}>
                    {category.heading}
                  </option>
                ))}
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
                    Showing {subCategories.length} Poojas in "{selectedCategory}
                    "
                  </>
                ) : (
                  <>Showing {filteredCategories.length} Categories</>
                )}
              </span>
              {(selectedCategory || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory("");
                    setSearchQuery("");
                  }}
                  className="flex items-center gap-2 text-amber-600 font-semibold hover:underline text-sm lg:text-base"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              )}
            </div>

            {/* Show Subcategories when category is selected */}
            {selectedCategory && subCategories.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
                {subCategories.map((sub) => (
                  <div
                    key={sub.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-orange-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
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

                      {sub.puja && (
                        <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-100">
                          <h4 className="font-semibold text-amber-800 text-sm mb-1">
                            पूजा:
                          </h4>
                          <p className="text-amber-700 text-sm">{sub.puja}</p>
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

            {/* Show Categories when no specific category is selected */}
            {!selectedCategory && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 mb-12 lg:mb-16">
                {filteredCategories.map((category) => (
                  <div
                    key={category.id}
                    className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-orange-100 overflow-hidden transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                    onClick={() => setSelectedCategory(category.heading)}
                  >
                    {/* Category Header with Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={getCategoryImage(category.heading)}
                        alt={category.heading}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                      {/* Category Icon */}
                      <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                        {getCategoryIcon(category.heading)}
                      </div>

                      {/* Category Title */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                          {category.heading}
                        </h3>
                        <span className="text-amber-200 text-sm font-medium">
                          {category.subCategories.length} Poojas Available
                        </span>
                      </div>
                    </div>

                    {/* Sub-categories Preview */}
                    <div className="p-6">
                      <div className="space-y-3 mb-6">
                        {category.subCategories
                          .slice(0, 3)
                          .map((sub, index) => (
                            <div
                              key={sub.id}
                              className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100"
                            >
                              <div className="p-2 bg-white rounded-lg shadow-sm">
                                {getDeityIcon(sub.deity)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-gray-800 text-sm truncate">
                                  {sub.deity}
                                </h4>
                              </div>
                            </div>
                          ))}

                        {category.subCategories.length > 3 && (
                          <div className="text-center">
                            <span className="text-sm text-amber-600 font-medium">
                              +{category.subCategories.length - 3} more poojas
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Action Button */}
                      <button className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-orange-500/30 transform hover:scale-105">
                        View All Poojas
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

      {/* Upcoming Events Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-3 mb-8 mt-10">
          <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl shadow-lg">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl  md:text-3xl font-bold text-gray-800 flex items-center gap-3">
            Upcoming Poojas
            <span className="px-4 py-2 bg-amber-100 text-amber-800 text-sm md:text-base font-semibold rounded-full shadow-sm">
              {
                UpcomingEvent.filter((event) =>
                  isAfter(parseISO(event.date), new Date())
                ).length
              }
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {UpcomingEvent.filter((event) =>
            isAfter(parseISO(event.date), new Date())
          ).map((event) => (
            <EventCard key={event.id} event={event} type="upcoming" />
          ))}
        </div>

        {UpcomingEvent.filter((event) =>
          isAfter(parseISO(event.date), new Date())
        ).length === 0 && (
          <div className="text-center py-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-dashed border-amber-200">
            <Calendar className="w-16 h-16 text-amber-300 mx-auto mb-6" />
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              No Upcoming Events
            </h3>
            <p className="text-gray-500 text-lg">
              Check back later for new pooja events
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pooja;
