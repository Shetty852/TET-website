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
      name: "H P Manjunath",
      designation: "Honorable Secretary",
      image: manjunathImage,
      order: 2
    },
    {
      id: 3,
      name: "Krishna Murthy",
      designation: "Founder Trustee",
      image: krishnaMurthyImage,
      order: 3
    },
    {
      id: 4,
      name: "Naveen N Rai",
      designation: "Founder Trustee",
      image: naveenRaiImage,
      order: 4
    },
    {
      id: 5,
      name: "Manjunath R N",
      designation: "Founder Trustee",
      image: manjunathaRNImage,
      order: 5
    },
    {
      id: 6,
      name: "Srinath H P",
      designation: "Founder Trustee",
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
      <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-br from-gray-50 to-white">
        {/* Top Row - President and Secretary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12 max-w-4xl mx-auto">
          {managementTeam.slice(0, 2).map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
              <div className="p-4 sm:p-5 text-center bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-red-600 font-semibold">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - Founder Trustees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {managementTeam.slice(2).map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
              <div className="p-4 text-center bg-gradient-to-br from-white to-gray-50">
                <p className="text-xs sm:text-sm text-red-500 font-semibold mb-2 uppercase tracking-wider">
                  {member.designation}
                </p>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 uppercase tracking-wide">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;
