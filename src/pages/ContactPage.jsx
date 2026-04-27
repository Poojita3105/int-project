import { useState } from "react";
import { useScrollReveal } from "../hooks/useScroll";
import Footer from "../components/Footer";

function ContactPage() {
  useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "", date: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-enter" style={{ background: "linear-gradient(180deg, var(--dark), #1a0800)" }}>
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80)" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(135deg, rgba(26,10,0,0.92), rgba(153,88,42,0.5), rgba(26,10,0,0.95))" }} />
        <div className="hero-content">
          <div className="hero-tag">◆ Get In Touch ◆</div>
          <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Begin Your<br /><span className="text-gold-grad">Design Journey</span></h1>
          <p className="hero-sub">Every iconic space started with a single conversation</p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
          {/* Info */}
          <div>
            <div className="reveal">
              <div className="section-tag">◆ Contact Info ◆</div>
              <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1.8rem", color: "var(--cream)", marginBottom: "2rem" }}>Let's Create Something Extraordinary</h2>
              {[
                { icon: "📍", title: "Studio Address", val: "42 Royal Crescent, Bandra West, Mumbai – 400050" },
                { icon: "📞", title: "Phone", val: "+91 98765 43210" },
                { icon: "✉", title: "Email", val: "hello@moodcraft.in" },
                { icon: "⏰", title: "Hours", val: "Mon–Sat: 10:00 AM – 7:00 PM" },
              ].map(item => (
                <div key={item.title} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "1.3rem", minWidth: "2rem" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.3rem" }}>{item.title}</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,230,167,0.7)", lineHeight: 1.6 }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ marginTop: "2rem" }}>
              <div style={{ fontFamily: "'Krona One', sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1rem" }}>Follow Our Journey</div>
              <div style={{ display: "flex", gap: "1rem" }}>
                {[
                  { label: "Facebook", icon: "f", href: "https://facebook.com" },
                  { label: "Twitter / X", icon: "𝕏", href: "https://twitter.com" },
                  { label: "Instagram", icon: "◉", href: "https://instagram.com" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-icon" title={s.label} style={{ width: "50px", height: "50px", fontSize: "1.2rem" }}>{s.icon}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}  
          <div className="reveal">
            {submitted ? (
              <div style={{ textAlign: "center", padding: "4rem 2rem", background: "rgba(187,148,87,0.1)", border: "1px solid rgba(187,148,87,0.3)" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>◆</div>
                <h3 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1.5rem", color: "var(--gold)", marginBottom: "1rem" }}>Thank You!</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,230,167,0.7)", fontSize: "1.1rem", lineHeight: 1.7 }}>
                  Your consultation request has been received. Our design team will contact you within 24 hours to schedule your appointment.
                </p>
              </div>
            ) : (
              <div style={{ background: "rgba(67,40,24,0.25)", border: "1px solid rgba(187,148,87,0.15)", padding: "2.5rem" }}>
                <div className="section-tag">◆ Book Consultation ◆</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "var(--cream)", marginBottom: "2rem" }}>Schedule Your Free Consultation</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <input className="input-field" placeholder="Your Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  <input className="input-field" placeholder="Email Address" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  <input className="input-field" placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  <select
                    className="input-field"
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ color: form.service ? "var(--cream)" : "rgba(255,230,167,0.3)", background: "rgba(67,40,24,0.3)" }}
                  >
                    <option value="">Select Service</option>
                    <option>Residential Design</option>
                    <option>Commercial Spaces</option>
                    <option>Turnkey Project</option>
                    <option>Design Consultation</option>
                    <option>3D Visualization</option>
                  </select>
                  <input className="input-field" type="date" placeholder="Preferred Date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                  <textarea className="input-field" rows={4} placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} />
                  <button className="btn-primary" style={{ width: "100%", padding: "1.1rem" }} onClick={handleSubmit}>Send Consultation Request</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;