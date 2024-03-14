import React from "react";
import { TabBarWrapStyle, ItemWrapStyle, TabItemStyle } from "./TabBarStyle";
import { useSelector, useDispatch } from "react-redux";
import Actions from "../../../redux/actions";

const TabBar = () => {
    const tab = useSelector((state) => state.tabReducer);
    const dispatch = useDispatch();

    return (
        <TabBarWrapStyle>
            <ItemWrapStyle>
                <TabItemStyle id="map" selected={tab === "map"} onClick={() => { dispatch(Actions.tabAction.map()) }}>Harita</TabItemStyle>
                <TabItemStyle id="list" selected={tab === "list"} onClick={() => { dispatch(Actions.tabAction.list()) }}>Liste</TabItemStyle>
            </ItemWrapStyle>
        </TabBarWrapStyle>
    )
}

export default TabBar;

