import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import OurSchool from './OurSchool';
import ManagementTeam from './ManagementTeam';
import VisionMission from './VisionMission';
import Facilities from './Facilities';
import affiliationCert from './Assets/Certificates/AFFILIATION 20256-26.png';
import buildingSafetyCert from './Assets/Certificates/BUILDING SAFETY.png';
import drinkingWaterCert from './Assets/Certificates/DRINKING WATER.png';
import fireSafetyCert from './Assets/Certificates/FIRE SAFETY.png';
import landCert from './Assets/Certificates/LAND CERTIFICATE.png';
import selfCert from './Assets/Certificates/SELF CERTIFICATE.png';

const About = () => {
  const [searchParams] = useSearchParams();
  const section = searchParams.get('section');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  
  const certificates = [
    { id: 1, image: affiliationCert, title: 'CBSE Affiliation Certificate 2025-26' },
    { id: 2, image: buildingSafetyCert, title: 'Building Safety Certificate' },
    { id: 3, image: drinkingWaterCert, title: 'Drinking Water Safety Certificate' },
    { id: 4, image: fireSafetyCert, title: 'Fire Safety Certificate' },
    { id: 5, image: landCert, title: 'Land Certificate' },
    { id: 6, image: selfCert, title: 'Self Declaration Certificate' }
  ];

  useEffect(() => {
    // Scroll to top immediately on mount
    window.scrollTo(0, 0);
    
    // Then handle section navigation if provided
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [section]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-6 sm:mb-8 animate-fadeIn">
          <div className="inline-block mb-3 px-4 py-2 bg-gradient-to-r from-primary-500 to-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300">
            🏫 Excellence in Education Since Inception
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-primary-700 to-blue-700 bg-clip-text text-transparent mb-3 sm:mb-4 transform hover:scale-105 transition-transform duration-300">
            About Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Discover our story, values, and commitment to educational excellence
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          </div>
        </div>

        {/* Our School Section */}
        <div id="our-school" className="scroll-mt-20 transform transition-all duration-500 hover:scale-[1.01]">
          <OurSchool />
        </div>

        {/* Management Team Section */}
        <div id="management-team" className="scroll-mt-20 transform transition-all duration-500 hover:scale-[1.01]">
          <ManagementTeam />
        </div>

        {/* Vision & Mission Section */}
        <div id="vision-mission" className="scroll-mt-20 transform transition-all duration-500 hover:scale-[1.01]">
          <VisionMission />
        </div>

        {/* Facilities Section */}
        <div id="facilities" className="scroll-mt-20">
          <Facilities />
        </div>

        {/* Certificates Section */}
        <div className="mt-6 sm:mt-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Section Header */}
            <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-6 sm:py-8 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center tracking-wide">
                Our Certifications & Accreditations
              </h2>
              <p className="text-white/90 text-sm sm:text-base text-center mt-2 max-w-2xl mx-auto">
                Recognized and certified for maintaining the highest standards in education and safety
              </p>
            </div>

            {/* Certificates Grid */}
            <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                {certificates.map((certificate) => (
                  <div
                    key={certificate.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-200 hover:border-primary-400 group"
                  >
                    {/* Certificate Image */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-4 relative overflow-hidden">
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-lg z-10 flex items-center gap-1">
                        <span>✓</span> Verified
                      </div>
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Certificate Info */}
                    <div className="p-4 border-t-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 group-hover:from-primary-50 group-hover:to-blue-50 transition-all duration-500">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 text-center mb-3 min-h-[2.5rem] flex items-center justify-center">
                        {certificate.title}
                      </h3>
                      
                      {/* View Full Button */}
                      <button
                        onClick={() => setSelectedCertificate(certificate)}
                        className="w-full bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Full Certificate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-blue-600 text-white p-4 sm:p-6 rounded-t-2xl z-10 flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold pr-4">
                  {selectedCertificate.title}
                </h3>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white">
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Download/Print Buttons */}
                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={() => window.open(selectedCertificate.image, '_blank')}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Open in New Tab
                  </button>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
