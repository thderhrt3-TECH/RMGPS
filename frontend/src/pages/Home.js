import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page bg-black text-white" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-red-600 mb-6">
              <span className="block italic">Rocky Mountain Global Peace</span>
              <span className="block text-red-600 italic">& Sports Complex</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed" data-testid="hero-description">
              Our goal is to create a place of refuge where children develop compassion through sports, teamwork, and creativity.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Here, they can discover the importance of science, environmental stewardship, and teamwork—taking home skills to shape their futures and impact the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/get-involved#donate" 
                className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                data-testid="hero-donate-button"
              >
                Support Our Mission
              </Link>
              <Link 
                to="/about" 
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-black transition-all shadow-lg"
                data-testid="hero-learn-more-button"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goal Section */}
      <section className="py-16 bg-gray-900" data-testid="mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border-2 border-gray-700 hover:border-gray-500 transition-colors">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Our Mission</h3>
              <p className="text-gray-300">
                A state-of-the-art sports and training complex where children from diverse economic, social, and political backgrounds come together to learn valuable life lessons.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border-2 border-gray-700 hover:border-gray-500 transition-colors">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Our Vision</h3>
              <p className="text-gray-300">
                Empower children through play, sports, and comprehensive programs led by mentors from all walks of life—nurturing not just better athletes but leaders who inspire positive change.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border-2 border-gray-700 hover:border-gray-500 transition-colors">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Our Goal</h3>
              <p className="text-gray-300">
                Foster compassion, resilience, and teamwork through sports. With caring coaches, we create a place where children grow through transformative experiences in the picturesque Heber Valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages of Change Section */}
      <section className="py-16 bg-black" data-testid="languages-of-change-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-6">The Languages of Change</h2>
          <p className="text-xl text-gray-300 mb-4">
            At the <strong className="text-red-600 italic">Rocky Mountain Global Peace & Sports Complex</strong>, we believe in the transformative power of two universal languages: <strong>sport and music</strong>.
          </p>
          <p className="text-lg text-gray-400 mb-4">
            We don't just believe in change—we build it. 
          </p>
          <p className="text-2xl font-bold text-red-600 mb-8 italic">
            We've got greatness to build...we hope you will join us
          </p>
          
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg border-l-4 border-white text-left">
            <p className="text-gray-300 italic mb-4">
              "Sport has the power to change the world"
            </p>
            <p className="text-right text-white font-semibold">— Nelson Mandela</p>
          </div>
          
          <div className="mt-6 bg-gray-900 p-8 rounded-lg shadow-lg border-l-4 border-white text-left">
            <p className="text-gray-300 italic mb-4">
              "Music has healing power. It has the ability to take people out of themselves for a few hours."
            </p>
            <p className="text-right text-white font-semibold">— Elton John</p>
          </div>
        </div>
      </section>

      {/* World-Class Facilities Section */}
      <section className="py-16 bg-gray-900" data-testid="facilities-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">World-Class Facilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-gray-500 transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-2">NHL-Sized Ice Sheets</h3>
              <p className="text-gray-300">Two full sheets and one half-sheet for hockey and skating</p>
            </div>
            
            <div className="bg-black border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-gray-500 transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-2">Basketball Courts</h3>
              <p className="text-gray-300">Two professional-grade basketball courts</p>
            </div>
            
            <div className="bg-black border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-gray-500 transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-2">Charter School</h3>
              <p className="text-gray-300">Educational programs integrated with athletics</p>
            </div>
            
            <div className="bg-black border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-gray-500 transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-2">Dormitories</h3>
              <p className="text-gray-300">Two comfortable dormitories for visiting teams</p>
            </div>
            
            <div className="bg-black border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-gray-500 transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-2">Training Center</h3>
              <p className="text-gray-300">State-of-the-art wellness and training facilities</p>
            </div>
            
            <div className="bg-black border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-gray-500 transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-2">Multi-Sport Field</h3>
              <p className="text-gray-300">Baseball, soccer, lacrosse, rugby, and football</p>
            </div>
            
            <div className="bg-black border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-gray-500 transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-2">Equestrian Center</h3>
              <p className="text-gray-300">Professional equestrian training and riding programs</p>
            </div>
            
            <div className="bg-black border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-gray-500 transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-2">Scenic Trails</h3>
              <p className="text-gray-300">Open spaces connected by beautiful trail systems</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/programs" 
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-md"
              data-testid="view-all-programs-button"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Educational Programs Section */}
      <section className="py-16 bg-black" data-testid="educational-programs-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-600 mb-4">Educational Programs</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Educational, residential, and wellness facilities for complete athlete development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Charter School */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-colors" data-testid="edu-charter-school">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-600 mb-3">Charter School</h3>
                <p className="text-gray-300 mb-4">
                  Integrated academic programs that combine traditional education with athletic development.
                </p>
                <ul className="text-gray-400 space-y-1 mb-4">
                  <li>• Core Academic Curriculum: STEM Programs, Arts & Music, Character Education</li>
                </ul>
              </div>
              <img 
                src="/edu-charter-school.png" 
                alt="Charter School Campus"
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Mentorship Programs */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-colors" data-testid="edu-mentorship">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-600 mb-3">Mentorship Programs</h3>
                <p className="text-gray-300 mb-4">
                  Connecting children with positive role models and mentors from diverse backgrounds.
                </p>
                <ul className="text-gray-400 space-y-1 mb-4">
                  <li>• One-on-One Mentoring</li>
                  <li>• Leadership Development</li>
                  <li>• Life Skills Workshops</li>
                  <li>• Career Exploration</li>
                </ul>
              </div>
              <img 
                src="/edu-mentorship.png" 
                alt="Mentorship Programs"
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Environmental Stewardship */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-colors" data-testid="edu-environmental">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-600 mb-3">Environmental Stewardship</h3>
                <p className="text-gray-300 mb-4">
                  Outdoor education programs teaching children about nature and environmental responsibility.
                </p>
                <ul className="text-gray-400 space-y-1 mb-4">
                  <li>• Trail Maintenance</li>
                  <li>• Wildlife Education</li>
                  <li>• Sustainable Practices</li>
                  <li>• Outdoor Adventures</li>
                </ul>
              </div>
              <img 
                src="/edu-environmental.png" 
                alt="Environmental Stewardship"
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Music, Arts, High Tech Creativity */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-colors" data-testid="edu-music-arts">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-600 mb-3">Music, Arts, High Tech Creativity</h3>
                <p className="text-gray-300 mb-4">
                  Creative programs that complement athletic development through music, artistic expression, and cutting-edge technology.
                </p>
                <ul className="text-gray-400 space-y-1 mb-4">
                  <li>• Music Lessons</li>
                  <li>• Band & Orchestra</li>
                  <li>• Art Classes</li>
                  <li>• Performance Opportunities</li>
                </ul>
              </div>
              <img 
                src="/edu-music-arts.png" 
                alt="Music Arts Technology"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          <div className="mt-8 bg-gray-900 p-6 rounded-lg border border-gray-700">
            <p className="text-gray-300 text-center">
              <span className="text-red-600 font-semibold">Holistic Development:</span> The complex is designed for complete athlete development—combining education, housing, and wellness in one location. This integration creates a supportive ecosystem that nurtures not just athletic skills but academic achievement and character growth.
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="py-16 bg-black text-white" data-testid="get-involved-cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-600">Join Our Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Donate</h3>
              <p className="mb-6">
                Help us build a brighter future for children through your generous support.
              </p>
              <Link 
                to="/get-involved#donate" 
                className="inline-block bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                Give Now
              </Link>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Volunteer</h3>
              <p className="mb-6">
                Share your time and skills to make a direct impact on children's lives.
              </p>
              <Link 
                to="/get-involved#volunteer" 
                className="inline-block bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                Get Involved
              </Link>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Partner</h3>
              <p className="mb-6">
                Join us as a corporate or community partner to amplify our impact.
              </p>
              <Link 
                to="/get-involved#partner" 
                className="inline-block bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;