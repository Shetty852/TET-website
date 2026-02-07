import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import OurSchool from './OurSchool';
import VisionMission from './VisionMission';

const About = () => {
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

        {/* Vision & Mission Section */}
        <div id="vision-mission" className="scroll-mt-20">
          <VisionMission />
        </div>
      </div>
    </div>
  );
};

export default About;
