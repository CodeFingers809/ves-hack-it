import React from "react";
import {
  Instagram,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const contactInfo = [
    { name: "Gaurang Mapuskar", phone: "+91 99697 80696" },
    { name: "Shashwat Tripathi", phone: "+91 97023 00238" },
    { name: "Shreyas Kale", phone: "+91 93728 52266" },
    { name: "Gaurang Rane", phone: "+91 98676 15388" },
  ];

  const quickLinks = [
    { name: "Register Now", link: "#about" },
    { name: "Schedule", link: "#timeline" },
    { name: "Prizes", link: "#prizes" },
    { name: "FAQs", link: "#faq" },
  ];

  return (
    <footer className="bg-gray-900 bg-opacity-60 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
              About VesHackIT
            </h3>
            <p className="text-sm text-gray-400">
              A 24-hour hackathon fostering innovation and creativity among
              students. Join us in building solutions for tomorrow's challenges.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/ves_hack_it/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 p-2 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5 text-white" />
                <span className="text-white">@ves_hack_it</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-400">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-2 text-sm">
                  <Phone className="w-4 h-4 mt-1 text-orange-400" />
                  <div>
                    <p className="text-gray-300">{contact.name}</p>
                    <p className="text-gray-400">{contact.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="flex items-center text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Time */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Event Details
            </h3>
            <div className="space-y-3 text-sm">
              <div
                className="flex items-start space-x-2 cursor-pointer"
                role="button"
                tabIndex="0"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/NPvAH6Nxqpmk9JxLA",
                    "_blank"
                  )
                }
              >
                <MapPin className="w-4 h-4 mt-1 text-blue-400" />
                <p className="text-gray-400">
                  VESIT, Hashu Advani Memorial Complex, Collector's Colony,
                  Chembur, Mumbai - 400074
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2025 VesHackIT. All rights reserved.</p>
            {/* <div className="flex space-x-4 mt-2 md:mt-0">
              <a
                href="#privacy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
              <a href="#code" className="hover:text-blue-400 transition-colors">
                Code of Conduct
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
