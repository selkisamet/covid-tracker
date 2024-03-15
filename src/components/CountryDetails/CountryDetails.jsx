import React from "react";
import styled from "styled-components";
import TurkeyFlag from "../../assets/Turkey.svg";
import { Link } from "react-router-dom";

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

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const RowItemStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`;

const RowColStyle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-size: clamp(1.4rem, 2vw, 1.6rem);

    &:first-child {
        text-align: right;
        width: clamp(10rem, 13vw, 13rem);
        font-weight: ${({ theme }) => theme.fontWeights.black};
    }
`;

// ==========================================   STYLES   ========================================== //

const DetailsWrapStyle = styled.div`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

     @media screen and (max-width: 576px) {
        flex-direction: column;
    }
`;

const FlagAndCountryStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`;

const FlagStyle = styled.img`
    box-shadow: 0 0 5rem 0 rgba(255, 255, 255, 0.5);
`;

const CountryNameStyle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const BreadCrumbStyle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    gap: 1rem;
`;

const LinkStyle = styled(Link)`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
`;

const ActivePageStyle = styled.div`
    color: ${({ theme }) => theme.colors.ninth};
`;

const InfoCardWrapStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 3rem 0;
    border-top: 1px solid ${({ theme }) => theme.colors.ninth};
    border-bottom: 1px solid ${({ theme }) => theme.colors.ninth};
    overflow-x: auto;
    width: 100%;
    white-space: nowrap;

    &::-webkit-scrollbar {
        height: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 1rem;
        cursor: pointer;
    }

    &::-webkit-scrollbar-track  {
        background-color: ${({ theme }) => theme.colors.eighth};
    }
`;

const CardItemStyle = styled.div`
    height: clamp(10rem, 13vw, 13rem);
    width: clamp(20rem, 27vw, 27rem);
    background-color: ${({ theme }) => theme.colors.second};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    flex: 0 0 auto;
    transition: all 0.2s ease;

    &:hover{
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;

const TitleStyle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(1.8rem, 2vw, 2.4rem);
`;

const CountStyle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: ${({ theme }) => theme.fontWeights.black};
`;