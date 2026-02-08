import { useEffect, useState, useRef, useCallback } from 'react';
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
  const certificatesPerView = 1;
  const certificates = [
    { id: 1, image: affiliationCert, title: 'CBSE Affiliation Certificate 2025-26' },
    { id: 2, image: buildingSafetyCert, title: 'Building Safety Certificate' },
    { id: 3, image: drinkingWaterCert, title: 'Drinking Water Safety Certificate' },
    { id: 4, image: fireSafetyCert, title: 'Fire Safety Certificate' },
    { id: 5, image: landCert, title: 'Land Certificate' },
    { id: 6, image: selfCert, title: 'Self Declaration Certificate' }
  ];
  const extendedCertificates = [
    ...certificates.slice(-certificatesPerView),
    ...certificates,
    ...certificates,
    ...certificates.slice(0, certificatesPerView),
  ];
  const initialIndex = certificatesPerView;
  
  const [currentSlide, setCurrentSlide] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

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

  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return window.innerWidth - 60; // Mobile
      if (window.innerWidth < 1024) return 520; // Tablet
      return 680; // Desktop
    }
    return 680;
  };

  const getGap = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640 ? 12 : 24;
    }
    return 24;
  };

  const handleNext = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);

    setTimeout(() => {
      setCurrentSlide((prev) => {
        if (prev >= initialIndex + certificates.length) {
          if (carouselRef.current) {
            carouselRef.current.style.transition = "none";
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = "transform 0.5s ease-in-out";
              }
            }, 50);
          }
          return initialIndex;
        }
        return prev;
      });
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning, initialIndex, certificates.length]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [handleNext]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);

    setTimeout(() => {
      setCurrentSlide((prev) => {
        if (prev < initialIndex) {
          if (carouselRef.current) {
            carouselRef.current.style.transition = "none";
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = "transform 0.5s ease-in-out";
              }
            }, 50);
          }
          return initialIndex + certificates.length - 1;
        }
        return prev;
      });
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning, initialIndex, certificates.length]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    },
    [handleNext, handlePrev]
  );

  const getDotIndex = () => {
    return (currentSlide - initialIndex + certificates.length) % certificates.length;
  };

  const goToSlide = useCallback(
    (index) => {
      if (!isTransitioning) {
        setCurrentSlide(initialIndex + index);
      }
    },
    [isTransitioning, initialIndex]
  );

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

        {/* Certificates Carousel Section */}
        <div className="mt-6 sm:mt-8">
          <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden p-5 sm:p-6 border border-blue-200/50">
            {/* Section Header */}
            <div className="text-center mb-5 sm:mb-6">
              <div className="inline-block">
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Our Certifications & Accreditations
                </h2>
                <div className="h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500 rounded-full mx-auto w-3/4"></div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-3">
                Recognized and certified for maintaining the highest standards in education and safety
              </p>
            </div>

            {/* Carousel Container */}
            <div
              className="relative"
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="region"
              aria-label="Certificates carousel"
            >
              <div className="flex items-center justify-center gap-4">
                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  disabled={isTransitioning}
                  className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 hover:from-primary-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-400 flex-shrink-0 z-10 transform hover:scale-110"
                  aria-label="Previous certificate"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Certificates Display */}
                <div className="flex-1 overflow-hidden">
                  <div
                    ref={carouselRef}
                    className="flex items-center transition-transform duration-500 ease-in-out"
                    role="group"
                    aria-label="Certificate images"
                    style={{
                      transform: `translateX(-${currentSlide * (getCardWidth() + getGap())}px)`,
                      gap: `${getGap()}px`,
                      width: `${extendedCertificates.length * (getCardWidth() + getGap())}px`,
                      marginLeft: `calc(50% - ${getCardWidth() / 2}px)`,
                    }}
                  >
                    {extendedCertificates.map((certificate, index) => (
                      <div
                        key={`${certificate.id}-${index}`}
                        className="flex-shrink-0"
                        style={{ width: `${getCardWidth()}px` }}
                      >
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary-300 transform hover:-translate-y-2 group">
                          <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 sm:p-5 relative">
                            <div className="absolute top-3 right-3 bg-gradient-to-br from-primary-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                              Verified ✓
                            </div>
                            <img
                              src={certificate.image}
                              alt={certificate.title}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                          <div className="p-3 sm:p-4 bg-gradient-to-r from-primary-50 via-blue-50 to-purple-50 border-t-2 border-primary-200">
                            <h3 className="text-center text-sm sm:text-base font-bold bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent">
                              {certificate.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  disabled={isTransitioning}
                  className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 hover:from-primary-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-400 flex-shrink-0 z-10 transform hover:scale-110"
                  aria-label="Next certificate"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Dots Navigation */}
              <div
                className="flex justify-center mt-5 sm:mt-6 gap-2"
                role="tablist"
                aria-label="Carousel navigation"
              >
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                      index === getDotIndex()
                        ? 'w-8 sm:w-10 h-2.5 sm:h-3 bg-gradient-to-r from-primary-500 to-blue-600 shadow-md scale-110'
                        : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gradient-to-r hover:from-primary-300 hover:to-blue-400'
                    }`}
                    role="tab"
                    aria-selected={index === getDotIndex()}
                    aria-label={`Go to certificate ${index + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="text-center mt-3 sm:mt-4">
                <span className="inline-block bg-gradient-to-r from-primary-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-md">
                  {getDotIndex() + 1} / {certificates.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
