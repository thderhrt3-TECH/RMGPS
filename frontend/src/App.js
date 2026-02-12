import React from 'react';

// Main Application Component
function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      {/* NAVIGATION */}
      <nav style={{ padding: '20px', backgroundColor: '#003366', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>RMGPS</h2>
        <div>
          <a href="#about" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>About</a>
          <a href="#programs" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Programs</a>
          <a href="#impact" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Economic Impact</a>
          <a href="#testimonials" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Testimonials</a>
          <button style={{ backgroundColor: '#cc0000', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>DONATE NOW</button>
        </div>
      </nav>

      {/* HERO SECTION WITH VIDEO */}
      <header style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#f4f4f4' }}>
        <h1>Rocky Mountain Global Peace & Sports Complex</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '20px auto' }}>
          Empowering children through sports, education, and global connection. A legacy project for the Heber Valley.
        </p>
        
        {/* VIDEO PLAYER */}
        <div style={{ maxWidth: '800px', margin: '40px auto', backgroundColor: '#000', borderRadius: '10px', overflow: 'hidden', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <video controls style={{ width: '100%', height: '100%' }}>
            <source src="/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2>Our Mission</h2>
        <p>The RMGPS is a world-class destination designed to serve underprivileged youth, veterans, and the global sports community. Located in <strong>Heber Valley and Wasatch County</strong>, we are building a stage for the 2034 Olympic legacy and beyond.</p>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px 20px', backgroundColor: '#003366', color: 'white', textAlign: 'center' }}>
        <h3>Rocky Mountain Global Peace & Sports Complex</h3>
        <p>Heber Valley & Wasatch County, Utah</p>
        <p>
          <a href="mailto:info@rockymountaingps.org" style={{ color: '#fff' }}>info@rockymountaingps.org</a> | 435.709.6445
        </p>
        <p style={{ fontStyle: 'italic' }}>“A Better Way to Build – A Better Way to Grow”</p>
        <hr style={{ borderColor: '#444', margin: '20px 0' }} />
        <p style={{ fontSize: '0.8rem' }}>
          © 2026 RMGPS. All rights reserved. | <a href="mailto:info@rockymountaingps.org?subject=Media Inquiry" style={{ color: '#aaa' }}>Media Inquiries</a>
        </p>
        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>
          Rocky Mountain GPS is a registered nonprofit under thunderHeart Inc., a 501(c)(3).
        </p>
      </footer>
    </div>
  );
}

export default App;
