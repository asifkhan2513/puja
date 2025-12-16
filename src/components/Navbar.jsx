import {
  HamburgerMenuIcon,
  Cross1Icon,
  HomeIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PATH } from "./config/Path";
import { Sparkles, Phone, ChevronDown, LandPlot, Video } from "lucide-react";
import LOGO from "../assets/LOGO.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();

  const handleNavClick = (href) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
    setDropdownOpen(null);
  };

  const links = [
    { name: "Home", href: PATH.HOME, icon: HomeIcon },

    {
      name: "Pujas",
      icon: Sparkles,
      dropdown: [
        { name: "Devi Maa Pujas", href: PATH.PUJAS_DEVI_MAA },
        { name: "Lord Ganesha", href: PATH.PUJAS_GANESHA },
        { name: "Lord Shiva", href: PATH.PUJAS_SHIVA },
        { name: "Lord Vishnu", href: PATH.PUJAS_VISHNU },
      ],
    },

    { name: "Daan & Seva", href: PATH.DAAN, icon: RocketIcon },
    { name: "Rashifal", href: PATH.RASHIFAL_DAILY, icon: Sparkles },

    {
      name: "Temples",
      icon: HomeIcon,
      dropdown: [
        {
          name: "Spiritual Places",
          href: PATH.SPIRITUAL_PLACES,
          icon: LandPlot,
          desc: "Explore sacred lands of Ram & Krishna.",
        },
        {
          name: "Live Darshan",
          href: PATH.LIVE_DARSHAN,
          icon: Video,
          desc: "Watch live aartis from major temples.",
        },
      ],
    },

    { name: "Contact", href: "/contactus", icon: Phone },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-md shadow-md border-b z-50">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNavClick(PATH.HOME)}>
            <img src={LOGO} alt="Logo" className="w-14 h-14 rounded-full" />
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

                    <div
                      className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-orange-100
                        opacity-0 invisible translate-y-2
                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                        transition-all duration-300 ease-out z-50 overflow-hidden"
                    >
                      <div className="p-2">
                        {item.dropdown.map((sub, i) => {
                          const SubIcon = sub.icon || Sparkles;
                          return (
                            <button
                              onClick={() => handleNavClick(sub.href)}
                              className="flex items-start gap-4 w-full text-left p-3 rounded-xl 
                                hover:bg-orange-50 transition-colors cursor-pointer group/item"
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

            <button
              onClick={() => handleNavClick(PATH.PUJAS_DEVI_MAA)}
              className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl"
            >
              Book Puja
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4">
            {links.map((item, index) => {
              const Icon = item.icon;

              if (item.dropdown) {
                return (
                  <div key={index}>
                    <button
                      onClick={() =>
                        setDropdownOpen(dropdownOpen === index ? null : index)
                      }
                      className="flex justify-between w-full px-3 py-2 cursor-pointer"
                    >
                      <span className="flex gap-2">
                        <Icon className="w-5 h-5" />
                        {item.name}
                      </span>
                      <ChevronDown
                        className={`transition ${
                          dropdownOpen === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {dropdownOpen === index && (
                      <div className="ml-6">
                        {item.dropdown.map((sub, i) => (
                          <button
                            key={i}
                            onClick={() => handleNavClick(sub.href)}
                            className="block w-full text-left py-2 text-sm cursor-pointer"
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
                  className="flex gap-2 px-3 py-2 w-full text-left cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
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
