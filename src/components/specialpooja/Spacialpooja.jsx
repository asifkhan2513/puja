import React, { useState, useEffect } from "react";
import splpooja from "./Spacialpooja";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  Clock,
  Shield,
  Star,
  BookOpen,
  Calendar,
  CheckCircle,
  Package,
  Activity,
  Award,
  Flame,
  UserCheck,
  Video,
} from "lucide-react";

const Spacialpooja = () => {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading/fetching data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-100">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
          <div className="mt-4 text-center text-orange-600 font-semibold animate-pulse">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  const getTitle = (item) => {
    if (item.pujaName) return item.pujaName[language];
    if (item.header) return item.header[language];
    if (item.emojiHeader) return item.emojiHeader[language];
    return "Special Pooja";
  };

  const SubTitle = ({ item }) => {
    if (item.brand)
      return (
        <span className="text-sm font-medium text-orange-800 bg-orange-100 px-3 py-1 rounded-full border border-orange-200 shadow-sm">
          {item.brand[language]}
        </span>
      );
    if (item.tagline)
      return (
        <span className="text-sm font-medium text-orange-800 bg-orange-100 px-3 py-1 rounded-full border border-orange-200 shadow-sm">
          {item.tagline[language]}
        </span>
      );
    if (item.emojiHeader?.subtitle)
      return (
        <span className="text-sm font-medium text-orange-800 bg-orange-100 px-3 py-1 rounded-full border border-orange-200 shadow-sm">
          {item.emojiHeader.subtitle[language]}
        </span>
      );
    return null;
  };

  // Helper to render sections
  const Section = ({ title, icon: Icon, children, className = "" }) => (
    <div className={`mt-6 ${className}`}>
      {title && (
        <h3 className="flex items-center gap-2 text-lg font-bold text-amber-900 mb-3 border-b-2 border-amber-100 pb-2">
          {Icon && <Icon className="w-5 h-5 text-amber-600" />}
          {title}
        </h3>
      )}
      <div className="text-gray-700 text-sm leading-relaxed font-medium">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600 mb-4 animate-fade-in-up drop-shadow-sm font-serif">
            {language === "hindi"
              ? "विशेष पूजा सेवाएँ"
              : "Special Pooja Services"}
          </h1>
          <p className="text-amber-900/80 text-lg max-w-2xl mx-auto font-medium">
            {language === "hindi"
              ? "हमारे विशेष पूजा अनुष्ठानों के माध्यम से दिव्य आशीर्वाद प्राप्त करें।"
              : "Discover divine blessings through our specialized pooja rituals."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {splpooja.map((item, index) => (
            <div
              key={item.id || index}
              className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-amber-200 hover:shadow-2xl hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Card Header */}
              <div className="p-8 bg-gradient-to-br from-amber-50/80 to-white/50 border-b border-amber-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <SubTitle item={item} />
                    {item.header?.emoji && (
                      <span className="text-4xl animate-float filter drop-shadow-md">
                        {item.header.emoji}
                      </span>
                    )}
                    {item.emojiHeader?.main && (
                      <span className="text-4xl animate-float filter drop-shadow-md">
                        {item.emojiHeader.main}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif leading-tight">
                    {getTitle(item)}
                  </h2>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow overflow-y-auto max-h-[800px] custom-scrollbar space-y-2">
                {/* --- ITEM 1: Durga Shatchandi Puja Structure --- */}
                {item.aboutPuja && (
                  <>
                    <Section
                      title={language === "hindi" ? "विवरण" : "Description"}
                      icon={BookOpen}
                    >
                      <p>{item.aboutPuja.description[language]}</p>
                    </Section>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-100">
                        <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-1">
                          {language === "hindi" ? "देवता" : "Deity"}
                        </p>
                        <p className="font-bold text-gray-800">
                          {item.aboutPuja.relatedDeity[language]}
                        </p>
                      </div>
                      <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-100">
                        <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-1">
                          {language === "hindi" ? "समय" : "Time"}
                        </p>
                        <p className="font-bold text-gray-800">
                          {item.aboutPuja.time[language]}
                        </p>
                      </div>
                    </div>

                    <Section
                      title={language === "hindi" ? "उद्देश्य" : "Purpose"}
                      icon={Award}
                    >
                      <p>{item.aboutPuja.purpose[language]}</p>
                    </Section>

                    <Section
                      title={
                        language === "hindi" ? "मुख्य मंत्र" : "Primary Mantra"
                      }
                      icon={Flame}
                      className="bg-orange-50/50 p-5 rounded-xl border border-orange-100 shadow-inner"
                    >
                      <p className="text-orange-900 font-serif italic text-center text-lg font-medium">
                        {item.aboutPuja.primaryMantra[language]}
                      </p>
                    </Section>

                    {item.daywiseSchedule && (
                      <div className="mt-8">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-amber-900 mb-4">
                          <Calendar className="w-5 h-5 text-amber-600" />
                          {language === "hindi"
                            ? "दिन-वार कार्यक्रम"
                            : "Day-wise Schedule"}
                        </h3>
                        <div className="space-y-4">
                          {Object.entries(item.daywiseSchedule).map(
                            ([key, schedule]) => (
                              <div
                                key={key}
                                className="border border-amber-100 rounded-xl p-5 bg-white/60 hover:bg-amber-50/50 transition duration-200 shadow-sm"
                              >
                                <h4 className="font-bold text-orange-700 mb-2 text-lg">
                                  {schedule.title[language]}
                                </h4>
                                <ul className="list-disc pl-5 space-y-1 marker:text-orange-500 text-gray-700">
                                  {schedule.schedule &&
                                    schedule.schedule[language].map(
                                      (step, i) => <li key={i}>{step}</li>
                                    )}
                                  {schedule.additionalRituals &&
                                    schedule.additionalRituals[language].map(
                                      (step, i) => <li key={i}>{step}</li>
                                    )}
                                </ul>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* --- ITEM 2: Online Experience Structure --- */}
                {item.significance && (
                  <>
                    {item.features && (
                      <div className="mb-6 bg-lime-50 text-lime-800 p-3 rounded-lg text-sm font-bold text-center border border-lime-200">
                        {item.features[language]}
                      </div>
                    )}
                    <Section
                      title={item.significance.title[language]}
                      icon={Star}
                    >
                      <p>{item.significance.description[language]}</p>
                    </Section>

                    {item.primaryMantra && (
                      <Section
                        title={language === "hindi" ? "मंत्र" : "Mantra"}
                        icon={Flame}
                        className="bg-orange-50/50 p-5 rounded-xl text-center border border-orange-100"
                      >
                        <p className="text-orange-900 font-serif text-lg font-medium">
                          {item.primaryMantra[language]}
                        </p>
                      </Section>
                    )}

                    <Section
                      title={item.mainSteps?.title[language]}
                      icon={Activity}
                    >
                      <div className="relative border-l-2 border-orange-200 ml-3 space-y-8 pl-8 py-2">
                        {item.mainSteps?.steps.map((step, i) => (
                          <div key={i} className="relative">
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-orange-500 ring-4 ring-white shadow-md"></span>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">
                              {step.day[language]}
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              {step.details[language].map((detail, j) => (
                                <li key={j} className="flex gap-2 items-start">
                                  <span className="text-orange-400 mt-1">
                                    •
                                  </span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </Section>

                    {item.benefits && (
                      <Section
                        title={item.benefits.title[language]}
                        icon={Shield}
                      >
                        <ul className="grid grid-cols-1 gap-3">
                          {item.benefits.points[language].map((point, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 bg-white/50 p-2 rounded-lg"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </Section>
                    )}

                    {item.onlineExperience && (
                      <Section
                        title={item.onlineExperience.title[language]}
                        icon={Video}
                      >
                        <div className="bg-sky-50 p-5 rounded-xl border border-sky-100">
                          <ul className="grid grid-cols-1 gap-3">
                            {item.onlineExperience.features[language].map(
                              (feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                                  {feature}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </Section>
                    )}

                    {item.howToBook && (
                      <Section
                        title={item.howToBook.title[language]}
                        icon={UserCheck}
                        className="mb-4"
                      >
                        <div className="space-y-3">
                          {item.howToBook.steps[language].map((step, i) => (
                            <div
                              key={i}
                              className="bg-white/80 p-3 rounded-xl border border-gray-200 text-center text-sm font-medium shadow-sm hover:shadow-md transition"
                            >
                              {step}
                            </div>
                          ))}
                        </div>
                      </Section>
                    )}
                  </>
                )}

                {/* --- ITEM 3: Mahamrityunjay Jap Structure --- */}
                {item.gloryOfShiva && (
                  <>
                    <Section
                      title={item.gloryOfShiva.title[language]}
                      icon={Star}
                    >
                      <div className="space-y-3 text-justify text-gray-700">
                        {item.gloryOfShiva.content[language].map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </Section>

                    {item.pujaBrief && (
                      <div className="bg-amber-50/80 p-6 rounded-2xl mt-6 border border-amber-100">
                        <h3 className="text-center font-bold text-amber-800 mb-6 text-lg border-b border-amber-200 pb-2">
                          {item.pujaBrief.title[language]}
                        </h3>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-sm">
                          <div className="text-gray-500 font-medium text-right">
                            {language === "hindi" ? "देवता" : "Deity"}:
                          </div>
                          <div className="font-bold text-gray-800">
                            {item.pujaBrief.details.worshippedDeity[language]}
                          </div>

                          <div className="text-gray-500 font-medium text-right">
                            {language === "hindi" ? "अवधि" : "Duration"}:
                          </div>
                          <div className="font-bold text-gray-800">
                            {item.pujaBrief.details.duration[language]}
                          </div>

                          <div className="text-gray-500 font-medium text-right">
                            {language === "hindi" ? "जाप संख्या" : "Jap Count"}:
                          </div>
                          <div className="font-bold text-gray-800">
                            {item.pujaBrief.details.japCount[language]}
                          </div>
                        </div>
                      </div>
                    )}

                    {item.mantra && (
                      <Section
                        title={item.mantra.title[language]}
                        icon={Flame}
                        className="text-center bg-white/50 p-6 rounded-2xl border-2 border-dashed border-amber-300"
                      >
                        <p className="text-xl text-gray-900 font-bold mb-3 font-serif">
                          {item.mantra.mantraText[language]}
                        </p>
                        <p className="text-sm text-gray-500 italic">
                          {item.mantra.description[language]}
                        </p>
                      </Section>
                    )}

                    {item.sevenDayProcedure && (
                      <Section
                        title={item.sevenDayProcedure.title[language]}
                        icon={Calendar}
                      >
                        <div className="space-y-2">
                          {item.sevenDayProcedure.days.map((day, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-4 p-3 hover:bg-amber-50 rounded-xl transition-colors border border-transparent hover:border-amber-100"
                            >
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                                {i + 1}
                              </div>
                              <div className="text-sm font-semibold text-gray-800">
                                {day.day[language]}
                              </div>
                            </div>
                          ))}
                          {item.sevenDayProcedure.days[
                            item.sevenDayProcedure.days.length - 1
                          ]?.note && (
                            <p className="text-xs text-center text-gray-500 mt-2 italic">
                              {
                                item.sevenDayProcedure.days[
                                  item.sevenDayProcedure.days.length - 1
                                ].note[language]
                              }
                            </p>
                          )}
                        </div>
                      </Section>
                    )}

                    {item.beneficialFor && (
                      <Section
                        title={item.beneficialFor.title[language]}
                        icon={UserCheck}
                      >
                        <div className="flex flex-wrap gap-2">
                          {item.beneficialFor.points[language].map(
                            (point, i) => (
                              <span
                                key={i}
                                className="px-4 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded-full border border-green-200"
                              >
                                {point}
                              </span>
                            )
                          )}
                        </div>
                      </Section>
                    )}

                    {item.prasadPackage && (
                      <Section
                        title={item.prasadPackage.title[language]}
                        icon={Package}
                      >
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {item.prasadPackage.items[language].map((item, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-3 text-sm font-medium p-2 bg-gray-50 rounded-lg"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Section>
                    )}
                  </>
                )}

                {/* --- ITEM 4, 8, 9: Standard Puja Structure (Introduction based) --- */}
                {item.pujaIntroduction && (
                  <>
                    <Section
                      title={item.pujaIntroduction.title[language]}
                      icon={Star}
                    >
                      <ul className="space-y-2 list-none text-gray-700">
                        {item.pujaIntroduction.content[language].map(
                          (line, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <span className="text-orange-500 mt-1.5 shrink-0 text-xs">
                                ✦
                              </span>
                              <span>{line}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </Section>

                    {item.whyPerform && (
                      <Section
                        title={item.whyPerform.title[language]}
                        icon={Shield}
                        className="bg-orange-50/50 p-4 rounded-xl border border-orange-100"
                      >
                        <ul className="space-y-2">
                          {item.whyPerform.points[language].map((point, i) => (
                            <li
                              key={i}
                              className="flex gap-2 items-start text-sm font-medium text-gray-800"
                            >
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </Section>
                    )}

                    {item.benefits && (
                      <Section
                        title={item.benefits.title[language]}
                        icon={Award}
                      >
                        <ul className="grid grid-cols-1 gap-2">
                          {item.benefits.points[language].map((point, i) => (
                            <li
                              key={i}
                              className="flex gap-2 items-start bg-white/60 p-2 rounded-lg border border-amber-100"
                            >
                              <span className="text-green-500 mt-0.5 shrink-0">
                                ✔
                              </span>
                              <span className="text-sm">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </Section>
                    )}

                    {item.pujaDetails && (
                      <div className="bg-amber-50/80 p-5 rounded-2xl mt-6 border border-amber-200 shadow-sm">
                        <h3 className="text-center font-bold text-amber-800 mb-4 text-lg border-b border-amber-300 pb-2">
                          {item.pujaDetails.title[language]}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          {item.pujaDetails.details.duration && (
                            <div className="flex justify-between sm:block border-b sm:border-b-0 border-amber-200 pb-1 sm:pb-0">
                              <span className="text-gray-500 block mb-1">
                                {language === "hindi" ? "अवधि" : "Duration"}
                              </span>
                              <span className="font-bold text-gray-800">
                                {item.pujaDetails.details.duration[language]}
                              </span>
                            </div>
                          )}
                          {item.pujaDetails.details.time && (
                            <div className="flex justify-between sm:block border-b sm:border-b-0 border-amber-200 pb-1 sm:pb-0">
                              <span className="text-gray-500 block mb-1">
                                {language === "hindi" ? "समय" : "Time"}
                              </span>
                              <span className="font-bold text-gray-800">
                                {item.pujaDetails.details.time[language]}
                              </span>
                            </div>
                          )}
                          {item.pujaDetails.details.priests && (
                            <div className="flex justify-between sm:block sm:col-span-2 border-b sm:border-b-0 border-amber-200 pb-1 sm:pb-0">
                              <span className="text-gray-500 block mb-1">
                                {language === "hindi" ? "पुरोहित" : "Priests"}
                              </span>
                              <span className="font-bold text-gray-800">
                                {item.pujaDetails.details.priests[language]}
                              </span>
                            </div>
                          )}
                          {item.pujaDetails.details.pujaType && (
                            <div className="flex justify-between items-center sm:block sm:col-span-2 bg-white/50 p-2 rounded">
                              <span className="text-gray-500 block mb-1">
                                {language === "hindi" ? "प्रकार" : "Type"}
                              </span>
                              <span className="font-bold text-orange-700">
                                {item.pujaDetails.details.pujaType[language]}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {item.pujaProcedure && (
                      <Section
                        title={item.pujaProcedure.title[language]}
                        icon={Activity}
                      >
                        <div className="relative border-l-2 border-orange-300 ml-3 space-y-4 pl-6 py-2">
                          {item.pujaProcedure.steps[language].map((step, i) => (
                            <div key={i} className="relative group/step">
                              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-orange-500 ring-2 ring-white group-hover/step:ring-orange-200 transition-all"></span>
                              <p className="text-sm text-gray-700">{step}</p>
                            </div>
                          ))}
                        </div>
                      </Section>
                    )}

                    {item.auspiciousTiming && (
                      <Section
                        title={item.auspiciousTiming.title[language]}
                        icon={Calendar}
                        className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border-l-4 border-orange-400"
                      >
                        <div className="flex flex-wrap gap-2">
                          {item.auspiciousTiming.days[language].map(
                            (day, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-white border border-orange-200 text-orange-800 text-xs font-bold rounded-full shadow-sm"
                              >
                                {day}
                              </span>
                            )
                          )}
                        </div>
                      </Section>
                    )}

                    {item.beneficialFor && (
                      <Section
                        title={item.beneficialFor.title[language]}
                        icon={UserCheck}
                      >
                        <ul className="grid grid-cols-1 gap-2">
                          {item.beneficialFor.points[language].map(
                            (point, i) => (
                              <li
                                key={i}
                                className="flex gap-2 items-start text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></div>
                                <span className="text-gray-700 font-medium">
                                  {point}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </Section>
                    )}

                    {item.prasadPackage && (
                      <Section
                        title={item.prasadPackage.title[language]}
                        icon={Package}
                      >
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-gray-50 p-3 rounded-xl border border-gray-200">
                          {item.prasadPackage.items[language].map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm font-medium"
                            >
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0"></div>
                              <span className="break-words">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </Section>
                    )}
                  </>
                )}

                {/* --- ITEM 5, 8, 9 & Generic Structure for Future Complex Items --- */}
                {/* Checks for specific keys to render content dynamically */}
                {(item.mahima ||
                  item.shastriyaPraman ||
                  item.mantraAndPath ||
                  item.mantraAndStotra ||
                  item.bookingProcess ||
                  item.whyBhagwanPuja) && (
                  <>
                    {item.mahima && (
                      <Section title={item.mahima.title[language]} icon={Star}>
                        <ul className="space-y-2">
                          {item.mahima.content[language].map((line, i) => (
                            <li
                              key={i}
                              className="flex gap-2 items-start text-gray-700"
                            >
                              <span className="text-orange-500 mt-1 shrink-0 text-xs">
                                ✦
                              </span>
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </Section>
                    )}

                    {item.shastriyaPraman && (
                      <Section
                        title={item.shastriyaPraman.title[language]}
                        icon={BookOpen}
                        className="bg-amber-50/50 p-4 rounded-xl border border-amber-100"
                      >
                        <ul className="space-y-2">
                          {item.shastriyaPraman.references[language].map(
                            (line, i) => (
                              <li
                                key={i}
                                className="flex gap-2 items-start text-sm font-medium text-gray-800"
                              >
                                <span className="text-amber-600 mt-1 shrink-0">
                                  •
                                </span>
                                <span>{line}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </Section>
                    )}

                    {item.shastriyaImportance && (
                      <Section
                        title={item.shastriyaImportance.title[language]}
                        icon={BookOpen}
                        className="bg-amber-50/50 p-4 rounded-xl border border-amber-100"
                      >
                        <ul className="space-y-2">
                          {item.shastriyaImportance.content[language].map(
                            (line, i) => (
                              <li
                                key={i}
                                className="flex gap-2 items-start text-sm font-medium text-gray-800"
                              >
                                <span className="text-amber-600 mt-1 shrink-0">
                                  •
                                </span>
                                <span>{line}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </Section>
                    )}

                    {item.mantraAndPath && (
                      <Section
                        title={item.mantraAndPath.title[language]}
                        icon={Flame}
                        className="bg-orange-50/40 p-4 rounded-xl border-dashed border-2 border-orange-200"
                      >
                        <ul className="grid grid-cols-1 gap-2">
                          {item.mantraAndPath.list[language].map((line, i) => (
                            <li
                              key={i}
                              className="text-center font-serif text-amber-900 font-medium"
                            >
                              {line}
                            </li>
                          ))}
                        </ul>
                      </Section>
                    )}

                    {item.mantraAndStotra && (
                      <Section
                        title={item.mantraAndStotra.title[language]}
                        icon={Flame}
                        className="bg-orange-50/40 p-4 rounded-xl border-dashed border-2 border-orange-200"
                      >
                        <ul className="grid grid-cols-1 gap-2">
                          {item.mantraAndStotra.list[language].map(
                            (line, i) => (
                              <li
                                key={i}
                                className="text-center font-serif text-amber-900 font-medium"
                              >
                                {line}
                              </li>
                            )
                          )}
                        </ul>
                      </Section>
                    )}

                    {item.specialPower && (
                      <Section
                        title={item.specialPower.title[language]}
                        icon={Flame}
                      >
                        <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-500 italic text-gray-700 text-sm">
                          <ul className="space-y-2">
                            {item.specialPower.content[language].map(
                              (line, i) => (
                                <li key={i}>{line}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </Section>
                    )}

                    {item.bookingProcess && (
                      <Section
                        title={item.bookingProcess.title[language]}
                        icon={CheckCircle}
                      >
                        <div className="flex flex-col gap-3">
                          {item.bookingProcess.steps[language].map(
                            (step, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100"
                              >
                                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">
                                  {i + 1}
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                  {step}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </Section>
                    )}

                    {item.whyBhagwanPuja && (
                      <Section
                        title={item.whyBhagwanPuja.title[language]}
                        icon={Award}
                        className="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 p-5 rounded-xl border border-purple-100"
                      >
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {item.whyBhagwanPuja.points[language].map(
                            (point, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-sm font-bold text-indigo-900"
                              >
                                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                {point}
                              </li>
                            )
                          )}
                        </ul>
                      </Section>
                    )}

                    {item.pujaOverview && (
                      <div className="bg-white/60 p-5 rounded-2xl mt-6 border border-gray-200 shadow-sm">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                          <Activity className="w-5 h-5 text-orange-600" />
                          {item.pujaOverview.title[language]}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          {Object.entries(item.pujaOverview.details).map(
                            ([key, value]) => {
                              if (key === "auspiciousDates") return null;
                              return (
                                <div key={key} className="flex flex-col">
                                  <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                  </span>
                                  <span className="font-semibold text-gray-800">
                                    {typeof value === "object"
                                      ? value[language]
                                      : value}
                                  </span>
                                </div>
                              );
                            }
                          )}
                          {item.pujaOverview.details.auspiciousDates && (
                            <div className="sm:col-span-2 mt-2">
                              <span className="text-xs text-gray-500 uppercase font-bold tracking-wider block mb-2">
                                {language === "hindi"
                                  ? "शुभ तिथियां"
                                  : "Auspicious Dates"}
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {item.pujaOverview.details.auspiciousDates[
                                  language
                                ].map((date, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-bold border border-amber-200"
                                  >
                                    {date}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {item.detailedDescription && (
                      <Section
                        title={item.detailedDescription.title[language]}
                        icon={BookOpen}
                      >
                        <div className="space-y-2 text-justify text-gray-700 leading-relaxed">
                          {item.detailedDescription.content[language].map(
                            (line, i) => (
                              <p key={i}>{line}</p>
                            )
                          )}
                        </div>
                      </Section>
                    )}

                    {item.mantra && item.mantra.mantraText && (
                      <Section
                        title={item.mantra.title[language]}
                        icon={Flame}
                        className="text-center bg-gray-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden group hover:scale-[1.01] transition-transform"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-amber-600/20"></div>
                        <div className="relative z-10">
                          <p className="text-2xl font-bold mb-2 font-serif text-amber-400">
                            {item.mantra.mantraText[language]}
                          </p>
                          {item.mantra.description && (
                            <p className="text-gray-300 text-sm italic">
                              {item.mantra.description[language]}
                            </p>
                          )}
                        </div>
                      </Section>
                    )}

                    {item.dayWiseAnushthan && (
                      <div className="mt-8">
                        <h3 className="flex items-center gap-2 text-xl font-bold text-amber-900 mb-6 justify-center">
                          <Calendar className="w-6 h-6 text-amber-600" />
                          {item.dayWiseAnushthan.title[language]}
                        </h3>

                        <div className="space-y-6">
                          {item.dayWiseAnushthan.oneDay && (
                            <div className="bg-white/70 rounded-xl border border-amber-200 overflow-hidden shadow-sm hover:shadow-md transition">
                              <div className="bg-amber-100/50 p-3 border-b border-amber-200 font-bold text-amber-900 flex justify-between items-center">
                                <span>
                                  {item.dayWiseAnushthan.oneDay.title[language]}
                                </span>
                                <span className="text-xs bg-amber-200 px-2 py-1 rounded-full text-amber-800">
                                  1 Day
                                </span>
                              </div>
                              <div className="p-4">
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mb-3">
                                  {item.dayWiseAnushthan.oneDay.steps[
                                    language
                                  ].map((step, i) => (
                                    <li key={i} className="flex gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5"></div>
                                      {step}
                                    </li>
                                  ))}
                                </ul>
                                <div className="bg-amber-50 p-2 rounded text-xs text-amber-800 font-medium text-center">
                                  🎯{" "}
                                  {
                                    item.dayWiseAnushthan.oneDay.purpose[
                                      language
                                    ]
                                  }
                                </div>
                              </div>
                            </div>
                          )}

                          {item.dayWiseAnushthan.threeDay && (
                            <div className="bg-white/70 rounded-xl border border-orange-200 overflow-hidden shadow-sm hover:shadow-md transition">
                              <div className="bg-orange-100/50 p-3 border-b border-orange-200 font-bold text-orange-900 flex justify-between items-center">
                                <span>
                                  {
                                    item.dayWiseAnushthan.threeDay.title[
                                      language
                                    ]
                                  }
                                </span>
                                <span className="text-xs bg-orange-200 px-2 py-1 rounded-full text-orange-800">
                                  3 Days
                                </span>
                              </div>
                              <div className="p-4">
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {item.dayWiseAnushthan.threeDay.distribution[
                                    language
                                  ].map((dist, i) => (
                                    <span
                                      key={i}
                                      className="bg-white border border-gray-200 px-2 py-1 rounded text-xs text-gray-600 shadow-sm"
                                    >
                                      {dist}
                                    </span>
                                  ))}
                                </div>
                                <div className="bg-orange-50 p-2 rounded text-xs text-orange-800 font-medium text-center">
                                  🎯{" "}
                                  {
                                    item.dayWiseAnushthan.threeDay.purpose[
                                      language
                                    ]
                                  }
                                </div>
                              </div>
                            </div>
                          )}

                          {["sevenDay", "elevenDay"].map((key) => {
                            const subItem = item.dayWiseAnushthan[key];
                            if (!subItem) return null;
                            return (
                              <div
                                key={key}
                                className="bg-white/70 rounded-xl border border-red-200 overflow-hidden shadow-sm hover:shadow-md transition"
                              >
                                <div className="bg-red-50 p-3 border-b border-red-200 font-bold text-red-900 flex justify-between items-center">
                                  <span>{subItem.title[language]}</span>
                                  <span className="text-xs bg-red-100 px-2 py-1 rounded-full text-red-800">
                                    {key === "sevenDay" ? "7 Days" : "11 Days"}
                                  </span>
                                </div>
                                <div className="p-4">
                                  <ul className="space-y-1 text-sm text-gray-700">
                                    {subItem.details[language].map(
                                      (detail, i) => (
                                        <li key={i}>• {detail}</li>
                                      )
                                    )}
                                  </ul>
                                  {subItem.purpose && (
                                    <div className="bg-red-50 p-2 rounded text-xs text-red-800 font-medium text-center mt-3">
                                      🎯 {subItem.purpose[language]}
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {item.priceAndFormats && (
                      <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-2xl border border-green-200">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-green-900 mb-3">
                          <Package className="w-5 h-5 text-green-600" />
                          {item.priceAndFormats.title[language]}
                        </h3>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                          <div className="flex flex-wrap gap-2">
                            {item.priceAndFormats.details.formats[language].map(
                              (fmt, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-white shadow-sm border border-green-200 rounded-full text-xs font-bold text-green-700"
                                >
                                  {fmt}
                                </span>
                              )
                            )}
                          </div>
                          <div className="text-xl font-bold text-green-800 shrink-0">
                            {item.priceAndFormats.details.price[language]}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Card Footer - Action Button */}
              <div className="p-8 bg-white/50 border-t border-amber-100">
                <button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                  <Calendar className="w-6 h-6" />
                  {language === "hindi" ? "अभी बुक करें" : "Book Now"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spacialpooja;
