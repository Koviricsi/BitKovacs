import { isValidElement } from "react";
import "./landing.css";

function Landing({
  children,
  title = "",
  subtitle = "",
  button = null,
  img = null,
  right = false,
  animate = true,
}) {
  const containerClasses = [
    "landingContainer",
    right && "right",
    animate && right && "fade-right",
    animate && !right && "fade-left",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={containerClasses}>
      <div className="landingText">
        <h1>
          {title}
          <br />
          <span>{subtitle}</span>
        </h1>
        <p>{children}</p>
        {button && <button>{button.text}</button>}
      </div>
      <div className="landingImg">
        {isValidElement(img) ? img : <img src={img} />}
      </div>
    </div>
  );
}

export default Landing;
