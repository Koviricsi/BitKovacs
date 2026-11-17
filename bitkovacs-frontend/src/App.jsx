import Header from './components/layout/header/header.jsx'
import Nav from './components/layout/nav/nav.jsx'
import Content from './components/layout/content/content.jsx';
import Footer from './components/layout/footer/footer.jsx'
import Landing from './components/ui/landing/landing.jsx';
import Showcase from './components/ui/showcase/Showcase.jsx';

function App() {
  return(
    <>
      <Header/>
      <Nav/>
      <Content>
        <Landing/>
        <Showcase title='Kiemelkedő konfigurációk tőlünk és tőletek'>
        </Showcase>
        <Showcase title='Legkelendőbb hardware' right={true}>
        </Showcase>
      </Content>
      <Footer/>
    </>
  );
}

export default App;