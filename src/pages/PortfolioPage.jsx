import { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScroll";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Footer from "../components/Footer";



const PORTFOLIO_ITEMS = [
  { id: 1, cat: "living-room", title: "The Royal Lounge", loc: "Mumbai Penthouse", img: "https://imgcdn.stablediffusionweb.com/2025/2/25/1e20a5ed-1aae-470c-817c-77448d42d63d.jpg?w=800&q=80", before: "https://thumbs.dreamstime.com/b/old-empty-room-interior-window-tiled-floor-old-empty-room-interior-window-tiled-floor-europe-107443100.jpg?w=800&q=80" },
  { id: 2, cat: "bedroom", title: "Azure Slumber Suite", loc: "Delhi Villa", img: "https://images.livspace-cdn.com/w:786/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/08/26155030/Cover-01.png?w=800&q=80", before: "https://media.istockphoto.com/id/186265382/photo/old-bedroom-in-country-house.jpg?s=612x612&w=0&k=20&c=5YLiGgQ4WsvVpn8XMEt1lbFvQ0hZ2PO8KK6ieRCtmO0=?w=800&q=80" },
  { id: 3, cat: "kitchen", title: "Noir Kitchen", loc: "Bangalore Residence", img: "https://www.lxhausys.com/us/blog/wp-content/uploads/2024/03/256bacde-44a2-4423-b44f-417978c23188_L.LX_Hausys_VIATERA_Calacatta_Plata_Calacatta_Collection.jpg ?w=800&q=80", before: "https://renovatingforprofit.com.au/wp-content/uploads/URB02703-scaled.jpg?w=800&q=80" },
  { id: 4, cat: "office", title: "Executive Command", loc: "Hyderabad HQ", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", before: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80" },
  { id: 5, cat: "living-room", title: "Heritage Drawing Room", loc: "Jaipur Haveli", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", before: "https://www.shutterstock.com/image-photo/ugly-interior-apartment-room-old-260nw-2414722677.jpg?w=800&q=80" },
  { id: 6, cat: "bedroom", title: "Blush Boudoir", loc: "Pune Residence", img: "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/spacejoy-XM-miHibz64-unsplash.jpg?v=1637699110?w=800&q=80", before: "https://i.dailymail.co.uk/i/pix/2015/10/12/10/2D50411E00000578-3269190-image-a-21_1444642079351.jpg?w=800&q=80" },
  { id: 7, cat: "kitchen", title: "Marble & Brass Kitchen", loc: "Goa Villa", img: "https://goodhomes.wwmindia.com/content/2022/apr/simple-l-kitchen-design-by-zxp-design.jpg?w=800&q=80", before: "https://t3.ftcdn.net/jpg/03/48/10/96/360_F_348109623_LNXTr3BUCtckGn9e0vfcheRIVwPFei1q.jpg?w=800&q=80" },
  { id: 8, cat: "office", title: "Creative Atelier", loc: "Chennai Studio", img: "https://officebanao.com/wp-content/uploads/2024/02/3d-rendering-business-meeting-room-1024x682.jpg", before: "https://lh4.ggpht.com/-zoBjzqoszUA/TmBGwFfjtpI/AAAAAAAABRI/oPcaGqbOYqk/office3.jpg?imgmax=800" },
 { id: 9, cat: "kitchen", title: "Brass Kitchen", loc: "Mumbai Villa", img: "https://i.pinimg.com/736x/16/93/d6/1693d6565d35961065ed2ed929a2ffd1.jpg", before: "https://www.shutterstock.com/image-photo/messy-old-condo-kitchen-oak-260nw-1138587110.jpg" },
];

const FILTERS = ["all", "living-room", "bedroom", "kitchen", "office"];

function PortfolioPage() {
  useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
  if (selectedItem) {
    window.scrollTo(0, 0);
  }
}, [selectedItem]);

  const filtered = activeFilter === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(p => p.cat === activeFilter);

  return (
    <div className="page-enter" style={{ background: "var(--dark)" }}>
      <section className="hero" style={{ minHeight: "65vh" }}>
        <div className="hero-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80)" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(135deg, rgba(26,10,0,0.9), rgba(153,88,42,0.4), rgba(26,10,0,0.95))" }} />
         <div className="hero-content" style={{ marginTop: "4rem" }}>
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
          style={{
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.9)",
  zIndex: 2000,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  backdropFilter: "blur(10px)",
  overflowY: "auto",
  padding: "7rem"
}}
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
          <div className="mood-grid reveal">
            {[
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
              "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
              "https://www.southernliving.com/thmb/pqZdyiSIqgs5Q4LXskMofPp4glY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/27566_IdeaHouse15660F-1c72c3dae8f645e59e15b912fca33fe8.jpg?w=400&q=80",
              "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80",
              "https://kitchendecor.in/wp-content/uploads/2024/01/IMG_1779-1.jpg?w=400&q=80",
              "https://assets-news.housing.com/news/wp-content/uploads/2022/11/08033404/Luxury-bedroom-design3-1.png?w=400&q=80",
              "https://www.vlitefurnitech.com/wp-content/uploads/2024/09/Shreehari-_-The-Office-Space-Brings-Together-Various-Functional-Elements-With-Thoughtful-Playfulness-_-Adhwa-Architecture-Interiors-1.webp?w=400&q=80",
              "https://www.homworks.com/wp-content/uploads/2023/05/06_Lighting-and-Ventilation.jpg?w=400&q=80",
              "https://id21.wunderfauks.com/wp/wp-content/uploads/2024/12/modern-office-design-ideas-1.jpg?w=400&q=80",
              "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80",
            ].map((img, i) => (
              <div key={i} className="mood-item">
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