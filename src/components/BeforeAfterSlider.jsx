import { useState, useRef } from "react";

function BeforeAfterSlider({ before, after }) {
  const [pos, setPos] = useState(50);
  const isDragging = useRef(false);
  const ref = useRef(null);

  const getPos = (clientX) => {
    const rect = ref.current.getBoundingClientRect();
    return Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
  };

  return (
    <div
      className="ba-container"
      ref={ref}
      style={{ userSelect: "none" }}
      onMouseDown={e => { isDragging.current = true; setPos(getPos(e.clientX)); }}
      onMouseMove={e => { if (isDragging.current) setPos(getPos(e.clientX)); }}
      onMouseUp={() => isDragging.current = false}
      onMouseLeave={() => isDragging.current = false}
      onTouchMove={e => setPos(getPos(e.touches[0].clientX))}
    >
      <img src={after} alt="After" style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover" }} />
      <div className="ba-after" style={{ width: `${pos}%` }}>
        <img src={before} alt="Before" style={{ width: ref.current?.clientWidth || "100%", display: "block", aspectRatio: "4/3", objectFit: "cover" }} />
      </div>
      <div className="ba-divider" style={{ left: `${pos}%` }}>
        <div className="ba-handle">◀▶</div>
      </div>
      <div style={{ position: "absolute", top: "1rem", left: "1rem", fontFamily: "'Krona One', sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--cream)", background: "rgba(26,10,0,0.7)", padding: "0.3rem 0.8rem" }}>BEFORE</div>
      <div style={{ position: "absolute", top: "1rem", right: "1rem", fontFamily: "'Krona One', sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--gold)", background: "rgba(26,10,0,0.7)", padding: "0.3rem 0.8rem" }}>AFTER</div>
    </div>
  );
}

export default BeforeAfterSlider;