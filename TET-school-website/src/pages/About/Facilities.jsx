import scienceLab from './Assets/sciencelab(facility1).webp';
import library from './Assets/library(facility2).webp';
import transportation from './Assets/transportation(facility3).webp';
import cctvEnvironment from './Assets/cctvenabledenvironment(facility4).webp';
import computerLab from './Assets/computerlab(facility5).webp';
import playground from './Assets/broadendplayground(facility6).webp';

const Facilities = () => {
  const facilities = [
    {
      image: scienceLab,
      title: "Advanced Science Laboratory",
      description: "State-of-the-art science laboratories equipped with modern apparatus, safety equipment, and technology for conducting experiments in Physics, Chemistry, and Biology. Our labs provide hands-on learning experiences that bring theoretical concepts to life.",
      color: "from-purple-500 to-purple-600"
    },
    {
      image: library,
      title: "Modern Library - 100 m²",
      description: "A well-stocked library spanning 100 square meters with an extensive collection of books, reference materials, digital resources, journals, and magazines. The quiet reading area provides students with a peaceful environment for study and research.",
      color: "from-green-500 to-green-600"
    },
    {
      image: transportation,
      title: "Safe Transportation",
      description: "Reliable and safe transportation facilities with well-maintained buses covering various routes across the region. Our transport service ensures students commute safely with trained drivers and conductors maintaining strict safety protocols.",
      color: "from-blue-500 to-blue-600"
    },
    {
      image: cctvEnvironment,
      title: "CCTV-Enabled Campus",
      description: "Comprehensive security infrastructure with CCTV surveillance systems installed across the campus. Our security measures ensure a safe learning environment with 24/7 monitoring and trained security personnel for student safety.",
      color: "from-red-500 to-red-600"
    },
    {
      image: computerLab,
      title: "Computer Laboratory",
      description: "Modern computer labs equipped with the latest hardware and software, high-speed internet connectivity, and multimedia systems. Students gain practical experience in programming, digital literacy, and technology applications.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      image: playground,
      title: "Expansive Playground",
      description: "Sprawling outdoor play areas and sports facilities across our 87,120 m² campus. The playground includes facilities for various sports and physical activities, promoting physical fitness, teamwork, and overall development.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const sanitationFacilities = [
    {
      icon: "👧",
      count: "10",
      label: "Girls Toilets",
      description: "Clean and well-maintained facilities"
    },
    {
      icon: "👦",
      count: "10",
      label: "Boys Toilets",
      description: "Hygienic and accessible facilities"
    },
    {
      icon: "♿",
      count: "2",
      label: "CWSN Toilets",
      description: "Special facilities for children with special needs"
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Our Facilities</h2>
        <p className="text-primary-100 text-center text-base sm:text-lg max-w-3xl mx-auto">
          World-class infrastructure designed to provide the best learning environment
        </p>
      </div>

      

      {/* Main Facilities Grid */}
      <div>
        {/* <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Our World-Class Facilities
        </h3> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Facility Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${facility.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              
              {/* Facility Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">{facility.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sanitation Facilities */}
      <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Hygiene & Sanitation
        </h3>
        <div className="flex flex-wrap gap-4 items-center text-sm">
          {sanitationFacilities.map((facility, index) => (
            <div key={index} className="flex items-center bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
              <span className="text-2xl mr-2">{facility.icon}</span>
              <div>
                <span className="font-bold text-primary-600 mr-1">{facility.count}</span>
                <span className="text-gray-700">{facility.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Integration */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-4 text-white">
        <h3 className="text-lg font-bold mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Technology-Enabled Learning
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-sm font-semibold">Smart Classrooms</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <p className="text-sm font-semibold">Computer Labs</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <p className="text-sm font-semibold">Wi-Fi Campus</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p className="text-sm font-semibold">Digital Resources</p>
          </div>
        </div>
      </div>

      {/* Safety & Security */}
      <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 border border-green-200">
        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3 text-center">
          Safety & Security
        </h3>
        <p className="text-gray-600 text-center mb-4 text-xs sm:text-sm">
          Comprehensive safety measures throughout campus
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-green-200 hover:border-green-400 text-center group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-bold text-xs text-gray-800 mb-1">Secure Campus</h4>
            <p className="text-xs text-gray-600">Gated & Controlled</p>
          </div>

          <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 text-center group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h4 className="font-bold text-xs text-gray-800 mb-1">Emergency</h4>
            <p className="text-xs text-gray-600">Fire & Response</p>
          </div>

          <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-200 hover:border-purple-400 text-center group">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-xs text-gray-800 mb-1">Trained Staff</h4>
            <p className="text-xs text-gray-600">Safety Experts</p>
          </div>

          <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-red-200 hover:border-red-400 text-center group">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-xs text-gray-800 mb-1">First Aid</h4>
            <p className="text-xs text-gray-600">Medical Room</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Experience Our Campus
        </h3>
        <p className="text-primary-100 text-lg mb-6 max-w-2xl mx-auto">
          Visit Talent Public School to see our world-class facilities firsthand. Schedule a campus 
          tour to explore our infrastructure and meet our dedicated team.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-primary-700 px-8 py-3 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Schedule a Visit
        </a>
      </div>
    </div>
  );
};

export default Facilities;
