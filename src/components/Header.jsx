import React, { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              NextLight<span className="text-yellow-500">Initiative</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#initiatives" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Initiatives</a>
            <a href="#team" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Team</a>
            <a href="#impact" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Impact</a>
            <a href="#events" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Events</a>
            <a href="#gallery" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Gallery</a>
            <a href="#testimonials" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#blog" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
            <a href="#get-involved" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Get Involved</a>
          </nav>
          
          <div className="hidden md:block">
            <a href="#donate" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-colors font-medium">
              Donate Now
            </a>
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#initiatives" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Initiatives</a>
              <a href="#team" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Team</a>
              <a href="#impact" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Impact</a>
              <a href="#events" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Events</a>
              <a href="#gallery" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Gallery</a>
              <a href="#testimonials" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#blog" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
              <a href="#get-involved" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Get Involved</a>
              <a href="#contact" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <a href="#donate" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-colors font-medium text-center">
                Donate Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;