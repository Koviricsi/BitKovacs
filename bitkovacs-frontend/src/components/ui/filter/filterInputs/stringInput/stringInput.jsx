import "./stringInput.css";

import { Fragment } from "react";

function StringInput({ name = "Name", items = [] }) {
  return (
    <>
      <div className="stringInputWrapper">
        <h3>{name}</h3>
        <section>
          <label className="stringInputLabel" htmlFor={`stringInputTest`}>Test</label>
          <input className="stringInputCheckbox" id={`stringInputTest`} type="checkbox" value="Test" />
          <label className="stringInputLabel" htmlFor={`stringInputTest`}>Test</label>
          <input className="stringInputCheckbox" id={`stringInputTest`} type="checkbox" value="Test" />
          <label className="stringInputLabel" htmlFor={`stringInputTest`}>Test</label>
          <input className="stringInputCheckbox" id={`stringInputTest`} type="checkbox" value="Test" />
          {items.map((x, i) => (
            <Fragment key={i}>
              <label className="stringInputLabel" htmlFor={`stringInput${x}`}>{x}</label>
              <input className="stringInputCheckbox" id={`stringInput${x}`} type="checkbox" value={x} />
            </Fragment>
          ))}
        </section>
      </div>
    </>
  );
}

export default StringInput;
