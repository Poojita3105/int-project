import { useScrollReveal } from "../hooks/useScroll";
import Footer from "../components/Footer";

const TESTIMONIALS = [
  { name: "Arjun & Priya Kapoor", loc: "Mumbai Penthouse", stars: 5, text: "MoodyCraft transformed our penthouse beyond our wildest dreams. Every corner exudes luxury while remaining perfectly livable. Priya understood our vision instantly and delivered something even better." },
  { name: "Vikram Mehta", loc: "Bangalore Executive Villa", stars: 5, text: "Our home office and common areas were redone, and the transformation is staggering. The 3D walkthroughs before construction gave us complete confidence. Worth every rupee." },
  { name: "Ananya Iyer", loc: "Chennai Heritage Bungalow", stars: 5, text: "They honored the colonial character of our 1940s bungalow while adding contemporary luxury. A masterclass in balancing heritage with modernity." },
  { name: "Rajesh Nair", loc: "Hyderabad Corporate HQ", stars: 5, text: "Our new headquarters has become a talking point for every client who visits. MoodyCraft understood that a workspace should inspire — and they delivered exactly that." },
  { name: "Suhana & Dev Malhotra", loc: "Delhi Farmhouse", stars: 5, text: "From concept to completion, MoodyCraft was professional, transparent, and wildly talented. The result is a home that feels like it was designed by the world's best — because it was." },
  { name: "Meera Krishnamurthy", loc: "Goa Beachfront Villa", stars: 5, text: "My seaside villa needed to be both relaxed and luxurious — a difficult balance. MoodyCraft nailed it. The biophilic elements especially have made it a sanctuary." },
];

function TestimonialsPage() {
  useScrollReveal();

  return (
    <div className="page-enter" style={{ background: "var(--dark)" }}>
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80)" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(135deg, rgba(67,40,24,0.9), rgba(111,29,27,0.6), rgba(26,10,0,0.95))" }} />
        <div className="hero-content">
          <div className="hero-tag">◆ Client Stories ◆</div>
          <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Words From<br /><span className="text-gold-grad">Those We've Served</span></h1>
          <p className="hero-sub">Every review is a testament to our commitment to excellence</p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="testimonial-card reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="stars" style={{ marginBottom: "1rem" }}>{"★".repeat(t.stars)}</div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "rgba(255,230,167,0.85)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
                  {t.text}
                </p>
                <div>
                  <div style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--gold)" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(255,230,167,0.4)", fontSize: "0.9rem", marginTop: "0.2rem" }}>{t.loc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Rating Summary */}
          <div className="reveal" style={{ textAlign: "center", marginTop: "5rem", padding: "3rem", background: "linear-gradient(135deg, rgba(187,148,87,0.1), rgba(111,29,27,0.2))", border: "1px solid rgba(187,148,87,0.2)" }}>
            <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "4rem", color: "var(--gold)", marginBottom: "0.5rem" }}>5.0</div>
            <div className="stars" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>★★★★★</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(255,230,167,0.6)", fontSize: "1.1rem" }}>
              Average rating from 200+ satisfied clients across India
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginTop: "2rem", flexWrap: "wrap" }}>
              {[["350+", "Projects"], ["200+", "Reviews"], ["12+", "Years"], ["50+", "Awards"]].map(([n, l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1.5rem", color: "var(--cream)" }}>{n}</div>
                  <div style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.5rem", letterSpacing: "0.2em", color: "rgba(187,148,87,0.5)", textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TestimonialsPage;