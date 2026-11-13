import { useMemo } from "react";
import "./header.css";

const images = import.meta.glob("../../../assets/images/header/*.png", {
  eager: true,
});

const subtitles = {
  Kezdőlap: "Üdvözöljük oldalunkon!",
  Konfigurátor: "Építsd meg álmaid gépét!",
  "MI Konfigurátor": "Tervezz gépet okosan!",
  Alkatrészek: "Válogass a legjobb hardverek közül!",
  Konfigurációk: "Nézd meg mások alkotásait!",
};

function Header({ pageName = "Kezdőlap" }) {
  const imageEntries = Object.entries(images);
  const scatteredImages = useMemo(() => {
    const placed = [];

    const minDistance = 10;

    imageEntries.forEach((x, i) => {
      let attempts = 0;
      let left = 0;
      let top = 0;
      let isValid = false;

      while (!isValid && attempts < 100) {
        left = Math.floor(Math.random() * 90) + 5;
        top = Math.floor(Math.random() * 40) + 30;

        isValid = placed.every((other) => {
          return Math.abs(left - other.left) >= minDistance;
        });

        if (left > 47 && left < 53) {
          isValid = false;
        }

        attempts++;
      }

      placed.push({
        id: i,
        src: x[1].default,
        left,
        top,
        rotate: Math.floor(Math.random() * 60) - 30,
      });
    });

    return placed;
  }, [pageName]);

  return (
    <div className="header">
      {scatteredImages.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt=""
          className="header-img"
          style={{
            left: `${img.left}%`,
            top: `${img.top}%`,
            transform: `translate(-50%, -50%) rotate(${img.rotate}deg)`,
          }}
        />
      ))}
      <div className="header-container">
        <h2 className="header-title">{pageName}</h2>
        <h1 className="header-subtitle">{subtitles[pageName]}</h1>
      </div>
    </div>
  );
}

export default Header;
