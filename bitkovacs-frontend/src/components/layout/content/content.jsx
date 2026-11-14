import "./content.css";

function Content({ components = [] }) {
  return <main className="content">{components}</main>;
}

export default Content;