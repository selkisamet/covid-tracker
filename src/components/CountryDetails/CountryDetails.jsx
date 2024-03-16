import React from "react";
import TurkeyFlag from "../../assets/Turkey.svg";
import { DetailsWrapStyle, HeaderStyle, FlagAndCountryStyle, FlagStyle, CountryNameStyle, BreadCrumbStyle, LinkStyle, ActivePageStyle, InfoCardWrapStyle, CardItemStyle, TitleStyle, CountStyle, ContentStyle, RowItemStyle, RowColStyle } from "./CountryDetailsStyle";

const CountryDetails = () => {
    return (
        <DetailsWrapStyle>
            <HeaderStyle>
                <FlagAndCountryStyle>
                    <FlagStyle src={TurkeyFlag}></FlagStyle>
                    <CountryNameStyle>Türkiye</CountryNameStyle>
                </FlagAndCountryStyle>

                <BreadCrumbStyle>
                    <LinkStyle to="/">Anasayfa</LinkStyle> / <ActivePageStyle>Türkiye Detay</ActivePageStyle>
                </BreadCrumbStyle>
            </HeaderStyle>

            <InfoCardWrapStyle>
                <CardItemStyle>
                    <TitleStyle>Son Güncelleme</TitleStyle>
                    <CountStyle>2020.04.16</CountStyle>
                </CardItemStyle>
                <CardItemStyle>
                    <TitleStyle>Vaka Sayısı</TitleStyle>
                    <CountStyle>84.339,067</CountStyle>
                </CardItemStyle>
                <CardItemStyle>
                    <TitleStyle>Aktif Hasta Sayısı</TitleStyle>
                    <CountStyle>6.251</CountStyle>
                </CardItemStyle>
                <CardItemStyle>
                    <TitleStyle>İyileşme Sayısı</TitleStyle>
                    <CountStyle>6.251</CountStyle>
                </CardItemStyle>
            </InfoCardWrapStyle>

            <ContentStyle>
                <RowItemStyle>
                    <RowColStyle>Resmi Adı :</RowColStyle>
                    <RowColStyle>Türkiye Cumhuriyeti</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Başkent :</RowColStyle>
                    <RowColStyle>Ankara</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Nüfus :</RowColStyle>
                    <RowColStyle>84.339,067</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Kıta :</RowColStyle>
                    <RowColStyle>Asia, Europe</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Para Birimi :</RowColStyle>
                    <RowColStyle>Türk Lirası</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Yüz Ölçüm :</RowColStyle>
                    <RowColStyle>Türk Lirası</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Enlem :</RowColStyle>
                    <RowColStyle>39.0</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Boylam :</RowColStyle>
                    <RowColStyle>35.0</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Google Harita :</RowColStyle>
                    <RowColStyle>https://goo.gl/maps/dXFFraiUDfcB6Quk6</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Zaman Dilimi :</RowColStyle>
                    <RowColStyle>35.0</RowColStyle>
                </RowItemStyle>
            </ContentStyle>
        </DetailsWrapStyle>
    )
}

export default CountryDetails;