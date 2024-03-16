import ActionTypes from "../actionTypes";

const map = (value = "map") => {
    return {
        type: ActionTypes.tab.MAP, payload: value
    };
};

const list = (value = "list") => {
    return {
        type: ActionTypes.tab.LIST, payload: value
    };
};

const tabAction = { map, list };
export default tabAction;