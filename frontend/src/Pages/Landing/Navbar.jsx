import React, { useState, useRef, useEffect } from "react";
import MainLogo from "./VesitLogo.png";
import SecLogo from "./HabitLogo.png";

const Navbar = () => {
  const navItems = [
    { name: "ABOUT", link: "#about" },
    { name: "THEMES", link: "#themes" },
    { name: "TIMELINE", link: "#timeline" },
    { name: "SPONSORS", link: "#sponsors" },
    { name: "PRIZES", link: "#prizes" },
    { name: "TEAM", link: "#team" },
    { name: "FAQ", link: "#faq" },
  ];

  const [activeItem, setActiveItem] = useState(navItems[0].name);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef([]);

  useEffect(() => {
    const activeElement = navRefs.current.find(
      (el) => el && el.textContent === activeItem
    );
    if (activeElement) {
      setIndicatorStyle({
        width: `${activeElement.offsetWidth}px`,
        transform: `translateX(${activeElement.offsetLeft -16}px)`,
      });
    }
  }, [activeItem]);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav className="flex pr-2 gap-1 backdrop-blur-md bg-white/10 border border-white/20 rounded-full shadow-lg relative">
        {/* Logo */}
        <div className="h-12 flex gap-2 bg-white p-1 rounded-l-full bg-opacity-90">
          <img src={MainLogo} alt="Vesit Logo" className="rounded-lg" />
          <img src={SecLogo} alt="HABIT.ia Logo" className="rounded-lg" />
        </div>

        {/* Navigation Items */}
        <div className="relative flex items-center gap-2 px-4 py-2 bg-opacity-80">
          {/* Active Indicator */}
          <div
            className="absolute top-0 bottom-0 my-auto h-5/6 bg-white/10 rounded-2xl transition-all duration-300"
            style={indicatorStyle}
          ></div>
          
          {navItems.map((item, index) => (
            <button
              key={item.name}
              ref={(el) => (navRefs.current[index] = el)}
              onClick={() => setActiveItem(item.name)}
              className="relative z-10 px-4 py-1 text-sm font-medium text-gray-200 transition duration-300 hover:text-white"
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
