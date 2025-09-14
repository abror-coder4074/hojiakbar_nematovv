import React from "react";
import "./Testimonials.css";
import savlat from "../../../public/savlatmebel.jpg";
import asialogis from "../../../public/asialogistics.jpg";
import mychoice from "../../../public/mychoice.jpg";
import stargroupuz from "../../../public/stargroupuz.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials container">
      <h3 className="testimonials-title">Mijozlar fikri</h3>
      <p className="testimonials-subtitle">
        Real mijozlar sharhlari — ishonch uchun.
      </p>

      <div className="test-grid">
        <div className="test-card">
          <p>
            “Xizmat juda samarali — 2 oy ichida ko‘rsatkichlar sezilarli o‘sdi.”
          </p>
          <div className="test-user">
            <img src={savlat} alt="Savlatmebel" />
            <div>
              <div className="name">Savlatmebel</div>
              <div className="role">MEBEL</div>
            </div>
          </div>
        </div>

        <div className="test-card">
          <p>
            “Skripti va formatlari ajoyib — biz tezroq kontent qilamiz va
            samaradorlik oshdi.”
          </p>
          <div className="test-user">
            <img src={asialogis} alt="asialogist" />
            <div>
              <div className="name">Asialogistics.uz</div>
              <div className="role">Asia Logistics</div>
            </div>
          </div>
        </div>

        <div className="test-card">
          <p>
            “Montaj va optimizatsiya — algoritmga mos videolar natija berdi.”
          </p>
          <div className="test-user">
            <img src={mychoice} alt="My_choiceuz" />
            <div>
              <div className="name">My_choiceuz</div>
              <div className="role">Apple tech | Iphone</div>
            </div>
          </div>
        </div>

        <div className="test-card">
          <p>
            “Montaj va optimizatsiya — algoritmga mos videolar natija berdi.”
          </p>
          <div className="test-user">
            <img src={stargroupuz} alt="Stargroupuz" />
            <div>
              <div className="name">Stargroupuz</div>
              <div className="role">Trading Company</div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;
