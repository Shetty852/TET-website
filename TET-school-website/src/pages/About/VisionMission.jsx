const VisionMission = () => {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-12 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Vision & Mission</h2>
        <p className="text-blue-100 text-center text-lg max-w-3xl mx-auto">
          Shaping the future through excellence in education and character development
        </p>
      </div>

      {/* Vision Section */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 sm:p-8 lg:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
                <svg className="w-10 h-10 text-white transform -rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 text-center">
            Our Vision
          </h3>
          <p className="text-gray-800 text-xl md:text-2xl leading-relaxed text-center max-w-5xl mx-auto font-light mb-8">
            To be a globally recognized institution of educational excellence that nurtures innovative 
            thinkers, compassionate leaders, and responsible global citizens who make meaningful 
            contributions to society.
          </p>
        </div>
        
        <div className="p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-white to-gray-50">
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border-l-4 border-blue-600">
            <p className="text-gray-700 text-lg leading-relaxed">
              We envision a future where our graduates are equipped with the knowledge, skills, and 
              values necessary to thrive in an ever-changing world. We strive to create an environment 
              where every student can discover their unique potential and pursue their dreams with 
              confidence and determination.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 sm:p-8 lg:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                <svg className="w-10 h-10 text-white transform rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 text-center">
            Our Mission
          </h3>
          <p className="text-gray-800 text-xl md:text-2xl leading-relaxed text-center max-w-5xl mx-auto font-light mb-8">
            To provide a holistic, student-centered education that develops intellectual curiosity, 
            critical thinking, and a lifelong love of learning in a safe and supportive environment.
          </p>
        </div>

        <div className="p-6 sm:p-8 lg:p-12 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="group bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-gray-800">Academic Excellence</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Deliver rigorous, innovative curriculum that challenges students to achieve their 
                highest academic potential and prepares them for future success.
              </p>
            </div>

            <div className="group bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-t-4 border-indigo-600 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-gray-800">Character Development</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Foster strong moral values, integrity, empathy, and respect for diversity through 
                example, guidance, and meaningful experiences.
              </p>
            </div>

            <div className="group bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-t-4 border-purple-600 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-gray-800">Holistic Growth</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Support the physical, emotional, social, and intellectual development of every 
                student through comprehensive programs and activities.
              </p>
            </div>

            <div className="group bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-t-4 border-pink-600 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-700 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-gray-800">Community Partnership</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Build strong partnerships with families and the community to create a collaborative 
                network that supports student success and well-being.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-12 text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Core Values</h3>
        <p className="text-gray-300 text-center mb-12 text-lg">The principles that guide everything we do</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-300">
                <span className="text-white font-bold text-3xl">E</span>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h4 className="font-bold text-2xl mb-3 text-yellow-400">Excellence</h4>
            <p className="text-gray-300 leading-relaxed">Striving for the highest standards in everything we do</p>
          </div>
          
          <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-300">
                <span className="text-white font-bold text-3xl">I</span>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h4 className="font-bold text-2xl mb-3 text-blue-400">Integrity</h4>
            <p className="text-gray-300 leading-relaxed">Acting with honesty, responsibility, and moral courage</p>
          </div>
          
          <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-300">
                <span className="text-white font-bold text-3xl">R</span>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h4 className="font-bold text-2xl mb-3 text-green-400">Respect</h4>
            <p className="text-gray-300 leading-relaxed">Valuing diversity and treating everyone with dignity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
