import {
  HamburgerMenuIcon,
  Cross1Icon,
  HomeIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PATH } from "./config/Path";
import { Sparkles, Phone, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [pujasOpen, setPujasOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (href) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  const links = [
    { name: "Home", href: PATH.HOME, icon: HomeIcon },
    {
      name: "Pujas",
      href: PATH.PUJAS_DEVI_MAA,
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
    { name: "Temples", href: PATH.TEMPLES, icon: HomeIcon },
    { name: "Contact", href: "/contactus", icon: Phone },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200 z-50 transition-colors duration-300">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick(PATH.HOME)}
            className="flex items-center gap-2 group"
          >
            <Sparkles className="w-8 h-8 text-amber-600 group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent pt-serif-regular">
              Silo Puja
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((item, index) => {
              const Icon = item.icon;
              if (item.dropdown) {
                return (
                  <div key={index} className="relative group">
                    <button className="flex items-center gap-2 text-black font-medium hover:text-accent transition-colors">
                      <Icon className="w-4 h-4" />
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdown.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          onClick={() => handleNavClick(subItem.href)}
                          className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-accent/10 hover:text-accent first:rounded-t-xl last:rounded-b-xl transition-colors"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center gap-2 text-black font-medium hover:text-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </button>
              );
            })}

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick(PATH.PUJAS_DEVI_MAA)}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-2xl hover:from-accent hover:to-accent-dark shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Book Puja
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              className="text-black p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? (
                <Cross1Icon className="w-6 h-6" />
              ) : (
                <HamburgerMenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 animate-slideDown">
            <div className="flex flex-col gap-3 pt-2">
              {links.map((item, index) => {
                const Icon = item.icon;
                if (item.dropdown) {
                  return (
                    <div key={index}>
                      <button
                        onClick={() => setPujasOpen(!pujasOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 text-black font-medium hover:text-accent hover:bg-accent/10 rounded-xl transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Icon className="w-4 h-4" />
                          {item.name}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            pujasOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {pujasOpen && (
                        <div className="ml-6 mt-2 flex flex-col gap-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <button
                              key={subIndex}
                              onClick={() => handleNavClick(subItem.href)}
                              className="text-left px-3 py-2 text-sm text-gray-600 hover:text-accent hover:bg-accent/10 rounded-xl transition-colors"
                            >
                              {subItem.name}
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
                    className="flex items-center gap-2 px-3 py-2 text-black font-medium hover:text-accent hover:bg-accent/10 rounded-xl transition-colors w-full text-left"
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </button>
                );
              })}

              <button
                onClick={() => handleNavClick(PATH.PUJAS_DEVI_MAA)}
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-2xl hover:from-accent hover:to-accent-dark shadow-lg text-center transition-all duration-300"
              >
                Book Puja
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
