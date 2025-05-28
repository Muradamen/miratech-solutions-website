import React from 'react';

const RoadmapPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Roadmap Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-6">Building Your Tech Startup</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 text-center">
            A comprehensive roadmap for launching and growing a tech startup in Ethiopia's emerging ecosystem.
          </p>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          {/* Phase 1: Idea Validation */}
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Timeline line */}
            <div className="h-full w-1 bg-blue-200 absolute left-0 sm:left-16 top-0"></div>
            {/* Timeline circle */}
            <div className="absolute left-0 sm:left-16 top-6 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
            {/* Content */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Idea Validation</h2>
              <p className="text-gray-700 mb-4">
                Before investing significant time and resources, validate your tech startup idea to ensure it addresses real needs in the Ethiopian market.
              </p>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Key Steps:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">Formulate specific service hypotheses (e.g., "Local NGOs need affordable data visualization services")</li>
                  <li className="mb-2">Create simple service descriptions or prototypes</li>
                  <li className="mb-2">Conduct targeted interviews with potential clients (NGOs, youth groups, SMBs)</li>
                  <li className="mb-2">Gather feedback on relevance, features, pricing, and potential barriers</li>
                  <li className="mb-2">Identify patterns and prioritize services based on demand</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Success Indicators:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">Clear understanding of target client pain points</li>
                  <li className="mb-2">Validated interest in specific services</li>
                  <li className="mb-2">Initial insights on pricing sensitivity</li>
                  <li className="mb-2">Identification of potential early adopters</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2: Minimum Viable Services */}
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Timeline line */}
            <div className="h-full w-1 bg-blue-200 absolute left-0 sm:left-16 top-0"></div>
            {/* Timeline circle */}
            <div className="absolute left-0 sm:left-16 top-6 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
            {/* Content */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Minimum Viable Services</h2>
              <p className="text-gray-700 mb-4">
                Start with 1-2 focused services that align with validated needs, your skills, and require minimal capital investment.
              </p>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Recommended MVS Options:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2"><span className="font-semibold">Digital Skills Workshops:</span> Practical training on essential digital tools</li>
                  <li className="mb-2"><span className="font-semibold">Basic Data Analysis:</span> Help organizations make sense of existing data</li>
                  <li className="mb-2"><span className="font-semibold">Simple Website Setup:</span> Create professional online presence for local businesses</li>
                  <li className="mb-2"><span className="font-semibold">AI Awareness Workshops:</span> Introduce emerging tech concepts to interested groups</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Implementation Focus:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">Develop detailed service descriptions and processes</li>
                  <li className="mb-2">Create templates and reusable materials</li>
                  <li className="mb-2">Set clear pricing and delivery timelines</li>
                  <li className="mb-2">Prepare to deliver exceptional quality to early clients</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3: Building Credibility */}
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Timeline line */}
            <div className="h-full w-1 bg-blue-200 absolute left-0 sm:left-16 top-0"></div>
            {/* Timeline circle */}
            <div className="absolute left-0 sm:left-16 top-6 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
            {/* Content */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Building Credibility</h2>
              <p className="text-gray-700 mb-4">
                With limited funds, focus on demonstrating value and building trust through relationships and results rather than expensive marketing.
              </p>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Key Strategies:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">Optimize your online presence (LinkedIn profile, Facebook page)</li>
                  <li className="mb-2">Share valuable content related to your service areas</li>
                  <li className="mb-2">Offer strategic pilot projects to reputable organizations</li>
                  <li className="mb-2">Form partnerships with complementary organizations</li>
                  <li className="mb-2">Network actively in local tech events and relevant online groups</li>
                  <li className="mb-2">Collect and showcase testimonials from satisfied clients</li>
                  <li className="mb-2">Engage with the community through volunteer work or free workshops</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Focus Areas:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">Building genuine relationships before selling</li>
                  <li className="mb-2">Demonstrating expertise through content and results</li>
                  <li className="mb-2">Over-delivering on initial projects</li>
                  <li className="mb-2">Systematically collecting feedback and testimonials</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 4: Formalizing & Scaling */}
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Timeline line */}
            <div className="h-full w-1 bg-blue-200 absolute left-0 sm:left-16 top-0"></div>
            {/* Timeline circle */}
            <div className="absolute left-0 sm:left-16 top-6 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</div>
            {/* Content */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Formalizing & Scaling</h2>
              <p className="text-gray-700 mb-4">
                Gradually formalize and scale your business as revenue and traction build, maintaining a lean operation focused on delivering exceptional value.
              </p>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Formalization Steps:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">Refine your brand identity (mission, vision, visuals)</li>
                  <li className="mb-2">Set up basic financial systems (separate bank account, expense tracking)</li>
                  <li className="mb-2">Develop clear service agreements and documentation</li>
                  <li className="mb-2">Obtain necessary tax identification and registrations</li>
                  <li className="mb-2">Choose appropriate business structure (sole proprietorship initially)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Early Scaling Tactics:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">Deepen expertise in your chosen service areas</li>
                  <li className="mb-2">Document workflows and create standard operating procedures</li>
                  <li className="mb-2">Expand services based on validated client demand</li>
                  <li className="mb-2">Adjust pricing as your credibility and portfolio grow</li>
                  <li className="mb-2">Consider strategic collaborations before making hires</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 5: Networking & Investment */}
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Timeline line */}
            <div className="h-full w-1 bg-blue-200 absolute left-0 sm:left-16 top-0"></div>
            {/* Timeline circle */}
            <div className="absolute left-0 sm:left-16 top-6 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">5</div>
            {/* Content */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Networking & Investment</h2>
              <p className="text-gray-700 mb-4">
                Build connections within the Ethiopian tech ecosystem and prepare for potential funding once your business model shows traction.
              </p>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Networking Strategies:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">Attend local tech events, meetups, and conferences</li>
                  <li className="mb-2">Engage in relevant online communities</li>
                  <li className="mb-2">Optimize your LinkedIn presence and connections</li>
                  <li className="mb-2">Seek mentorship from experienced entrepreneurs</li>
                  <li className="mb-2">Explore strategic partnerships with complementary businesses</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Funding Preparation:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">Track key metrics demonstrating traction and impact</li>
                  <li className="mb-2">Research relevant grants, competitions, and accelerator programs</li>
                  <li className="mb-2">Build relationships with potential investors before asking for funding</li>
                  <li className="mb-2">Develop a compelling pitch deck and story</li>
                  <li className="mb-2">Focus initial funding efforts on grants and competitions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* End cap */}
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="absolute left-0 sm:left-16 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">✓</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          Whether you're at the idea stage or looking to scale an existing concept, MiraTech Solutions can help you navigate Ethiopia's growing tech ecosystem.
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

export default RoadmapPage;
