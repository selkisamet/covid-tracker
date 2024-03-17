import React, { useEffect, useState } from "react";
import IconSearch from "../../../assets/icons/search.svg";
import { ListWrapStyle, ListCardStyle, SearchWrap, InputWrapStyle, InputStyle, IconSearchStyle, TableWrapStyle, TableBodyStyle, TableHeaderStyle, HeadItemStyle, RowItemStyle, RowColStyle, LinkStyle, FlagStyle, MessageTextStyle } from "./CountryListStyle";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../../../redux/actions";

const CountryList = () => {
    const [countryList, setCountryList] = useState([]);
    const [filteredCountryList, setFilteredCountryList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const tab = useSelector((state) => state.tabReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            fetch("https://restcountries.com/v3.1/all")
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                }).then(data => {
                    setCountryList(data);
                    setFilteredCountryList(data);
                }).catch(error => {
                    console.error("Error fetching data: ", error);
                })
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        // Arama değeri değiştikçe filtreleme yap
        const filtered = countryList.filter(country =>
            country.translations["tur"]?.common.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredCountryList(filtered);
        setShowWarning(filtered.length === 0 && searchValue !== "");
        dispatch(Actions.modalAction.setModalData({}));
        dispatch(Actions.modalAction.isOpenModal(true));
        dispatch(Actions.modalAction.setModalLoading(true));
    }, [searchValue, countryList]);

    return (
        <ListWrapStyle>
            <ListCardStyle>
                <SearchWrap>
                    <InputWrapStyle>
                        <InputStyle type="text" placeholder="Ülke Ara" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                        <IconSearchStyle src={IconSearch} />
                    </InputWrapStyle>
                </SearchWrap>

                <TableWrapStyle>
                    <TableHeaderStyle>
                        <HeadItemStyle></HeadItemStyle>
                        <HeadItemStyle>#</HeadItemStyle>
                        <HeadItemStyle>Ülke</HeadItemStyle>
                        <HeadItemStyle>Nüfus</HeadItemStyle>
                    </TableHeaderStyle>

                    <TableBodyStyle>
                        {
                            tab === "list" &&
                            filteredCountryList.map((country, index) => (
                                <LinkStyle to={`country-details/${country.cca3.toLowerCase()}`} key={index}>
                                    <RowItemStyle>
                                        <RowColStyle><FlagStyle src={country.flags.svg}></FlagStyle></RowColStyle>
                                        <RowColStyle>{index + 1}</RowColStyle>
                                        <RowColStyle>{country?.translations["tur"]?.common}</RowColStyle>
                                        <RowColStyle>{country.population}</RowColStyle>
                                    </RowItemStyle>
                                </LinkStyle>
                            ))
                        }

                        {showWarning && <MessageTextStyle>Aranan isimde bir ülke bulunamadı.</MessageTextStyle>}

                    </TableBodyStyle>
                </TableWrapStyle>
            </ListCardStyle>
        </ListWrapStyle>
    )
}

export default CountryList;