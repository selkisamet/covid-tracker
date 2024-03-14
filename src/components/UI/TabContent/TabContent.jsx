import React, { Fragment } from "react";
import WorldMap from "../../TabContent/WorldMap/WorldMap";
import { useSelector } from "react-redux";
import { ContentWrapStyle, ContentMapStyle, ContentListStyle } from "./TabContentStyle";
import CountryList from "../../TabContent/CountryList/CountryList";

const TabContent = () => {
    const tab = useSelector((state) => state.tabReducer);

    return (
        <Fragment>
            <ContentWrapStyle>
                {tab === "map" ?
                    <ContentMapStyle>
                        <WorldMap />
                    </ContentMapStyle>
                    : <ContentListStyle>
                        <CountryList />
                    </ContentListStyle>}
            </ContentWrapStyle>
        </Fragment>

    )
}

export default TabContent;
