import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { items, howItWorksData } from "./Chadava";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  MapPin,
  ChevronRight,
  ArrowLeft,
  Minus,
  Plus,
  CheckCircle,
  Sparkles,
  Clock,
  ChevronDown,
  Share2,
  X,
  Copy,
  Check,
} from "lucide-react";

// Helper to generate slug
const createSlug = (title) => {
  const text = typeof title === "object" ? title.en || title.hi : title;
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

const Chadhava = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState({}); // { offerId: quantity }
  const { language } = useLanguage(); // 'hindi' or 'english'
  const [showFullBenefits, setShowFullBenefits] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // New State for Modal/Toast
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Helper for language handling
  const isHindi = language === "hindi";

  // Handle URL Slug / Selection
  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      // Simulate a small delay for loader (optional, makes it feel more app-like)
      const timer = setTimeout(() => {
        const found = items.find((i) => createSlug(i.title) === slug);
        if (found) {
          setSelectedItem(found);
          // Default: Select first offer with quantity 1
          if (found.offers && found.offers.length > 0) {
            setCart({ [found.offers[0].id]: 1 });
          } else {
            setCart({});
          }
        } else {
          // Item not found, go back to list
          navigate("/chadhava");
        }
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSelectedItem(null);
      setCart({});
    }
  }, [slug, navigate]);

  const handleBack = () => {
    navigate("/chadhava");
  };

  const handleShare = async () => {
    const url = window.location.href;

    // Fallback to Clipboard API
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        setIsCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }

    // Try native share if available (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title:
            typeof selectedItem.title === "object"
              ? isHindi
                ? selectedItem.title.hi
                : selectedItem.title.en
              : selectedItem.title,
          text: "Check out this divine offering!",
          url: url,
        });
      } catch (error) {
        // Share cancelled or failed, ignore
      }
    }
  };

  const updateQuantity = (offerId, delta) => {
    setCart((prev) => {
      const currentQty = prev[offerId] || 0;
      const newQty = currentQty + delta;

      if (newQty <= 0) {
        const { [offerId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [offerId]: newQty };
    });
  };

  const getItemCount = () => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  };

  const getTotalAmount = () => {
    if (!selectedItem) return 0;
    return Object.entries(cart).reduce((total, [id, qty]) => {
      const offer = selectedItem.offers.find((o) => o.id === id);
      return total + (offer ? offer.price * qty : 0);
    }, 0);
  };

  // Loader
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Render the initial list View
  if (!selectedItem) {
    return (
      <div className="min-h-screen bg-orange-50 p-4 font-sans relative pb-20">
        <div className="max-w-7xl mx-auto pt-8">
          <header className="mb-12 text-center animate-fade-in-down">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4 font-serif drop-shadow-sm">
              {isHindi ? "दिव्य चढ़ावा" : "Divine Offerings"}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {isHindi
                ? "अपनी श्रद्धा और भक्ति को भगवान तक पहुँचाएं।"
                : "Offer your devotion to the Divine."}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/chadhava/${createSlug(item.title)}`)}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-orange-100/50 hover:border-orange-200"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-orange-100 shadow-lg flex flex-col items-center min-w-[60px]">
                    <span className="text-xl font-bold text-orange-600 leading-none">
                      {new Date(item.date).getDate()}
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-none mt-0.5">
                      {new Date(item.date).toLocaleString("default", {
                        month: "short",
                      })}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-white leading-tight shadow-black drop-shadow-md">
                    {typeof item.title === "object"
                      ? isHindi
                        ? item.title.hi || item.title
                        : item.title.en || item.title
                      : item.title}
                  </h2>
                  <div className="mt-2 flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="line-clamp-1">{item.location}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-4 border-t border-dashed border-orange-100">
                    <span className="text-orange-700 text-sm font-bold bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                    <span className="text-orange-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      {isHindi ? "अभी भाग लें" : "Participate Now"}{" "}
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // DETAILED VIEW
  return (
    <div className="min-h-screen bg-orange-50/30 font-sans pb-32 relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[70] bg-gray-900 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-xl animate-fade-in-down">
          <Check className="w-4 h-4 text-green-400" />
          <span className="text-sm font-medium">Link copied to clipboard!</span>
        </div>
      )}
      {/* Breadcrumb / Back / Share */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors text-sm font-medium bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          {isHindi ? "वापस" : "Back"}
        </button>

        <button
          onClick={handleShare}
          className="p-2 text-gray-600 hover:text-orange-600 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all relative group"
        >
          {isCopied ? (
            <Check className="w-5 h-5 text-green-600" />
          ) : (
            <Share2 className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Main Content Info */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Image */}
          <div className="w-full md:w-1/2 lg:w-5/12 shrink-0">
            <div className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-500">
              <img
                src={selectedItem.imageUrl}
                alt="Event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Right Info */}
          <div className="flex-1 w-full pt-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight font-serif">
              {typeof selectedItem.title === "object"
                ? isHindi
                  ? selectedItem.title.hi || selectedItem.title
                  : selectedItem.title.en || selectedItem.title
                : selectedItem.title}
            </h1>

            <div className="flex flex-wrap gap-4 mb-8 text-gray-600">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-orange-100">
                <MapPin className="w-5 h-5 shrink-0 text-orange-500" />
                <span className="font-medium">{selectedItem.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-orange-100">
                <Clock className="w-5 h-5 shrink-0 text-orange-500" />
                <span className="font-medium">
                  {new Date(selectedItem.date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  ,{" "}
                  {new Date(selectedItem.date).toLocaleDateString(undefined, {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
            </div>

            {/* Benefits Box */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 mb-8 border border-orange-200 shadow-inner">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm text-orange-500">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-orange-800 font-bold text-lg">
                  {isHindi
                    ? "परिवार में खुशहाली और आशीर्वाद"
                    : "Blessings & Happiness"}
                </h3>
              </div>

              <div className="space-y-3 pl-2">
                {(showFullBenefits
                  ? selectedItem.benifits
                  : selectedItem.benifits.slice(0, 3)
                ).map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium leading-relaxed">
                      {typeof benefit === "object"
                        ? isHindi
                          ? benefit.hi || benefit
                          : benefit.en || benefit
                        : benefit}
                    </span>
                  </div>
                ))}

                {selectedItem.benifits.length > 3 && (
                  <button
                    onClick={() => setShowFullBenefits(!showFullBenefits)}
                    className="text-orange-600 font-semibold text-sm hover:underline mt-2 ml-8"
                  >
                    {showFullBenefits
                      ? isHindi
                        ? "कम देखें"
                        : "Show less"
                      : isHindi
                      ? "और देखें"
                      : "Show more"}
                  </button>
                )}
              </div>
            </div>

            {/* Participate Button (Top) */}
            <button className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-orange-200 transition-all flex items-center justify-center gap-2 transform active:scale-95">
              {isHindi ? "अभी भाग लें" : "Participate Now"}{" "}
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </button>
          </div>
        </div>
      </div>

      {/* Offers Section */}
      <div className="max-w-6xl mx-auto px-4 animate-fade-in-up">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">
          {isHindi ? "एक बार चढ़ावा अर्पण करें" : "Offer One-time Chadhava"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedItem.offers.map((offer) => {
            const qty = cart[offer.id] || 0;
            return (
              <div
                key={offer.id}
                className="flex flex-row bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-300 group h-40"
              >
                {/* Image Side */}
                <div className="w-32 md:w-40 shrink-0 relative overflow-hidden">
                  <img
                    src={offer.imageUrl}
                    alt=""
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Content Side */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-gray-800 text-base line-clamp-1 group-hover:text-orange-700 transition-colors">
                        {isHindi ? offer.title.hi : offer.title.en}
                      </h3>
                      <span className="font-extrabold text-orange-600 text-base shrink-0">
                        ₹{offer.price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                      {isHindi ? offer.description.hi : offer.description.en}
                    </p>
                  </div>

                  {/* Add Button Area - Removed extra margin/padding as requested */}
                  <div className="mt-1 pt-1 border-t border-gray-50">
                    {qty === 0 ? (
                      <button
                        onClick={() => updateQuantity(offer.id, 1)}
                        className="w-full bg-orange-50 border border-orange-200 text-orange-700 font-bold py-1.5 rounded-lg text-sm hover:bg-orange-100 hover:border-orange-300 transition-colors uppercase tracking-wider flex items-center justify-center gap-1 active:scale-95"
                      >
                        <Plus className="w-4 h-4" />{" "}
                        {isHindi ? "जोड़ें" : "Add"}
                      </button>
                    ) : (
                      <div className="flex items-center justify-between bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg px-2 py-1.5 shadow-md">
                        <button
                          onClick={() => updateQuantity(offer.id, -1)}
                          className="p-1 hover:bg-white/20 rounded active:scale-90 transition-transform"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-bold text-sm mx-2">{qty}</span>
                        <button
                          onClick={() => updateQuantity(offer.id, 1)}
                          className="p-1 hover:bg-white/20 rounded active:scale-90 transition-transform"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* How it Works Section - Moved Here */}
      <div className="max-w-6xl mx-auto px-4 mt-16 mb-24 animate-fade-in-up">
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
            <div key={step.id} className="relative group">
              {/* Decorative BG */}
              <div className="absolute top-0 left-0 w-full h-full bg-orange-100/50 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>

              <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-orange-50 h-full flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-orange-100">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white flex items-center justify-center font-bold shadow-md text-sm border-2 border-white">
                    {idx + 1}
                  </div>
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

      {/* Sticky Bottom Bar */}
      {getItemCount() > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-orange-100 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 z-50 animate-slide-up">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div
              onClick={() => setShowBreakdown(true)}
              className="group cursor-pointer hover:bg-orange-50 rounded-lg p-2 -ml-2 transition-colors relative"
            >
              <p className="text-xs text-gray-500 font-medium mb-0.5 flex items-center gap-1">
                {isHindi ? "कुल राशि" : "Total Amount"}{" "}
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${
                    showBreakdown ? "rotate-180" : ""
                  }`}
                />
              </p>
              <p className="text-xl font-bold text-gray-900 flex items-center gap-2">
                ₹{getTotalAmount()}{" "}
                <span className="text-sm font-normal text-gray-500 hidden sm:inline">
                  • {getItemCount()} {isHindi ? "वस्तु" : "Item"}
                  {getItemCount() > 1 ? "s" : ""}
                </span>
              </p>
            </div>
            <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-orange-200 transition-all transform active:scale-95 flex items-center gap-2">
              {isHindi ? "चढ़ावा अर्पण करें" : "Offer Chadhava"}{" "}
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </button>
          </div>
        </div>
      )}

      {/* Price Breakdown Modal/Sheet */}
      {showBreakdown && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[55] backdrop-blur-sm transition-opacity"
            onClick={() => setShowBreakdown(false)}
          ></div>
          <div className="fixed bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-2xl z-[60] p-6 animate-slide-up max-h-[70vh] overflow-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-800">
                {isHindi ? "मूल्य विवरण" : "Price Breakdown"}
              </h3>
              <button
                onClick={() => setShowBreakdown(false)}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {selectedItem.offers.map((offer) => {
                if (cart[offer.id] > 0) {
                  return (
                    <div
                      key={offer.id}
                      className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">
                          {isHindi ? offer.title.hi : offer.title.en}
                        </p>
                        <p className="text-xs text-gray-500">
                          {cart[offer.id]} x ₹{offer.price}
                        </p>
                      </div>
                      <p className="font-bold text-gray-900">
                        ₹{cart[offer.id] * offer.price}
                      </p>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-dashed border-gray-200">
              <span className="font-bold text-lg text-gray-800">
                {isHindi ? "कुल योग" : "Total Payble"}
              </span>
              <span className="font-extrabold text-xl text-orange-600">
                ₹{getTotalAmount()}
              </span>
            </div>

            <button
              onClick={() => setShowBreakdown(false)}
              className="w-full mt-6 bg-gray-900 text-white font-bold py-3 rounded-xl shadow-lg"
            >
              {isHindi ? "ठीक है" : "Done"}
            </button>
          </div>
        </>
      )}

      {/* Spacer for bottom bar */}
      <div className="h-24"></div>
    </div>
  );
};

export default Chadhava;
