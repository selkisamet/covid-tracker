import React, { useEffect, useState } from "react";
import IconCancel from "../../../assets/icons/cancel.svg";
import { ModalStyle, OverlayStyle, ModalHeaderStyle, IconModalCancelStyle, ModalBodyStyle, RowItemStyle, RowColStyle } from "./ModalStyle";
import styled from "styled-components";
import Loader from "../../../assets/icons/loader.gif";
import { useDispatch, useSelector } from "react-redux";
import { fetchModalData } from "../../../redux/actions/modalAction";
import Actions from "../../../redux/actions";

const Modal = ({ selectedCountryCode, }) => {
    const modalData = useSelector((state) => state.modal.modalData);
    const loading = useSelector((state) => state.modal.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchModalData(selectedCountryCode));
    }, [dispatch, selectedCountryCode]);

    const modalClose = () => {
        dispatch(Actions.modalAction.isOpenModal(false));
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
                        <LoaderGifStyle src={Loader} />
                    </LoaderOverlayStyle>
                )
            }
        </ModalStyle>
    )
}

export default Modal;

const LoaderOverlayStyle = styled.div`
    background-color: rgba(147, 132, 222, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    backdrop-filter: blur(5rem);
`;

const LoaderGifStyle = styled.img`
    width: 25rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;