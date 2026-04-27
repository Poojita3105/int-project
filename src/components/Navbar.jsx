import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useScrolled } from "../hooks/useScroll";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (p) => { navigate(p); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => go("/")}>◆ MoodyCraft</div>
        <div className="nav-links">
          {NAV_LINKS.map(l => (
            <span
              key={l.path}
              className={`nav-link ${pathname === l.path ? "active" : ""}`}
              onClick={() => go(l.path)}
            >
              {l.label}
            </span>
          ))}
          <button className="btn-book" onClick={() => go("/contact")}>Book Now</button>
        </div>
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(m => !m)}>
          <span /><span /><span />
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(l => (
          <span
            key={l.path}
            className="nav-link"
            style={{ fontSize: "0.9rem", letterSpacing: "0.3em" }}
            onClick={() => go(l.path)}
          >
            {l.label}
          </span>
        ))}
        <button className="btn-book" onClick={() => go("/contact")}>Book Now</button>
      </div>
    </>
  );
}

export default Navbar;