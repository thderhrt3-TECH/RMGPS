import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '@/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import News from './pages/News';
import Contact from './pages/Contact';
import Quotes from './pages/Quotes';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Navigation = () => (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <img src="/logo.png" alt="Rocky Mountain GPS" className="h-12 w-auto" />
            <div className="flex flex-col min-w-0">
              <span className="text-lg font-bold text-red-600 truncate italic">Rocky Mountain GPS</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white font-medium">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-white font-medium">About</Link>
            <Link to="/programs" className="text-gray-300 hover:text-white font-medium">Programs</Link>
            <Link to="/quotes" className="text-gray-300 hover:text-white font-medium">Quotes</Link>
            <Link to="/get-involved" className="text-gray-300 hover:text-white font-medium">Get Involved</Link>
            <Link to="/news" className="text-gray-300 hover:text-white font-medium">News</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white font-medium">Contact</Link>
            <Link to="/get-involved#donate" className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 font-medium" data-testid="donate-now-button">
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
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
            <Link to="/" className="block py-2 text-gray-300 hover:text-white">Home</Link>
            <Link to="/about" className="block py-2 text-gray-300 hover:text-white">About</Link>
            <Link to="/programs" className="block py-2 text-gray-300 hover:text-white">Programs</Link>
            <Link to="/quotes" className="block py-2 text-gray-300 hover:text-white">Quotes</Link>
            <Link to="/get-involved" className="block py-2 text-gray-300 hover:text-white">Get Involved</Link>
            <Link to="/news" className="block py-2 text-gray-300 hover:text-white">News</Link>
            <Link to="/contact" className="block py-2 text-gray-300 hover:text-white">Contact</Link>
            <Link to="/get-involved#donate" className="block mt-2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-1">
            <img src="/logo.png" alt="Logo" className="h-16 w-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-red-600 italic">Rocky Mountain GPS</h3>
            <p className="text-gray-400 text-sm">A Better Way to Build - A Better Way to Grow</p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4 text-red-600">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white">Programs</Link></li>
              <li><Link to="/get-involved" className="text-gray-400 hover:text-white">Get Involved</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white">News</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4 text-red-600">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            </div>
          </div>
        </div>

        {/* Contact Info in a single centered section */}
        <div className="text-center border-t border-gray-800 pt-8 mb-8">
          <h4 className="font-semibold mb-4 text-lg text-red-600">Contact Information</h4>
          <div className="space-y-2">
            <p className="text-gray-400">854 N 50 W Alfalfa Circle, Midway, Utah 84049</p>
            <p className="text-gray-400 italic">info@rockymountaingps.org</p>
            <p className="text-gray-400">801.360.4323</p>
          </div>
        </div>

        <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
          <p>&copy; 2025 <span className="text-red-600 italic">Rocky Mountain Global Peace & Sports Complex</span>. All rights reserved.</p>
          <p className="text-sm mt-3 max-w-4xl mx-auto">
            <span className="text-red-600 italic">Rocky Mountain Global Peace & Sports Complex (Rocky Mountain GPS)</span> is a registered nonprofit in the State of Utah, doing business under the auspices of <em>thunder</em>Heart, Inc. A 501(c)(3) non-for-profit that has been registered with the Internal Revenue Service (IRS) since 2005.
          </p>
          <p className="text-xs mt-2 text-red-600 italic">ROCKYMOUNTAINGPS.ORG</p>
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
      <div className="App min-h-screen flex flex-col bg-black text-white">
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