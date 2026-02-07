const Phone = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Phone Contact</h2>
          <p className="text-gray-600">Call us during office hours</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border-l-4 border-primary-600 pl-6 py-3">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">School Main Office</h3>
          <a href="tel:+918861186207" className="text-2xl font-bold text-primary-600 mb-1 hover:underline block">+91 88611 86207</a>
          <p className="text-gray-600 text-sm">Monday - Saturday: 9:00 AM - 4:50 PM</p>
        </div>

        <div className="border-l-4 border-primary-500 pl-6 py-3">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Principal</h3>
          <p className="text-lg font-semibold text-gray-800 mb-1">Gulnaz Khanum N</p>
          <a href="tel:+918861153207" className="text-2xl font-bold text-primary-600 mb-1 hover:underline block">+91 88611 53207</a>
          <p className="text-gray-600 text-sm">For academic matters</p>
        </div>

        <div className="border-l-4 border-primary-400 pl-6 py-3">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Vice Principal</h3>
          <a href="tel:+919480192290" className="text-2xl font-bold text-primary-600 mb-1 hover:underline block">+91 94801 92290</a>
          <p className="text-gray-600 text-sm">For administrative inquiries</p>
        </div>

        <div className="bg-primary-50 p-6 rounded-lg mt-6">
          <h3 className="font-semibold text-gray-800 mb-3">Office Hours</h3>
          <p className="text-gray-700 mb-2">
            Our office is open for calls and visits during school hours:
          </p>
          <p className="text-xl font-bold text-primary-700">Monday - Saturday</p>
          <p className="text-lg text-gray-700">9:00 AM - 4:50 PM</p>
          <p className="text-gray-600 text-sm mt-2">Closed on Sundays and public holidays</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">When Calling</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Have your child's name and class ready when calling</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>For admissions inquiries, call during morning hours (9 AM - 12 PM) for better assistance</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>You can also visit us in person at B M Bypass Road, Hunsur</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Phone;
