import { useEffect, useState, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import OurSchool from './OurSchool';
import ManagementTeam from './ManagementTeam';
import VisionMission from './VisionMission';
import Facilities from './Facilities';
import affiliationCert from './Assets/certificates/AFFILIATION 20256-26.png';
import buildingSafetyCert from './Assets/certificates/BUILDING SAFETY.png';
import drinkingWaterCert from './Assets/certificates/DRINKING WATER.png';
import fireSafetyCert from './Assets/certificates/FIRE SAFETY.png';
import landCert from './Assets/certificates/LAND CERTIFICATE.png';
import selfCert from './Assets/certificates/SELF CERTIFICATE.png';

const About = () => {
  const [searchParams] = useSearchParams();
  const section = searchParams.get('section');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

  const certificates = [
    { id: 1, image: affiliationCert, title: 'CBSE Affiliation Certificate 2025-26' },
    { id: 2, image: buildingSafetyCert, title: 'Building Safety Certificate' },
    { id: 3, image: drinkingWaterCert, title: 'Drinking Water Safety Certificate' },
    { id: 4, image: fireSafetyCert, title: 'Fire Safety Certificate' },
    { id: 5, image: landCert, title: 'Land Certificate' },
    { id: 6, image: selfCert, title: 'Self Declaration Certificate' }
  ];

  const certificatesPerView = 1;

  const extendedCertificates = [
    ...certificates.slice(-certificatesPerView),
    ...certificates,
    ...certificates,
    ...certificates.slice(0, certificatesPerView),
  ];

  const initialIndex = certificatesPerView;

  useEffect(() => {
    setCurrentSlide(initialIndex);
  }, [initialIndex]);

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
      if (window.innerWidth < 640) return window.innerWidth - 80; // Mobile
      if (window.innerWidth < 1024) return 600; // Tablet
      return 800; // Desktop
    }
    return 800;
  };

  const getGap = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640 ? 16 : 32;
    }
    return 32;
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
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 sm:mb-4">
            About Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover our story, values, and commitment to educational excellence
          </p>
        </div>

        {/* Our School Section */}
        <div id="our-school" className="scroll-mt-20">
          <OurSchool />
        </div>

        {/* Management Team Section */}
        <div id="management-team" className="scroll-mt-20">
          <ManagementTeam />
        </div>

        {/* Vision & Mission Section */}
        <div id="vision-mission" className="scroll-mt-20">
          <VisionMission />
        </div>

        {/* Facilities Section */}
        <div id="facilities" className="scroll-mt-20">
          <Facilities />
        </div>

        {/* Certificates Carousel Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden p-6 sm:p-8 lg:p-12">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                Our Certifications & Accreditations
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
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
                  className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-500 flex-shrink-0 z-10"
                  aria-label="Previous certificate"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
                        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                          <div className="aspect-[4/3] bg-white p-4">
                            <img
                              src={certificate.image}
                              alt={certificate.title}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="p-4 bg-white">
                            <h3 className="text-center text-sm sm:text-base md:text-lg font-semibold text-gray-800">
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
                  className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-500 flex-shrink-0 z-10"
                  aria-label="Next certificate"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Dots Navigation */}
              <div
                className="flex justify-center mt-6 sm:mt-8 gap-2"
                role="tablist"
                aria-label="Carousel navigation"
              >
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      index === getDotIndex()
                        ? 'w-8 sm:w-10 h-2 sm:h-3 bg-primary-600 scale-110'
                        : 'w-2 sm:w-3 h-2 sm:h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    role="tab"
                    aria-selected={index === getDotIndex()}
                    aria-label={`Go to certificate ${index + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="text-center mt-4 text-sm text-gray-600">
                {getDotIndex() + 1} / {certificates.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
