import React from "react";
import IconCancel from "../../../assets/icons/cancel.svg";
import { ModalStyle, OverlayStyle, ModalHeaderStyle, IconModalCancelStyle, ModalBodyStyle, RowItemStyle, RowColStyle } from "./ModalStyle";

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