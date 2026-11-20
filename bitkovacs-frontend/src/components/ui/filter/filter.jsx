import { useState } from "react";

import "./filter.css";

import StringInput from "./filterInputs/stringInput/stringInput";

import test from "./test.json";

function Filter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <>
      <div className="filterContainer">
        <span
          className="material-symbols-outlined"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          {isFilterOpen ? "filter_alt_off" : "filter_alt"}
        </span>
        <section style={isFilterOpen ? {translate: "0"} : {translate: "-100%"}}>
          <StringInput />
        </section>
      </div>
    </>
  );
}

export default Filter;
