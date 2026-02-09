import { useState, useEffect, useRef } from "react";

import parliament1 from './Assets/parliament/parliament1.webp';
import parliament2 from './Assets/parliament/parliament2.webp';
import parliament3 from './Assets/parliament/parliament3.webp';
import parliament4 from './Assets/parliament/parliament4.webp';
import parliament5 from './Assets/parliament/parliament5.webp';
import parliament6 from './Assets/parliament/parliament6.webp';
import parliament7 from './Assets/parliament/parliament7.webp';

const ParliamentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [gallerySize, setGallerySize] = useState({ width: 400, height: 280 });
  const containerRef = useRef(null);

  const images = [parliament1, parliament2, parliament3, parliament4, parliament5, parliament6, parliament7];

  // Responsive sizes for gallery boxes
  const getGalleryBoxSize = () => {
    if (typeof window !== "undefined") {
      const vw = window.innerWidth;
      
      // 2xl screens
      if (vw >= 1536) return { width: 700, height: 500 };
      
      // xl screens
      if (vw >= 1280) return { width: 600, height: 420 };
      
      // lg screens
      if (vw >= 1024) return { width: 500, height: 350 };
      
      // md screens (tablets)
      if (vw >= 768) return { width: 420, height: 300 };
      
      // sm screens (large phones/small tablets)
      if (vw >= 640) {
        const width = Math.min(360, vw - 80);
        return { width, height: Math.floor(width * 0.65) };
      }
      
      // xs screens (mobile)
      if (vw >= 480) {
        const width = Math.min(300, vw - 60);
        return { width, height: Math.floor(width * 0.65) };
      }
      
      // Very small mobile screens
      const width = Math.max(220, Math.min(280, vw - 40));
      return { width, height: Math.floor(width * 0.7) };
    }
    return { width: 400, height: 280 };
  };

  // Update gallery size on resize
  useEffect(() => {
    const handleResize = () => setGallerySize(getGalleryBoxSize());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto play
  useEffect(() => {
    if (isAutoPlaying && !isTransitioning) {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTimeout(() => setIsTransitioning(false), 800);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isTransitioning, currentIndex, images.length]);

  // Slide logic
  const getSlideStyle = (position) => {
    const { width, height } = gallerySize;
    const baseTransform = "translate(-50%, -50%)";
    
    // Determine device type for better responsiveness
    const isVerySmallMobile = width < 280;
    const isSmallMobile = width < 320;
    const isMobile = width < 480;
    const isTablet = width >= 480 && width < 1024;
    
    // Adjust spacing based on device
    let xUnit, zUnit, scales;
    
    if (isVerySmallMobile) {
      xUnit = width * 0.35;
      zUnit = -height * 0.15;
      scales = { far: 0.55, near: 0.75, center: 1 };
    } else if (isSmallMobile) {
      xUnit = width * 0.4;
      zUnit = -height * 0.16;
      scales = { far: 0.6, near: 0.78, center: 1 };
    } else if (isMobile) {
      xUnit = width * 0.45;
      zUnit = -height * 0.18;
      scales = { far: 0.6, near: 0.8, center: 1 };
    } else if (isTablet) {
      xUnit = width * 0.55;
      zUnit = -height * 0.28;
      scales = { far: 0.55, near: 0.78, center: 1 };
    } else {
      xUnit = width * 0.6;
      zUnit = -height * 0.33;
      scales = { far: 0.5, near: 0.75, center: 1 };
    }

    const positionTransforms = {
      "-2": `${baseTransform} translateX(${-2 * xUnit}px) translateZ(${
        2 * zUnit
      }px) scale(${scales.far}) rotateY(30deg)`,
      "-1": `${baseTransform} translateX(${-1 * xUnit}px) translateZ(${
        1 * zUnit
      }px) scale(${scales.near}) rotateY(15deg)`,
      0: `${baseTransform} translateX(0px) translateZ(0px) scale(${scales.center}) rotateY(0deg)`,
      1: `${baseTransform} translateX(${1 * xUnit}px) translateZ(${
        1 * zUnit
      }px) scale(${scales.near}) rotateY(-15deg)`,
      2: `${baseTransform} translateX(${2 * xUnit}px) translateZ(${
        2 * zUnit
      }px) scale(${scales.far}) rotateY(-30deg)`,
    };

    const positionOpacity = {
      "-2": isMobile ? 0.15 : 0.2,
      "-1": isMobile ? 0.65 : 0.7,
      0: 1,
      1: isMobile ? 0.65 : 0.7,
      2: isMobile ? 0.15 : 0.2,
    };

    const positionBrightness = {
      "-2": "brightness(0.6)",
      "-1": "brightness(0.8)",
      0: "brightness(1)",
      1: "brightness(0.8)",
      2: "brightness(0.6)",
    };

    const borderRadius = isMobile ? "12px" : "16px";

    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: borderRadius,
      overflow: "hidden",
      cursor: "pointer",
      transition:
        "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.8s, filter 0.8s",
      boxShadow: isMobile 
        ? "0 6px 24px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.08)"
        : "0 10px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)",
      transformOrigin: "center center",
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
      willChange: "transform, opacity, filter",
      transform: positionTransforms[position] || baseTransform,
      opacity: positionOpacity[position] ?? 0,
      zIndex: 100 - Math.abs(position),
      filter: positionBrightness[position] || "brightness(0.3)",
      pointerEvents: position === "0" ? "auto" : "auto",
    };
  };

  // Only show 5 slides on mobile, 7 on desktop
  const getVisibleSlides = () => {
    const total = images.length;
    const isMobile = gallerySize.width < 400;
    const range = isMobile ? 2 : 3;
    const slides = [];
    for (let offset = -range; offset <= range; offset++) {
      let index = (currentIndex + offset + total) % total;
      slides.push({
        index,
        src: images[index],
        position: offset.toString(),
      });
    }
    return slides;
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-400 via-gray-300 to-gray-200 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center py-4 px-2 sm:px-4">
      <div className="relative w-full max-w-7xl mx-auto">
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          style={{
            height: `${gallerySize.height + (gallerySize.width < 480 ? 20 : 40)}px`,
            perspective: gallerySize.width < 480 ? "800px" : gallerySize.width < 768 ? "1000px" : "1200px",
            touchAction: "pan-y",
          }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {getVisibleSlides().map((slide) => (
            <div
              key={slide.index}
              style={getSlideStyle(slide.position)}
              onClick={() => slide.position !== "0" && goToSlide(slide.index)}
              className="group select-none"
            >
              <img
                src={slide.src}
                alt={`Parliament ${slide.index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                draggable={false}
              />
              {slide.position !== "0" && (
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-1 xs:left-2 sm:left-8 top-1/2 -translate-y-1/2 bg-black/25 hover:bg-black/35 disabled:opacity-50 backdrop-blur-sm rounded-full p-1.5 xs:p-2 sm:p-4 transition-all duration-300 z-20 group"
          aria-label="Previous image"
          style={{ touchAction: "manipulation" }}
        >
          <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-1 xs:right-2 sm:right-8 top-1/2 -translate-y-1/2 bg-black/25 hover:bg-black/35 disabled:opacity-50 backdrop-blur-sm rounded-full p-1.5 xs:p-2 sm:p-4 transition-all duration-300 z-20 group"
          aria-label="Next image"
          style={{ touchAction: "manipulation" }}
        >
          <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicators - Hidden on mobile */}
      <div className="hidden sm:flex space-x-2 sm:space-x-3 mt-6 sm:mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "bg-gray-800 scale-125"
                : "bg-gray-400 hover:bg-gray-600 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            style={{ touchAction: "manipulation" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParliamentCarousel;
