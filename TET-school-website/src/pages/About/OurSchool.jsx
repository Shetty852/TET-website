import principalImg from './Assets/Gulnaz Khanum N(principal).png';

const OurSchool = () => {
  return (
    <div className="bg-gradient-to-br from-white to-primary-50/30 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-4 sm:p-5 mb-6 sm:mb-8 border border-primary-100">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-primary-700 bg-clip-text text-transparent">Our School</h2>
      
      <div className="space-y-3 text-gray-700">
        <p className="text-sm sm:text-base leading-relaxed">
          CBSE-affiliated institution providing quality education from Nursery to Class 10 in Hunsur, Karnataka, 
          nurturing young minds with academic excellence and holistic development.
        </p>

        {/* Quick Stats - Compact Row */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 my-3">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-lg text-center border-l-2 border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <p className="text-xs text-blue-700 font-semibold">Affiliation No.</p>
            <p className="text-lg font-bold text-blue-900">830494</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-2 rounded-lg text-center border-l-2 border-green-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <p className="text-xs text-green-700 font-semibold">School Code</p>
            <p className="text-lg font-bold text-green-900">45457</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-2 rounded-lg text-center border-l-2 border-purple-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <p className="text-xs text-purple-700 font-semibold">Campus</p>
            <p className="text-sm font-bold text-purple-900">87,120m²</p>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-2 rounded-lg text-center border-l-2 border-primary-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <p className="text-xs text-primary-700 font-semibold">Classes</p>
            <p className="text-lg font-bold text-primary-900">50</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-2 rounded-lg text-center border-l-2 border-indigo-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <p className="text-xs text-indigo-700 font-semibold">Labs</p>
            <p className="text-lg font-bold text-indigo-900">55</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-2 rounded-lg text-center border-l-2 border-orange-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
            <p className="text-xs text-orange-700 font-semibold">Students</p>
            <p className="text-lg font-bold text-orange-900">34</p>
          </div>
        </div>

        {/* Leadership & Growth in 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Principal */}
          <div className="group bg-gradient-to-br from-primary-50 to-blue-50 p-3 rounded-lg border border-primary-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center">
              <img 
                src={principalImg} 
                alt="Gulnaz Khanum N - Principal" 
                className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-primary-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
              />
              <div>
                <p className="text-sm font-bold text-gray-800">Gulnaz Khanum N</p>
                <p className="text-xs text-gray-600">Principal</p>
                <p className="text-xs text-primary-600 font-semibold">+91 88611 53207</p>
              </div>
            </div>
          </div>

          {/* Growth Stats */}
          <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs font-semibold text-green-800 mb-2">📈 Student Growth</p>
            <div className="flex justify-between items-center">
              <div className="text-center">
                <p className="text-lg font-bold text-gray-700">14</p>
                <p className="text-xs text-gray-600">2022-23</p>
              </div>
              <svg className="w-4 h-4 text-green-600 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-700">18</p>
                <p className="text-xs text-gray-600">2023-24</p>
              </div>
              <svg className="w-4 h-4 text-green-600 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="text-center">
                <p className="text-xl font-bold text-green-700">34</p>
                <p className="text-xs text-gray-600">2024-25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSchool;
