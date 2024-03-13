import React from "react";

const TabContent = ({ selectedItem }) => {
    return (
        <div>

            {selectedItem === "map" ? <div>Conten 1</div> : <div>Conten 2</div>}


        </div>

    )
}

export default TabContent;