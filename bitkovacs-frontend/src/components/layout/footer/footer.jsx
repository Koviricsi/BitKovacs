import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <h2>
          <span className="material-symbols-outlined">location_on</span>
          <a
            href="https://www.google.com/maps/search/9636 Pósfa Petőfi Sándor utca 36"
            target="_blank"
          >
            9636 Pósfa Petőfi Sándor utca 36
          </a>
        </h2>
        <h2>
          <span className="material-symbols-outlined">call</span>
          <a href="tel:+36308647315">+36 30 864 7315</a>
        </h2>
        <h2>
          <span className="material-symbols-outlined">mail</span>
          <a href="mailto:kapcsolat@bitkovacs.hu">kapcsolat@bitkovacs.hu</a>
        </h2>
      </div>
      <div className="footer-desc">
        <h2 className="footer-title">Rólunk</h2>
        <p className="footer-paragraph">
          Egyedi PC-építés, precíz hardverválogatás és szakszerű karbantartás.
          Nálunk minden konfiguráció úgy készül, mintha a sajátunk lenne – a
          maximális teljesítményre és megbízhatóságra kovácsolva.
        </p>
        <div className="footer-icons">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-tiktok"></i>
        </div>
        <p className="footer-copyright">
          © 2026 Bitkovács. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
