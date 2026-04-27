import { useState } from "react";

const FURNITURE = [
  { id: "sofa", emoji: "🛋️", name: "Royal Sofa", desc: "Chesterfield velvet" },
  { id: "table", emoji: "🪑", name: "Dining Table", desc: "Solid mahogany" },
  { id: "lamp", emoji: "💡", name: "Floor Lamp", desc: "Art deco brass" },
  { id: "plant", emoji: "🪴", name: "Fiddle Leaf", desc: "Natural decor" },
  { id: "art", emoji: "🖼️", name: "Wall Art", desc: "Original canvas" },
  { id: "rug", emoji: "🟫", name: "Persian Rug", desc: "Hand-knotted silk" },
  { id: "cabinet", emoji: "🗄️", name: "Armoire", desc: "French antique" },
  { id: "chandelier", emoji: "🕯️", name: "Chandelier", desc: "Crystal & gold" },
];

const ROOM_BGS = {
  classic: "linear-gradient(160deg, #3d1c0a 0%, #5a2c10 40%, #2d1205 100%)",
  modern: "linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  minimal: "linear-gradient(160deg, #2d2d2d 0%, #3d3d3d 50%, #1a1a1a 100%)",
};

function RoomDesigner3D() {
  const [placed, setPlaced] = useState([]);
  const [selected, setSelected] = useState(null);
  const [roomStyle, setRoomStyle] = useState("classic");

  const addFurniture = (item) => {
    setPlaced(prev => [...prev, {
      ...item,
      posX: 20 + Math.random() * 60,
      posY: 20 + Math.random() * 55,
      uid: Date.now()
    }]);
  };

  return (
    <div className="demo-room reveal">
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
        {["classic", "modern", "minimal"].map(s => (
          <button key={s} className={`filter-tab ${roomStyle === s ? "active" : ""}`} onClick={() => setRoomStyle(s)}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
        <button className="filter-tab" style={{ marginLeft: "auto" }} onClick={() => setPlaced([])}>🗑 Clear Room</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 200px", gap: "1rem" }}>
        {/* Room Canvas */}
        <div className="room-canvas" style={{ background: ROOM_BGS[roomStyle] }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(90deg, rgba(187,148,87,0.03) 0px, rgba(187,148,87,0.03) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, rgba(187,148,87,0.03) 0px, rgba(187,148,87,0.03) 1px, transparent 1px, transparent 60px)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "rgba(0,0,0,0.3)", borderTop: "1px solid rgba(187,148,87,0.15)" }}>
            <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(90deg, rgba(187,148,87,0.04) 0px, rgba(187,148,87,0.04) 1px, transparent 1px, transparent 80px)" }} />
          </div>

          {placed.map(item => (
            <div
              key={item.uid}
              className="furniture-item"
              style={{ left: `${item.posX}%`, top: `${item.posY}%`, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              onClick={() => setSelected(item)}
              title={item.name}
            >
              {item.emoji}
              <div style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)", fontSize: "0.5rem", color: "var(--gold)", fontFamily: "'Krona One', sans-serif", whiteSpace: "nowrap", letterSpacing: "0.1em", opacity: 0.8 }}>{item.name}</div>
            </div>
          ))}

          {placed.length === 0 && (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center", opacity: 0.4 }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🏠</div>
                <div style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.6rem", letterSpacing: "0.3em", color: "var(--cream)" }}>ADD FURNITURE FROM THE PANEL</div>
              </div>
            </div>
          )}
        </div>

        {/* Furniture Panel */}
        <div className="furniture-panel" style={{ maxHeight: "400px" }}>
          <div style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.55rem", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.8rem" }}>Add Furniture</div>
          {FURNITURE.map(item => (
            <button key={item.id} className="furniture-btn" onClick={() => addFurniture(item)}>
              <span style={{ fontSize: "1.4rem" }}>{item.emoji}</span>
              <span>
                <div style={{ fontSize: "0.9rem" }}>{item.name}</div>
                <div style={{ fontSize: "0.7rem", opacity: 0.5 }}>{item.desc}</div>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div style={{ marginTop: "1rem", padding: "1rem", background: "rgba(187,148,87,0.1)", border: "1px solid rgba(187,148,87,0.2)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif" }}>Selected: {selected.emoji} {selected.name}</span>
            <span style={{ color: "rgba(255,230,167,0.5)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", marginLeft: "1rem" }}>{selected.desc}</span>
          </div>
          <div style={{ display: "flex", gap: "0.8rem" }}>
            <button className="btn-primary" style={{ padding: "0.5rem 1.2rem", fontSize: "0.55rem" }} onClick={() => setSelected(null)}>✓ Keep</button>
            <button className="btn-outline" style={{ padding: "0.5rem 1.2rem", fontSize: "0.55rem" }} onClick={() => { setPlaced(p => p.filter(i => i.uid !== selected.uid)); setSelected(null); }}>✕ Remove</button>
          </div>
        </div>
      )}

      <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <button className="btn-primary" onClick={() => alert("Booking consultation for your custom design! Our team will contact you within 24 hours.")}>
          📐 Get This Design — Book Consultation
        </button>
      </div>
    </div>
  );
}

export default RoomDesigner3D;