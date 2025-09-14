import "./hero.css";
import heroimg from "../../../public/abrik.jpg"

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <div className="kicker">Professional Targetolog</div>
          <h1 className="h1">Sizning biznesingiz uchun aniq auditoriyani topaman va xaridlarni oshiraman.</h1>
          <p className="lead">Facebook, Instagram va Google platformalarida maqsadga muvofiq kampaniyalar — strategiya, optimallashtirish va natijaga yo‘naltirilgan reporting.</p>

          <div className="hero-ctas">
            <button className="btn btn-cta" onClick={()=>document.getElementById("contact").scrollIntoView({behavior:'smooth'})}>Bepul konsultatsiya</button>
            <button className="btn btn-ghost" onClick={()=>document.getElementById("portfolio").scrollIntoView({behavior:'smooth'})}>Ishlarimga qarang</button>
          </div>

          <ul className="hero-stats" aria-hidden>
            <li><strong>120+</strong><span>Mijoz</span></li>
            <li><strong>500+</strong><span>Kampaniya</span></li>
            <li><strong>+30%</strong><span>O‘rtacha ROI</span></li>
          </ul>
        </div>

        <div className="hero-media" aria-hidden>
          <div className="card-media">
            {/* Simple stylized mockup */}
            
            <img src={heroimg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
