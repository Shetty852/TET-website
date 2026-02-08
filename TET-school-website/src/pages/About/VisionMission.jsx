const VisionMission = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
      {/* Compact Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-3 sm:p-4 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Vision & Mission</h2>
      </div>

      <div className="p-4 sm:p-6">
        {/* Vision & Mission Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-600">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Creating an educational ecosystem where every student's unique potential is discovered, nurtured, and unleashed. 
              Empowering young minds with knowledge, skills, and values to thrive in tomorrow's dynamic world through innovative 
              CBSE curriculum, state-of-the-art infrastructure, and dedicated mentorship.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border-l-4 border-indigo-600">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-700">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Providing quality CBSE education from Nursery to Class 10 in a nurturing environment fostering academic excellence, 
              character development, and holistic growth. Empowering every student with knowledge, values, and skills through 
              innovative teaching, world-class infrastructure, and dedicated mentorship.
            </p>
          </div>
        </div>

        {/* Mission Pillars - Compact Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-3 hover:shadow-lg transition-shadow">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="font-bold text-sm text-gray-800 mb-1">Academic Excellence</h4>
            <p className="text-xs text-gray-600">CBSE curriculum with innovative teaching methods</p>
          </div>

          <div className="bg-white border-2 border-indigo-200 rounded-lg p-3 hover:shadow-lg transition-shadow">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-sm text-gray-800 mb-1">Character Development</h4>
            <p className="text-xs text-gray-600">Building values, integrity, and empathy</p>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-lg p-3 hover:shadow-lg transition-shadow">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-bold text-sm text-gray-800 mb-1">Holistic Growth</h4>
            <p className="text-xs text-gray-600">Physical, emotional, and social development</p>
          </div>

          <div className="bg-white border-2 border-pink-200 rounded-lg p-3 hover:shadow-lg transition-shadow">
            <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-sm text-gray-800 mb-1">Community Partnership</h4>
            <p className="text-xs text-gray-600">Strong family and community collaboration</p>
          </div>
        </div>

        {/* Core Values - Compact */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4">
          <h3 className="text-lg font-bold text-white mb-3 text-center">Our Core Values</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <h4 className="font-bold text-sm text-yellow-400 mb-1">Excellence</h4>
              <p className="text-xs text-gray-300">Highest standards in education</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <h4 className="font-bold text-sm text-blue-400 mb-1">Integrity</h4>
              <p className="text-xs text-gray-300">Honesty and ethical values</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <h4 className="font-bold text-sm text-green-400 mb-1">Innovation</h4>
              <p className="text-xs text-gray-300">Creative teaching methods</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
