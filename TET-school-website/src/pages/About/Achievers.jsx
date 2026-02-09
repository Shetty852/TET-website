import rohithImg from './Assets/achievements/Rohith L.webp';
import gaganImg from './Assets/achievements/Gagan.webp';
import karanImg from './Assets/achievements/Karan K V.webp';
import suhasImg from './Assets/achievements/Suhas.webp';
import sinchanaUDImg from './Assets/achievements/Sinchana U D.webp';
import sinchanaHJImg from './Assets/achievements/Sinchana H J.webp';
import chethanImg from './Assets/achievements/Chethan Adithya J M.webp';

const Achievers = () => {
  const achievers = [
    {
      name: "Rohith L",
      college: "Kodagu Institute of Medical Science",
      year: "2018-19",
      image: rohithImg,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Gagan",
      college: "AJ Medical College, Mangalore",
      year: "2018-19",
      image: gaganImg,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Karan K V",
      college: "BDS, AIMS College, Bangalore",
      year: "2018-19",
      image: karanImg,
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Suhas",
      college: "Veterinary College, Hassan",
      year: "2016-17",
      image: suhasImg,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Sinchana U D",
      college: "Ayurvedic K V G College",
      year: "2018-19",
      image: sinchanaUDImg,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "Sinchana H J",
      college: "Subbaiah Medical College, Shivamoga",
      year: "2017-18",
      image: sinchanaHJImg,
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="mt-8 sm:mt-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 py-6 px-6">
          <div className="text-center">
            <div className="inline-block mb-3 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-white text-sm font-bold">🏆 Our Pride</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Our Achievers
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full w-3/4 mx-auto"></div>
            <p className="text-white/90 text-sm mt-3 max-w-2xl mx-auto">
              Celebrating the success of our talented students who have excelled in their academic pursuits
            </p>
          </div>
        </div>

        {/* Achievers Grid */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-orange-50/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievers.map((achiever, index) => (
              <div
                key={index}
                className={`group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-transparent transform hover:-translate-y-2 ${
                  index === 4 ? 'lg:col-start-2' : index === 5 ? 'lg:col-start-3' : ''
                }`}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={achiever.image}
                      alt={achiever.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${achiever.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                    <span className="text-xs font-bold text-gray-700">📅 {achiever.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                    {achiever.name}
                  </h3>
                  
                  {/* College */}
                  <div className="flex items-start gap-2 mb-2 h-[2.8rem]">
                    <span className="text-lg mt-0.5 flex-shrink-0">🎓</span>
                    <p className="text-sm text-gray-600 leading-snug flex-1 line-clamp-2">
                      {achiever.college}
                    </p>
                  </div>

                  {/* Special Achievement (if any) */}
                  {achiever.achievement && (
                    <div className={`mt-3 px-3 py-2 bg-gradient-to-r ${achiever.gradient} rounded-lg`}>
                      <div className="flex items-center gap-2">
                        <span className="text-white text-base">⭐</span>
                        <p className="text-white text-xs font-bold">
                          {achiever.achievement}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Accent Line */}
                <div className={`h-1 bg-gradient-to-r ${achiever.gradient}`}></div>
              </div>
            ))}
          </div>

          {/* Footer Message */}
          <div className="mt-8 text-center">
            <div className="inline-block bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl px-6 py-4 shadow-md">
              <p className="text-gray-700 text-sm font-medium">
                <span className="text-orange-600 font-bold">✨ Inspiring Excellence:</span> We take immense pride in our students' achievements and their contribution to the medical and healthcare field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievers;
