import TabTypes from "../actionTypes";

const map = (value = "map") => {
    return {
        type: TabTypes.tab.MAP, payload: value
    };
};

const list = (value = "list") => {
    return {
        type: TabTypes.tab.LIST, payload: value
    };
};

const tabAction = { map, list };
export default tabAction;