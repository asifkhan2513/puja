import { Link } from "react-router-dom";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { PATH } from "./config/Path";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: PATH.HOME },
    { name: "About Us", href: PATH.ABOUT_MISSION },
    { name: "Our Team", href: PATH.ABOUT_TEAM },
    { name: "FAQ", href: PATH.FAQ },
    { name: "Contact", href: "/contactus" },
  ];

  const services = [
    { name: "Devi Maa Pujas", href: PATH.PUJAS_DEVI_MAA },
    { name: "Lord Ganesha", href: PATH.PUJAS_GANESHA },
    { name: "Lord Shiva", href: PATH.PUJAS_SHIVA },
    { name: "Daan & Seva", href: PATH.DAAN },
    { name: "Temples", href: PATH.TEMPLES },
  ];

  const resources = [
    { name: "Rashifal", href: PATH.RASHIFAL_DAILY },
    { name: "Aarti", href: PATH.AARTI },
    { name: "Mantras", href: PATH.MANTRAS },
    { name: "Festivals", href: PATH.FESTIVALS },
    { name: "Download App", href: PATH.DOWNLOAD },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 font-medium pt-16 pb-8">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to={PATH.HOME} className="flex items-center gap-2 group">
              <Sparkles className="w-8 h-8 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent pt-serif-bold">
                Divine Puja
              </span>
            </Link>
            <p className="text-gray-300 font-medium leading-relaxed">
              Connecting devotees with divine blessings through authentic pujas
              performed by experienced pandits from sacred temples across India.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors"
                aria-label="Twitter"
              >
                <TwitterLogoIcon className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogoIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 pt-serif-bold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="hover:text-accent-light transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 pt-serif-bold">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="hover:text-accent-light transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 pt-serif-bold">
              Resources
            </h3>
            <ul className="space-y-3 mb-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    to={resource.href}
                    className="hover:text-accent-light transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-3 pt-4 border-t border-gray-700">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <a
                  href="mailto:info@divinepuja.com"
                  className="hover:text-accent-light transition-colors"
                >
                  info@divinepuja.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <a
                  href="tel:+911234567890"
                  className="hover:text-accent-light transition-colors"
                >
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                <span className="text-sm">
                  123 Temple Street
                  <br />
                  New Delhi, India 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 font-medium text-sm">
              © {currentYear}{" "}
              <span className="text-amber-400 font-semibold">Divine Puja</span>.
              All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to={PATH.LEGAL}
                className="hover:text-accent-light transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to={PATH.LEGAL}
                className="hover:text-accent-light transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to={PATH.LEGAL}
                className="hover:text-accent-light transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
