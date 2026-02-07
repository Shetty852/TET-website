import { useState } from 'react';

const ManagementTeam = () => {
  const [expandedId, setExpandedId] = useState(null);

  const managementTeam = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      designation: "Chairman",
      category: "Board of Directors",
      photo: "RK",
      email: "chairman@talentpublicschool.edu",
      phone: "+91 98765 43210",
      bio: "With over 25 years of experience in educational administration, Dr. Rajesh Kumar has been instrumental in shaping the vision and strategic direction of Talent Educational Trust. His dedication to educational excellence has led to numerous innovations in curriculum development and student welfare programs.",
      qualifications: "Ph.D. in Educational Leadership, M.Ed., B.Ed.",
      expertise: ["Strategic Planning", "Educational Policy", "Quality Assurance"]
    },
    {
      id: 2,
      name: "Mrs. Priya Sharma",
      designation: "Managing Director",
      category: "Board of Directors",
      photo: "PS",
      email: "md@talentpublicschool.edu",
      phone: "+91 98765 43211",
      bio: "Mrs. Priya Sharma brings extensive experience in educational management and organizational development. Under her leadership, the school has achieved remarkable growth and success in academic and co-curricular activities.",
      qualifications: "MBA (Education Management), M.A. (Education), B.Ed.",
      expertise: ["Operations Management", "Resource Planning", "Staff Development"]
    },
    {
      id: 3,
      name: "Gulnaz Khanum N",
      designation: "Principal",
      category: "Academic Leadership",
      photo: "GK",
      email: "principal@talentpublicschool.edu",
      phone: "+91 88611 53207",
      bio: "As the Principal of Talent Public School, Gulnaz Khanum N leads with a student-centric approach, ensuring academic excellence and holistic development. Her innovative teaching methodologies and commitment to quality education have earned the school recognition and respect.",
      qualifications: "M.Ed., B.Ed., Post Graduate in Educational Psychology",
      expertise: ["Curriculum Development", "Pedagogy Innovation", "Student Welfare"]
    },
    {
      id: 4,
      name: "Mr. Anand Gowda",
      designation: "Vice Principal",
      category: "Academic Leadership",
      photo: "AG",
      email: "vp@talentpublicschool.edu",
      phone: "+91 88611 53208",
      bio: "Mr. Anand Gowda supports the academic programs with a focus on implementing modern teaching techniques and ensuring the smooth functioning of daily operations. His expertise in educational technology has modernized our learning environment.",
      qualifications: "M.Sc., B.Ed., Certified Educational Administrator",
      expertise: ["Educational Technology", "Academic Administration", "Teacher Training"]
    },
    {
      id: 5,
      name: "Dr. Meera Reddy",
      designation: "Academic Coordinator",
      category: "Academic Leadership",
      photo: "MR",
      email: "coordinator@talentpublicschool.edu",
      phone: "+91 88611 53209",
      bio: "Dr. Meera Reddy coordinates all academic activities and ensures alignment with CBSE guidelines. Her research in child psychology and learning methodologies has enhanced our teaching practices significantly.",
      qualifications: "Ph.D. in Child Psychology, M.Ed., B.Ed.",
      expertise: ["Learning Assessment", "Curriculum Coordination", "Educational Research"]
    },
    {
      id: 6,
      name: "Mr. Suresh Patel",
      designation: "Administrative Head",
      category: "Administration",
      photo: "SP",
      email: "admin@talentpublicschool.edu",
      phone: "+91 88611 53210",
      bio: "Mr. Suresh Patel manages the administrative operations of the school with efficiency and dedication. His organizational skills ensure smooth day-to-day functioning and effective resource management.",
      qualifications: "MBA (Administration), B.Com.",
      expertise: ["Facility Management", "Administrative Systems", "Compliance"]
    }
  ];

  const categories = [...new Set(managementTeam.map(member => member.category))];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Board of Directors":
        return "from-blue-600 to-indigo-700";
      case "Academic Leadership":
        return "from-purple-600 to-pink-600";
      case "Administration":
        return "from-green-600 to-teal-600";
      default:
        return "from-gray-600 to-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mb-8 sm:mb-12">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 p-6 sm:p-8 lg:p-12 text-white">
        <div className="text-center">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Management Team
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-100 max-w-3xl mx-auto px-4">
            Meet the dedicated leaders who guide our institution towards excellence
          </p>
        </div>
      </div>

      {/* Management Cards */}
      <div className="p-4 sm:p-6 lg:p-12 bg-gradient-to-br from-gray-50 to-gray-100">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8 sm:mb-12 last:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
              <span className={`inline-block w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b ${getCategoryColor(category)} rounded-full mr-3`}></span>
              {category}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {managementTeam
                .filter(member => member.category === category)
                .map((member) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                  >
                    {/* Card Header - Always Visible */}
                    <div
                      className="p-4 sm:p-6 cursor-pointer bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 transition-colors"
                      onClick={() => toggleExpand(member.id)}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        {/* Photo Avatar */}
                        <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${getCategoryColor(member.category)} rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl lg:text-3xl shadow-lg`}>
                          {member.photo}
                        </div>
                        
                        {/* Name and Designation */}
                        <div className="flex-grow min-w-0">
                          <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 truncate">
                            {member.name}
                          </h4>
                          <p className="text-sm sm:text-base text-primary-600 font-semibold mb-2">
                            {member.designation}
                          </p>
                          
                          {/* Quick Contact - Desktop */}
                          <div className="hidden sm:flex flex-wrap gap-2 text-xs text-gray-600">
                            <span className="flex items-center">
                              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              {member.phone}
                            </span>
                          </div>
                        </div>

                        {/* Expand Icon */}
                        <div className="flex-shrink-0">
                          <svg
                            className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform duration-300 ${
                              expandedId === member.id ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedId === member.id && (
                      <div className="border-t border-gray-200 bg-gray-50 p-4 sm:p-6 animate-fadeIn">
                        {/* Bio */}
                        <div className="mb-4 sm:mb-6">
                          <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            About
                          </h5>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {member.bio}
                          </p>
                        </div>

                        {/* Qualifications */}
                        <div className="mb-4 sm:mb-6">
                          <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                            Qualifications
                          </h5>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {member.qualifications}
                          </p>
                        </div>

                        {/* Expertise */}
                        <div className="mb-4 sm:mb-6">
                          <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Areas of Expertise
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, index) => (
                              <span
                                key={index}
                                className="px-2 sm:px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Contact Details */}
                        <div className="pt-4 border-t border-gray-200">
                          <h5 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact Information
                          </h5>
                          <div className="space-y-2">
                            <a
                              href={`tel:${member.phone}`}
                              className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-primary-600 transition-colors"
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              {member.phone}
                            </a>
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-primary-600 transition-colors break-all"
                            >
                              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              {member.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 sm:p-6 text-center border-t border-primary-200">
        <p className="text-xs sm:text-sm text-primary-800">
          <span className="font-semibold">Click on any team member</span> to view their complete profile, qualifications, and contact details
        </p>
      </div>
    </div>
  );
};

export default ManagementTeam;
