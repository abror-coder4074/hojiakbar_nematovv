import { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <div className="brand">
          <div className="logo">Hojiakbar Nematov<span className="dot">.</span></div>
          <div className="brand-sub">Targetolog / Performance-marketing</div>
        </div>

        <nav className={`nav ${open ? "open" : ""}`}>
          <a href="#services" onClick={()=>setOpen(false)}>Xizmatlar</a>
          <a href="#portfolio" onClick={()=>setOpen(false)}>Portfolio</a>
          {/* <a href="#testimonials" onClick={()=>setOpen(false)}>Sharhlar</a> */}
          <a href="#contact" className="nav-cta" onClick={()=>setOpen(false)}>Kontakt</a>
        </nav>

        <div className="header-actions">
          <button className="btn btn-ghost nav-desktop" onClick={()=>document.getElementById("contact").scrollIntoView({behavior:'smooth'})}>
            Kontakt
          </button>
          <button className="burger" onClick={()=>setOpen(!open)} aria-label="menu">
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </button>
        </div>
      </div>
    </header>
  );
}
