import ModalTypes from "../actionTypes";

export const fetchModalData = (selectedCountryCode) => ({
    type: ModalTypes.modal.FETCH_MODAL_DATA,
    payload: { selectedCountryCode },
});

export const setModalData = (modalData) => ({
    type: ModalTypes.modal.SET_MODAL_DATA,
    payload: { modalData },
});

export const setModalLoading = (loading) => ({
    type: ModalTypes.modal.SET_MODAL_LOADING,
    payload: { loading },
});

const modalAction = { fetchModalData, setModalData, setModalLoading };
export default modalAction;

