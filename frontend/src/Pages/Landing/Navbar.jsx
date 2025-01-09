import React, { useState, useRef, useEffect } from "react";
import MainLogo from "./VesitLogo.png";
import SecLogo from "./HabitLogo.png";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: "ABOUT", link: "#about" },
    { name: "TRACKS", link: "#tracks" },
    { name: "TIMELINE", link: "#timeline" },
    { name: "SPONSORS", link: "#sponsors" },
    { name: "PRIZES", link: "#prizes" },
    { name: "TEAM", link: "#team" },
    { name: "FAQ", link: "#faq" },
  ];

  const [activeItem, setActiveItem] = useState(navItems[0].name);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRefs = useRef([]);

  useEffect(() => {
    const activeElement = navRefs.current.find(
      (el) => el && el.textContent === activeItem
    );
    if (activeElement) {
      setIndicatorStyle({
        width: `${activeElement.offsetWidth}px`,
        transform: `translateX(${activeElement.offsetLeft}px)`,
      });
    }
  }, [activeItem]);

  useEffect(() => {
    const handleLinkClick = () => setIsMobileMenuOpen(false);
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleLinkClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 w-screen flex flex-col justify-center items-center h-fit px-4 md:p-0">
      <nav className="flex items-center w-full justify-between md:w-fit h-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20">
        {/* Logo */}
        <div className="h-full flex gap-2 p-1 rounded-l-full w-24 bg-opacity-90 pl-4">
          <img src={MainLogo} alt="Vesit Logo" className="rounded-lg" />
          <img src={SecLogo} alt="HABIT.ia Logo" className="rounded-lg" />
        </div>
        <h1 className="md:hidden text-xl flex justify-center items-center p-0 m-0 font-bold tracking-wider text-white league-spartan-font">
          VES-HACK-IT
        </h1>
        {/* Desktop Navigation Items */}
        <div className="flex items-center gap-2 px-4 py-2 shadow-lg relative h-full justify-center">
          {/* Active Indicator */}
          <div
            className="md:block hidden absolute top-0 bottom-0 left-0 my-auto h-5/6 bg-white/20 rounded-2xl transition-all duration-300 ease-in-out"
            style={indicatorStyle}
          ></div>

          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.link}
              ref={(el) => (navRefs.current[index] = el)}
              onClick={() => setActiveItem(item.name)}
              className={`hidden md:flex z-10 px-6 py-1 pt-2 text-sm font-medium transition duration-300 hover:text-white ${
                activeItem === item.name ? 'text-white' : 'text-gray-200'
              }`}
            >
              {item.name}
            </a>
          ))}
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white scale-125"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-4/6 mt-4 backdrop-blur-md rounded-lg flex flex-col justify-center items-center bg-gray-700/70 border-b border-white/20 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => {
                setActiveItem(item.name);
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full py-3 px-4 text-sm font-medium transition duration-300 hover:text-white hover:bg-white/10 ${
                activeItem === item.name ? 'text-white bg-white/10' : 'text-gray-200'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}  
    </div>
  );
};

export default Navbar;

