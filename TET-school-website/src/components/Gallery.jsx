import React, { useState, useEffect, useRef } from "react";
import img from "./images";

const InfiniteCarousel = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  // Gallery images from Talent Public School
  const images = [
    {
      src: img.gallery1,
      alt: "Talent Public School - Students engaged in classroom learning",
    },
    {
      src: img.gallery2,
      alt: "Talent Public School - Interactive seminar session",
    },
    {
      src: img.gallery3,
      alt: "Talent Public School - Science experiment in FabLab",
    },
    {
      src: img.gallery5,
      alt: "Talent Public School - Collaborative group discussion",
    },
    {
      src: img.gallery7,
      alt: "Talent Public School - Student working with GeoMagic kit",
    },
    {
      src: img.gallery8,
      alt: "Talent Public School - Anubhav kit demonstration",
    },
    {
      src: img.gallery9,
      alt: "Talent Public School - Group photo of students",
    },
    {
      src: img.gallery11,
      alt: "Talent Public School - Classroom activity and learning",
    },
    {
      src: img.gallery12,
      alt: "Talent Public School - Students in laboratory session",
    },
    {
      src: img.gallery13,
      alt: "Talent Public School - Academic excellence showcase",
    },
    {
      src: img.gallery14,
      alt: "Talent Public School - Student innovation and creativity",
    },
    {
      src: img.gallery15,
      alt: "Talent Public School - Educational workshop activity",
    },
    {
      src: img.gallery16,
      alt: "Talent Public School - Team collaboration session",
    },
    {
      src: img.gallery17,
      alt: "Talent Public School - Learning environment and facilities",
    },
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images, ...images];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setTranslateX((prev) => {
          const newTranslateX = prev - 1; // Slow continuous movement

          // Reset position when we've scrolled through one full set
          if (Math.abs(newTranslateX) >= images.length * 280) {
            return 0;
          }

          return newTranslateX;
        });
      }, 20); // Smooth 50fps animation
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, images.length]);

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="Utility-font-Montserrat Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-12 lg:mb-16">
          Galleries
        </h2>

        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-white p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={containerRef}
        >
          {/* Carousel strip */}
          <div
            className="flex gap-4 transition-none"
            style={{
              transform: `translateX(${translateX}px)`,
              width: `${duplicatedImages.length * 280}px`,
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={`${index}-${image.alt}`}
                className="flex-shrink-0 relative group w-[260px] h-[200px] sm:w-[360px] sm:h-[300px] "
                style={{ width: "260px", height: "200px" }}
              >
                <div className="w-full h-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
