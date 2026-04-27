import { useState } from "react";
import { useScrollReveal } from "../hooks/useScroll";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Footer from "../components/Footer";

const PORTFOLIO_ITEMS = [
  { id: 1, cat: "living-room", title: "The Royal Lounge", loc: "Mumbai Penthouse", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" },
  { id: 2, cat: "bedroom", title: "Azure Slumber Suite", loc: "Delhi Villa", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80", before: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80" },
  { id: 3, cat: "kitchen", title: "Noir Kitchen", loc: "Bangalore Residence", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", before: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80" },
  { id: 4, cat: "office", title: "Executive Command", loc: "Hyderabad HQ", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", before: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80" },
  { id: 5, cat: "living-room", title: "Heritage Drawing Room", loc: "Jaipur Haveli", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { id: 6, cat: "bedroom", title: "Blush Boudoir", loc: "Pune Residence", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80", before: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80" },
  { id: 7, cat: "kitchen", title: "Marble & Brass Kitchen", loc: "Goa Villa", img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80", before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" },
  { id: 8, cat: "office", title: "Creative Atelier", loc: "Chennai Studio", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80", before: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
];

const FILTERS = ["all", "living-room", "bedroom", "kitchen", "office"];

function PortfolioPage() {
  useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered = activeFilter === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(p => p.cat === activeFilter);

  return (
    <div className="page-enter" style={{ background: "var(--dark)" }}>
      <section className="hero" style={{ minHeight: "65vh" }}>
        <div className="hero-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80)" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(135deg, rgba(26,10,0,0.9), rgba(153,88,42,0.4), rgba(26,10,0,0.95))" }} />
        <div className="hero-content">
          <div className="hero-tag">◆ Our Work ◆</div>
          <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>A Portfolio of<br /><span className="text-gold-grad">Extraordinary Spaces</span></h1>
          <p className="hero-sub">Every project is a story of transformation and refined taste</p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Filters */}
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "3rem" }}>
            {FILTERS.map(f => (
              <button key={f} className={`filter-tab ${activeFilter === f ? "active" : ""}`} onClick={() => setActiveFilter(f)}>
                {f === "all" ? "All Projects" : f.replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="portfolio-grid">
            {filtered.map((item, i) => (
              <div key={item.id} className="portfolio-item reveal" style={{ animationDelay: `${i * 0.08}s` }} onClick={() => setSelectedItem(item)}>
                <img src={item.img} alt={item.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-tag">{item.cat.replace("-", " ")}</div>
                  <div className="portfolio-title">{item.title}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(255,230,167,0.6)", fontSize: "0.9rem" }}>{item.loc}</div>
                  <div style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.5rem", letterSpacing: "0.2em", color: "var(--gold)", marginTop: "0.5rem" }}>VIEW BEFORE & AFTER →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", backdropFilter: "blur(10px)" }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            style={{ maxWidth: "900px", width: "100%", background: "linear-gradient(135deg, var(--espresso), var(--dark))", border: "1px solid rgba(187,148,87,0.3)", padding: "2rem" }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <div>
                <div className="section-tag">◆ {selectedItem.cat.replace("-", " ")} ◆</div>
                <h3 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1.5rem", color: "var(--cream)" }}>{selectedItem.title}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(187,148,87,0.7)" }}>{selectedItem.loc}</p>
              </div>
              <button
                style={{ background: "none", border: "1px solid rgba(187,148,87,0.3)", color: "var(--cream)", padding: "0.5rem 1rem", cursor: "pointer", fontFamily: "'Krona One', sans-serif", fontSize: "0.7rem" }}
                onClick={() => setSelectedItem(null)}
              >✕ CLOSE</button>
            </div>
            <BeforeAfterSlider before={selectedItem.before} after={selectedItem.img} />
            <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
              <button className="btn-primary" onClick={() => setSelectedItem(null)}>Request Similar Project</button>
            </div>
          </div>
        </div>
      )}

      {/* Mood Board */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--espresso), #200d00)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag">◆ Inspiration ◆</div>
            <h2 className="section-title">Our Mood Board</h2>
          </div>
          <div className="masonry reveal">
            {[
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
              "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
              "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&q=80",
              "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80",
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
              "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80",
              "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
              "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&q=80",
              "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80",
            ].map((img, i) => (
              <div key={i} className="masonry-item">
                <img src={img} alt={`Mood ${i}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PortfolioPage;