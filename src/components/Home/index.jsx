import React from "react";
import TabBar from "../UI/TabBar/TabBar";
import Container from "../UI/Container/Container";
import TabContent from "../UI/TabContent/TabContent";

const Home = () => {
    return (
        <Container>
            {/* TabBar Component */}
            < TabBar />
            <TabContent selectedItem="map" />
        </Container>
    )
}

export default Home;