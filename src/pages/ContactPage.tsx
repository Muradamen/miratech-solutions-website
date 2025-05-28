import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Contact Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 text-center">
            Have questions about our services or want to discuss how MiraTech Solutions can help your organization? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Information */}
            <div className="w-full md:w-1/3 bg-blue-600 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@miratech.et
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +251 91 234 5678
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Addis Ababa, Ethiopia<br />Bole Sub-City</span>
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/muradamin/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://web.facebook.com/miratech21" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="organization" className="block text-gray-700 font-bold mb-2">Organization (Optional)</label>
                  <input 
                    type="text" 
                    id="organization" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your organization"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select a subject</option>
                    <option value="digital-skills">Digital Skills Workshops</option>
                    <option value="data-analysis">Data Analysis & Visualization</option>
                    <option value="website">Website & Online Presence</option>
                    <option value="ai-training">AI & Data Science Training</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">What areas of Ethiopia do you serve?</h3>
              <p className="text-gray-700">
                While we're based in Addis Ababa, we can provide services throughout Ethiopia. Many of our services can be delivered remotely, and we're open to traveling for workshops or in-person consultations when needed.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">How much do your services cost?</h3>
              <p className="text-gray-700">
                Our pricing is flexible and designed to be accessible for Ethiopian organizations. We offer different packages based on your specific needs and constraints. Contact us for a customized quote.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Do you offer services in Amharic?</h3>
              <p className="text-gray-700">
                Yes, we can provide services in both English and Amharic to ensure effective communication and learning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Can you help with custom projects not listed in your services?</h3>
              <p className="text-gray-700">
                Absolutely! We're always open to discussing custom projects that align with our expertise. Please reach out with your specific needs, and we'll let you know how we can help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
