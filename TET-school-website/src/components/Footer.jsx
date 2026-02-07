import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Talent Public School</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Under Talent Educational Trust - Nurturing young minds through quality CBSE education from Nursery to Class 10.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 text-sm sm:text-base transition-colors duration-200 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about?section=our-school" className="text-gray-300 hover:text-primary-400 text-sm sm:text-base transition-colors duration-200 inline-block">
                  Our School
                </Link>
              </li>
              <li>
                <Link to="/about?section=vision-mission" className="text-gray-300 hover:text-primary-400 text-sm sm:text-base transition-colors duration-200 inline-block">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 text-sm sm:text-base transition-colors duration-200 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm sm:text-base text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">B M Bypass Road, Hunsur-571105, Karnataka</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918861186207" className="hover:text-primary-400 transition-colors">+91 88611 86207</a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:45457@cbseshiksha.in" className="hover:text-primary-400 transition-colors break-all">45457@cbseshiksha.in</a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="leading-relaxed">Monday - Saturday: 9:00 AM - 4:50 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {currentYear} Talent Public School - Talent Educational Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
