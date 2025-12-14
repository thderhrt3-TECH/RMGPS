import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-red-600">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building bridges between communities through the power of sports and education
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-black" data-testid="our-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-red-600">Our Story</h2>
              <p className="text-lg text-gray-300 mb-4">
                The <span className="text-red-600 italic">Rocky Mountain Global Peace & Sports Complex</span> was founded with a vision to create a sanctuary where children from all backgrounds can come together, learn, and grow through the universal language of sports.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Located in the beautiful Heber Valley, our state-of-the-art facility provides world-class training opportunities while fostering compassion, teamwork, and leadership skills that extend far beyond the playing field.
              </p>
              <p className="text-lg text-gray-300">
                We believe that every child deserves the opportunity to discover their potential and make a positive impact on the world.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">KEEP THE LANGUAGES OF CHANGE</h3>
              <p className="text-gray-300">
                At the Rocky Mountain Global Peace & Sports Complex, we believe in the transformative power of two universal languages: sport and music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-600">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black p-6 rounded-lg shadow-md border-l-4 border-white" data-testid="value-compassion">
              <h3 className="text-xl font-bold text-red-600 mb-3">Compassion</h3>
              <p className="text-gray-300">We teach children to understand and care for others, building empathy that transcends boundaries.</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-md border-l-4 border-white" data-testid="value-excellence">
              <h3 className="text-xl font-bold text-red-600 mb-3">Excellence</h3>
              <p className="text-gray-300">We provide world-class facilities and coaching to help every child reach their full potential.</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-md border-l-4 border-white" data-testid="value-unity">
              <h3 className="text-xl font-bold text-red-600 mb-3">Unity</h3>
              <p className="text-gray-300">We bring together children from diverse backgrounds, fostering understanding and friendship.</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-md border-l-4 border-white" data-testid="value-growth">
              <h3 className="text-xl font-bold text-red-600 mb-3">Growth</h3>
              <p className="text-gray-300">We nurture not just athletic skills, but character development and life lessons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-black" data-testid="leadership-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-600">Our Leadership</h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-red-600 text-center mb-6">BOARD OF DIRECTORS ADVISORY BOARD</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <p className="text-white">Randon W. Wilson<br/><span className="text-gray-400 text-sm">Board Chair</span></p>
              <p className="text-white">Neil Smith</p>
              <p className="text-white">Lance Allred</p>
              <p className="text-white">Debra Hickey</p>
              <p className="text-white">Faith Fields</p>
              <p className="text-white">Krista Clark</p>
              <p className="text-white">Patrick Hickey</p>
              <p className="text-white">Trent Rounkles</p>
              <p className="text-white">Ryan Shuflin</p>
            </div>
            <p className="text-center text-white mt-6 text-lg">Laurie Neal<br/><span className="text-gray-400">Executive Director</span></p>
          </div>
        </div>
      </section>\n\n      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white" data-testid="cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-red-600">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Together, we can create opportunities that transform lives and build a better world for all children.
          </p>
          <Link 
            to="/get-involved" 
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            data-testid="get-involved-cta-button"
          >
            Get Involved Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;