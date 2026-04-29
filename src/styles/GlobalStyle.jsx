const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cinzel+Decorative:wght@400;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

    :root {
      --crimson: #6f1d1b;
      --gold: #bb9457;
      --espresso: #432818;
      --sienna: #99582a;
      --cream: #ffe6a7;
      --dark: #1a0a00;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Cormorant Garamond', serif;
      background: var(--dark);
      color: var(--cream);
      overflow-x: hidden;
    }

    .font-krona { font-family: 'Krona One', sans-serif; }
    .font-cinzel { font-family: 'Cinzel Decorative', serif; }
    .font-cormorant { font-family: 'Cormorant Garamond', serif; }
    .font-playfair { font-family: 'Playfair Display', serif; }

    /* ── Splash Screen ── */
    .splash {
      position: fixed; inset: 0; z-index: 9999;
      background: var(--dark);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .splash.exit { opacity: 0; transform: scale(1.05); pointer-events: none; }

    .splash-logo {
      font-family: 'Cinzel Decorative', serif;
      font-size: clamp(2.5rem, 8vw, 6rem);
      color: var(--gold);
      letter-spacing: 0.15em;
      animation: logoReveal 1.8s cubic-bezier(.16,1,.3,1) forwards;
      opacity: 0;
    }
    .splash-sub {
      font-family: 'Krona One', sans-serif;
      font-size: clamp(0.6rem, 2vw, 0.85rem);
      color: var(--cream);
      letter-spacing: 0.6em;
      text-transform: uppercase;
      margin-top: 0.75rem;
      opacity: 0;
      animation: fadeUp 1s 1s ease forwards;
    }
    .splash-line {
      width: 0; height: 1px;
      background: linear-gradient(90deg, transparent, var(--gold), transparent);
      animation: lineGrow 1.2s 0.4s ease forwards;
      margin: 1.5rem 0;
    }
    .splash-ornament {
      font-size: 2rem; color: var(--sienna);
      opacity: 0;
      animation: fadeIn 0.8s 0.8s ease forwards;
    }

    @keyframes logoReveal {
      0% { opacity:0; transform: translateY(40px) scale(0.9); filter: blur(8px); }
      100% { opacity:1; transform: translateY(0) scale(1); filter: blur(0); }
    }
    @keyframes fadeUp {
      from { opacity:0; transform: translateY(20px); }
      to { opacity:1; transform: translateY(0); }
    }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes lineGrow { from { width:0; } to { width: min(400px, 80vw); } }

    /* ── Navbar ── */
    .navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      padding: 1.2rem 3rem;
      display: flex; align-items: center; justify-content: space-between;
      transition: all 0.4s ease;
    }
    .navbar.scrolled {
      background: rgba(26, 10, 0, 0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(187, 148, 87, 0.2);
      padding: 0.8rem 3rem;
      box-shadow: 0 4px 30px rgba(0,0,0,0.5);
    }
    .nav-logo {
      font-family: 'Cinzel Decorative', serif;
      font-size: 1.4rem;
      color: var(--gold);
      cursor: pointer;
      letter-spacing: 0.1em;
      transition: all 0.3s;
    }
    .nav-logo:hover { color: var(--cream); text-shadow: 0 0 20px rgba(187,148,87,0.5); }
    .nav-links { display: flex; align-items: center; gap: 2.5rem; }
    .nav-link {
      font-family: 'Krona One', sans-serif;
      font-size: 0.65rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: rgba(255, 230, 167, 0.7);
      cursor: pointer;
      position: relative;
      transition: all 0.3s;
      text-decoration: none;
    }
    .nav-link::after {
      content: ''; position: absolute; bottom: -4px; left: 0; right: 0;
      height: 1px; background: var(--gold);
      transform: scaleX(0); transition: transform 0.3s;
    }
    .nav-link:hover { color: var(--gold); filter: brightness(1.3); }
    .nav-link:hover::after { transform: scaleX(1); }
    .nav-link.active { color: var(--gold); }
    .nav-link.active::after { transform: scaleX(1); }

    .btn-book {
      font-family: 'Krona One', sans-serif;
      font-size: 0.6rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      padding: 0.7rem 1.8rem;
      background: linear-gradient(135deg, var(--crimson), var(--sienna));
      color: var(--cream);
      border: 1px solid var(--gold);
      cursor: pointer;
      transition: all 0.3s;
      clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
    }
    .btn-book:hover {
      background: linear-gradient(135deg, var(--gold), var(--sienna));
      color: var(--dark);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(187, 148, 87, 0.4);
    }

    /* Hamburger */
    .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; }
    .hamburger span {
      display: block; width: 24px; height: 1.5px;
      background: var(--gold); transition: all 0.3s;
    }
    .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(4px, 4px); }
    .hamburger.open span:nth-child(2) { opacity: 0; }
    .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(4px, -4px); }

    .mobile-menu {
      position: fixed; inset: 0; top: 0; z-index: 999;
      background: rgba(26,10,0,0.98);
      backdrop-filter: blur(30px);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      gap: 2.5rem;
      transform: translateX(100%);
      transition: transform 0.4s cubic-bezier(.16,1,.3,1);
    }
    .mobile-menu.open { transform: translateX(0); }

    /* ── Page Transition ── */
    .page-enter {
      animation: pageIn 0.7s cubic-bezier(.16,1,.3,1) forwards;
    }
    @keyframes pageIn {
      from { opacity:0; transform: translateY(30px) scale(0.97) rotateX(4deg); filter: blur(4px); }
      to   { opacity:1; transform: translateY(0) scale(1) rotateX(0); filter: blur(0); }
    }

    /* ── Scroll Reveal ── */
    .reveal {
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s cubic-bezier(.16,1,.3,1);
    }
    .reveal.visible { opacity: 1; transform: translateY(0); }

    /* ── Section padding ── */
    .section { padding: 6rem 2rem; }

    /* ── Gold text gradient ── */
    .text-gold-grad {
      background: linear-gradient(135deg, var(--gold), var(--cream), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ── Hero ── */
    .hero {
      position: relative; min-height: 100vh;
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
    }
    .hero-bg {
      position: absolute; inset: 0;
      background-size: cover; background-position: center;
    }
    .hero-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(26,10,0,0.85) 0%, rgba(111,29,27,0.4) 50%, rgba(26,10,0,0.9) 100%);
    }
    .hero-content {
      position: relative; z-index: 2;
      text-align: center; padding: 2rem;
      max-width: 900px;
    }
    .hero-tag {
  display: inline-block;

  font-family: 'Krona One', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 0.5em;
  text-transform: uppercase;

  color: #f0e8ce;

  background: rgba(140, 110, 11, 0.43);
  border: 1px solid rgba(212, 175, 55, 0.25);

  padding: 5px 16px;
  border-radius: 20px;

  margin-bottom: 1.5rem;

  opacity: 0;
  animation: fadeUp 0.8s 0.5s ease forwards;
}
    .hero-title {
      font-family: 'Cinzel Decorative', serif;
      font-size: clamp(2.5rem, 7vw, 5.5rem);
      line-height: 1.1;
      color: var(--cream);
      margin-bottom: 1.5rem;
      opacity: 0; animation: fadeUp 0.8s 0.8s ease forwards;
    }
    .hero-sub {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(1.1rem, 2.5vw, 1.5rem);
      font-style: italic;
      color: rgba(255,230,167,0.8);
      margin-bottom: 2.5rem;
      opacity: 0; animation: fadeUp 0.8s 1.1s ease forwards;
    }
    .hero-cta-group {
      display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;
      opacity: 0; animation: fadeUp 0.8s 1.4s ease forwards;
    }
    .btn-primary {
      font-family: 'Krona One', sans-serif;
      font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;
      padding: 1rem 2.5rem;
      background: linear-gradient(135deg, var(--crimson), var(--sienna));
      color: var(--cream);
      border: none; cursor: pointer;
      clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
      transition: all 0.3s;
    }
    .btn-primary:hover {
      background: linear-gradient(135deg, var(--gold), var(--sienna));
      color: var(--dark);
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(187,148,87,0.4);
    }
    .btn-outline {
      font-family: 'Krona One', sans-serif;
      font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;
      padding: 1rem 2.5rem;
      background: transparent;
      color: var(--cream);
      border: 1px solid rgba(255,230,167,0.4);
      cursor: pointer;
      clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
      transition: all 0.3s;
    }
    .btn-outline:hover {
      border-color: var(--gold);
      color: var(--gold);
      transform: translateY(-3px);
    }

    /* ── Floating 3D room ── */
    .room-3d {
      perspective: 800px;
      animation: float3d 6s ease-in-out infinite;
    }
    @keyframes float3d {
      0%, 100% { transform: rotateX(2deg) rotateY(-3deg) translateY(0); }
      50% { transform: rotateX(-2deg) rotateY(3deg) translateY(-12px); }
    }

    /* ── Card styles ── */
    .card {
      background: rgba(67, 40, 24, 0.3);
      border: 1px solid rgba(187, 148, 87, 0.15);
      transition: all 0.4s cubic-bezier(.16,1,.3,1);
      overflow: hidden;
      position: relative;
    }
    .card::before {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(187,148,87,0.05), transparent);
      opacity: 0; transition: opacity 0.4s;
    }
    .card:hover { transform: translateY(-8px); border-color: rgba(187,148,87,0.4); box-shadow: 0 20px 50px rgba(0,0,0,0.4); }
    .card:hover::before { opacity: 1; }

    /* ── Portfolio Grid ── */
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }
    .portfolio-item {
      position: relative; overflow: hidden;
      aspect-ratio: 4/3; cursor: pointer;
      border: 1px solid rgba(187,148,87,0.15);
    }
    .portfolio-item img {
      width: 100%; height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(.16,1,.3,1);
    }
    .portfolio-item:hover img { transform: scale(1.08); }
    .portfolio-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(26,10,0,0.9) 0%, transparent 60%);
      display: flex; flex-direction: column;
      justify-content: flex-end; padding: 1.5rem;
      transform: translateY(4px);
      transition: all 0.4s;
    }
    .portfolio-item:hover .portfolio-overlay { transform: translateY(0); }
    .portfolio-tag {
      font-family: 'Krona One', sans-serif;
      font-size: 0.55rem; letter-spacing: 0.3em;
      text-transform: uppercase; color: var(--gold);
      margin-bottom: 0.4rem;
    }
    .portfolio-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem; color: var(--cream);
    }

    /* ── Services ── */
    .service-card {
      padding: 2.5rem 2rem;
      background: linear-gradient(135deg, rgba(67,40,24,0.4), rgba(111,29,27,0.15));
      border: 1px solid rgba(187,148,87,0.15);
      position: relative; overflow: hidden;
      transition: all 0.4s;
    }
    .service-card::after {
      content: ''; position: absolute;
      bottom: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, var(--gold), transparent);
      transform: scaleX(0); transition: transform 0.4s;
    }
    .service-card:hover { transform: translateY(-6px); border-color: rgba(187,148,87,0.4); }
    .service-card:hover::after { transform: scaleX(1); }
    .service-icon { font-size: 2.5rem; margin-bottom: 1.2rem; }

    /* ── Testimonials ── */
    .testimonial-card {
      padding: 2.5rem;
      background: rgba(67,40,24,0.25);
      border: 1px solid rgba(187,148,87,0.15);
      position: relative;
    }
    .testimonial-card::before {
      content: '"';
      font-family: 'Playfair Display', serif;
      font-size: 6rem; line-height: 1;
      color: rgba(187,148,87,0.15);
      position: absolute; top: -0.5rem; left: 1.5rem;
    }

    /* ── 3D Demo Room ── */
    .demo-room {
      background: linear-gradient(135deg, #1a0500 0%, #2d1200 50%, #1a0500 100%);
      border: 1px solid rgba(187,148,87,0.2);
      padding: 2rem;
      border-radius: 2px;
      position: relative;
    }
    .room-canvas {
      width: 100%; aspect-ratio: 16/9;
      background: linear-gradient(135deg, #2a1505 0%, #3d1c0a 30%, #1e0d04 100%);
      position: relative;
      overflow: hidden;
      perspective: 600px;
      border: 1px solid rgba(187,148,87,0.1);
    }
    .room-floor {
      position: absolute; bottom: 0; left: 0; right: 0;
      height: 45%;
      background: linear-gradient(to top, #3d2010, #5a3018);
      transform: perspective(400px) rotateX(20deg);
      transform-origin: bottom;
    }
    .room-wall-back {
      position: absolute; top: 0; left: 0; right: 0;
      height: 60%;
      background: linear-gradient(to bottom, #2a1205 0%, #3a1808 100%);
    }
    .furniture-item {
      position: absolute;
      cursor: pointer;
      transition: all 0.3s;
      filter: drop-shadow(0 8px 20px rgba(0,0,0,0.6));
    }
    .furniture-item:hover { transform: scale(1.05) translateY(-4px); }

    /* ── Before/After Slider ── */
    .ba-container { position: relative; overflow: hidden; cursor: ew-resize; }
    .ba-after { position: absolute; top: 0; left: 0; bottom: 0; overflow: hidden; }
    .ba-divider {
      position: absolute; top: 0; bottom: 0;
      width: 2px; background: var(--gold);
      cursor: ew-resize; z-index: 10;
    }
    .ba-handle {
      position: absolute; top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 44px; height: 44px;
      background: var(--gold);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: var(--dark); font-weight: bold;
      box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    }

    /* ── Mood Board ── */
    .masonry {
      columns: 3; column-gap: 1rem;
    }
    .masonry-item {
      break-inside: avoid; margin-bottom: 1rem;
      position: relative; overflow: hidden;
      cursor: pointer;
      border: 1px solid rgba(187,148,87,0.1);
    }
    .masonry-item img {
      width: 100%; display: block;
      transition: transform 0.5s ease;
    }
    .masonry-item:hover img { transform: scale(1.06); }

    /* ── Contact ── */
    .input-field {
      width: 100%; padding: 1rem 1.2rem;
      background: rgba(67,40,24,0.3);
      border: 1px solid rgba(187,148,87,0.2);
      color: var(--cream);
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.1rem;
      transition: all 0.3s;
      outline: none;
    }
    .input-field::placeholder { color: rgba(255,230,167,0.3); }
    .input-field:focus { border-color: var(--gold); background: rgba(67,40,24,0.5); }

    /* ── Footer ── */
    .footer {
      background: #0d0500;
      border-top: 1px solid rgba(187,148,87,0.15);
      padding: 4rem 2rem 2rem;
    }
    .footer-link {
      color: rgba(255,230,167,0.5);
      cursor: pointer; transition: all 0.3s;
      text-decoration: none;
      display: block; margin-bottom: 0.6rem;
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.05rem;
    }
    .footer-link:hover { color: var(--gold); padding-left: 6px; filter: brightness(1.2); }
    .social-icon {
      width: 40px; height: 40px;
      border: 1px solid rgba(187,148,87,0.3);
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; transition: all 0.3s;
      color: rgba(255,230,167,0.6);
      text-decoration: none;
      font-size: 1rem;
    }
    .social-icon:hover {
      background: var(--gold); color: var(--dark);
      border-color: var(--gold);
      transform: translateY(-3px);
    }

    /* ── Decorative ── */
    .ornamental-divider {
      display: flex; align-items: center; gap: 1rem;
      margin: 2rem 0;
    }
    .ornamental-divider::before, .ornamental-divider::after {
      content: ''; flex: 1; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(187,148,87,0.4), transparent);
    }

    .section-tag {
      font-family: 'Krona One', sans-serif;
      font-size: 0.6rem; letter-spacing: 0.5em;
      text-transform: uppercase; color: var(--gold);
      margin-bottom: 1rem;
    }
    .section-title {
      font-family: 'Cinzel Decorative', serif;
      font-size: clamp(1.8rem, 4vw, 3rem);
      color: var(--cream);
      line-height: 1.2;
    }

    /* ── Filter tabs ── */
    .filter-tab {
      font-family: 'Krona One', sans-serif;
      font-size: 0.55rem; letter-spacing: 0.25em;
      text-transform: uppercase;
      padding: 0.6rem 1.5rem;
      border: 1px solid rgba(187,148,87,0.2);
      color: rgba(255,230,167,0.5);
      cursor: pointer; transition: all 0.3s;
      background: transparent;
    }
    .filter-tab.active, .filter-tab:hover {
      background: var(--crimson);
      border-color: var(--gold);
      color: var(--cream);
    }

    /* ── Stars ── */
    .stars { color: var(--gold); letter-spacing: 2px; }

    /* ── Parallax scrollers ── */
    .parallax-bg {
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
    }

    /* ── Scroll indicator ── */
    .scroll-indicator {
      position: absolute; bottom: 2rem; left: 50%;
      transform: translateX(-50%);
      display: flex; flex-direction: column;
      align-items: center; gap: 0.5rem;
      opacity: 0; animation: fadeIn 1s 2s ease forwards;
    }
    .scroll-arrow {
      width: 1px; height: 60px;
      background: linear-gradient(to bottom, var(--gold), transparent);
      animation: scrollPulse 2s ease-in-out infinite;
    }
    @keyframes scrollPulse {
      0%, 100% { opacity:1; transform: scaleY(1); }
      50% { opacity:0.3; transform: scaleY(0.7); }
    }

    /* ── 3D Card tilt ── */
    .tilt-card {
      transition: transform 0.1s ease;
      transform-style: preserve-3d;
    }

    /* ── About timeline ── */
    .timeline-item {
      position: relative; padding-left: 3rem; padding-bottom: 2.5rem;
      border-left: 1px solid rgba(187,148,87,0.2);
    }
    .timeline-item::before {
      content: ''; position: absolute;
      left: -6px; top: 4px;
      width: 11px; height: 11px;
      background: var(--gold); border-radius: 50%;
    }

    /* ── Room Demo Furniture ── */
    .furniture-panel {
      background: rgba(67,40,24,0.5);
      border: 1px solid rgba(187,148,87,0.2);
      padding: 1rem;
      overflow-y: auto;
    }
    .furniture-btn {
      width: 100%;
      padding: 0.6rem 1rem;
      background: rgba(111,29,27,0.3);
      border: 1px solid rgba(187,148,87,0.15);
      color: var(--cream);
      font-family: 'Cormorant Garamond', serif;
      font-size: 0.95rem;
      cursor: pointer;
      text-align: left;
      transition: all 0.3s;
      margin-bottom: 0.5rem;
      display: flex; align-items: center; gap: 0.7rem;
    }
    .furniture-btn:hover, .furniture-btn.active {
      background: rgba(187,148,87,0.25);
      border-color: var(--gold);
      padding-left: 1.4rem;
    }

    @media (max-width: 768px) {
      .nav-links { display: none; }
      .hamburger { display: flex; }
      .masonry { columns: 2; }
      .portfolio-grid { grid-template-columns: 1fr 1fr; }
      .navbar { padding: 1rem 1.5rem; }
      .section { padding: 4rem 1.2rem; }
    }

    .timeline-hover {
  transition: all 0.4s ease;
  padding: 1.5rem;
  border-radius: 12px;
  position: relative;
}

/* Hover effect */
.timeline-hover:hover {
  transform: translateY(-8px);
  background: rgba(187, 148, 87, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  filter: brightness(1.2);
}

/* Step number glow */
.timeline-hover:hover div {
  color: rgba(212, 175, 55, 0.8) !important;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.4);
}

.timeline-hover::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: 0.4s;
}

.timeline-hover:hover::before {
  border-color: rgba(212, 175, 55, 0.3);
}
  .service-hover-card {
  padding: 1.5rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(212,175,55,0.2);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}

/* Hover lift + glow */
.service-hover-card:hover {
  transform: translateY(-10px);
  background: rgba(212,175,55,0.06);
  border-color: rgba(212,175,55,0.5);
  box-shadow: 0 15px 35px rgba(0,0,0,0.5);
  filter: brightness(1.15);
}

/* Icon glow */
.service-hover-card:hover div {
  filter: drop-shadow(0 0 8px rgba(212,175,55,0.6));
}

/* Subtle shine effect */
.service-hover-card::before {
  content: "";
  position: absolute;
  top: -100%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(212,175,55,0.08),
    transparent
  );
  transform: rotate(25deg);
  transition: 0.6s;
}

.service-hover-card:hover::before {
  top: 100%;
}
  .service-hover-card:hover img {
  transform: scale(1.1);
  transition: 0.3s ease;
}
  .mood-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.mood-item {
  overflow: hidden;
  border-radius: 14px;
  position: relative;
  cursor: pointer;
}

/* image style */
.mood-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
  filter: brightness(0.9);
}

