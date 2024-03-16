import React from "react";
import IconSearch from "../../../assets/icons/search.svg";
import TurkeyFlag from "../../../assets/Turkey.svg";
import { ListWrapStyle, ListCardStyle, SearchWrap, InputWrapStyle, InputStyle, IconSearchStyle, TableWrapStyle, TableBodyStyle, TableHeaderStyle, HeadItemStyle, RowItemStyle, RowColStyle, LinkStyle, FlagStyle } from "./CountryListStyle";

const CountryList = () => {
    return (
        <ListWrapStyle>
            <ListCardStyle>
                <SearchWrap>
                    <InputWrapStyle>
                        <InputStyle type="text" placeholder="Ülke Ara" />
                        <IconSearchStyle src={IconSearch} />
                    </InputWrapStyle>
                </SearchWrap>

                <TableWrapStyle>
                    <TableHeaderStyle>
                        <HeadItemStyle></HeadItemStyle>
                        <HeadItemStyle>#</HeadItemStyle>
                        <HeadItemStyle>Ülke</HeadItemStyle>
                        <HeadItemStyle>Nüfus</HeadItemStyle>
                        <HeadItemStyle>Vaka</HeadItemStyle>
                    </TableHeaderStyle>

                    <TableBodyStyle>
                        <LinkStyle to="/country-details">
                            <RowItemStyle>
                                <RowColStyle><FlagStyle src={TurkeyFlag}></FlagStyle></RowColStyle>
                                <RowColStyle>1</RowColStyle>
                                <RowColStyle>Türkiye</RowColStyle>
                                <RowColStyle>83.614.362</RowColStyle>
                                <RowColStyle>5.000.000</RowColStyle>
                            </RowItemStyle>
                        </LinkStyle>

                        <RowItemStyle>
                            <RowColStyle><FlagStyle src={TurkeyFlag}></FlagStyle></RowColStyle>
                            <RowColStyle>1</RowColStyle>
                            <RowColStyle>Türkiye</RowColStyle>
                            <RowColStyle>83.614.362</RowColStyle>
                            <RowColStyle>5.000.000</RowColStyle>
                        </RowItemStyle>
                    </TableBodyStyle>
                </TableWrapStyle>
            </ListCardStyle>
        </ListWrapStyle>
    )
}

export default CountryList;