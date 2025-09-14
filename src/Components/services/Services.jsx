import "./Services.css";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Ish rejasi</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>01</h3>
            <h4>Analiz va strategiya</h4>
            <p>Bozor va auditoriya tahlili, aniq KPI belgilash, kontent reja yaratish.</p>
          </div>
          <div className="service-card">
            <h3>02</h3>
            <h4>Formatlar va skriptlar</h4>
            <p>Tez ishlab chiqiluvchi formatlar, skript va shablonlar — Reels, Shorts va boshqa formatlar.</p>
          </div>
          <div className="service-card">
            <h3>03</h3>
            <h4>Montaj & optimizatsiya</h4>
            <p>Professional montaj, A/B testlar va analytics yordamida doimiy takomillashtirish.</p>
          </div>
          <div className="service-card">
            <h4>Nimalar kiritiladi</h4>
            <ul>
              <li>Kontent reja (2 oy)</li>
              <li>Skript va formatlar</li>
              <li>Montaj va post-prodyuksiya</li>
            </ul>
          </div>
          <div className="service-card">
            <h4>Kutilgan natija</h4>
            <p>Ko‘proq ko‘rishlar, ortib boruvchi obunachilar va aniq mijozlar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
