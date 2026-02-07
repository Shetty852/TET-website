const OurSchool = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">Our School</h2>
      
      <div className="space-y-6 sm:space-y-8 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Talent Public School, operating under Talent Educational Trust, is a CBSE-affiliated institution 
          committed to providing quality education from Nursery to Class 10. Located in Hunsur, Karnataka, 
          we have been nurturing young minds with a perfect blend of academic excellence and holistic development.
        </p>

        {/* School Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-sm font-semibold text-blue-800 mb-1">CBSE Affiliation No.</h3>
            <p className="text-2xl font-bold text-blue-900">830494</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-sm font-semibold text-green-800 mb-1">School Code</h3>
            <p className="text-2xl font-bold text-green-900">45457</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-sm font-semibold text-purple-800 mb-1">Campus Area</h3>
            <p className="text-2xl font-bold text-purple-900">87,120 m²</p>
          </div>
        </div>

        {/* Principal Information */}
        <div className="bg-primary-50 p-4 sm:p-6 rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary-800">Leadership</h3>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              GK
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800">Gulnaz Khanum N</p>
              <p className="text-gray-600">Principal</p>
              <p className="text-sm text-gray-600 mt-1">Contact: +91 88611 53207</p>
            </div>
          </div>
        </div>

        {/* Student Growth Statistics */}
        <div className="bg-white border-2 border-gray-200 p-4 sm:p-6 lg:p-8 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">Student Enrollment Growth</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Witnessing remarkable growth in student enrollment over the years</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
              <p className="text-3xl font-bold text-primary-600">14</p>
              <p className="text-gray-600 font-medium">Students</p>
              <p className="text-sm text-gray-500">Academic Year 2022-23</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
              <p className="text-3xl font-bold text-primary-700">18</p>
              <p className="text-gray-600 font-medium">Students</p>
              <p className="text-sm text-gray-500">Academic Year 2023-24</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg border-2 border-primary-300">
              <p className="text-4xl font-bold text-primary-800">34</p>
              <p className="text-gray-700 font-medium">Students</p>
              <p className="text-sm text-gray-600">Academic Year 2024-25</p>
            </div>
          </div>
          <div className="text-center mt-6 space-y-2">
            <p className="text-sm text-green-600 font-semibold">
              📈 143% growth from 2022 to 2025!
            </p>
            <p className="text-xs text-gray-500">
              From 14 to 34 students = 20 additional students (143% increase)
            </p>
          </div>
        </div>

        {/* Infrastructure Highlights */}
        <h3 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-4 sm:mb-6 text-gray-800">World-Class Infrastructure</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white border border-primary-200 p-4 sm:p-5 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <div>
                <p className="text-2xl font-bold text-primary-600">50</p>
                <p className="text-sm text-gray-600">Classrooms</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-primary-200 p-4 sm:p-5 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <div>
                <p className="text-2xl font-bold text-primary-600">55</p>
                <p className="text-sm text-gray-600">Laboratories</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-primary-200 p-4 sm:p-5 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <div>
                <p className="text-2xl font-bold text-primary-600">100 m²</p>
                <p className="text-sm text-gray-600">Library</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-primary-200 p-4 sm:p-5 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <div>
                <p className="text-xl font-bold text-primary-600">✓</p>
                <p className="text-sm text-gray-600">Internet Facility</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-primary-200 p-4 sm:p-5 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 text-pink-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div>
                <p className="text-2xl font-bold text-pink-600">10</p>
                <p className="text-sm text-gray-600">Girls Toilets</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-primary-200 p-4 sm:p-5 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div>
                <p className="text-2xl font-bold text-blue-600">10</p>
                <p className="text-sm text-gray-600">Boys Toilets</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-green-200 p-4 sm:p-5 rounded-lg hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-2xl font-bold text-green-600">2</p>
                <p className="text-sm text-gray-600">CWSN Toilets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <h3 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-4 sm:mb-6 text-gray-800">What Makes Us Special</h3>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>CBSE Affiliated:</strong> Official affiliation number 830494, ensuring quality education standards</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>Spacious Campus:</strong> Spread across 87,120 square meters with modern infrastructure</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>Modern Facilities:</strong> 50 well-equipped classrooms and 55 state-of-the-art laboratories</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>Digital Learning:</strong> Complete internet connectivity for modern educational delivery</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>Inclusive Facilities:</strong> Dedicated CWSN (Children with Special Needs) infrastructure</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>Strategic Location:</strong> Conveniently located on B M Bypass Road, Hunsur, easily accessible</span>
          </li>
        </ul>

        <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg mt-8 border-l-4 border-primary-600">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Commitment</h3>
          <p>
            At Talent Public School, we are committed to providing a nurturing environment that promotes 
            academic excellence, character development, and overall personality growth. Our experienced 
            leadership under Principal Gulnaz Khanum N ensures that every student receives personalized 
            attention and guidance to reach their full potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurSchool;
