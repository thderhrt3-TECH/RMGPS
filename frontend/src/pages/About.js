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
            <div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-96 rounded-lg"></div>
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
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Our dedicated team of professionals brings decades of experience in sports, education, and community development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-800 w-48 h-48 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-red-600">Leadership Team</h3>
              <p className="text-gray-400">Executive Director</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 w-48 h-48 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-red-600">Coaching Staff</h3>
              <p className="text-gray-400">Athletic Director</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 w-48 h-48 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-red-600">Board Members</h3>
              <p className="text-gray-400">Board of Directors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className=\"py-20 bg-black\" data-testid=\"thank-you-section\">\n        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center\">\n          <h2 className=\"text-4xl font-bold mb-12 text-red-600\">Special Thanks</h2>\n          <p className=\"text-xl text-gray-300 mb-12\">\n            We extend our heartfelt gratitude to the individuals and organizations that have supported our mission:\n          </p>\n          \n          <div className=\"bg-gray-900 p-12 rounded-lg shadow-xl border border-gray-700\">\n            <h3 className=\"text-2xl font-bold text-red-600 mb-6\">Thank You</h3>\n            <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6 text-lg\">\n              <div className=\"space-y-3\">\n                <p className=\"text-white font-semibold\">WASATCH COUNTY CAPS PROGRAM</p>\n                <p className=\"text-gray-300\">SHALAELEE PROBST</p>\n                <p className=\"text-gray-300\">MARTIN DRAYTON</p>\n                <p className=\"text-gray-300\">ERIC RAMIREZ</p>\n                <p className=\"text-gray-300\">ALAN SHURTLIFF</p>\n              </div>\n              <div className=\"space-y-3\">\n                <p className=\"text-gray-300\">BRANDON HILL</p>\n                <p className=\"text-gray-300\">GERALD HEATH</p>\n                <p className=\"text-gray-300\">MICHEAL ANTHONY</p>\n                <p className=\"text-gray-300\">TREY CHRISTY</p>\n                <p className=\"text-gray-300\">ELIZABETH HENDRICKSEN</p>\n                <p className=\"text-gray-300\">RANDI CARLILE</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      {/* CTA Section */}
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