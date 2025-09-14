import "./portfolio.css";
import savlat from "../../../public/savlatmebel.jpg";
import asialogis from "../../../public/asialogistics.jpg";
import mychoice from "../../../public/mychoice.jpg";
import stargroupuz from "../../../public/stargroupuz.jpg";

export default function Portfolio() {
  const cases = [
    {
      img: savlat,
      title: "Savlatmebel",
      desc: "Natija: 7 oy ichida kontent marketing va target orqali 40.000 dan ortiq lid olib kelib berganmiz!",
    },
    {
      img: asialogis,
      title: "Asialogistics.uz",
      desc: "Natija: 3 kunda 150.000$ sotuv qilishga erishganmiz!",
    },
    {
      img: mychoice,
      title: "My_choiceuz",
      desc: "Natija: 3 oyni ichida 500.000$ dan ortiq sotuv qilingan Yangi ochilgan do'konda: kunlik 5 tadan 15 ta gacha telefon sotilishiga olib chiqdik!",
    },
    {
      img: stargroupuz,
      title: "Stargroupuz",
      desc: "Natija: 1 hafta ichida 150.000$ dan ortiq target orqali sotuv qilganmiz!",
    },
  ];

  return (
    <section id="portfolio" className="portfolio container">
      <h3 className="portfolio-title">Portfolio</h3>
      <p className="portfolio-subtitle">
        Ba'zi ishlanmalar — rasm va video joylariga o‘z fayllaringizni joylang.
      </p>

      <div className="portfolio-grid" aria-live="polite">
        {cases.map((c, i) => (
          <article className="case" key={i}>
            <div className="thumb">
              <img src={c.img} alt={c.title} />
            </div>
            <div className="info">
              <div className="title">{c.title}</div>
              <div className="desc">{c.desc}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
