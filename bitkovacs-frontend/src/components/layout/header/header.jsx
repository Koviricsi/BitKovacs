import { useState } from "react";
import "./header.css";

const images = import.meta.glob("../../../assets/images/header/*.png", {
  eager: true,
});

const imageEntries = Object.entries(images);

const subtitles = {
  Kezdőlap: "Üdvözöljük oldalunkon!",
  Konfigurátor: "Építsd meg álmaid gépét!",
  "MI Konfigurátor": "Tervezz gépet okosan!",
  Alkatrészek: "Válogass a legjobb hardverek közül!",
  Konfigurációk: "Nézd meg mások alkotásait!",
};

function generateScatteredImages() {
  const placed = [];
  const minDistance = 8;

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

      if (left > 40 && left < 60) {
        isValid = false;
      }

      attempts++;
    }

    const baseRotate = Math.floor(Math.random() * 60) - 30;
    const swayAmount = Math.floor(Math.random() * 30) + 5;
    const direction = Math.random() < 0.5 ? 1 : -1;
    const duration = (Math.random() * 3 + 1).toFixed(2);
    const delay = -(Math.random() * 8).toFixed(2);

    placed.push({
      id: i,
      src: x[1].default,
      left,
      top,
      startRotate: baseRotate,
      endRotate: baseRotate + swayAmount * direction,
      duration,
      delay,
    });
  });

  return placed;
}

function Header({ pageName = "Kezdőlap" }) {
  const [scatteredImages] = useState(generateScatteredImages);

  return (
    <div className="header">
      {scatteredImages.map((img) => (
        <img
          key={img.id}
          src={img.src}
          className="header-img"
          style={{
            left: `${img.left}%`,
            top: `${img.top}%`,
            "--start-rotate": `${img.startRotate}deg`,
            "--end-rotate": `${img.endRotate}deg`,
            animationDuration: `${img.duration}s`,
            animationDelay: `${img.delay}s`,
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