import { HamburgerMenuIcon, Cross1Icon, HomeIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PATH } from "./config/Path";
import {
  Sparkles,
  Phone,
  ChevronDown,
  LandPlot,
  Heart,
  Wand,
  Flower,
  Store,
  Zap,
  Gift,
} from "lucide-react";
import LOGO from "../assets/LOGO.png";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleNavClick = (href) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
    setDropdownOpen(null);
  };

  const links = [
    {
      name: language === "english" ? "Home" : "होम",
      href: PATH.HOME,
      icon: HomeIcon,
    },
    {
      name: language === "english" ? "Poojas" : "पूजा",
      href: PATH.POOJA,
      icon: Sparkles,
    },
    {
      name: language === "english" ? "Special Poojas" : "विशेष पूजा",
      href: PATH.SPECIAL_POOJA,
      icon: Zap,
    },
    {
      name: language === "english" ? "Chadhava" : "चढ़ावा",
      href: PATH.CHADHAVA,
      icon: Gift,
    },
    {
      name: language === "english" ? "Temples" : "मंदिर",
      icon: HomeIcon,
      dropdown: [
        {
          name: language === "english" ? "Ayodhya" : "अयोध्या",
          href: PATH.SPIRITUAL_PLACES_AYODHYA,
          icon: LandPlot,
          desc: language === "english" ? "Ram Janmabhoomi" : "राम जन्मभूमि",
        },
        {
          name: language === "english" ? "Vrindavan" : "वृंदावन",
          href: PATH.SPIRITUAL_PLACES_VRINDAVAN,
          icon: Sparkles,
          desc: language === "english" ? "Land of Krishna" : "कृष्ण की भूमि",
        },
        {
          name: language === "english" ? "Barsana" : "बरसाना",
          href: PATH.SPIRITUAL_PLACES_BARSANA,
          icon: Heart,
          desc: language === "english" ? "Radha Rani Dham" : "राधा रानी धाम",
        },
        {
          name: language === "english" ? "Chitrakoot" : "चित्रकूट",
          href: PATH.SPIRITUAL_PLACES_CHITRAKOOT,
          icon: LandPlot,
          desc: language === "english" ? "Forest of Ram" : "राम का वन",
        },
        {
          name: language === "english" ? "Maihar" : "मैहर",
          href: PATH.SPIRITUAL_PLACES_MAIHAR,
          icon: HomeIcon,
          desc: language === "english" ? "Shakti Peeth" : "शक्ति पीठ",
        },
        {
          name: language === "english" ? "Varanasi" : "वाराणसी",
          href: PATH.SPIRITUAL_PLACES_VARANASI,
          icon: Wand,
          desc: language === "english" ? "Varanasi" : "वाराणसी",
        },
        {
          name: language === "english" ? "Vindhyachal" : "विंध्याचल",
          href: PATH.SPIRITUAL_PLACES_VINDHYACHAL,
          icon: Flower,
          desc: language === "english" ? "Vindhyachal" : "विंध्याचल",
        },
        {
          name: language === "english" ? "Prayagraj" : "प्रयागराज",
          href: PATH.TEMPLES_PRAYAGRAJ,
          icon: Flower,
          desc: language === "english" ? "Prayagraj" : "प्रयागराज",
        },
      ],
    },
    {
      name: language === "english" ? "Products" : "उत्पाद",
      href: PATH.PRODUCTS,
      icon: Sparkles,
    },
    {
      name: language === "english" ? "About Us" : "हमारे बारे में",
      href: "/about-us",
      icon: Store,
    },
    {
      name: language === "english" ? "Contact" : "संपर्क",
      href: "/contactus",
      icon: Phone,
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-md border-b z-50">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNavClick(PATH.HOME)}>
            <img
              src={LOGO}
              alt="Logo"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </button>

          {/* Desktop */}
          <div className="hidden md:flex gap-6 items-center">
            {links.map((item, index) => {
              const Icon = item.icon;

              if (item.dropdown) {
                return (
                  <div key={index} className="relative group">
                    <button className="flex items-center gap-2 font-medium cursor-pointer py-2 hover:text-orange-600 transition-colors">
                      <Icon className="w-5 h-5 stroke-orange-500" />
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>

                    <div className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-orange-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 overflow-hidden">
                      <div className="p-2">
                        {item.dropdown.map((sub, i) => {
                          const SubIcon = sub.icon || Sparkles;
                          return (
                            <button
                              key={i}
                              onClick={() => handleNavClick(sub.href)}
                              className="flex items-start gap-4 w-full text-left p-3 rounded-xl hover:bg-orange-50 transition-colors cursor-pointer group/item"
                            >
                              <div className="mt-1 p-2 bg-orange-100 rounded-lg group-hover/item:bg-orange-200 transition-colors">
                                <SubIcon className="w-5 h-5 text-orange-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 group-hover/item:text-orange-700">
                                  {sub.name}
                                </h4>
                                {sub.desc && (
                                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                    {sub.desc}
                                  </p>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center gap-2 font-medium cursor-pointer hover:text-orange-600 transition-colors"
                >
                  <Icon className="w-5 h-5 stroke-orange-500" />
                  {item.name}
                </button>
              );
            })}

            {/* Language Toggle */}
            <div className="flex items-center bg-white rounded-full p-1 shadow-md border border-gray-200 ml-2">
              <button
                onClick={() => setLanguage("hindi")}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  language === "hindi"
                    ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                <span className="flex items-center gap-1">
                  <span className="text-sm">हि</span>
                </span>
              </button>
              <button
                onClick={() => setLanguage("english")}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  language === "english"
                    ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                <span className="flex items-center gap-1">
                  <span className="text-sm">En</span>
                </span>
              </button>
            </div>

            <button
              onClick={() => handleNavClick(PATH.POOJA_DEVI_MAA)}
              className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
            >
              {language === "english" ? "Book Pooja" : "पूजा बुक करें"}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 bg-white border-t">
            {/* Language Toggle for Mobile */}
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center justify-center bg-gray-50 rounded-full p-1">
                <button
                  onClick={() => setLanguage("hindi")}
                  className={`flex-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    language === "hindi"
                      ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-sm"
                      : "text-gray-600"
                  }`}
                >
                  हिंदी
                </button>
                <button
                  onClick={() => setLanguage("english")}
                  className={`flex-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    language === "english"
                      ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-sm"
                      : "text-gray-600"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {links.map((item, index) => {
              const Icon = item.icon;

              if (item.dropdown) {
                return (
                  <div key={index}>
                    <button
                      onClick={() =>
                        setDropdownOpen(dropdownOpen === index ? null : index)
                      }
                      className="flex justify-between w-full px-4 py-3 text-gray-800 font-medium hover:bg-orange-50 transition-colors cursor-pointer"
                    >
                      <span className="flex gap-3 items-center">
                        <Icon className="w-5 h-5 text-orange-500" />
                        {item.name}
                      </span>
                      <ChevronDown
                        className={`transition-transform duration-300 text-gray-500 ${
                          dropdownOpen === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {dropdownOpen === index && (
                      <div className="bg-gray-50 border-y border-gray-100">
                        {item.dropdown.map((sub, i) => (
                          <button
                            key={i}
                            onClick={() => handleNavClick(sub.href)}
                            className="block w-full text-left pl-12 pr-4 py-3 text-sm text-gray-600 font-medium hover:text-orange-600 hover:bg-orange-100/50 transition-colors cursor-pointer"
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center gap-3 px-4 py-3 w-full text-left text-gray-800 font-medium hover:bg-orange-50 transition-colors cursor-pointer"
                >
                  <Icon className="w-5 h-5 text-orange-500" />
                  {item.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
