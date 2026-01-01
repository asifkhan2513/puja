import React, { useState } from "react";
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
} from "lucide-react";
import poojaCategories from "./poojaCategories";

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
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-red-100 font-sans scroll-smooth pb-20">
      {/* Hero Header */}
      <style>{styles}</style>
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16 px-4 mb-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 pt-serif-bold text-white text-3d tracking-wide">
            Divine Pooja Services
          </h1>
          <p className="text-xl text-amber-50 max-w-2xl mx-auto mb-8 font-inter text-white">
            Book authentic Vedic Poojas performed by experienced Pandits at
            sacred temples
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto group">
            <input
              type="text"
              placeholder="Search for a Pooja..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-amber-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all duration-300 shadow-2xl pl-14"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white/80 w-6 h-6 group-focus-within:text-white transition-colors" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-orange-100 sticky top-24">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-orange-100/50">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Filter className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-gray-800 font-bold text-lg pt-serif-bold">
                  Filter by Category
                </span>
              </div>
              <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 flex items-center justify-between group ${
                    !selectedCategory
                      ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/30"
                      : "text-gray-600 hover:bg-orange-50 hover:pl-5"
                  }`}
                >
                  <span className="font-semibold">All Categories</span>
                  {!selectedCategory && <ChevronRight className="w-4 h-4" />}
                </button>
                {poojaCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.heading)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 flex items-center justify-between group ${
                      selectedCategory === category.heading
                        ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 font-semibold"
                        : "text-gray-600 hover:bg-orange-50 hover:pl-5"
                    }`}
                  >
                    <span className="leading-tight">{category.heading}</span>
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

          {/* Results Section */}
          <div className="lg:col-span-3">
            {/* Results Count and Clear Filter */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-600 font-medium text-lg">
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
                  className="flex items-center gap-2 text-amber-600 font-semibold hover:underline"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              )}
            </div>

            {/* Show Subcategories when category is selected */}
            {selectedCategory && subCategories.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
    </div>
  );
};

export default Pooja;
