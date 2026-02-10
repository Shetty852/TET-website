import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import homepageImage from './assets/home page image.webp';
import lab1 from './assets/Lab image1.webp';
import lab2 from './assets/Lab image2.webp';
import lab3 from './assets/Lab image3.webp';

import Gallery from '../../components/Gallery';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            entry.target.classList.remove('animate-hidden');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url(${homepageImage})`
          }}
        ></div>

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="text-center space-y-3 sm:space-y-4 animate-fadeIn">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-default">
              🎓 Talent Educational Trust | CBSE Affiliation No: 830494
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-4 sm:px-0 text-white">
              <span className="block animate-slideInLeft">
                Talent Public School
              </span>
              <span className="block mt-2 animate-slideInRight">
                Empowering Minds, Shaping Futures
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto text-primary-50 leading-relaxed px-4 sm:px-6 animate-fadeIn">
              Located in Hunsur, Karnataka - Where quality CBSE education meets innovation. We nurture young minds from Nursery to Class 10,
              creating confident, creative, and compassionate leaders of tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4 sm:px-0 animate-fadeIn">
              <Link
                to="/about"
                className="group relative overflow-hidden bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                <span className="relative z-10">Discover Our Story</span>
                <span className="inline-block ml-2 relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-primary-500/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold text-base sm:text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                <span className="relative z-10">Schedule a Visit</span>
                <span className="inline-block ml-2 relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                <div className="absolute inset-0 bg-primary-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white scroll-animate animate-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.2] py-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Why Choose Us
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
              World-class laboratories that support hands-on learning, innovation, and real-world scientific exploration.
            </p>
          </div>

          {/* ALWAYS 3 IN ONE ROW */}
          <div className="grid grid-cols-3 gap-4">
            <img
              src={lab1}
              alt="Science Lab"
              className="w-full h-40 sm:h-56 object-cover rounded-lg shadow-md scroll-animate animate-hidden"
              style={{animationDelay: '0.1s'}}
            />
            <img
              src={lab2}
              alt="Computer Lab"
              className="w-full h-40 sm:h-56 object-cover rounded-lg shadow-md scroll-animate animate-hidden"
              style={{animationDelay: '0.2s'}}
            />
            <img
              src={lab3}
              alt="Math Lab"
              className="w-full h-40 sm:h-56 object-cover rounded-lg shadow-md scroll-animate animate-hidden"
              style={{animationDelay: '0.3s'}}
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 sm:py-16 bg-gray-50 scroll-animate animate-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Vision & Mission
              </h2>
            </div>
            <div className="p-4 sm:p-6">
              {/* Vision & Mission */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Vision */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Talent Public School nurtures young minds, equips students with essential life skills, and prepares them for a successful future.
                    A truly effective education system promotes academic excellence through a strong curriculum that builds understanding and critical thinking.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border-l-4 border-indigo-600">
                  <h3 className="text-xl font-bold text-indigo-700 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Providing quality CBSE education from Nursery to Class 10, our school fosters holistic student development, academic excellence, and 
                    responsible citizenship within a nurturing and inclusive environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
        <div id="gallery" className="scroll-mt-20">
          <Gallery />
        </div>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden scroll-animate animate-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]"></div>
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 text-primary-100 leading-relaxed px-4">
            Discover how Talent Public School can be the perfect place for your child's educational journey.
            Visit our campus in Hunsur and see the difference firsthand.
          </p>
          <div className="mt-4 pt-2">
            <p className="text-primary-100 mb-4 text-sm sm:text-base">
              Visit us or get in touch!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-white flex-wrap text-xs sm:text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>B M Bypass Road, Hunsur-571105, Karnataka</span>
              </div>
              <a href="tel:+918861186207" className="flex items-center hover:text-primary-100 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 88611 86207</span>
              </a>
              <div className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="whitespace-nowrap">Monday - Saturday: 9:00 AM - 4:50 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
