import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <footer className="footer">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          <div>
            <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1.4rem", color: "var(--gold)", marginBottom: "1rem" }}>◆ MoodyCraft</div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(255,230,167,0.5)", lineHeight: 1.7 }}>
              Where luxury meets livability. Crafting extraordinary interiors since 2010.
            </p>
            <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.5rem" }}>
              {[
                { icon: "f", href: "https://facebook.com", title: "Facebook" },
                { icon: "𝕏", href: "https://twitter.com", title: "Twitter" },
                { icon: "◉", href: "https://instagram.com", title: "Instagram" },
              ].map(s => (
                <a key={s.title} href={s.href} target="_blank" rel="noreferrer" className="social-icon" title={s.title}>{s.icon}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.6rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1.2rem" }}>Navigation</div>
            {[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Portfolio", "/portfolio"], ["Testimonials", "/testimonials"], ["Contact", "/contact"]].map(([label, p]) => (
              <span key={p} className="footer-link" onClick={() => go(p)}>{label}</span>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.6rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1.2rem" }}>Services</div>
            {["Residential Design", "Commercial Spaces", "Turnkey Projects", "3D Visualization", "Consultation"].map(s => (
              <span key={s} className="footer-link" onClick={() => go("/services")}>{s}</span>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.6rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1.2rem" }}>Contact</div>
            <div style={{ color: "rgba(255,230,167,0.5)", fontFamily: "'Cormorant Garamond', serif", lineHeight: 2 }}>
              <div>📍 42 Royal Crescent, Mumbai</div>
              <div>📞 +91 98765 43210</div>
              <div>✉ hello@moodcraft.in</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(187,148,87,0.15)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(255,230,167,0.3)" }}>
            © 2025 MOODCRAFT INTERIORS. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            {["Privacy Policy", "Terms of Service"].map(t => (
              <span
                key={t}
                style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.55rem", letterSpacing: "0.15em", color: "rgba(255,230,167,0.3)", cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={e => e.target.style.color = "var(--gold)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,230,167,0.3)"}
              >{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;