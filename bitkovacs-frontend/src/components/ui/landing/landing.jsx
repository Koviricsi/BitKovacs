import img from '../../../assets/images/content/ullo_sketch.png'
import './landing.css'

function Landing() {
  return (
    <div className="landingContainer">
      <div className="landingText">
        <h1>
          A hardver nem játék.<br/>
          <span>Vagy mégis?</span>
        </h1>
        <p>
          Segítünk összeállítani a stílusodhoz és a költségkeretedhez legjobban
          passzoló gépet – <span>kompromisszumok nélkül</span>. Akár hardverigényes munkára
          (videóvágás, 3D modellezés, kódolás), akár komoly gamingre keresed a
          tökéletes vasat, gondoskodunk az optimális légáramlásról, a
          stabilitásról és az időtálló bővíthetőségről.
        </p>
      </div>
      <div className="landingImg">
        <img src={img}/>
      </div>
    </div>
  );
}

export default Landing;
