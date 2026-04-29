import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScroll";
import RoomDesigner3D from "../components/RoomDesigner3D";
import Footer from "../components/Footer";


 const SERVICES = [
  {
    icon: "https://img.icons8.com/ios-filled/100/home.png",
    title: "Residential Design",
    price: "From ₹2.5L",
    desc: "Complete interior solutions for apartments, villas, and luxury bungalows.",
    features: ["Custom furniture", "Material sourcing", "Lighting design", "Art curation"]
  },
  {
    icon: "https://img.icons8.com/ios-filled/100/building.png",
    title: "Commercial Spaces",
    price: "From ₹5L",
    desc: "Corporate offices, hotels, restaurants, and retail spaces.",
    features: ["Brand design", "Space planning", "Ergonomics", "Execution"]
  },
  {
    icon: "https://img.icons8.com/ios-filled/100/key.png",
    title: "Turnkey Projects",
    price: "From ₹8L",
    desc: "End-to-end interior transformation.",
    features: ["Civil work", "Vendor mgmt", "Quality control", "Handover"]
  },
  {
    icon: "https://img.icons8.com/ios-filled/100/diamond.png",
    title: "Consultation",
    price: "₹15,000",
    desc: "Expert advice for your space.",
    features: ["Layout", "Colors", "Furniture", "Shopping list"]
  }
];

export default function ServicesPage() {
  useScrollReveal();
  const navigate = useNavigate();

  return (
    <div style={{ background: "linear-gradient(180deg,#140800,#1a0a00)" }}>

      {/* HERO */}
      <section className="hero" style={{ minHeight: "65vh" }}>
        <div className="hero-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(135deg, rgba(153,88,42,0.8), rgba(26,10,0,0.95))" }} />
        <div className="hero-content" style={{ marginTop: "2rem" }}>
          <div className="hero-tag">◆ What We Offer ◆</div>
          <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Exceptional Services<br />
            <span className="text-gold-grad">For Every Space</span>
          </h1>
          <p className="hero-sub">Comprehensive interior solutions from concept to completion</p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "2rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "1.5rem"
        }}>
          {SERVICES.map((s, i) => (
            
             <div
  key={i}
  className="service-hover-card"
  onClick={() => navigate("/contact")}
  style={{
                padding: "1.5rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(212,175,55,0.2)",
                borderRadius: "16px",
                cursor: "pointer",
                transition: "0.3s"
              }}
            >
              <img
  src={s.icon}
  alt={s.title}
  style={{
    width: "42px",
    height: "42px",
    marginBottom: "10px",
    filter: "brightness(0) saturate(100%) invert(80%) sepia(30%)"
  }}
/>
              <h3 style={{ color: "#f5e6c8" }}>{s.title}</h3>
              <span style={{ color: "#d4af37" }}>{s.price}</span>
              <p style={{ color: "#cbb58a" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ROOM PLANNER SECTION ── */}
      <section style={{
        padding: "5rem 2rem 4rem",
        background: "linear-gradient(135deg,#1a0a00,#2b1405)",
      }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(212,175,55,0.1)",
            border: "1px solid rgba(212,175,55,0.25)",
            color: "#D4AF37",
            fontSize: 11,
            letterSpacing: "0.12em",
            padding: "5px 16px",
            borderRadius: 20,
            marginBottom: 16,
            textTransform: "uppercase",
          }}>
            ◆ Interactive Tool ◆
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "#F5E6C8",
            margin: "0 0 12px",
            lineHeight: 1.2,
          }}>
            Design Your Dream Room
          </h2>

          <p style={{
            color: "#9B8C7C",
            fontSize: 15,
            maxWidth: 500,
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Try our 2D floor plan planner — drag, place and visualize your space
            before you commit. Snap furniture to grid, rotate pieces, layer rugs
            and decor exactly how you want.
          </p>
        </div>

        {/* Planner */}
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <RoomDesigner3D />
        </div>

        {/* CTA below planner */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <p style={{ color: "#7A6A5A", fontSize: 13, marginBottom: 16 }}>
            Like what you've designed? Our experts will bring it to life.
          </p>
          <button
            onClick={() => navigate("/contact")}
            style={{
              background: "linear-gradient(135deg, #D4AF37, #B8960C)",
              border: "none",
              color: "#1a0a00",
              padding: "12px 32px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              letterSpacing: "0.05em",
              boxShadow: "0 8px 30px rgba(212,175,55,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(212,175,55,0.4)"; }}
            onMouseOut={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 30px rgba(212,175,55,0.3)"; }}
          >
            Book a Free Consultation →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}