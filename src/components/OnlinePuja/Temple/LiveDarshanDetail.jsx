import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share2, Eye, Check } from "lucide-react";
import { liveDarshanServices } from "./liveDarshanServices";

const LiveDarshanDetail = () => {
  const { id } = useParams();
  const service = liveDarshanServices.find((item) => item.id === id);
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setCopied(false);
        setShowToast(false);
      }, 3000);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Service not found
        </h2>
        <Link
          to="/live-darshan"
          className="text-amber-600 hover:text-amber-700 font-medium"
        >
          Back to Live Darshan
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-orange-50/30 py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-5 md:right-10 z-50 animate-bounce">
          <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl flex items-center gap-2 font-bold">
            <Check className="w-5 h-5" /> Link Copied!
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb / Back */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/live-darshan"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 transition-colors bg-white/80 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md border border-amber-100 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>All Darshans</span>
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-5 py-2.5 bg-amber-100/50 text-amber-800 rounded-full hover:bg-amber-200 transition-colors border border-amber-200 font-semibold"
          >
            <Share2 className="w-4 h-4" />
            {copied ? "Copied" : "Share"}
          </button>
        </div>

        {/* Video Player Section */}
        <div className="bg-black rounded-2xl shadow-2xl overflow-hidden aspect-video relative mb-10 border-4 border-amber-500/30 ring-4 ring-orange-100 group">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-red-600/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider animate-pulse">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Live Darshan
              </span>
            </div>
          </div>
        </div>

        {/* Info Wrapper */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-orange-100 relative overflow-hidden">
          {/* Decorative watermark */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-8 border-b border-orange-100 relative z-10">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 font-serif tracking-tight leading-tight">
                {service.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  Live Now
                </span>
                <span className="flex items-center gap-1 text-amber-600">
                  <Eye className="w-5 h-5" /> 1.2k Watching
                </span>
                <span className="hidden md:inline text-gray-300">|</span>
                <span className="text-gray-500">{service.location}</span>
              </div>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-orange-200 shrink-0 transform hover:-translate-y-1"
            >
              <Share2 className="w-5 h-5" />
              Share Darshan
            </button>
          </div>

          {/* Description Content */}
          <div className="pt-10 relative z-10">
            <h2 className="text-2xl font-bold text-orange-800 mb-6 font-serif border-l-4 border-orange-500 pl-4">
              About the Temple & Darshan
            </h2>
            <div className="prose md:prose-lg prose-amber max-w-none text-gray-700 leading-relaxed font-meduim">
              {service.description.split("\\n").map((line, idx) => {
                const trimmed = line.trim();
                if (!trimmed) return <div key={idx} className="h-6" />;

                // Quote styling
                if (trimmed.startsWith("“") || trimmed.startsWith('"')) {
                  return (
                    <blockquote
                      key={idx}
                      className="border-l-4 border-amber-500 pl-6 italic text-2xl text-orange-900 my-8 bg-orange-50 p-6 rounded-r-xl shadow-inner font-serif"
                    >
                      {trimmed}
                    </blockquote>
                  );
                }

                // Bullet points
                if (trimmed.startsWith("•")) {
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 ml-2 mb-3 bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-orange-200 transition-colors"
                    >
                      <span className="text-amber-500 text-xl mt-0.5">•</span>
                      <span className="text-gray-800 font-medium">
                        {trimmed.substring(1).trim()}
                      </span>
                    </div>
                  );
                }

                // Headers
                if (trimmed.endsWith(":")) {
                  return (
                    <h4
                      key={idx}
                      className="text-xl font-bold text-gray-900 mt-8 mb-3 flex items-center gap-2"
                    >
                      <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                      {trimmed}
                    </h4>
                  );
                }

                return (
                  <p key={idx} className="mb-4 text-gray-700 text-lg">
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Keywords Tags */}
            {service.keywords && service.keywords.length > 0 && (
              <div className="mt-12 pt-8 border-t border-orange-100">
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-bold flex items-center gap-2">
                  Related Topics
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-100 hover:text-orange-900 transition-colors cursor-default border border-orange-100"
                    >
                      #{keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDarshanDetail;
