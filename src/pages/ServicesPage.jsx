import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScroll";
import RoomDesigner3D from "../components/RoomDesigner3D";
import Footer from "../components/Footer";

const SERVICES = [
  { icon: "🏠", title: "Residential Design", price: "From ₹2.5L", desc: "Complete interior solutions for apartments, villas, and luxury bungalows. From concept to completion, we handle every detail.", features: ["Custom furniture design", "Material sourcing", "Lighting design", "Art curation"] },
  { icon: "🏢", title: "Commercial Spaces", price: "From ₹5L", desc: "Corporate offices, hotels, restaurants, and retail spaces designed to impress clients and inspire your team.", features: ["Brand-aligned design", "Space planning", "Ergonomic solutions", "Project management"] },
  { icon: "🔑", title: "Turnkey Projects", price: "From ₹8L", desc: "End-to-end interior transformation with zero hassle. We manage everything from concept to key handover.", features: ["Civil work coordination", "Vendor management", "Quality control", "Handover & support"] },
  { icon: "💎", title: "Design Consultation", price: "₹15,000/session", desc: "Expert advice for specific challenges — whether it's a single room refresh or a styling intervention.", features: ["Space analysis", "Color & material advice", "Furniture layout", "Shopping list"] },
  { icon: "🖥️", title: "3D Visualization", price: "From ₹35,000", desc: "Photorealistic renders of your space before construction begins, so you can see and approve every detail.", features: ["Photorealistic renders", "360° walkthroughs", "Material testing", "Revision rounds"] },
  { icon: "🌿", title: "Biophilic Design", price: "From ₹1.2L", desc: "Nature-inspired spaces that enhance wellbeing through plants, natural materials, and organic forms.", features: ["Living walls", "Natural material sourcing", "Wellness-first layouts", "Maintenance plans"] },
];

function ServicesPage() {
  useScrollReveal();
  const navigate = useNavigate();

  return (
    <div className="page-enter" style={{ background: "linear-gradient(180deg, var(--dark), #1a0800)" }}>
      <section className="hero" style={{ minHeight: "65vh" }}>
        <div className="hero-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(135deg, rgba(153,88,42,0.8), rgba(26,10,0,0.95))" }} />
        <div className="hero-content">
          <div className="hero-tag">◆ What We Offer ◆</div>
          <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Exceptional Services<br /><span className="text-gold-grad">For Every Space</span></h1>
          <p className="hero-sub">Comprehensive interior solutions from concept to completion</p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {SERVICES.map((s, i) => (
              <div key={s.title} className="service-card reveal" style={{ animationDelay: `${i * 0.1}s`, cursor: "pointer" }} onClick={() => navigate("/contact")}>
                <div className="service-icon">{s.icon}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "var(--cream)" }}>{s.title}</h3>
                  <span style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.6rem", color: "var(--gold)", letterSpacing: "0.1em" }}>{s.price}</span>
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,230,167,0.6)", lineHeight: 1.7, marginBottom: "1.2rem" }}>{s.desc}</p>
                <ul style={{ listStyle: "none" }}>
                  {s.features.map(f => (
                    <li key={f} style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,230,167,0.7)", padding: "0.2rem 0", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "var(--gold)" }}>◆</span> {f}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "1.5rem" }}>
                  <span style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.55rem", color: "var(--gold)", letterSpacing: "0.2em" }}>ENQUIRE NOW →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Demo */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--espresso), var(--crimson))" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag">◆ Try Before You Buy ◆</div>
            <h2 className="section-title">Experience It in 3D First</h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(255,230,167,0.6)", fontSize: "1.2rem", marginTop: "1rem" }}>
              Design your room virtually — see how furniture and styles transform your space
            </p>
          </div>
          <RoomDesigner3D />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ServicesPage;