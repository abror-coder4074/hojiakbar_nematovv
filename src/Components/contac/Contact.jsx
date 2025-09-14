import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-card">
        <h3>Kontakt</h3>
        <p>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/hojiakbar_nematovv/"
            target="_blank"
            rel="noreferrer"
          >
            @hojiakbar_nematovv
          </a>
        </p>
        <p>
          Tel:{" "}
          <a href="tel:+998952899228">
            +998 95 289 92 28
          </a>
        </p>
        <p>
          Telegram:{" "}
          <a
            href="https://t.me/hojiakbar_nematov"
            target="_blank"
            rel="noreferrer"
          >
            @hojiakbar_nematov
          </a>
        </p>
      </div>

      <div className="contact-card">
        <h3>Manzil</h3>
        <p>Namangan</p>
      </div>
    </section>
  );
}
