const Location = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
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

      <div className="space-y-6">
        {/* Address */}
        <div className="border-l-4 border-primary-600 pl-6 py-3">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Campus Address</h3>
          <p className="text-gray-700 text-lg">
            123 Education Street<br />
            Knowledge City, KC 12345<br />
            United States
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: '300px' }}>
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
            <div className="text-center">
              <svg className="w-16 h-16 text-primary-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-primary-700 font-semibold">Interactive Map</p>
              <p className="text-primary-600 text-sm">Integrate with Google Maps or similar service</p>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="bg-primary-50 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-4">Office Hours</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-gray-700">Monday - Friday</p>
              <p className="text-gray-600">8:00 AM - 4:00 PM</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Saturday</p>
              <p className="text-gray-600">9:00 AM - 1:00 PM</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Sunday</p>
              <p className="text-gray-600">Closed</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Holidays</p>
              <p className="text-gray-600">Closed</p>
            </div>
          </div>
        </div>

        {/* Parking & Accessibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
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

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
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
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">Getting Here</h3>
          <div className="space-y-3 text-gray-700">
            <div>
              <p className="font-medium text-gray-800 mb-1">By Car:</p>
              <p className="text-sm">Take Highway 101 North, exit at Education Boulevard, turn right on Knowledge Street, then left on Education Street. Campus will be on your right.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800 mb-1">By Public Transit:</p>
              <p className="text-sm">Take Bus Route 45 or 67 to the Knowledge City Center stop. Campus is a 5-minute walk east.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800 mb-1">By Train:</p>
              <p className="text-sm">Knowledge City Station is 1.5 miles from campus. Shuttle service available during peak hours.</p>
            </div>
          </div>
        </div>

        {/* Visit Information */}
        <div className="bg-primary-700 text-white p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-3">Planning Your Visit?</h3>
          <p className="mb-4">
            We welcome prospective students and their families to tour our campus. 
            Please call or email us in advance to schedule a guided tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="tel:+15551234567" 
              className="bg-white text-primary-700 px-6 py-2 rounded-lg font-semibold text-center hover:bg-primary-50 transition-colors duration-200"
            >
              Call to Schedule
            </a>
            <a 
              href="mailto:info@tetschool.edu" 
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold text-center hover:bg-primary-500 transition-colors duration-200 border-2 border-white"
            >
              Email to Schedule
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
