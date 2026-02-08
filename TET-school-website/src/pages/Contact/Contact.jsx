import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Phone from './Phone';
import Email from './Email';
import Location from './Location';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const section = searchParams.get('section');

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [section]);

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-6 sm:mb-8 bg-white/95 border border-gray-100 shadow-sm rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-5 sm:py-6 animate-fadeIn transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-3">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
            We're here to answer your questions and provide the information you need
          </p>
        </div>

        {/* Phone Section */}
        <div id="phone" className="scroll-mt-20 animate-fadeIn">
          <Phone />
        </div>

        {/* Email Section */}
        <div id="email" className="scroll-mt-20 animate-fadeIn">
          <Email />
        </div>

        {/* Location Section */}
        <div id="location" className="scroll-mt-20 animate-fadeIn">
          <Location />
        </div>
      </div>
    </div>
  );
};

export default Contact;
