const Location = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 animate-fadeIn transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="flex items-center mb-4 sm:mb-5 pb-3 border-b border-gray-100">
        <div className="w-16 h-16 bg-primary-100 ring-4 ring-primary-50 rounded-full flex items-center justify-center mr-4 shrink-0">
          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Location & Directions</h2>
          <p className="text-gray-600">Visit us at our campus</p>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {/* Address */}
        <div className="border border-primary-100 border-l-4 border-l-primary-600 rounded-lg pl-4 sm:pl-6 pr-4 sm:pr-6 py-3 sm:py-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Campus Address</h3>
          <p className="text-gray-700 text-lg">
            <strong>Talent Public School</strong><br />
            (Talent Educational Trust)<br />
            B M Bypass Road<br />
            Hunsur - 571105<br />
            Karnataka, India
          </p>
          <div className="mt-3 text-sm text-gray-600 space-y-1">
            <p><strong>CBSE Affiliation No:</strong> 830494</p>
            <p><strong>School Code:</strong> 45457</p>
            <p><strong>Principal:</strong> Gulnaz Khanum N</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="bg-gray-200 rounded-lg overflow-hidden border border-gray-200 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl" style={{ height: '450px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15592.5!2d76.3044744!3d12.3115309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5851b403de1a7%3A0x4fdb19b7d57bdd80!2sTalent%20High%20School%20And%20Pu%20College%2C%20Hunsur!5e0!3m2!1sen!2sin!4v1739145000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Talent Public School Location"
          ></iframe>
        </div>

        {/* School Hours */}
        <div className="bg-primary-50 border border-primary-100 p-4 sm:p-6 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md">
          <h3 className="font-semibold text-gray-800 mb-4">School Hours</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-gray-700">Monday - Saturday</p>
              <p className="text-gray-600">9:00 AM - 4:50 PM</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Sunday</p>
              <p className="text-gray-600">Closed</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Office Hours</p>
              <p className="text-gray-600">Monday - Saturday: 9:00 AM - 4:00 PM</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Public Holidays</p>
              <p className="text-gray-600">Closed</p>
            </div>
          </div>
        </div>

        {/* Parking & Accessibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Parking
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free visitor parking available</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Designated handicap spaces</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Covered parking during events</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Accessibility
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Wheelchair accessible entrances</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Elevators to all floors</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>ADA compliant facilities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Directions */}
        <div className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md">
          <h3 className="font-semibold text-gray-800 mb-3">Getting Here</h3>
          <div className="space-y-3 text-gray-700">
            <div>
              <p className="font-medium text-gray-800 mb-1">By Car from Mysore:</p>
              <p className="text-sm">Take the Mysore-Madikeri Highway (NH275). The school is located behind DD Urs College on BM Road in Hunsur. Approximately 50 km from Mysore city center.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800 mb-1">By Bus:</p>
              <p className="text-sm">Regular bus services are available from Mysore to Hunsur. Get down at Hunsur Bus Stand, and the school is a short distance from there near DD Urs College.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800 mb-1">Landmark:</p>
              <p className="text-sm">Behind DD Urs College, BM Road, easily accessible from the main road in Hunsur town.</p>
            </div>
          </div>
        </div>

        {/* Visit Information */}
        <div className="bg-primary-700 text-white p-4 sm:p-6 rounded-lg shadow-lg border border-primary-800 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
          <h3 className="font-semibold text-xl mb-3">Planning Your Visit?</h3>
          <p className="mb-4">
            We welcome prospective students and their families to tour our campus in Hunsur. 
            Visit us during school hours (Monday - Saturday, 9:00 AM - 4:50 PM) or contact us to schedule a guided tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="https://www.google.com/maps/place/8JM3%2BMX9,+Vijayanagar,+Mysuru,+Karnataka+570017/@12.334154,76.6050376,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf7a57dda7b52b:0x682bc429d6d7a54!8m2!3d12.3341625!4d76.6049861!16s%2Fg%2F11bvtbnhkz?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-700 px-6 py-2 rounded-lg font-semibold text-center hover:bg-primary-50 transition-colors duration-200"
            >
              Get Directions
            </a>
            <a 
              href="/contact" 
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold text-center hover:bg-primary-500 transition-colors duration-200 border-2 border-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
