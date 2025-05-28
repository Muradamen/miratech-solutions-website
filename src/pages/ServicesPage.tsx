import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Services Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 text-center">
            MiraTech Solutions offers practical, affordable tech services designed specifically for the Ethiopian context.
          </p>
        </div>
      </section>

      {/* Digital Skills Workshops */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="bg-blue-100 text-blue-600 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Digital Skills Workshops</h2>
              <p className="text-gray-700 mb-4">
                Practical, hands-on workshops covering essential digital literacy and introductory tech skills for youth groups, students, NGO staff, and beneficiaries.
              </p>
              <h3 className="text-xl font-bold mb-2">Workshop Modules:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">Effective Use of Online Collaboration Tools (Google Workspace, Zoom/Meet)</li>
                <li className="mb-2">Introduction to Digital Marketing & Social Media Management</li>
                <li className="mb-2">Basic Data Literacy & Spreadsheet Skills (Excel/Google Sheets)</li>
                <li className="mb-2">Introduction to Coding Concepts (using Scratch or basic Python)</li>
                <li className="mb-2">Cybersecurity Awareness & Online Safety</li>
              </ul>
              <h3 className="text-xl font-bold mb-2">Benefits:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">Practical skills applicable to education and employment</li>
                <li className="mb-2">Customized content for Ethiopian context</li>
                <li className="mb-2">Hands-on exercises with real-world applications</li>
                <li className="mb-2">Available in-person or online</li>
              </ul>
              <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                Inquire About Workshops
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Data Analysis & Visualization */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="bg-green-100 text-green-600 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Data Analysis & Visualization</h2>
              <p className="text-gray-700 mb-4">
                Help organizations make sense of their existing data for reporting or decision-making, particularly for NGOs needing impact reporting and SMBs wanting basic customer/sales insights.
              </p>
              <h3 className="text-xl font-bold mb-2">Services Include:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">Cleaning and organizing existing datasets (e.g., survey results, sales data)</li>
                <li className="mb-2">Performing basic analysis (frequencies, averages, trends)</li>
                <li className="mb-2">Creating clear charts and simple dashboards using accessible tools</li>
                <li className="mb-2">Providing a brief report summarizing key findings</li>
              </ul>
              <h3 className="text-xl font-bold mb-2">Benefits:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">Transform raw data into actionable insights</li>
                <li className="mb-2">Improve reporting to donors or stakeholders</li>
                <li className="mb-2">Make data-driven business decisions</li>
                <li className="mb-2">Affordable analysis without needing specialized staff</li>
              </ul>
              <a href="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                Request Data Analysis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Website & Online Presence */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="bg-purple-100 text-purple-600 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Website & Online Presence Setup</h2>
              <p className="text-gray-700 mb-4">
                Create basic, professional websites or optimize social media presence for organizations lacking an online footprint, including local SMBs, NGOs, and individual professionals.
              </p>
              <h3 className="text-xl font-bold mb-2">Services Include:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">Setting up a simple website using affordable platforms</li>
                <li className="mb-2">Creating or optimizing professional Facebook/LinkedIn pages</li>
                <li className="mb-2">Ensuring basic information (contact, services, about) is clear and accessible</li>
                <li className="mb-2">Basic content creation and organization</li>
              </ul>
              <h3 className="text-xl font-bold mb-2">Benefits:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">Establish professional digital presence</li>
                <li className="mb-2">Reach more potential customers or stakeholders</li>
                <li className="mb-2">Improve credibility and accessibility</li>
                <li className="mb-2">Cost-effective solutions using free or low-cost platforms</li>
              </ul>
              <a href="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                Get Online Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Data Science Training */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="bg-yellow-100 text-yellow-600 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">AI & Data Science Awareness</h2>
              <p className="text-gray-700 mb-4">
                Introductory workshops demystifying AI and data science concepts for students, young professionals, and business groups curious about these emerging technologies.
              </p>
              <h3 className="text-xl font-bold mb-2">Workshop Content:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">What is AI/Machine Learning/Data Science?</li>
                <li className="mb-2">Real-world applications (including potential Ethiopian context)</li>
                <li className="mb-2">Ethical considerations</li>
                <li className="mb-2">Tools and technologies overview</li>
                <li className="mb-2">Learning pathways and career opportunities</li>
              </ul>
              <h3 className="text-xl font-bold mb-2">Benefits:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">Build awareness of emerging technologies</li>
                <li className="mb-2">Inspire interest in tech careers</li>
                <li className="mb-2">Understand potential applications for businesses</li>
                <li className="mb-2">Accessible introduction without technical prerequisites</li>
              </ul>
              <a href="/contact" className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                Schedule a Workshop
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          We understand that every organization has unique needs. Contact us to discuss how we can tailor our services to address your specific challenges.
        </p>
        <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;
