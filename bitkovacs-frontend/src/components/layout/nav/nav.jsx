import './nav.css'

function Nav({activePage, setActivePage}) {
  return(
    <nav>
      <div className='nav-links-container'>
        <div className={activePage === "home" ? "nav-links active" : "nav-links"} 
        onClick={() => setActivePage("home")}>
          <h3>Kezdőlap</h3>
          <span className='material-symbols-outlined'>home</span>
        </div>
        <div className={activePage === "planner" ? "nav-links active" : "nav-links"} 
        onClick={() => setActivePage("planner")}>
          <h3>Tervező</h3>
          <span className='material-symbols-outlined'>build</span>
        </div>
        <div className={activePage === "bitkovacs" ? "nav-links active" : "nav-links"} 
        onClick={() => setActivePage("bitkovacs")}>
          <h3>Bit-Kovács</h3>
          <span className='material-symbols-outlined'>wand_stars</span>
        </div>
        <div className={activePage === "parts" ? "nav-links active" : "nav-links"} 
        onClick={() => setActivePage("parts")}>
          <h3>Alkatrészek</h3>
          <span className='material-symbols-outlined'>memory</span>
        </div>
        <div className={activePage === "configurations" ? "nav-links active" : "nav-links"} 
        onClick={() => setActivePage("configurations")}>
          <h3>Konfigurációk</h3>
          <span className='material-symbols-outlined'>engineering</span>
        </div>
      </div>
      <div className='nav-buttons-container'>
        <div className="nav-buttons">
          <h3>Fiók</h3>
          <span className='material-symbols-outlined'>person</span>
        </div>
        <div className="nav-buttons">
          <h3>Kosár</h3>
          <span className='material-symbols-outlined'>shopping_cart</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
