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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to answer your questions and provide the information you need
          </p>
        </div>

        {/* Phone Section */}
        <div id="phone" className="scroll-mt-20">
          <Phone />
        </div>

        {/* Email Section */}
        <div id="email" className="scroll-mt-20">
          <Email />
        </div>

        {/* Location Section */}
        <div id="location" className="scroll-mt-20">
          <Location />
        </div>
      </div>
    </div>
  );
};

export default Contact;
