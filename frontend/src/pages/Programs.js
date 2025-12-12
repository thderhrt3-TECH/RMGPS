import React from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
  return (
    <div className="programs-page bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20" data-testid="programs-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-red-600">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive programs designed to develop athletic skills, character, and leadership
          </p>
        </div>
      </section>

      {/* Sports Programs Section */}
      <section className="py-20 bg-black" data-testid="sports-programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-600">Sports Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 border-2 border-gray-700 p-8 rounded-lg hover:shadow-xl hover:border-white transition" data-testid="program-ice-hockey">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Ice Hockey</h3>
              <p className="text-gray-300 mb-4">
                Year-round hockey programs for all skill levels, featuring NHL-sized ice sheets and professional coaching.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Youth Development Leagues</li>
                <li>• Advanced Training Programs</li>
                <li>• Figure Skating Classes</li>
                <li>• Public Ice Time</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-2 border-gray-700 p-8 rounded-lg hover:shadow-xl hover:border-white transition" data-testid="program-basketball">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Basketball</h3>
              <p className="text-gray-300 mb-4">
                Professional-grade basketball courts hosting leagues, camps, and individual skill development.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Youth Leagues (Ages TBD)</li>
                <li>• Skills Clinics</li>
                <li>• Tournament Hosting</li>
                <li>• Personal Training</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-2 border-gray-700 p-8 rounded-lg hover:shadow-xl hover:border-white transition" data-testid="program-soccer">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Soccer</h3>
              <p className="text-gray-300 mb-4">
                Multi-sport field accommodating soccer programs for recreational and competitive players.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Recreational Leagues</li>
                <li>• Competitive Teams</li>
                <li>• Summer Camps</li>
                <li>• Coach Training</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-2 border-gray-700 p-8 rounded-lg hover:shadow-xl hover:border-white transition" data-testid="program-baseball">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Baseball/Softball</h3>
              <p className="text-gray-300 mb-4">
                Spring and summer leagues with dedicated fields and batting facilities.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Little League Programs</li>
                <li>• Travel Teams</li>
                <li>• Pitching Clinics</li>
                <li>• Field Rentals</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-2 border-gray-700 p-8 rounded-lg hover:shadow-xl hover:border-white transition" data-testid="program-football">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Football</h3>
              <p className="text-gray-300 mb-4">
                Full-field facilities for youth football leagues and training programs.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Flag Football (Ages TBD)</li>
                <li>• Tackle Football (Ages TBD)</li>
                <li>• Skills Development</li>
                <li>• Team Camps</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-2 border-gray-700 p-8 rounded-lg hover:shadow-xl hover:border-white transition" data-testid="program-equestrian">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Equestrian</h3>
              <p className="text-gray-300 mb-4">
                Professional equestrian training and riding programs connecting children with nature and building confidence.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Beginner Riding Lessons</li>
                <li>• Advanced Training</li>
                <li>• Trail Rides</li>
                <li>• Horse Care Education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Programs Section */}
      <section className="py-20 bg-gray-900" data-testid="educational-programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-600">Educational Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg shadow-md border-l-4 border-white" data-testid="program-charter-school">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Charter School</h3>
              <p className="text-gray-300 mb-4">
                Integrated academic programs that combine traditional education with athletic development.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Core Academic Curriculum</li>
                <li>• STEM Programs</li>
                <li>• Arts & Music</li>
                <li>• Character Education</li>
              </ul>
            </div>

            <div className="bg-black p-8 rounded-lg shadow-md border-l-4 border-white" data-testid="program-mentorship">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Mentorship Programs</h3>
              <p className="text-gray-300 mb-4">
                Connecting children with positive role models and mentors from diverse backgrounds.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• One-on-One Mentoring</li>
                <li>• Leadership Development</li>
                <li>• Life Skills Workshops</li>
                <li>• Career Exploration</li>
              </ul>
            </div>

            <div className="bg-black p-8 rounded-lg shadow-md border-l-4 border-white" data-testid="program-environmental">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Environmental Stewardship</h3>
              <p className="text-gray-300 mb-4">
                Outdoor education programs teaching children about nature and environmental responsibility.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Trail Maintenance</li>
                <li>• Wildlife Education</li>
                <li>• Sustainable Practices</li>
                <li>• Outdoor Adventures</li>
              </ul>
            </div>

            <div className="bg-black p-8 rounded-lg shadow-md border-l-4 border-white" data-testid="program-music">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Music & Arts</h3>
              <p className="text-gray-300 mb-4">
                Creative programs that complement athletic development through music and artistic expression.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Music Lessons</li>
                <li>• Band & Orchestra</li>
                <li>• Art Classes</li>
                <li>• Performance Opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TBD Section */}
      <section className="py-20 bg-black" data-testid="summer-camps">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-600">TBD</h2>
          <div className="bg-gray-900 p-12 rounded-lg border-2 border-gray-700">
            <p className="text-xl text-center text-gray-300 mb-8">
              Our comprehensive programs offer children unforgettable experiences combining sports, education, and adventure in the beautiful Heber Valley.
            </p>
            <div className="text-center">
              <Link 
                to="/get-involved" 
                className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                data-testid="register-camps-button"
              >
                Register for Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white" data-testid="programs-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-red-600">Ready to Join?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explore our programs and find the perfect fit for your child's interests and goals.
          </p>
          <Link 
            to="/get-involved" 
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            data-testid="contact-us-button"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programs;