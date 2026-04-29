import { useScrollReveal } from "../hooks/useScroll";
import Footer from "../components/Footer";

function AboutPage() {
  useScrollReveal();

  return (
    <div className="page-enter" style={{ background: "linear-gradient(180deg, var(--dark), #1a0a00)" }}>
      {/* Hero */}
      <section className="hero" style={{ minHeight: "70vh" }}>
        <div className="hero-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80)" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(135deg, rgba(67,40,24,0.9), rgba(111,29,27,0.5), rgba(26,10,0,0.95))" }} />
        <div className="hero-content">
          <div className="hero-tag">◆ Our Story ◆</div>
          <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Passion Meets<br /><span className="text-gold-grad">Craftsmanship</span></h1>
          <p className="hero-sub">Twelve years of transforming visions into extraordinary living spaces</p>
        </div>
      </section>

      {/* Designer Profile */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--espresso), #2d1205)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div className="reveal">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Designer"
                style={{ width: "100%", maxWidth: "400px", display: "block", border: "1px solid rgba(187,148,87,0.3)" }}
              />
              <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "100%", height: "100%", border: "1px solid rgba(187,148,87,0.15)", zIndex: -1 }} />
            </div>
          </div>
          <div className="reveal">
            <div className="section-tag">◆ Lead Designer ◆</div>
            <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--cream)", marginBottom: "0.5rem" }}>Priya Ravishankar</h2>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--gold)", fontSize: "1.1rem", marginBottom: "1.5rem" }}>Principal Designer & Founder</div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,230,167,0.7)", lineHeight: 1.8, fontSize: "1.1rem", marginBottom: "1.5rem" }}>
              With a Master's in Interior Architecture from NID Ahmedabad and training in Florence, Priya has redefined luxury interiors across India's most prestigious residences and corporate spaces.
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,230,167,0.7)", lineHeight: 1.8, fontSize: "1.1rem" }}>
              Her philosophy: <em style={{ color: "var(--gold)" }}>"A room should not just look beautiful — it should feel like it was always meant to be yours."</em>
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: "var(--dark)",padding: "3rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag">◆ Our Process ◆</div>
            <h2 className="section-title">How We Create<br />Your Perfect Space</h2>
          </div>
          <div>
            {[
              { step: "01", title: "Discovery & Vision", desc: "We begin with a deep consultation to understand your lifestyle, taste, and aspirations for the space." },
              { step: "02", title: "Concept Development", desc: "Our team creates mood boards, spatial plans, and 3D visualizations tailored to your vision." },
              { step: "03", title: "Material Selection", desc: "Handpicked premium materials, bespoke furniture, and curated art to bring the concept to life." },
              { step: "04", title: "Execution & Delivery", desc: "Meticulous project management ensuring every detail is perfect, delivered on time." },
            ].map((item, i) => (
              <div key={item.step} className="timeline-item reveal timeline-hover" style={{ animationDelay: `${i * 0.15}s` }}>
                <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "2rem", color: "rgba(187,148,87,0.3)", marginBottom: "0.3rem" }}>{item.step}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "var(--cream)", marginBottom: "0.6rem" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,230,167,0.6)", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;