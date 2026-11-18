import Header from "./components/layout/header/header.jsx";
import Nav from "./components/layout/nav/nav.jsx";
import Content from "./components/layout/content/content.jsx";
import Footer from "./components/layout/footer/footer.jsx";
import Landing from "./components/ui/landing/landing.jsx";
import Showcase from "./components/ui/showcase/Showcase.jsx";

import Anvil from "./components/other/anvil/anvil.jsx";

import puzzle from "../src/assets/images/content/puzzle_sketch.png";
import checklist from "../src/assets/images/content/checklist_sketch.png";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Content>
        <Landing
          title="A hardver nem játék."
          subtitle="Vagy mégis?"
          button={{ text: "Tervező indítása", page: null }}
          img={<Anvil/>}
          animate={false}
        >
          Segítünk összeállítani a stílusodhoz és a költségkeretedhez legjobban
          passzoló gépet – <span>kompromisszumok nélkül</span>. Akár
          hardverigényes munkára (videóvágás, 3D modellezés, kódolás), akár
          komoly gamingre keresed a tökéletes vasat, gondoskodunk az optimális
          légáramlásról, a stabilitásról és az időtálló bővíthetőségről.
        </Landing>
        <Showcase title="Legkelendőbb hardware" right={true}></Showcase>
        <Landing
          title="Gépépítés kisokos nélkül."
          subtitle="Egyszerűen."
          button={{ text: "Találd meg a gépem", page: null }}
          img={puzzle}
          right={true}
        >
          Nem kell hardverszakértőnek lenned ahhoz, hogy tökéletes géped legyen.
          Csak mondd el, <span>mire használnád és mennyit szánsz rá</span> – a
          többit ránk bízhatod. Rendszerünk pillanatok alatt olyan alkatrészeket
          válogat össze, amelyek garantáltan passzolnak egymáshoz, így neked már
          csak élvezned kell a végeredményt.
        </Landing>
        <Landing title="Hogyan működik?" subtitle="3 lépésben." img={checklist}>
          <ol>
            <li>Megadod az igényeid (pl. játék, munka, keret).</li>
            <li>
              A BitKovács összerakja (automatikus kompatibilitás-ellenőrzés).
            </li>
            <li>
              Megveszed <span>nálunk készre építve</span>, vagy{" "}
              <span>beszerzed bárhol a kész lista alapján</span>.
            </li>
          </ol>
        </Landing>
        <Showcase title="Kiemelkedő konfigurációk"></Showcase>
      </Content>
      <Footer />
    </>
  );
}

export default App;
