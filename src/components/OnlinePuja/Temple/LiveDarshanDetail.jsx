import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share2, Check } from "lucide-react";
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
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 sm:p-10 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Service not found
        </h2>
        <Link
          to="/live-darshan"
          className="text-amber-600 hover:text-amber-700 font-medium text-sm sm:text-base"
        >
          Back to Live Darshan
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50/50 to-white py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 sm:top-24 right-4 sm:right-5 md:right-10 z-50 animate-bounce">
          <div className="bg-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-xl flex items-center gap-2 font-bold text-sm sm:text-base">
            <Check className="w-4 h-4 sm:w-5 sm:h-5" /> Link Copied!
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb / Back */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 mb-6 sm:mb-8">
          <Link
            to="/live-darshan"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-amber-700 hover:text-amber-800 transition-colors bg-white/80 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md border border-amber-100 font-semibold text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden xs:inline">All Darshans</span>
            <span className="xs:hidden">Back</span>
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-amber-100/50 text-amber-800 rounded-full hover:bg-amber-200 transition-colors border border-amber-200 font-semibold text-sm sm:text-base"
          >
            <Share2 className="w-4 h-4" />
            <span>{copied ? "Copied" : "Share"}</span>
          </button>
        </div>

        {/* Video Player Section */}
        <div className="bg-black rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden aspect-video relative mb-6 sm:mb-8 md:mb-10 border-2 sm:border-4 border-amber-500/30 ring-2 sm:ring-4 ring-orange-100 group">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Info Wrapper */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border-2 border-orange-100 relative overflow-hidden">
          {/* Decorative watermark */}
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="flex flex-col gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-orange-100 relative z-10">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 font-serif tracking-tight leading-tight">
                {service.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-gray-600">
                <span className="text-gray-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  {service.location}
                </span>
              </div>
            </div>
            <button
              onClick={handleShare}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-orange-200 transform hover:-translate-y-1 text-sm sm:text-base"
            >
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
              Share Darshan
            </button>
          </div>

          {/* Description Content */}
          <div className="pt-10 relative z-10">
            {/* <h2 className="text-2xl font-bold text-orange-800 mb-6 font-serif border-l-4 border-orange-500 pl-4">
              About the Temple & Darshan
            </h2> */}
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

            {/* Boxes Tags - Grid Format */}
            {service.Boxes && service.Boxes.length > 0 && (
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2 border-orange-200">
                <div className="text-center mb-6">
                  <p className="text-sm sm:text-base text-gray-700 font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                    <span className="w-8 h-0.5 bg-orange-500"></span>
                    Many devotees especially look for
                    <span className="w-8 h-0.5 bg-orange-500"></span>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {service.Boxes.map((keyword, i) => (
                    <div
                      key={i}
                      className="group relative bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full group-hover:animate-pulse"></span>
                        <span className="text-orange-700 group-hover:text-orange-900 font-semibold text-sm sm:text-base">
                          {keyword}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* After Boxes Content */}
            {service.afterBoxes && (
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-orange-200">
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  {service.afterBoxes}
                </p>
              </div>
            )}

            {/* Hindi Text */}
            {service.HindiText && (
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl shadow-lg">
                <p className="text-white text-base sm:text-lg md:text-xl font-semibold italic text-center leading-relaxed">
                  {service.HindiText}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDarshanDetail;
