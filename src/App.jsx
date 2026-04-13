import React, { useState } from 'react';
import artData from './data.json';
import About from './About';
import Reflection from './Reflection';
import aiBackground from './art5.PNG';

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showReflection, setShowReflection] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [filter, setFilter] = useState('all');
  
  // --- NEW AI STATE ---
  const [aiMessage, setAiMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // --- AI SUGGESTION FUNCTION ---
  const generateAISuggestion = async () => {
    if (!activeItem) return;
    setIsGenerating(true);
    try {
    const response = await fetch("https://huggingface.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
          inputs: `I am interested in the art piece "${activeItem.title}" because`
        }),
      });
      
      const data = await response.json();
      
      let text = data[0]?.generated_text || data?.generated_text;
      
      if (text) {
        setAiMessage(text.trim());
      } else {
        setAiMessage(`I'm very interested in "${activeItem.title}"! Can you provide more details?`);
      }
    } catch (error) {
      console.error("AI Error:", error);
      setAiMessage(`I'd love to learn more about the pricing and availability of "${activeItem.title}".`);
    }
    setIsGenerating(false);
  };

  const appStyle = {
    backgroundImage: `url(${aiBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    color: 'white'
  };

  const formInputStyle = {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #333',
    backgroundColor: '#222',
    color: '#fff',
    fontSize: '1rem',
    width: '100%',
    boxSizing: 'border-box'
  };

  if (showAbout) {
    return <About setShowAbout={setShowAbout} />;
  }
 
  if (showReflection) {
    return <Reflection setShowReflection={setShowReflection} />;
  }

  const filtered = artData.filter(
    item => filter === 'all' || item.type === filter
  );

  const galleryStyles = `
    * { box-sizing: border-box; }
    html { font-size: 16px; }
    .filter-container {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: nowrap;
      overflow-x: auto;
      padding: 20px 10px;
      margin-bottom: 40px;
    }
    .gallery-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px 100px;
    }
  `;

  return (
    <main style={appStyle}>
      <style>{galleryStyles}</style>

      {/* --- CALL BUTTON --- */}
      <a
  href="tel:+12345678900"
  style={{
    position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
    backgroundColor: '#111', border: '2px solid #39FF14', borderRadius: '50px',
    padding: '0 25px', height: '60px', display: 'flex', justifyContent: 'center',
    alignItems: 'center', gap: '10px', color: '#39FF14', boxShadow: '0px 0px 15px #39FF14',
    textDecoration: 'none'
  }}
>
  <span style={{ fontSize: '1.5rem' }} aria-hidden="true">📞</span>
  <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
    <span style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>
      Call <span style={{ 
        color: '#39FF14', 
        fontWeight: 'bold',
        textShadow: '0 0 8px #39FF14, 0 0 15px #39FF14' 
      }}>GLO</span>
    </span>
    <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>+1 (234) 567-8900</span>
  </div>
      </a>
{/* HEADER */}
<header style={{ textAlign: 'center', padding: '120px 20px 40px' }}>
  <h1 style={{ 
    fontWeight: 'bold', 
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
    margin: '0 auto',
    color: 'white' 
  }}>
    GLO | Digital Portfolio
  </h1>

  {/* Button Container */}
  <div style={{ 
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center', 
    gap: '20px', 
    flexWrap: 'wrap', 
    marginTop: '30px' 
  }}>
    <button 
      onClick={() => setShowAbout(true)} 
      style={{ 
        padding: '12px 35px', 
        borderRadius: '60px', 
        background: 'transparent', 
        border: '2px solid #39FF14', 
        color: '#39FF14', 
        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', 
        cursor: 'pointer',
        boxShadow: '0 0 10px rgba(57, 255, 20, 0.3)',
        transition: '0.3s'
      }}
    >
      About the Artist
    </button>

    <button 
      onClick={() => setShowReflection(true)} 
      style={{ 
        padding: '12px 35px', 
        borderRadius: '60px', 
        background: 'transparent', 
        border: '2px solid #39FF14', 
        color: '#39FF14', 
        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', 
        cursor: 'pointer',
        boxShadow: '0 0 10px rgba(57, 255, 20, 0.3)',
        transition: '0.3s'
      }}
    >
      Reflection
    </button>
  </div>
</header>


      {/* FILTERS */}
     <div className="filter-container">         {['all', 'image', 'video'].map(f => (           <button             key={f}             onClick={() => setFilter(f)}             style={{               padding: '10px 25px',               borderRadius: '40px',               border: '2px solid #39FF14',               background: filter === f ? '#39FF14' : 'transparent',               color: filter === f ? '#000' : '#39FF14',               fontSize: '1rem',               cursor: 'pointer'             }}           >             {f === 'all' ? 'All' : `${f}s`}           </button>         ))}       </div> 

      {/* --- GALLERY GRID --- */}
      <div className="gallery-container">
        <div className="row g-4 justify-content-center" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {filtered.map(item => (
            <div key={item.id} style={{ background: '#111', border: '1px solid #39FF14', borderRadius: '15px', overflow: 'hidden', width: '300px', display: 'flex', flexDirection: 'column' }}>
              {item.url.endsWith('.mp4') ? (
                <video autoPlay muted loop playsInline aria-label={`Art Video: ${item.title}`} style={{ width: '100%', height: '250px', objectFit: 'contain' }}><source src={item.url} type="video/mp4" /></video>
              ) : (
                <img src={item.url} alt={`Art Image: ${item.title}`} style={{ width: '100%', height: '250px', objectFit: 'contain' }} />
              )}
             <div style={{ 
  padding: '25px', 
  textAlign: 'center', 
  flexGrow: 1, 
  display: 'flex',          
  flexDirection: 'column',   
  justifyContent: 'space-between' 
}}>
                <h2 style={{ color: '#39FF14', fontSize: '1.8rem' }}>{item.title}</h2>
                <p>Artist: <span style={{ color: '#39FF14', fontWeight: 'bold' }}>{item.artist}</span></p>
                <button onClick={() => { setActiveItem(item); setAiMessage(''); }} style={{ marginTop: 'auto', padding: '12px', background: 'transparent', color: '#39FF14', border: '1px solid #39FF14', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '5px', width: '100%' }}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL --- */}
      {activeItem && (
        <div onClick={() => setActiveItem(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10000 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#111', padding: 'clamp(20px, 5vw, 60px)', borderRadius: '15px', maxWidth: '900px', width: '95%', maxHeight: '90vh', overflowY: 'auto', textAlign: 'center', border: '2px solid #39FF14' }}>
            {activeItem.type === 'video' ? (
              <video key={activeItem.url} autoPlay muted loop playsInline style={{ maxWidth: '100%', maxHeight: '40vh', borderRadius: '8px' }}><source src={activeItem.url} type="video/mp4" /></video>
            ) : (
              <img src={activeItem.url} alt={activeItem.title} style={{ maxWidth: '100%', maxHeight: '40vh', borderRadius: '8px' }} />
            )}

            <h2 style={{ color: '#39FF14', fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginTop: '20px', textShadow: '0 0 10px #39FF14' }}>{activeItem.title}</h2>
            <p style={{ color: '#fff', fontSize: '1.2rem', fontStyle: 'italic', margin: '20px 0' }}>{activeItem.description}</p>
            
            {/* --- UPDATED FORM WITH AI ASSISTANT --- */}
            <div style={{ border: '1px solid #39FF14', borderRadius: '10px', padding: '20px', textAlign: 'left' }}>
              <h3 style={{ color: '#39FF14', fontSize: '1.5rem', textAlign: 'center', marginBottom: '15px' }}>Inquire with GLO</h3>
              
              <button 
                type="button" 
                onClick={generateAISuggestion}
                style={{ width: '100%', marginBottom: '10px', background: 'none', border: '1px solid #39FF14', color: '#39FF14', padding: '8px', cursor: 'pointer', borderRadius: '5px' }}
              >
                {isGenerating ? "🤖 Generating..." : "✨ Auto-Suggest Message"}
              </button>

              <form action="https://formspree.io/f/xqegjqaj" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input name="name" placeholder="Your Name" required style={formInputStyle} />
                <input type="email" name="email" placeholder="Your Email" required style={formInputStyle} />
                <textarea 
                  name="message" 
                  required 
                  value={aiMessage} 
                  onChange={(e) => setAiMessage(e.target.value)}
                  placeholder={`Interested in ${activeItem.title}...`} 
                  style={{ ...formInputStyle, height: '100px' }} 
                />
                <button type="submit" style={{ backgroundColor: '#39FF14', color: 'black', border: 'none', padding: '15px', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer', borderRadius: '5px' }}>Send Message</button>
              </form>
            </div>

            <button onClick={() => setActiveItem(null)} style={{ background: 'transparent', color: '#39FF14', border: '1px solid #39FF14', marginTop: '30px', padding: '10px 30px', borderRadius: '50px', cursor: 'pointer', fontSize: '1.1rem' }}>Close Gallery</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
