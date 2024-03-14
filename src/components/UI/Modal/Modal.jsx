import React from "react";
import IconCancel from "../../../assets/icons/cancel.svg";
import { ModalStyle, OverlayStyle, ModalHeaderStyle, IconModalCancelStyle } from "./ModalStyle";
import styled from "styled-components";

const Modal = ({ setModal }) => {


    return (
        <ModalStyle>
            <ModalHeaderStyle>
                TÜRKİYE
                <IconModalCancelStyle src={IconCancel} onClick={() => setModal(false)}></IconModalCancelStyle>
            </ModalHeaderStyle>

            <ModalBodyStyle>
                <RowItemStyle>
                    <RowColStyle>Tarih :</RowColStyle>
                    <RowColStyle>2020-04-16</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Son Güncelleme :</RowColStyle>
                    <RowColStyle>2020-04-16</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Onaylanan Vaka :</RowColStyle>
                    <RowColStyle>4.345</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Aktif Hasta :</RowColStyle>
                    <RowColStyle>4.345</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>İyileşme :</RowColStyle>
                    <RowColStyle>4.345</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Vefatlar :</RowColStyle>
                    <RowColStyle>4.345</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Vefat Oranı :</RowColStyle>
                    <RowColStyle>4.345</RowColStyle>
                </RowItemStyle>
            </ModalBodyStyle>

            <OverlayStyle></OverlayStyle>
        </ModalStyle>
    )
}

export default Modal;

const ModalBodyStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 clamp(1rem , 5vw, 5rem);
    margin-top: 5rem;
`;

const RowItemStyle = styled.div`
    display: flex;
    gap: 3rem;
    padding: 3rem 0;
    border-bottom: solid 0.1rem ${({ theme }) => theme.colors.primary};

    &:last-child {
        border: none;
    }
`;

const RowColStyle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    flex: 1;
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-size: clamp(1.6rem, 2vw, 1.6rem);

    &:first-child {
        text-align: right;
        flex: 1;
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        white-space: nowrap;
    }
`;