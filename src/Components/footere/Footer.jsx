import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Hojiakbar Nematov — Professional Targetolog</div>
        <div className="footer-links">
          <a href="#services">Xizmatlar</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}
