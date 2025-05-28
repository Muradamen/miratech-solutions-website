import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import RoadmapPage from './pages/RoadmapPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center py-4">
              {/* Logo */}
              <div className="mb-4 md:mb-0">
                <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
                  <span className="bg-blue-600 text-white p-2 rounded-md mr-2">MT</span>
                  MiraTech Solutions
                </Link>
              </div>
              
              {/* Navigation Links */}
              <nav className="flex flex-wrap justify-center gap-2 md:gap-6">
                <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
                  Home
                </Link>
                <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
                  About
                </Link>
                <Link to="/services" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
                  Services
                </Link>
                <Link to="/roadmap" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
                  Roadmap
                </Link>
                <Link to="/resources" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
                  Resources
                </Link>
                <Link to="/contact" className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">MiraTech Solutions</h3>
                <p className="mb-2">Transforming Ethiopia's digital landscape through innovative tech solutions.</p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@miratech.et
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/services" className="hover:text-blue-300 transition duration-300">Our Services</Link>
                  </li>
                  <li>
                    <Link to="/roadmap" className="hover:text-blue-300 transition duration-300">Startup Roadmap</Link>
                  </li>
                  <li>
                    <Link to="/resources" className="hover:text-blue-300 transition duration-300">Resources</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-blue-300 transition duration-300">Contact Us</Link>
                  </li>
                </ul>
              </div>
              
              {/* Connect */}
              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4 mb-4">
                  <a href="https://www.linkedin.com/in/muradamin/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://web.facebook.com/miratech21" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                </div>
                <p className="text-sm">© {new Date().getFullYear()} MiraTech Solutions. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
