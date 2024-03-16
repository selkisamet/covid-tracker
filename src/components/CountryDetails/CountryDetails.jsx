import React, { useEffect, useState } from "react";
import { DetailsWrapStyle, HeaderStyle, FlagAndCountryStyle, FlagStyle, CountryNameStyle, BreadCrumbStyle, LinkStyle, ActivePageStyle, InfoCardWrapStyle, CardItemStyle, TitleStyle, CountStyle, ContentStyle, RowItemStyle, RowColStyle } from "./CountryDetailsStyle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchModalData } from "../../redux/actions/modalAction";
import Loader from "../UI/Loader/Loader";

const CountryDetails = () => {
    const { countryCode } = useParams();
    const dispatch = useDispatch();
    const modalData = useSelector((state) => state.modal.modalData);
    const loading = useSelector((state) => state.modal.loading);
    const [countryInfo, setCountryInfo] = useState({});


    const { date, last_update, confirmed, active, recovered, deaths } = modalData || {};
    const { translations, flags, capital, population, continents, currencies, area, latlng, maps, timezones } = countryInfo || {};
    const countryCommonName = translations?.tur.common || "";
    const countryOfficialName = translations?.tur.official || "";
    const countryFlag = flags?.svg || "";
    const countryMap = maps?.googleMaps || "";
    const countryDate = last_update || " "

    const afterSpace = countryDate.substring(countryDate.lastIndexOf(" ") + 1);
    const newDate = countryDate.replace(afterSpace, "");




    useEffect(() => {
        dispatch(fetchModalData(countryCode));

        const fetchCountry = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
                const data = await response.json();
                setCountryInfo(data[0]);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };

        if (countryCode) {
            fetchCountry();
        }
    }, [dispatch, countryCode]);

    return (
        !loading ? <DetailsWrapStyle>
            <HeaderStyle>
                <FlagAndCountryStyle>
                    <FlagStyle src={countryFlag}></FlagStyle>
                    <CountryNameStyle>{countryCommonName}</CountryNameStyle>
                </FlagAndCountryStyle>

                <BreadCrumbStyle>
                    <LinkStyle to="/">Anasayfa</LinkStyle> / <ActivePageStyle>Türkiye Detay</ActivePageStyle>
                </BreadCrumbStyle>
            </HeaderStyle>

            <InfoCardWrapStyle>
                <CardItemStyle>
                    <TitleStyle>Tarih</TitleStyle>
                    <CountStyle>{date}</CountStyle>
                </CardItemStyle>
                <CardItemStyle>
                    <TitleStyle>Son Güncelleme</TitleStyle>
                    <CountStyle>{newDate}</CountStyle>
                </CardItemStyle>
                <CardItemStyle>
                    <TitleStyle>Vaka Sayısı</TitleStyle>
                    <CountStyle>{confirmed}</CountStyle>
                </CardItemStyle>
                <CardItemStyle>
                    <TitleStyle>Aktif Hasta Sayısı</TitleStyle>
                    <CountStyle>{active}</CountStyle>
                </CardItemStyle>
                <CardItemStyle>
                    <TitleStyle>İyileşme Sayısı</TitleStyle>
                    <CountStyle>{recovered}</CountStyle>
                </CardItemStyle>
                <CardItemStyle>
                    <TitleStyle>Vefat Sayısı</TitleStyle>
                    <CountStyle>{deaths}</CountStyle>
                </CardItemStyle>
            </InfoCardWrapStyle>

            <ContentStyle>
                <RowItemStyle>
                    <RowColStyle>Resmi Adı :</RowColStyle>
                    <RowColStyle>{countryOfficialName}</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Başkent :</RowColStyle>
                    <RowColStyle>{capital[0]}</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Nüfus :</RowColStyle>
                    <RowColStyle>{population}</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Kıta :</RowColStyle>
                    <RowColStyle>{`${continents[1]} , ${continents[0]}`}</RowColStyle>
                </RowItemStyle>



                <RowItemStyle>
                    <RowColStyle>Yüz Ölçüm :</RowColStyle>
                    <RowColStyle>{area} km²</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Enlem :</RowColStyle>
                    <RowColStyle>{latlng[0]}°</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Boylam :</RowColStyle>
                    <RowColStyle>{latlng[1]}°</RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Google Harita :</RowColStyle>
                    <RowColStyle>
                        <LinkStyle to={countryMap} target="_blank">{countryMap}</LinkStyle>
                    </RowColStyle>
                </RowItemStyle>

                <RowItemStyle>
                    <RowColStyle>Zaman Dilimi :</RowColStyle>
                    <RowColStyle>{timezones[0]}</RowColStyle>
                </RowItemStyle>
            </ContentStyle>
        </DetailsWrapStyle> : <Loader />

    )
}

export default CountryDetails;