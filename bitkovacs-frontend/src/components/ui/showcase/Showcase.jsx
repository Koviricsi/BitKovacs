import "./showcase.css";

function Showcase({ children, title = "", right = false, animate = true }) {
  const showcaseClasses = ["showcaseContainer", right && "right"]
    .filter(Boolean)
    .join(" ");
  const titleClasses = [
    "showcaseTitle",
    animate && right && "fade-right",
    animate && !right && "fade-left",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={showcaseClasses}>
      <h2 className={titleClasses}>{title}</h2>
      <div className="showcase"></div>
    </div>
  );
}

export default Showcase;