/* hover effects */
.mood-item:hover img {
  transform: scale(1.08);
  filter: brightness(1);
}

/* glow overlay */
.mood-item::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(212,175,55,0);
  transition: 0.4s;
}

.mood-item:hover::after {
  background: rgba(212,175,55,0.08);
}

.testimonial-hover {
  padding: 1.8rem;
  border-radius: 16px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(212,175,55,0.15);
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}

/* Hover lift + brightness */
.testimonial-hover:hover {
  transform: translateY(-8px);
  background: rgba(212,175,55,0.06);
  border-color: rgba(212,175,55,0.4);
  box-shadow: 0 15px 35px rgba(0,0,0,0.6);
  filter: brightness(1.2);
}

/* soft gold glow effect */
.testimonial-hover::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at top left,
    rgba(212,175,55,0.12),
    transparent 60%
  );
  opacity: 0;
  transition: 0.4s;
}

.testimonial-hover:hover::before {
  opacity: 1;
}

/* star glow */
.testimonial-hover:hover .stars {
  color: #D4AF37;
  text-shadow: 0 0 10px rgba(212,175,55,0.5);
}


.rating-summary {
  text-align: center;
  margin-top: 5rem;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  border-radius: 16px;

  /* background image */
  background: url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80") center/cover no-repeat;
}

/* dark overlay for readability */
.rating-summary::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(20, 10, 0, 0.85),
    rgba(111, 29, 27, 0.7)
  );
  z-index: 1;
}

/* keep content above overlay */
.rating-summary > * {
  position: relative;
  z-index: 2;
}

/* hover effect */
.rating-summary {
  transition: all 0.4s ease;
}

.rating-summary:hover {
  transform: translateY(-6px);
  filter: brightness(1.15);
  box-shadow: 0 20px 50px rgba(0,0,0,0.6);
}

/* glow accent on numbers */
.rating-summary:hover .stars {
  text-shadow: 0 0 12px rgba(212,175,55,0.5);
  color: #D4AF37;
}

.footer-contact-link {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

/* Hover effect */
.footer-contact-link:hover {
  color: var(--gold);
  filter: brightness(1.3);
  transform: translateX(3px);
  text-shadow: 0 0 10px rgba(187,148,87,0.4);
}

    @media (max-width: 480px) {
      .masonry { columns: 1; }
      .portfolio-grid { grid-template-columns: 1fr; }
    }
  `}</style>
);

export default GlobalStyle;