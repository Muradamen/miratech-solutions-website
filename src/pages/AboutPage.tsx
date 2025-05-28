import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* About Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-6">About MiraTech Solutions</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            MiraTech Solutions is a tech startup founded in Ethiopia with a vision to transform the local tech ecosystem through accessible digital solutions, AI services, data analytics, and youth training programs.
          </p>
          <p className="text-lg text-gray-700">
            We believe in the power of technology to drive economic growth and create opportunities for Ethiopia's youth and businesses, even with limited resources.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 p-8 rounded-lg mb-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To empower Ethiopian organizations and youth with accessible tech solutions and skills that drive innovation, efficiency, and growth in the digital economy.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              A digitally transformed Ethiopia where local businesses thrive through technology adoption, and youth are equipped with the skills needed for the future of work.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Journey */}
      <section className="mb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Founder's Journey</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="bg-gray-200 rounded-full h-64 w-64 mx-auto flex items-center justify-center">
                <span className="text-gray-500 text-sm">Founder Image</span>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-bold mb-3">Murad Amin</h3>
              <p className="text-gray-700 mb-4">
                A passionate technologist with expertise in digital solutions, AI, and data analytics. Murad founded MiraTech Solutions with a vision to bridge the digital divide in Ethiopia and create opportunities for local talent.
              </p>
              <p className="text-gray-700">
                With experience in both technical implementation and training, Murad understands the unique challenges and opportunities in Ethiopia's growing tech ecosystem and is committed to developing solutions that address local needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethiopian Tech Ecosystem */}
      <section className="mb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ethiopian Tech Ecosystem</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              Ethiopia is experiencing a digital transformation with initiatives like Digital Ethiopia 2025 creating new opportunities in the tech sector. The country's large youth population and growing mobile penetration rate provide a strong foundation for tech innovation.
            </p>
            <p className="text-gray-700 mb-4">
              Recent developments include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">Launch of government e-services platforms like Mesob</li>
              <li className="mb-2">Growth of digital marketplaces like Zemen Gebya</li>
              <li className="mb-2">Increasing demand for digital skills training</li>
              <li className="mb-2">Rising interest in AI and data analytics applications</li>
              <li className="mb-2">Expansion of mobile internet access across the country</li>
            </ul>
            <p className="text-gray-700">
              Despite these advances, challenges remain in terms of digital literacy, infrastructure, and access to affordable tech solutions - gaps that MiraTech Solutions aims to address.
            </p>
          </div>
        </div>
      </section>

      {/* Why MiraTech */}
      <section className="bg-blue-600 text-white p-8 rounded-lg mb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Why We Started MiraTech Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Addressing Local Needs</h3>
              <p>
                We recognized that many Ethiopian organizations struggle to access affordable tech solutions that address their specific challenges and context.
              </p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Bridging the Skills Gap</h3>
              <p>
                Despite high youth unemployment, there's a shortage of professionals with practical digital skills needed by employers.
              </p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Democratizing Technology</h3>
              <p>
                We believe that advanced technologies like AI and data analytics should be accessible to organizations of all sizes, not just large corporations.
              </p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Building Local Capacity</h3>
              <p>
                By focusing on knowledge transfer and practical skills, we aim to build sustainable tech capacity within Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us on This Journey</h2>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          Whether you're a potential client, partner, or team member, we invite you to be part of MiraTech's mission to transform Ethiopia's digital landscape.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Explore Our Services
          </a>
          <a href="/contact" className="bg-transparent hover:bg-blue-100 text-blue-600 border-2 border-blue-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
