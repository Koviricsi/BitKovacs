import "./parts.css"

import Filter from "../../components/ui/filter/filter.jsx"
import PartGrid from "../../components/ui/partGrid/partGrid.jsx";

function Parts(){
    return(
        <>
        <div className="partsHeader">
            <h1>Alkatrészek - Minden</h1>
        </div>
        <div className="partsWrapper">
            <Filter/>
            <PartGrid/>
        </div>
        </>
    );
}

export default Parts