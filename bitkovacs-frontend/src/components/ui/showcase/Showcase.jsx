import "./showcase.css";

function Showcase({ children, lightmode = false, title = "", right = false}) {
  const light = {
    backgroundColor: "var(--baby-blue)",
  };
  return (
    <div className="showcaseContainer">
      <h2 className="showcaseTitle" style={right ? {marginLeft: "auto"} : {marginRight: "auto"}}>{title}</h2>
      <div className="showcase"></div>
    </div>
  );
}

export default Showcase;
