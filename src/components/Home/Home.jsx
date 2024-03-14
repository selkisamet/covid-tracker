import React, { Fragment } from "react";
import TabBar from "../UI/TabBar/TabBar";
import TabContent from "../UI/TabContent/TabContent";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Fragment>
            {/* TabBar Component */}
            < TabBar />

            {/* TabContent Component */}
            <TabContent selectedItem="map" />
        </Fragment>
    )
}

export default Home;