import React, { useEffect, useState } from "react";
import IconSearch from "../../../assets/icons/search.svg";
import { ListWrapStyle, ListCardStyle, SearchWrap, InputWrapStyle, InputStyle, IconSearchStyle, TableWrapStyle, TableBodyStyle, TableHeaderStyle, HeadItemStyle, RowItemStyle, RowColStyle, LinkStyle, FlagStyle, MessageTextStyle } from "./CountryListStyle";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../../../redux/actions";

const CountryList = () => {

    const [showWarning, setShowWarning] = useState(false);
    const tab = useSelector((state) => state.tabReducer);
    const dispatch = useDispatch();

    const countryList = useSelector((state) => state.country.countryList);
    const searchValue = useSelector((state) => state.country.searchValue);

    const filteredCountryList = countryList.filter(country =>
        country.translations["tur"]?.common.toLowerCase().includes(searchValue.toLowerCase())
    );

    useEffect(() => {
        dispatch(Actions.countryAction.fetchCountriesRequest());
        dispatch(Actions.modalAction.setModalLoading(true));
        dispatch(Actions.modalAction.setModalData({}));
    }, [dispatch]);

    const handleInputChange = (e) => {
        dispatch(Actions.countryAction.setSearchValue(e.target.value));
    };

    return (
        <ListWrapStyle>
            <ListCardStyle>
                <SearchWrap>
                    <InputWrapStyle>
                        <InputStyle type="text" placeholder="Ülke Ara" value={searchValue} onChange={handleInputChange} />
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
