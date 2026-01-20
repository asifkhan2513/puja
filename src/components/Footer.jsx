import { useNavigate } from "react-router-dom";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { PATH } from "./config/Path";
import LOGO from "../assets/LOGO.png";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleLinkClick = (href) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: PATH.HOME },
    { name: "About US", href: PATH.ABOUT_US },
    { name: "About Mission", href: PATH.ABOUT_MISSION },
    { name: "Our Team", href: PATH.ABOUT_TEAM },
    { name: "FAQ", href: PATH.FAQ },
  ];

  const services = [
    { name: "Poojas", href: PATH.POOJA },
    { name: "Chadhava", href: PATH.CHADHAVA },
    { name: "Products", href: PATH.PRODUCTS },
  ];

  const resources = [
    { name: "About Us", href: PATH.ABOUT_US },
    { name: "Contact", href: "/contactus" },
    { name: "Download App", href: PATH.DOWNLOAD },
    { name: "Book Pooja", href: PATH.POOJA_DEVI_MAA },
  ];

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200 border-t-2 border-amber-500/20 shadow-2xl">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-3">
            <button
              onClick={() => handleLinkClick(PATH.HOME)}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <img
                src={LOGO}
                alt="Logo"
                className="w-16 h-16 md:w-32 md:h-32 rounded-full object-cover border-2 border-amber-500 bg-white/10 group-hover:shadow-amber-500/50 shadow-md transition-all duration-300"
              />
            </button>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting devotees with divine blessings through authentic
              Poojas.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-amber-500/50 border border-gray-700 hover:border-amber-500 cursor-pointer group"
                aria-label="Twitter"
              >
                <TwitterLogoIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-amber-500/50 border border-gray-700 hover:border-amber-500 cursor-pointer group"
                aria-label="Instagram"
              >
                <InstagramLogoIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-amber-500/50 border border-gray-700 hover:border-amber-500 cursor-pointer group"
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-3 pt-serif-bold flex items-center gap-2">
              <span className="w-1 h-5 bg-amber-500 rounded"></span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm inline-block hover:translate-x-1 transform duration-200 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-3 pt-serif-bold flex items-center gap-2">
              <span className="w-1 h-5 bg-amber-500 rounded"></span>
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(service.href)}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm inline-block hover:translate-x-1 transform duration-200 cursor-pointer"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-base mb-3 pt-serif-bold flex items-center gap-2">
              <span className="w-1 h-5 bg-amber-500 rounded"></span>
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(resource.href)}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm inline-block hover:translate-x-1 transform duration-200 cursor-pointer"
                  >
                    {resource.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Mail className="w-5 h-5 text-amber-400 stroke-[1.5]" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email Us</p>
              <a
                href="mailto: bhagwanpoojalive@gmail.com"
                className="text-sm text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
              >
                bhagwanpoojalive@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Phone className="w-5 h-5 text-amber-400 stroke-[1.5]" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Call Us</p>
              <a
                href="tel:+911234567890"
                className="text-sm text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
              >
                +91 7054790404
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <MapPin className="w-5 h-5 text-amber-400 stroke-[1.5]" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Visit Us</p>
              <p className="text-sm text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                123 Temple Street, New Delhi, India 110001
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-700/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
            <p className="text-gray-400">
              © {currentYear}{" "}
              <span className="text-amber-400 font-semibold">
                Bhagwan Pooja{" "}
              </span>
              . All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleLinkClick(PATH.LEGAL)}
                className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLinkClick(PATH.LEGAL)}
                className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleLinkClick(PATH.LEGAL)}
                className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
