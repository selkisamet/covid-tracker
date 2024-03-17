import ModalTypes from "../actionTypes";

export const fetchModalData = (fetchCountryInfo) => ({
    type: ModalTypes.modal.FETCH_MODAL_DATA,
    payload: { fetchCountryInfo },
});

export const setModalData = (modalData) => ({
    type: ModalTypes.modal.SET_MODAL_DATA,
    payload: { modalData },
});

export const setModalLoading = (loading) => ({
    type: ModalTypes.modal.SET_MODAL_LOADING,
    payload: { loading },
});

export const isOpenModal = (isOpen) => ({
    type: ModalTypes.modal.IS_OPEN_MODAL,
    payload: { isOpen },
});

const modalAction = { fetchModalData, setModalData, setModalLoading, isOpenModal };
export default modalAction;

