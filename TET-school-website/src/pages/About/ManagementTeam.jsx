  import principalImage from './Assets/Gulnaz Khanum N(principal).png';
import srinathImage from './Assets/Srinath H P.png';
import manjunathImage from './Assets/Manjunath H P.png';
import naveenRaiImage from './Assets/Naveen Rai N.png';
import narayanaRaiImage from './Assets/Narayana Rai.png';
import manjunathaRNImage from './Assets/Manjunatha R N.png';
import krishnaMurthyImage from './Assets/Krishna Murthy H R.png';

const ManagementTeam = () => {
  const managementTeam = [
    {
      id: 1,
      name: "Narayana Rai",
      designation: "Honorable President",
      image: narayanaRaiImage,
      order: 1
    },
    {
      id: 2,
      name: "Manjunath H P",
      designation: "Honorable Secretary",
      image: manjunathImage,
      order: 2
    },
    {
      id: 3,
      name: "Krishna Murthy H R",
      designation: "Founder Director",
      image: krishnaMurthyImage,
      order: 3
    },
    {
      id: 4,
      name: "Naveen Rai N",
      designation: "Founder Director",
      image: naveenRaiImage,
      order: 4
    },
    {
      id: 5,
      name: "Manjunatha R N",
      designation: "Director",
      image: manjunathaRNImage,
      order: 5
    },
    {
      id: 6,
      name: "Srinath H P",
      designation: "Director",
      image: srinathImage,
      order: 6
    },
    {
      id: 7,
      name: "Gulnaz Khanum N",
      designation: "Principal",
      image: principalImage,
      order: 7
    }
  ];

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mb-6 sm:mb-8">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-6 sm:py-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center tracking-wide">
          OUR MANAGEMENT
        </h2>
      </div>

      {/* Management Grid */}
      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white">
        {/* First Row - President and Secretary */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-5 max-w-md mx-auto">
          {managementTeam.slice(0, 2).map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Photo */}
              <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Info */}
              <div className="p-2 sm:p-3 text-center bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-xs text-red-600 font-semibold">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 4 Members */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-5 max-w-3xl mx-auto">
          {managementTeam.slice(2, 6).map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Photo */}
              <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Info */}
              <div className="p-2 text-center bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-xs text-red-500 font-semibold mb-1 uppercase tracking-wider">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default ManagementTeam;
