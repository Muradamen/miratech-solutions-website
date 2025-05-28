import React from 'react';

const ResourcesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Resources Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-6">Resources</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 text-center">
            Affordable tools and platforms to help you launch and grow your tech startup in Ethiopia.
          </p>
        </div>
      </section>

      {/* Tools Categories */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          {/* Training & Workshop Tools */}
          <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Training & Workshop Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Presentation Creation</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">
                    <span className="font-semibold">Google Slides:</span> Free, web-based, collaborative presentation tool
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Canva:</span> Free tier with visually appealing templates
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">LibreOffice Impress:</span> Free offline desktop software
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Online Workshop Delivery</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">
                    <span className="font-semibold">Google Meet:</span> Free tier with generous meeting lengths
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Zoom:</span> Free tier (40-minute limit for group meetings)
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Jitsi Meet:</span> Free, open-source, browser-based
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Screen Recording</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">
                    <span className="font-semibold">Loom:</span> Free tier for basic screen recording
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">OBS Studio:</span> Free, open-source recording software
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Interactivity</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">
                    <span className="font-semibold">Mentimeter:</span> Free tier for interactive polls and Q&A
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Kahoot!:</span> Free tier for gamified quizzes
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Analysis & Visualization Tools */}
          <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600 mb-6">Data Analysis & Visualization Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Spreadsheets & Basic Analysis</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">
                    <span className="font-semibold">Google Sheets:</span> Free, web-based, collaborative
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Microsoft Excel Online:</span> Free web-based version
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">LibreOffice Calc:</span> Free offline desktop software
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Data Visualization</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">
                    <span className="font-semibold">Google Looker Studio:</span> Free interactive dashboards
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Flourish:</span> Free tier for beautiful charts and maps
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">RawGraphs.io:</span> Free web-based visualization tool
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Programming (If skilled)</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">
                    <span className="font-semibold">Python:</span> Free with libraries like Pandas, Matplotlib
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Website & Online Presence Tools */}
          <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Website & Online Presence Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Website Builders</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">
                    <span className="font-semibold">Google Sites:</span> Free, very basic informational sites
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">WordPress.com:</span> Free tier with limited features
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Carrd:</span> Free tier for simple one-page websites
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">GitHub Pages:</span> Free hosting for static websites
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Graphic Design</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">
                    <span className="font-semibold">Canva:</span> Free tier for social media posts, logos
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Figma:</span> Free tier for UI/UX design
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Photopea:</span> Free web-based image editor
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Collaboration & Project Management */}
          <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-yellow-600 mb-6">Collaboration & Project Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Communication</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">
                    <span className="font-semibold">Email (Gmail):</span> Free professional communication
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Telegram / WhatsApp:</span> Free messaging apps
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Slack:</span> Free tier with message history limits
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Task Management</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">
                    <span className="font-semibold">Trello:</span> Free tier for Kanban-style boards
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Notion:</span> Free tier for notes, tasks, wikis
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Google Keep / Tasks:</span> Free simple task lists
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">File Sharing</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">
                    <span className="font-semibold">Google Drive:</span> Free tier with 15GB storage
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Dropbox:</span> Free tier with 2GB storage
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Business Tools</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">
                    <span className="font-semibold">Wave Financial:</span> Free accounting and invoicing
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Invoice Ninja:</span> Free tier for invoicing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Best Practices */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Tips for Using Free Tools Effectively</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Start Simple</h3>
              <p className="text-gray-700">
                Begin with the tools you're most comfortable with. For most startups, the Google Workspace suite (Docs, Sheets, Slides, Meet, Drive) provides an excellent foundation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Consider Internet Access</h3>
              <p className="text-gray-700">
                If working in areas with unreliable internet, ensure you have offline alternatives for critical tools (like LibreOffice).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Upgrade Strategically</h3>
              <p className="text-gray-700">
                Only move to paid tiers when free limitations are genuinely holding back your business growth or client service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Leverage Templates</h3>
              <p className="text-gray-700">
                Use available templates in tools like Canva, Google Docs, or Trello to save time and maintain professional quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Need Help Selecting the Right Tools?</h2>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          MiraTech Solutions can help you identify and implement the most appropriate tools for your specific needs and constraints.
        </p>
        <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          Contact Us for Guidance
        </a>
      </section>
    </div>
  );
};

export default ResourcesPage;
