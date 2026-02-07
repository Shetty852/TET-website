const Email = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Email Contact</h2>
          <p className="text-gray-600">Send us a message anytime</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border-l-4 border-primary-600 pl-6 py-3">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">General Inquiries</h3>
          <a 
            href="mailto:info@tetschool.edu" 
            className="text-xl font-semibold text-primary-600 hover:text-primary-700 hover:underline"
          >
            info@tetschool.edu
          </a>
          <p className="text-gray-600 text-sm mt-1">For general questions and information</p>
        </div>

        <div className="border-l-4 border-primary-500 pl-6 py-3">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Admissions</h3>
          <a 
            href="mailto:admissions@tetschool.edu" 
            className="text-xl font-semibold text-primary-600 hover:text-primary-700 hover:underline"
          >
            admissions@tetschool.edu
          </a>
          <p className="text-gray-600 text-sm mt-1">For enrollment and admission queries</p>
        </div>

        <div className="border-l-4 border-primary-400 pl-6 py-3">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Academic Affairs</h3>
          <a 
            href="mailto:academics@tetschool.edu" 
            className="text-xl font-semibold text-primary-600 hover:text-primary-700 hover:underline"
          >
            academics@tetschool.edu
          </a>
          <p className="text-gray-600 text-sm mt-1">For curriculum and academic programs</p>
        </div>

        <div className="border-l-4 border-primary-300 pl-6 py-3">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Student Support</h3>
          <a 
            href="mailto:support@tetschool.edu" 
            className="text-xl font-semibold text-primary-600 hover:text-primary-700 hover:underline"
          >
            support@tetschool.edu
          </a>
          <p className="text-gray-600 text-sm mt-1">For student services and counseling</p>
        </div>

        <div className="border-l-4 border-primary-200 pl-6 py-3">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Human Resources</h3>
          <a 
            href="mailto:hr@tetschool.edu" 
            className="text-xl font-semibold text-primary-600 hover:text-primary-700 hover:underline"
          >
            hr@tetschool.edu
          </a>
          <p className="text-gray-600 text-sm mt-1">For employment opportunities and HR inquiries</p>
        </div>

        <div className="bg-primary-50 p-6 rounded-lg mt-6">
          <h3 className="font-semibold text-gray-800 mb-3">Response Time</h3>
          <p className="text-gray-700">
            We strive to respond to all emails within 24-48 hours during business days. 
            For urgent matters, please call our main office directly.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">Email Tips</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Use a clear, descriptive subject line</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Include student name and ID number when relevant</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Be specific about your inquiry to help us assist you better</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Provide contact information for follow-up</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Email;
