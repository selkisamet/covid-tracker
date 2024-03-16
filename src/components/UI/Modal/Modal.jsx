import React, { useEffect } from "react";
import IconCancel from "../../../assets/icons/cancel.svg";
import { ModalStyle, OverlayStyle, ModalHeaderStyle, IconModalCancelStyle, ModalBodyStyle, RowItemStyle, RowColStyle, LoaderOverlayStyle } from "./ModalStyle";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchModalData } from "../../../redux/actions/modalAction";
import Actions from "../../../redux/actions";
import Loader from "../Loader/Loader";

const Modal = () => {
    const modalData = useSelector((state) => state.modal.modalData);
    const loading = useSelector((state) => state.modal.loading);
    const selectedCountryCode = useSelector((state) => state.country.countryCode);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fetchModalData(selectedCountryCode));
    }, [dispatch, selectedCountryCode]);

    const modalClose = () => {
        dispatch(Actions.modalAction.isOpenModal(false));
        dispatch(Actions.modalAction.setModalLoading(true));
        dispatch(Actions.modalAction.setModalData({}));

    }

    const { date, last_update, confirmed, active, recovered, deaths, region } = modalData || {};
    const regionName = region?.name || "";


    return (
        <ModalStyle>
            <ModalHeaderStyle>
                {regionName}
                <IconModalCancelStyle src={IconCancel} onClick={() => modalClose()}></IconModalCancelStyle>
            </ModalHeaderStyle>

            <ModalBodyStyle>
                <RowItemStyle>
                    <RowColStyle>Tarih :</RowColStyle>
                    <RowColStyle>{date}</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Son Güncelleme :</RowColStyle>
                    <RowColStyle>{last_update}</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Onaylanan Vaka :</RowColStyle>
                    <RowColStyle>{confirmed}</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Aktif Hasta :</RowColStyle>
                    <RowColStyle>{active}</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>İyileşme :</RowColStyle>
                    <RowColStyle>{recovered}</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Vefatlar :</RowColStyle>
                    <RowColStyle>{deaths}</RowColStyle>
                </RowItemStyle>
            </ModalBodyStyle>

            <OverlayStyle></OverlayStyle>

            {
                loading && (
                    <LoaderOverlayStyle>
                        <Loader />
                    </LoaderOverlayStyle>
                )
            }
        </ModalStyle>
    )
}

export default Modal;