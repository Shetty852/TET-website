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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
