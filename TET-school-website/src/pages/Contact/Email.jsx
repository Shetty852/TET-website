const Email = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 mb-8 sm:mb-12 animate-fadeIn transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="flex items-center mb-6 sm:mb-8 pb-5 border-b border-gray-100">
        <div className="w-16 h-16 bg-primary-100 ring-4 ring-primary-50 rounded-full flex items-center justify-center mr-4 shrink-0">
          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Email Contact</h2>
          <p className="text-gray-600">Send us a message anytime</p>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <div className="border border-primary-100 border-l-4 border-l-primary-600 rounded-lg pl-4 sm:pl-6 pr-4 sm:pr-6 py-3 sm:py-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">School Email (Official)</h3>
          <a 
            href="mailto:45457@cbseshiksha.in" 
            className="text-xl font-semibold text-primary-600 hover:text-primary-700 hover:underline"
          >
            45457@cbseshiksha.in
          </a>
          <p className="text-gray-600 text-sm mt-1">For all inquiries and information</p>
          <div className="mt-2 text-sm text-gray-600">
            <p><strong>CBSE Affiliation No:</strong> 830494</p>
            <p><strong>School Code:</strong> 45457</p>
          </div>
        </div>

        <div className="border border-primary-100 border-l-4 border-l-primary-500 rounded-lg pl-4 sm:pl-6 pr-4 sm:pr-6 py-3 sm:py-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Principal</h3>
          <p className="text-lg font-semibold text-gray-800 mb-1">Gulnaz Khanum N</p>
          <p className="text-gray-600 text-sm mt-1">For academic matters and administration</p>
        </div>

        <div className="border border-primary-100 border-l-4 border-l-primary-400 rounded-lg pl-4 sm:pl-6 pr-4 sm:pr-6 py-3 sm:py-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Admissions & General Inquiries</h3>
          <a 
            href="mailto:45457@cbseshiksha.in" 
            className="text-xl font-semibold text-primary-600 hover:text-primary-700 hover:underline"
          >
            45457@cbseshiksha.in
          </a>
          <p className="text-gray-600 text-sm mt-1">For enrollment and admission queries</p>
        </div>

        <div className="bg-primary-50 border border-primary-100 p-4 sm:p-6 rounded-lg mt-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md">
          <h3 className="font-semibold text-gray-800 mb-3">Response Time</h3>
          <p className="text-gray-700">
            We strive to respond to all emails within 24-48 hours during business days. 
            For urgent matters, please call our main office at +91 88611 86207.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md">
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
              <span>Include student name and class when relevant</span>
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
