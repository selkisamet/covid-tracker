import ActionTypes from "../actionTypes";

const initialState = {
    modalData: {},
    loading: true,
    isOpen: false,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.modal.SET_MODAL_DATA:
            return {
                ...state,
                modalData: action.payload.modalData,
            };
        case ActionTypes.modal.SET_MODAL_LOADING:
            return {
                ...state,
                loading: action.payload.loading,
            };
        case ActionTypes.modal.IS_OPEN_MODAL:
            return {
                ...state,
                isOpen: action.payload.isOpen,
            };
        default:
            return state;
    }
};

export default modalReducer;