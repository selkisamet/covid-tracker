import React, { useState } from "react";
import Container from "../Container";
import TabContent from "../TabContent";
import { TabBarWrapStyle, TabItemStyle } from "./TabBarStyle";

const TabBar = () => {
    const [selectedItem, setSelectedItem] = useState("map");

    const handleTabItem = (value) => {
        setSelectedItem(value.target.id);
    }


    return (
        <Container>
            <TabBarWrapStyle>
                <TabItemStyle id="map" selected={selectedItem === "map"} onClick={(e) => { handleTabItem(e) }}>Harita</TabItemStyle>
                <TabItemStyle id="list" selected={selectedItem === "list"} onClick={(e) => { handleTabItem(e) }}>Liste</TabItemStyle>
            </TabBarWrapStyle>

            <TabContent selectedItem={selectedItem} />
        </Container >
    )
}

export default TabBar;

