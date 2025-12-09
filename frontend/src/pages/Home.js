import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24" data-testid="hero-section">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1659869590085-57efda46f48e" 
            alt="Sports Complex"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="hero-title">
            Rocky Mountain Global Peace<br />& Sports Complex
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" data-testid="hero-description">
            Our goal is to create a place of refuge where children develop compassion through sports, teamwork, and creativity.
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Here, they can discover the importance of science, environmental stewardship, and teamwork—taking home skills to shape their futures and impact the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/get-involved#donate" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              data-testid="support-mission-button"
            >
              Support Our Mission
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
              data-testid="learn-more-button"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goal Section */}
      <section className="py-20 bg-gray-50" data-testid="mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md" data-testid="mission-card">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                A state-of-the-art sports and training complex where children from diverse economic, social, and political backgrounds come together to learn valuable life lessons.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md" data-testid="vision-card">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                Empower children through play, sports, and comprehensive programs led by mentors from all walks of life—nurturing not just better athletes but leaders who inspire positive change.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md" data-testid="goal-card">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Goal</h3>
              <p className="text-gray-700">
                Foster compassion, resilience, and teamwork through sports. With caring coaches, we create a place where children grow through transformative experiences in the picturesque Heber Valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages of Change Section */}
      <section className="py-20 bg-white" data-testid="languages-of-change-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6">The Languages of Change</h2>
          <p className="text-xl text-center text-gray-700 mb-12 max-w-4xl mx-auto">
            At the <strong>Rocky Mountain Global Peace & Sports Complex</strong>, we believe in the transformative power of two universal languages: <strong>sport and music</strong>.
          </p>
          <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto">
            We don't just believe in change—we build it. <strong>We've got greatness to build</strong>—and with your help, we believe we can assure a better world for all.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-blue-50 p-8 rounded-lg" data-testid="sport-quote">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1760544308418-51b87ffb8417" 
                  alt="Children playing sports"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "Sport has the power to change the world. It has the power to inspire. It has the power to unite people in a way that little else does. It speaks to youth in a language they understand. Sport can create hope where once there was only despair."
              </blockquote>
              <p className="text-right font-semibold">— Nelson Mandela</p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg" data-testid="music-quote">
              <div className="mb-4">
                <img 
                  src="https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg" 
                  alt="Teamwork"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "Music has healing power. It has the ability to take people out of themselves for a few hours."
              </blockquote>
              <p className="text-right font-semibold">— Elton John</p>
            </div>
          </div>
        </div>
      </section>

      {/* World-Class Facilities Section */}
      <section className="py-20 bg-gray-50" data-testid="facilities-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">World-Class Facilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md" data-testid="facility-ice-sheets">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1644553054315-9fb69509f932" 
                  alt="Ice Hockey Rink"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">NHL-Sized Ice Sheets</h3>
              <p className="text-gray-700">Two full sheets and one half-sheet for hockey and skating</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-testid="facility-basketball">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1577416412292-747c6607f055" 
                  alt="Basketball Court"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">Basketball Courts</h3>
              <p className="text-gray-700">Two professional-grade basketball courts</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-testid="facility-school">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Charter School</h3>
              <p className="text-gray-700">Educational programs integrated with athletics</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-testid="facility-dorms">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Dormitories</h3>
              <p className="text-gray-700">Two comfortable dormitories for visiting teams</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-testid="facility-training">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Training Center</h3>
              <p className="text-gray-700">State-of-the-art wellness and training facilities</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-testid="facility-multi-sport">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Multi-Sport Field</h3>
              <p className="text-gray-700">Baseball, soccer, lacrosse, rugby, and football</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-testid="facility-equestrian">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Equestrian Center</h3>
              <p className="text-gray-700">Nearby horseback riding facilities</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-testid="facility-trails">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Scenic Trails</h3>
              <p className="text-gray-700">Open spaces connected by beautiful trail systems</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/programs" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              data-testid="view-programs-button"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="py-20 bg-white" data-testid="join-community-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Join Our Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md text-center" data-testid="donate-card">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Donate</h3>
              <p className="text-gray-700 mb-6">
                Help us build a brighter future for children through your generous support.
              </p>
              <Link 
                to="/get-involved#donate" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                data-testid="give-now-button"
              >
                Give Now
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-md text-center" data-testid="volunteer-card">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Volunteer</h3>
              <p className="text-gray-700 mb-6">
                Share your time and skills to make a direct impact on children's lives.
              </p>
              <Link 
                to="/get-involved#volunteer" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
                data-testid="get-involved-button"
              >
                Get Involved
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-md text-center" data-testid="partner-card">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Partner</h3>
              <p className="text-gray-700 mb-6">
                Join us as a corporate or community partner to amplify our impact.
              </p>
              <Link 
                to="/get-involved#partner" 
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
                data-testid="become-partner-button"
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