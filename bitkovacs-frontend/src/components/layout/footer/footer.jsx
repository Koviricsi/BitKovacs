import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <h2>
          <span className="material-symbols-outlined">location_on</span>9636
          Pósfa Petőfi Sándor utca 36
        </h2>
        <h2>
          <span className="material-symbols-outlined">call</span>+36 30 864 7315
        </h2>
        <h2>
          <span className="material-symbols-outlined">mail</span>
          kapcsolat@bitkovacs.hu
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
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-tiktok"></i>
        </div>
        <p className="footer-copyright">© 2026 Bitkovács. Minden jog fenntartva.</p>
      </div>
    </footer>
  );
}

export default Footer;
