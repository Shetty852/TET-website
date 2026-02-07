const OurSchool = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Our School</h2>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          TET Excellence School has been a cornerstone of quality education since our founding. 
          We are committed to providing a nurturing and stimulating environment where students 
          can discover their passions, develop their talents, and prepare for a successful future.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-primary-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-primary-800">Our History</h3>
            <p>
              Founded with a vision to transform education, we have grown from a small institution 
              to a leading educational establishment known for academic excellence and character development.
            </p>
          </div>
          
          <div className="bg-primary-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-primary-800">Our Approach</h3>
            <p>
              We believe in a student-centered approach that combines rigorous academics with 
              hands-on learning experiences, fostering critical thinking and creativity in every student.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">What Makes Us Special</h3>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>State-of-the-art facilities including modern classrooms, science labs, and computer centers</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Comprehensive curriculum aligned with national standards and best practices</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Dedicated faculty with advanced degrees and extensive teaching experience</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Strong emphasis on character development, leadership skills, and community service</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Wide range of extracurricular activities including sports, arts, music, and clubs</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Safe and inclusive environment that celebrates diversity and promotes respect</span>
          </li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Commitment</h3>
          <p>
            At TET Excellence School, we are committed to continuous improvement and innovation 
            in education. We regularly update our teaching methods, invest in new technologies, 
            and provide ongoing professional development for our staff to ensure that we deliver 
            the highest quality education to our students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurSchool;
