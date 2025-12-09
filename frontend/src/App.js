import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '@/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Navigation = () => (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              RMGPS Complex
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link to="/programs" className="text-gray-700 hover:text-blue-600 font-medium">Programs</Link>
            <Link to="/get-involved" className="text-gray-700 hover:text-blue-600 font-medium">Get Involved</Link>
            <Link to="/get-involved#donate" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 font-medium">
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
              data-testid="mobile-menu-button"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4" data-testid="mobile-menu">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/programs" className="block py-2 text-gray-700 hover:text-blue-600">Programs</Link>
            <Link to="/get-involved" className="block py-2 text-gray-700 hover:text-blue-600">Get Involved</Link>
            <Link to="/get-involved#donate" className="block mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 text-center">
              Donate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RMGPS Complex</h3>
            <p className="text-gray-400">Building a brighter future through sports and education.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white">Programs</Link></li>
              <li><Link to="/get-involved" className="text-gray-400 hover:text-white">Get Involved</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Heber Valley, Utah</li>
              <li>info@rmgpscomplex.org</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Rocky Mountain Global Peace & Sports Complex. All rights reserved.</p>
          <a href="https://app.emergent.sh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-sm text-gray-500 hover:text-gray-300">
            <img src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4" alt="Emergent" className="h-5 w-5 mr-2" />
            Made with Emergent
          </a>
        </div>
      </div>
    </footer>
  );

  return (
    <BrowserRouter>
      <div className="App min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;