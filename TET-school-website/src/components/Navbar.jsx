import { useState } from 'react';
import { Link } from 'react-router-dom';
import schoolLogo from '../pages/Home/TET 2 (1).png';

const Navbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeAllDropdowns = () => {
    setIsAboutOpen(false);
    setIsContactOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 sm:space-x-3 group"
            onClick={closeAllDropdowns}
          >
            <img 
              src={schoolLogo} 
              alt="Talent Public School Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-sm sm:text-lg lg:text-xl font-bold text-gray-800 truncate max-w-[180px] sm:max-w-none group-hover:text-primary-600 transition-colors">
              Talent Public School
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {/* Home */}
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-primary-50"
              onClick={closeAllDropdowns}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center hover:bg-primary-50"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                About Us
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isAboutOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isAboutOpen && (
                <div className="absolute left-0 top-full pt-2 w-48">
                  <div className="bg-white rounded-md shadow-xl py-1 ring-1 ring-black ring-opacity-5">
                    <Link
                      to="/about?section=our-school"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                      onClick={closeAllDropdowns}
                    >
                      Our School
                    </Link>
                    <Link
                      to="/about?section=management-team"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                      onClick={closeAllDropdowns}
                    >
                      Management Team
                    </Link>
                    {/* <Link
                      to="/about?section=vision-mission"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                      onClick={closeAllDropdowns}
                    >
                      Vision & Mission
                    </Link> */}
                    <Link
                      to="/about?section=facilities"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                      onClick={closeAllDropdowns}
                    >
                      Facilities
                    </Link>
                    <Link
                      to="/about?section=achievers"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                      onClick={closeAllDropdowns}
                    >
                      Achievers
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsContactOpen(true)}
              onMouseLeave={() => setIsContactOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center hover:bg-primary-50"
                onClick={() => setIsContactOpen(!isContactOpen)}
              >
                Contact Us
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isContactOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isContactOpen && (
                <div className="absolute left-0 top-full pt-2 w-48">
                  <div className="bg-white rounded-md shadow-xl py-1 ring-1 ring-black ring-opacity-5">
                    <Link
                      to="/contact?section=phone"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                      onClick={closeAllDropdowns}
                    >
                      Phone
                    </Link>
                    <Link
                      to="/contact?section=email"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                      onClick={closeAllDropdowns}
                    >
                      Email
                    </Link>
                    <Link
                      to="/contact?section=location"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                      onClick={closeAllDropdowns}
                    >
                      Location
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all"
              onClick={() => {
                setIsMobileMenuOpen(false);
                closeAllDropdowns();
              }}
            >
              Home
            </Link>

            {/* About Us Mobile */}
            <div>
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 flex justify-between items-center transition-all"
              >
                About Us
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isAboutOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isAboutOpen && (
                <div className="pl-4">
                  <Link
                    to="/about?section=our-school"
                    className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Our School
                  </Link>
                  <Link
                    to="/about?section=management-team"
                    className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Management Team
                  </Link>
                  <Link
                    to="/about?section=vision-mission"
                    className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Vision & Mission
                  </Link>
                  <Link
                    to="/about?section=facilities"
                    className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Facilities
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Us Mobile */}
            <div>
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 flex justify-between items-center transition-all"
              >
                Contact Us
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isContactOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isContactOpen && (
                <div className="pl-4">
                  <Link
                    to="/contact?section=phone"
                    className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Phone
                  </Link>
                  <Link
                    to="/contact?section=email"
                    className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Email
                  </Link>
                  <Link
                    to="/contact?section=location"
                    className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Location
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
