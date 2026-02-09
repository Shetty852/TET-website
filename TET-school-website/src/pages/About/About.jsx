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
  const [previewIndex, setPreviewIndex] = useState(0);
  
  const certificates = [
    { id: 1, image: affiliationCert, title: 'CBSE Affiliation Certificate 2025-26' },
    { id: 2, image: buildingSafetyCert, title: 'Building Safety Certificate' },
    { id: 3, image: drinkingWaterCert, title: 'Drinking Water Safety Certificate' },
    { id: 4, image: fireSafetyCert, title: 'Fire Safety Certificate' },
    { id: 5, image: landCert, title: 'Land Certificate' },
    { id: 6, image: selfCert, title: 'Self Declaration Certificate' }
  ];

  const handlePrevCert = () => {
    setPreviewIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNextCert = () => {
    setPreviewIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

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
        <div className="mt-8 sm:mt-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            {/* Section Header */}
            <div className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 py-6 px-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
                Our Certifications & Accreditations
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full w-3/4 mx-auto"></div>
              <p className="text-white/90 text-sm text-center mt-3 max-w-2xl mx-auto">
                Recognized and certified for maintaining the highest standards in education and safety
              </p>
            </div>

            {/* Split Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-gray-50">
              {/* Left Side - Certificates List */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-3">
                  <h3 className="text-lg font-bold text-gray-900">Certificates List</h3>
                </div>
                <div className="divide-y divide-gray-200 max-h-[400px] overflow-y-auto">
                  {certificates.map((certificate, index) => (
                    <div
                      key={certificate.id}
                      className="px-4 py-3 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-gray-900 flex-1">
                        {certificate.title}
                      </span>
                      <button
                        onClick={() => {
                          setPreviewIndex(index);
                          setSelectedCertificate(certificate);
                        }}
                        className="text-primary-600 hover:text-primary-700 text-sm font-semibold ml-4 whitespace-nowrap border-b border-primary-600 hover:border-primary-700 transition-colors duration-200"
                      >
                        Click here
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Preview Panel */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-3">
                  <h3 className="text-lg font-bold text-gray-900">Preview</h3>
                </div>
                <div className="p-4">
                  {/* Image Carousel */}
                  <div className="relative">
                    {/* Verified Badge */}
                    <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg z-20 flex items-center gap-1.5">
                      <span>Verified</span>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>

                    {/* Arrow Buttons and Image */}
                    <div className="flex items-center gap-2">
                      {/* Left Arrow */}
                      <button
                        onClick={handlePrevCert}
                        className="flex-shrink-0 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
                        aria-label="Previous certificate"
                      >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Certificate Image */}
                      <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                        <div className="aspect-[4/3] p-3">
                          <img
                            src={certificates[previewIndex].image}
                            alt={certificates[previewIndex].title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Right Arrow */}
                      <button
                        onClick={handleNextCert}
                        className="flex-shrink-0 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
                        aria-label="Next certificate"
                      >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Certificate Title */}
                    <div className="mt-3 text-center">
                      <p className="text-sm font-semibold text-gray-900">
                        {certificates[previewIndex].title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden animate-slideIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white p-5 flex items-center justify-between border-b-4 border-white/10">
                <div className="flex items-center gap-3">
                  {/* Verified Badge */}
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                    <span>Verified</span>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">
                    {selectedCertificate.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="overflow-auto max-h-[calc(95vh-150px)] bg-gray-50 p-6">
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-white border-t-2 border-gray-100 p-4 flex gap-3 justify-center">
                <button
                  onClick={() => window.open(selectedCertificate.image, '_blank')}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in New Tab
                </button>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
