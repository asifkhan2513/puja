import React, { useState } from "react";
import {
  Flame,
  Filter,
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
} from "lucide-react";
import poojaCategories from "./poojaCategories";
import poojaFilters from "./poojaFilters";
import poojaList from "./poojaList";
import { Link } from "react-router-dom";

const Pooja = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Map categories to icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Ganesh Ji":
        return <Crown className="w-6 h-6" />;
      case "Vishnu Ji":
        return <Shield className="w-6 h-6" />;
      case "Shiv Ji":
        return <Flame className="w-6 h-6" />;
      case "Durga Ji":
        return <Zap className="w-6 h-6" />;
      case "Surya Dev":
        return <Sun className="w-6 h-6" />;
      case "Ram Ji":
        return <Sparkles className="w-6 h-6" />;
      case "Krishna Ji":
        return <Music className="w-6 h-6" />;
      case "Hanuman Ji":
        return <Mountain className="w-6 h-6" />;
      case "Kal Bhairav":
        return <Clock className="w-6 h-6" />;
      case "Nav Grah":
        return <Orbit className="w-6 h-6" />;
      case "Pitra Dev":
        return <User className="w-6 h-6" />;
      default:
        return <Flower className="w-6 h-6" />;
    }
  };

  const filteredPooja = poojaList.filter((item) => {
    const matchesCategory = selectedCategory
      ? item.category === selectedCategory
      : true;
    const matchesFilter = selectedFilter
      ? item.filter === selectedFilter
      : true;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.filter.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-orange-50/50 dark:bg-gray-900 pb-20">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16 px-4 mb-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 pt-serif-bold">
            Divine Pooja Services
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-8 font-inter">
            Book authentic Vedic Poojas performed by experienced Pandits at
            sacred temples
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for a Pooja..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-amber-300 shadow-xl pl-14"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories Scroller */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 pt-serif-bold">
              Browse by Deity
            </h2>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory("")}
                className="text-amber-600 font-semibold text-sm hover:underline"
              >
                Clear Selection
              </button>
            )}
          </div>

          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {poojaCategories.map((cat, index) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(isActive ? "" : cat)}
                  className={`flex flex-col items-center gap-3 min-w-[100px] p-4 rounded-2xl transition-all duration-300 border-2 ${
                    isActive
                      ? "bg-amber-100 border-amber-500 shadow-lg scale-105"
                      : "bg-white border-transparent hover:border-amber-200 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`p-3 rounded-full ${
                      isActive
                        ? "bg-amber-500 text-white"
                        : "bg-orange-50 text-amber-600"
                    }`}
                  >
                    {getCategoryIcon(cat)}
                  </div>
                  <span
                    className={`text-sm font-bold whitespace-nowrap ${
                      isActive ? "text-amber-800" : "text-gray-600"
                    }`}
                  >
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4 text-gray-800 font-bold text-lg">
                <Filter className="w-5 h-5 text-amber-600" />
                <span>Filter by Purpose</span>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedFilter("")}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    !selectedFilter
                      ? "bg-amber-50 text-amber-700 font-bold"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  All Purposes
                </button>
                {poojaFilters.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFilter(f.title)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedFilter === f.title
                        ? "bg-amber-50 text-amber-700 font-bold border-l-4 border-amber-500"
                        : "text-gray-600 hover:bg-gray-50 hover:pl-4"
                    }`}
                  >
                    {f.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Filter select */}
          <div className="lg:hidden mb-6">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-medium shadow-sm"
            >
              <option value="">Select Purpose (All)</option>
              {poojaFilters.map((f) => (
                <option key={f.id} value={f.title}>
                  {f.title}
                </option>
              ))}
            </select>
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500 font-medium">
                Showing {filteredPooja.length} Result
                {filteredPooja.length !== 1 && "s"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPooja.map((p) => (
                <div
                  key={p.id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="h-4 p-4 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider">
                        {getCategoryIcon(p.category)}
                        <span className="ml-1">{p.category}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 pt-serif-bold group-hover:text-amber-600 transition-colors">
                      {p.name}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>{p.filter}</span>
                    </div>

                    <button className="w-full py-3 px-4 bg-gray-50 text-gray-800 font-bold rounded-xl group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      View Details{" "}
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredPooja.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-dashed border-gray-300">
                <div className="inline-flex p-4 rounded-full bg-orange-50 mb-4">
                  <Search className="w-8 h-8 text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  No Poojas Found
                </h3>
                <p className="text-gray-500 max-w-sm mx-auto">
                  We couldn't find any poojas matching your current filters. Try
                  changing the category or purpose.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("");
                    setSelectedFilter("");
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
