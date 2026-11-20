import { useState } from "react";

import Header from "./components/layout/header/header.jsx";
import Nav from "./components/layout/nav/nav.jsx";
import Content from "./components/layout/content/content.jsx";
import Footer from "./components/layout/footer/footer.jsx";

import Home from "./pages/home/home.jsx";
import Planner from "./pages/planner/planner.jsx";
import Bitkovacs from "./pages/bitkovacs/bitkovacs.jsx";
import Parts from "./pages/parts/parts.jsx";
import Configurations from "./pages/configurations/configurations.jsx";

function App() {
  const [activePage, setActivePage] = useState("home");
  return (
    <>
      <Header />
      <Nav activePage={activePage} setActivePage={setActivePage} />
      <Content>
        {activePage === "home" && <Home />}
        {activePage === "planner" && <Planner />}
        {activePage === "bitkovacs" && <Bitkovacs />}
        {activePage === "parts" && <Parts />}
        {activePage === "configurations" && <Configurations />}
      </Content>
      <Footer />
    </>
  );
}

export default App;
