import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import WhiteLogo from '../assets/whiteLogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    { 
      name: 'Home', 
      path: '/', 
      ariaLabel: 'AspiVision Solutions Home - Complete Digital Solutions Provider in Pune and Worldwide' 
    },
    { 
      name: 'About', 
      path: '/about', 
      ariaLabel: 'About AspiVision Solutions - Leading Digital Services Company in Pune and Worldwide' 
    },
    { 
      name: 'Services', 
      path: '/services', 
      ariaLabel: 'Our Services - Web Development, Backend, SEO, and UI/UX Design Solutions' 
    },
    { 
      name: 'Portfolio', 
      path: '/portfolio', 
      ariaLabel: 'View Our Project Portfolio - Successful Digital Solutions Delivered' 
    },
    { 
      name: 'Contact', 
      path: '/contact', 
      ariaLabel: 'Contact AspiVision Solutions - Get Expert Digital Services in Pune and Worldwide' 
    }
  ];

  const serviceLinks = [
    {
      name: 'Web Development',
      path: '/services/website-development',
      ariaLabel: 'Professional Website Development Services - Custom Solutions for Businesses in Pune and Worldwide',
      description: 'Expert web development services including responsive design, e-commerce solutions, and custom web applications'
    },
    {
      name: 'Backend & Database',
      path: '/services/backend-database',
      ariaLabel: 'Backend Development and Database Management Services - Robust Solutions for Your Business',
      description: 'Comprehensive backend development and database solutions ensuring secure and scalable systems'
    },
    {
      name: 'SEO Services',
      path: '/services/seo-services',
      ariaLabel: 'Professional SEO and Digital Marketing Services - Improve Your Online Visibility',
      description: 'Strategic SEO services to enhance your digital presence and drive organic traffic'
    },
    {
      name: 'UI/UX Design',
      path: '/services/ui-ux-design',
      ariaLabel: 'UI/UX Design Services - Create Engaging User Experiences',
      description: 'User-centered design solutions for intuitive and conversion-focused interfaces'
    }
  ];

  const isHomePage = location.pathname === '/';
  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isHomePage
      ? isScrolled
        ? 'bg-white shadow-md text-gray-800'
        : 'bg-transparent text-white'
      : 'bg-white shadow-md text-gray-800'
  }`;

  return (
    <nav className={navbarClasses} role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-around items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center" aria-label="AspiVision Solutions - Return to Homepage">
              <img src={isHomePage ? isScrolled ? Logo : WhiteLogo: Logo} alt="AspiVision Solutions Logo" className="w-20" />
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
                aria-label={link.ariaLabel}
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
              aria-label="Get a Free Quote for Your Project"
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
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
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
          <div className="md:hidden mt-4 bg-white rounded-md shadow-lg text-gray-800 overflow-hidden" role="menu">
            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="py-3 px-4 hover:bg-gray-100 transition duration-150"
                  onClick={() => setIsOpen(false)}
                  aria-label={link.ariaLabel}
                  role="menuitem"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-150"
                onClick={() => setIsOpen(false)}
                aria-label="Get a Free Quote for Your Project"
                role="menuitem"
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
