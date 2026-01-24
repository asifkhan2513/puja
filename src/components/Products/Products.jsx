import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./productsData";
import { useLanguage } from "../../contexts/LanguageContext";
import { Sparkles, ChevronRight, ArrowLeft } from "lucide-react";
import Loader from "../Loader";
import GemstonesImage from "../../assets/gemstone.jpeg";

const Products = () => {
  const { language } = useLanguage();
  const isHindi = language === "hindi";
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simulate a brief loading for checking slug/data fetching
    const timer = setTimeout(() => {
      if (slug) {
        const category = products.find((p) => p.slug === slug);
        if (category) {
          setSelectedCategory(category);
        } else {
          navigate("/products");
        }
      } else {
        setSelectedCategory(null);
      }
      setIsLoading(false);
    }, 600); // 600ms delay for smooth transition

    return () => clearTimeout(timer);
  }, [slug, navigate]);

  // Loader View
  if (isLoading) {
    return <Loader />;
  }

  // View: Category Details (Items List)
  if (selectedCategory) {
    return (
      <div className="min-h-screen bg-orange-50 font-sans pb-20 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors mb-8 group font-medium"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {isHindi ? "श्रेणियों पर वापस जाएं" : "Back to Categories"}
          </button>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 border-l-4 border-orange-500 pl-4">
              {isHindi ? selectedCategory.title.hi : selectedCategory.title.en}
            </h2>
            <p className="text-gray-600 text-lg ml-5">
              {isHindi
                ? selectedCategory.description.hi
                : selectedCategory.description.en}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {selectedCategory.items.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-orange-100 flex flex-col h-full hover-trident cursor-pointer"
                onClick={() => {
                  // Add click handler if needed
                  console.log("Item clicked:", item.name);
                }}
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={isHindi ? item.name.hi : item.name.en}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors mb-2 line-clamp-2">
                    {isHindi ? item.name.hi : item.name.en}
                  </h3>

                  {/* Description for gemstones */}
                  {item.description && (
                    <p className="text-sm text-gray-600 mb-3">
                      {isHindi ? item.description.hi : item.description.en}
                    </p>
                  )}

                  <div className="mt-auto pt-4 border-t border-dashed border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded">
                      {isHindi ? "प्रामाणिक" : "Authentic"}
                    </span>
                    <button className="text-sm font-bold text-gray-600 group-hover:text-orange-600 flex items-center gap-1 transition-colors">
                      {isHindi ? "देखें" : "View"}{" "}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    {/* Trident indicator - shows on hover */}
                    <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shadow-lg trident-indicator">
                        <span className="text-white text-xs font-bold">🔱</span>
                      </div>
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

  // View: Category List
  return (
    <div className="min-h-screen bg-orange-50 font-sans pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="mb-12 text-center animate-fade-in-down">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md mb-4 text-orange-600">
            <Sparkles className="w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4 font-serif drop-shadow-sm">
            {isHindi ? "हमारे पूजनीय उत्पाद" : "Our Sacred Products"}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {isHindi
              ? "आपकी साधना और पूजा के लिए शुद्ध और प्रतिष्ठित सामग्री।"
              : "Pure and consecrated items for your spiritual journey."}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(`/products/${category.slug}`)}
              className={`group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 hover:border-orange-200 hover-trident ${
                category.slug === "ratna"
                  ? "border-purple-200 hover:border-purple-400 bg-gradient-to-br from-white to-purple-50/30"
                  : "border-orange-50"
              }`}
            >
              <div
                className={`relative h-64 overflow-hidden ${
                  category.slug === "ratna"
                    ? "border-b border-purple-100"
                    : "border-b border-orange-50"
                }`}
              >
                <img
                  src={category.image}
                  alt={isHindi ? category.title.hi : category.title.en}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Special badge for gemstones */}
                {category.slug === "ratna" && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    {isHindi ? "रत्न विशेष" : "Gemstone Special"}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h2
                  className={`text-2xl font-bold mb-2 transition-colors ${
                    category.slug === "ratna"
                      ? "text-purple-800 group-hover:text-purple-600"
                      : "text-gray-800 group-hover:text-orange-600"
                  }`}
                >
                  {isHindi ? category.title.hi : category.title.en}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4 flex-1">
                  {isHindi ? category.description.hi : category.description.en}
                </p>

                <div
                  className={`pt-4 border-t border-dashed mt-auto flex items-center justify-between relative ${
                    category.slug === "ratna"
                      ? "border-purple-200"
                      : "border-orange-100"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      category.slug === "ratna"
                        ? "text-purple-700 bg-purple-100"
                        : "text-orange-700 bg-orange-50"
                    }`}
                  >
                    {category.items.length} {isHindi ? "सामग्री" : "Items"}
                  </span>
                  <div
                    className={`flex items-center gap-1 font-bold text-sm group-hover:gap-2 transition-all ${
                      category.slug === "ratna"
                        ? "text-purple-600"
                        : "text-orange-600"
                    }`}
                  >
                    {isHindi ? "देखें" : "Explore"}{" "}
                    <ChevronRight className="w-4 h-4" />
                  </div>

                  {/* Trident indicator - shows on hover */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg trident-indicator ${
                        category.slug === "ratna"
                          ? "bg-purple-500"
                          : "bg-orange-500"
                      }`}
                    >
                      <span className="text-white text-sm">🔱</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
