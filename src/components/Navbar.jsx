import {
  MoonIcon,
  SunIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  HomeIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { PATH } from "./config/Path";
import { Sparkles, Phone, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [pujasOpen, setPujasOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    <nav className="sticky top-0 w-full bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-dark-100 z-50 transition-colors duration-300">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={PATH.HOME} className="flex items-center gap-2 group">
            <Sparkles className="w-8 h-8 text-amber-600 dark:text-amber-400 group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent pt-serif-regular">
              Divine Puja
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((item, index) => {
              const Icon = item.icon;
              if (item.dropdown) {
                return (
                  <div key={index} className="relative group">
                    <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium hover:text-accent dark:hover:text-accent-light transition-colors">
                      <Icon className="w-4 h-4" />
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-dark-50 rounded-xl shadow-lg border border-gray-200 dark:border-dark-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-accent/10 dark:hover:bg-dark-100 hover:text-accent dark:hover:text-accent-light first:rounded-t-xl last:rounded-b-xl transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={index}
                  to={item.href}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium hover:text-accent dark:hover:text-accent-light transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <MoonIcon className="w-5 h-5 text-gray-700" />
              ) : (
                <SunIcon className="w-5 h-5 text-amber-400" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              to={PATH.PUJAS_DEVI_MAA}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-2xl hover:from-accent hover:to-accent-dark shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Book Puja
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <MoonIcon className="w-5 h-5 text-gray-700" />
              ) : (
                <SunIcon className="w-5 h-5 text-amber-400" />
              )}
            </button>
            <button
              className="text-gray-700 dark:text-gray-300 p-2"
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
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-accent dark:hover:text-accent-light hover:bg-accent/10 dark:hover:bg-dark-100 rounded-xl transition-colors"
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
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light hover:bg-accent/10 dark:hover:bg-dark-100 rounded-xl transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={index}
                    to={item.href}
                    className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-accent dark:hover:text-accent-light hover:bg-accent/10 dark:hover:bg-dark-100 rounded-xl transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                );
              })}

              <Link
                to={PATH.PUJAS_DEVI_MAA}
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-2xl hover:from-accent hover:to-accent-dark shadow-lg text-center transition-all duration-300"
                onClick={() => setOpen(false)}
              >
                Book Puja
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
