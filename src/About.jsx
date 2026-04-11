import React from 'react';

const About = ({ setShowAbout }) => {
  return (
    <main style={{ backgroundColor: '#000', color: 'white', minHeight: '100vh', textAlign: 'center', padding: '60px 20px' }}>
      
      <style>{`
        .about-box { max-width: 800px; margin: 0 auto; border: 2px solid #39FF14; padding: 50px; border-radius: 15px; background: #111; box-shadow: 0 0 20px #39FF14; }
        .glow-title { color: #39FF14; font-size: 3rem; text-shadow: 0 0 15px #39FF14; margin-bottom: 30px; }
        .glow-name { color: #39FF14; font-weight: bold; text-shadow: 0 0 8px #39FF14; }
        .statement-text { font-size: 1.3rem; line-height: 1.8; color: #eee; text-align: left; }
        .back-btn { color: #39FF14; background: none; border: 2px solid #39FF14; padding: 12px 30px; border-radius: 50px; cursor: pointer; font-weight: bold; margin-bottom: 40px; text-shadow: 0 0 10px #39FF14; box-shadow: 0 0 10px #39FF14; transition: 0.3s; }
        .back-btn:hover { box-shadow: 0 0 20px #39FF14; background: rgba(57, 255, 20, 0.1); }
      `}</style>

      <button className="back-btn" onClick={() => setShowAbout(false)}>
        ← Back to Gallery
      </button>

      <article className="about-box" role="main">
        <h1 className="glow-title">Artist Statement</h1>
        
        <div className="statement-text">
          <p>
            This is original work by me, <span className="glow-name">GLO</span>. 
            What you see here is a curated presentation—each piece shown in a restrained format to preserve the depth and detail of the full work. 
            These early pieces, created during my Digital Painting studies, mark the beginning of my artistic direction.
          </p>

          <h2 style={{ color: '#39FF14', marginTop: '40px' }}>Evolution of Style</h2>
          <p>
            This work is meant to challenge the viewer to think, sometimes using humor to explore the problems and obstacles that shape human experience.
          </p>

          <h2 style={{ color: '#39FF14', marginTop: '40px' }}>The Process</h2>
          <p>
            My process starts with a simple idea grounded in the human experience, which I develop through digital experimentation and layered visual decisions. 
            Incorporating AI in some of my art has allowed me to push ideas beyond their original form, blending technical structure with moments of unpredictability to challenge perception.
          </p>
        </div>
      </article>
    </main>
  );
};

export default About;