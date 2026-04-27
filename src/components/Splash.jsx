import { useState, useEffect } from "react";

function Splash({ onDone }) {
  const [exiting, setExiting] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => { setExiting(true); setTimeout(onDone, 900); }, 3200);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className={`splash ${exiting ? "exit" : ""}`}>
      <div style={{ position: "relative", textAlign: "center" }}>
        <div style={{ fontSize: "3rem", marginBottom: "0.5rem", opacity: 0, animation: "fadeIn 0.8s 0.2s forwards" }}>◆</div>
        <div className="splash-logo">MoodyCraft</div>
        <div className="splash-line" />
        <div className="splash-sub">Luxury Interior Design</div>
        <div style={{ marginTop: "2rem", opacity: 0, animation: "fadeIn 1s 1.5s forwards" }}>
          <div style={{ width: "200px", height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "0 auto" }} />
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(187,148,87,0.6)", fontSize: "0.9rem", marginTop: "1rem", letterSpacing: "0.2em" }}>
            Crafting Spaces That Tell Your Story
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;