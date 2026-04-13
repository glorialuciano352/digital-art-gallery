import React from 'react';

const Reflection = ({ setShowReflection }) => {
  return (
    <main style={{ backgroundColor: '#000', color: 'white', minHeight: '100vh', textAlign: 'center', padding: '60px 20px' }}>
      
      <style>{`
        .reflection-container { max-width: 800px; margin: 0 auto; border: 2px solid #39FF14; padding: 50px; border-radius: 15px; background: #111; box-shadow: 0 0 20px #39FF14; }
        .glow-title { color: #39FF14; font-size: 3rem; text-shadow: 0 0 15px #39FF14; margin-bottom: 30px; }
        .statement-text { font-size: 1.2rem; line-height: 1.8; color: #eee; text-align: left; }
        .statement-text p { margin-bottom: 20px; }
        .back-btn { color: #39FF14; background: none; border: 2px solid #39FF14; padding: 12px 30px; border-radius: 50px; cursor: pointer; font-weight: bold; margin-bottom: 40px; text-shadow: 0 0 10px #39FF14; box-shadow: 0 0 10px #39FF14; transition: 0.3s; font-family: inherit; }
        .back-btn:hover { box-shadow: 0 0 20px #39FF14; background: rgba(57, 255, 20, 0.1); }
      `}</style>

      <button className="back-btn" onClick={() => setShowReflection(false)}>
        ← Return to Gallery
      </button>

      <article className="reflection-container">
        <h1 className="glow-title">Reflections of GLO</h1>
        
        <div className="statement-text">
          <p>
            Throughout this Advanced Web Design course, I developed both my technical and creative skills in a way that pushed me beyond my comfort zone. At the beginning, I focused mainly on creating visual pieces, but over time I learned how to present my work through a fully functional website. Building my own site helped me understand layout, responsiveness, and how design choices affect user experience.
          </p>

          <p>
            One of the biggest challenges I faced was organizing my ideas and making sure my website worked smoothly across different devices. I had to troubleshoot issues with code, layout, and accessibility, which helped me become more confident in problem-solving and debugging.
          </p>

          <p>
            I also explored the use of AI tools, such as Midjourney, and learned how to integrate them into my creative process. This allowed me to experiment with new forms of digital expression while still maintaining control over the final design.
          </p>

          <p>
            Overall, this course helped me grow as both a web designer and an artist. I learned how to combine creativity with technical structure, and how to present my work in a professional and meaningful way. Moving forward, I want to continue improving my web design skills and create projects that are visually engaging, accessible, and impactful.
          </p>
        </div>
      </article>
    </main>
  );
};

export default Reflection;