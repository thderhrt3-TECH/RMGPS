import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '@/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Navigation = () => (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo-waveform.png" alt="Rocky Mountain GPS" className="h-8 w-16" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">Rocky Mountain GPS</span>
              <span className="text-sm text-gray-600">Global Peace & Sports Complex</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-black font-medium">About</Link>
            <Link to="/programs" className="text-gray-700 hover:text-black font-medium">Programs</Link>
            <Link to="/get-involved" className="text-gray-700 hover:text-black font-medium">Get Involved</Link>
            <Link to="/news" className="text-gray-700 hover:text-black font-medium">News</Link>
            <Link to="/contact" className="text-gray-700 hover:text-black font-medium">Contact</Link>
            <Link to="/get-involved#donate" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 font-medium" data-testid="donate-now-button">
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-black"
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
            <Link to="/" className="block py-2 text-gray-700 hover:text-black">Home</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-black">About</Link>
            <Link to="/programs" className="block py-2 text-gray-700 hover:text-black">Programs</Link>
            <Link to="/get-involved" className="block py-2 text-gray-700 hover:text-black">Get Involved</Link>
            <Link to="/news" className="block py-2 text-gray-700 hover:text-black">News</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-black">Contact</Link>
            <Link to="/get-involved#donate" className="block mt-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 text-center">
              Donate Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="Logo" className="h-16 w-16 mb-4" />
            <h3 className="text-xl font-bold mb-4">RMGPS Complex</h3>
            <p className="text-gray-400 text-sm">A Better Way to Build - A Better Way to Grow</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white">Programs</Link></li>
              <li><Link to="/get-involved" className="text-gray-400 hover:text-white">Get Involved</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white">News</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>854 N 50 W ALFALFA CIRCLE</li>
              <li>MIDWAY, UTAH 84049</li>
              <li>INFO@ROCKYMOUNTAINGPS.ORG</li>
              <li>ROCKYMOUNTAINGPS.ORG</li>
              <li>801.360.4323</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Rocky Mountain Global Peace & Sports Complex. All rights reserved.</p>
          <p className="text-xs mt-2">ROCKYMOUNTAINGPS.ORG | 801.360.4323</p>
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
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;