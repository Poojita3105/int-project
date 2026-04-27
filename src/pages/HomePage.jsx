import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScroll";
import RoomDesigner3D from "../components/RoomDesigner3D";
import Footer from "../components/Footer";

const INTERIORS = [
  { id: 1, name: "The Maharaja Suite", tag: "Residential", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
  { id: 2, name: "Azure Living Room", tag: "Living Room", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" },
  { id: 3, name: "Noir Executive Office", tag: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
];

function HomePage() {
  useScrollReveal();
  const navigate = useNavigate();

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="hero" style={{ background: "linear-gradient(135deg, #0d0500 0%, #2d1205 50%, #0d0500 100%)" }}>
        <div className="hero-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80)" }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-tag">◆ Luxury Interior Design ◆</div>
          <h1 className="hero-title">Where Spaces<br /><span className="text-gold-grad">Tell Stories</span></h1>
          <p className="hero-sub">Bespoke interiors crafted for those who demand the extraordinary</p>
          <div className="hero-cta-group">
            <button className="btn-primary" onClick={() => navigate("/portfolio")}>View Our Work</button>
            <button className="btn-outline" onClick={() => navigate("/contact")}>Book Consultation</button>
          </div>
        </div>
        <div className="scroll-indicator">
          <span style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.5rem", letterSpacing: "0.3em", color: "rgba(187,148,87,0.5)" }}>SCROLL</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "linear-gradient(90deg, var(--crimson), var(--espresso))", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {[["350+", "Projects Completed"], ["12+", "Years Experience"], ["50+", "Design Awards"], ["100%", "Client Satisfaction"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "2rem", color: "var(--cream)", marginBottom: "0.4rem" }}>{n}</div>
              <div style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(255,230,167,0.6)", textTransform: "uppercase" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section" style={{ background: "linear-gradient(180deg, var(--dark) 0%, #200d00 100%)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-tag">◆ Featured Projects ◆</div>
            <h2 className="section-title">Iconic Spaces We've<br />Brought to Life</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {INTERIORS.map((item, i) => (
              <div key={item.id} className="portfolio-item reveal" style={{ animationDelay: `${i * 0.15}s` }} onClick={() => navigate("/portfolio")}>
                <img src={item.img} alt={item.name} />
                <div className="portfolio-overlay">
                  <div className="portfolio-tag">{item.tag}</div>
                  <div className="portfolio-title">{item.name}</div>
                  <div style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--gold)", marginTop: "0.5rem" }}>VIEW PROJECT →</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <button className="btn-outline" onClick={() => navigate("/portfolio")}>View All Projects</button>
          </div>
        </div>
      </section>

      {/* 3D Demo */}
      <section className="section" style={{ background: "linear-gradient(135deg, #1a0500, #2d1205)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag">◆ Interactive Experience ◆</div>
            <h2 className="section-title">Design Your Dream Room</h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(255,230,167,0.6)", fontSize: "1.2rem", marginTop: "1rem" }}>
              Try our 3D room designer — drag, place and visualize before you commit
            </p>
          </div>
          <RoomDesigner3D />
        </div>
      </section>

      {/* Services Preview */}
      <section className="section" style={{ background: "var(--dark)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag">◆ What We Offer ◆</div>
            <h2 className="section-title">Our Expertise</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "🏠", title: "Residential", desc: "Luxury homes tailored to your lifestyle" },
              { icon: "🏢", title: "Commercial", desc: "Professional spaces that inspire productivity" },
              { icon: "🔑", title: "Turnkey", desc: "Complete end-to-end interior solutions" },
              { icon: "💎", title: "Consultation", desc: "Expert guidance for your design journey" },
            ].map((s, i) => (
              <div key={s.title} className="service-card reveal" style={{ animationDelay: `${i * 0.1}s` }} onClick={() => navigate("/services")}>
                <div className="service-icon">{s.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "var(--cream)", marginBottom: "0.8rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,230,167,0.6)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Teaser */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--espresso), var(--crimson))", textAlign: "center" }}>
        <div className="reveal" style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ fontSize: "2.5rem", color: "var(--gold)", marginBottom: "1rem" }}>❝</div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(1.2rem, 3vw, 1.8rem)", color: "var(--cream)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            MoodyCraft transformed our penthouse into a living masterpiece. Every corner breathes luxury.
          </p>
          <div style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.6rem", letterSpacing: "0.3em", color: "var(--gold)" }}>— ARJUN KAPOOR, MUMBAI</div>
          <div className="stars" style={{ marginTop: "1rem" }}>★★★★★</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;