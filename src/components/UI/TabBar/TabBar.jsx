import React from "react";
import { TabBarWrapStyle, ItemWrapStyle, TabItemStyle } from "./TabBarStyle";
import { useSelector, useDispatch } from "react-redux";
import Actions from "../../../redux/actions";

const TabBar = () => {
    const tab = useSelector((state) => state.tabReducer);
    const dispatch = useDispatch();

    const modalClose = () => {
        dispatch(Actions.modalAction.isOpenModal(false));
        dispatch(Actions.modalAction.setModalData({}));
    }

    const mapHandleTab = () => {
        dispatch(Actions.tabAction.map());
        modalClose();
    }

    const listHandleTab = () => {
        dispatch(Actions.tabAction.list());
        modalClose();
    }


    return (
        <TabBarWrapStyle>
            <ItemWrapStyle>
                <TabItemStyle id="map" selected={tab === "map"} onClick={() => mapHandleTab()}>Harita</TabItemStyle>
                <TabItemStyle id="list" selected={tab === "list"} onClick={() => listHandleTab()}>Liste</TabItemStyle>
            </ItemWrapStyle>
        </TabBarWrapStyle>
    )
}

export default TabBar;

