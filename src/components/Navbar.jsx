import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import WhiteLogo from '../assets/whiteLogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  // Determine navbar background color
  const isHomePage = location.pathname === '/';
  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isHomePage
      ? isScrolled
        ? 'bg-white shadow-md text-gray-800'
        : 'bg-transparent text-white'
      : 'bg-white shadow-md text-gray-800'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-around items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={isScrolled ? Logo : WhiteLogo} alt="Logo" className="w-20" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`font-medium hover:text-blue-500 transition-colors ${
                  isHomePage && !isScrolled ? 'text-white hover:text-blue-200' : 'text-gray-800 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`py-2 px-4 rounded-md transition duration-300 ${
                isHomePage && !isScrolled
                  ? 'bg-white hover:bg-gray-100 text-blue-600'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${
                isHomePage && !isScrolled ? 'text-white' : 'text-gray-800'
              }`}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-md shadow-lg text-gray-800 overflow-hidden">
            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="py-3 px-4 hover:bg-gray-100 transition duration-150"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-150"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
