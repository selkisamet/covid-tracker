import ActionTypes from "../actionTypes";

const initialState = "map";
const listContent = "list";

const tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.tab.MAP:
            return initialState;

        case ActionTypes.tab.LIST:
            return listContent;

        default:
            return state;
    }
}

export default tabReducer;