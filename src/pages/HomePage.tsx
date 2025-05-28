import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg p-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MiraTech Solutions</h1>
          <p className="text-xl md:text-2xl mb-6">
            Transforming Ethiopia's digital landscape through innovative tech solutions, 
            AI services, data analytics, and youth training.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/services" className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-6 rounded-full transition duration-300">
              Our Services
            </a>
            <a href="/contact" className="bg-transparent hover:bg-white hover:text-blue-600 border-2 border-white font-bold py-3 px-6 rounded-full transition duration-300">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Digital Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Digital Skills Workshops</h3>
            <p className="text-gray-600">
              Practical, hands-on training to empower youth and professionals with essential digital skills.
            </p>
          </div>

          {/* Data Analysis */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-green-100 text-green-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Data Analysis & Visualization</h3>
            <p className="text-gray-600">
              Transform raw data into actionable insights with our affordable data analysis services.
            </p>
          </div>

          {/* Website Setup */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Website & Online Presence</h3>
            <p className="text-gray-600">
              Establish your digital footprint with professional websites and optimized social media profiles.
            </p>
          </div>

          {/* AI Training */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">AI & Data Science Training</h3>
            <p className="text-gray-600">
              Demystify AI and data science concepts with our accessible introductory workshops.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-gray-50 p-8 rounded-lg mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose MiraTech Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of Ethiopia's unique tech landscape and challenges.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Affordable Solutions</h3>
                <p className="text-gray-600">
                  Cost-effective services designed for Ethiopian businesses and organizations.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Practical Approach</h3>
                <p className="text-gray-600">
                  Focus on delivering tangible results and building real-world skills.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Future-Focused</h3>
                <p className="text-gray-600">
                  Preparing Ethiopia's youth and businesses for the digital economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Journey?</h2>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          Whether you're an NGO looking for data insights, a business needing an online presence, 
          or a youth group seeking digital skills training, we're here to help.
        </p>
        <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default HomePage;
