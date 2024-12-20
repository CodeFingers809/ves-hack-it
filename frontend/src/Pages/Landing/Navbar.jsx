import React from 'react';

const Navbar = () => {
  const navItems = [
    'ABOUT',
    'THEMES',
    'TIMELINE',
    'SPONSORS',
    'PRIZES',
    'TEAM',
    'FAQ'
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav className="flex items-center gap-8 px-8 py-1 backdrop-blur-md bg-white/10 border border-white/20 rounded-full shadow-lg">
        {/* Logo */}
        <div className="w-12 h-12 relative">
          {/* <img 
            src="/api/placeholder/48/48" 
            alt="DuHacks Logo" 
            className="rounded-lg transform -rotate-12"
          /> */}
          DU
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              className={`text-gray-200 hover:text-white text-sm font-medium transition-colors duration-300
                ${item === 'THEMES' ? 'bg-white/10 px-4 py-1 rounded-full' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;