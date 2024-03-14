import React from "react";
import styled from "styled-components";
import IconSearch from "../../../assets/icons/search.svg";
import TurkeyFlag from "../../../assets/Turkey.svg";

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
                    {/* <TableStyle>
                        <thead>
                            <tr>
                                <th style={{ width: "8rem" }}></th>
                                <th>#</th>
                                <th>Ülke</th>
                                <th>Nüfus</th>
                                <th>Vaka</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <FlagStyle src={TurkeyFlag}></FlagStyle>
                                </td>
                                <td>1</td>
                                <td>Türkiye</td>
                                <td>83.614.362</td>
                                <td>5.000.000</td>
                            </tr>
                        </tbody>
                    </TableStyle> */}

                    <TableHeaderStyle>
                        <HeadItemStyle></HeadItemStyle>
                        <HeadItemStyle>#</HeadItemStyle>
                        <HeadItemStyle>Ülke</HeadItemStyle>
                        <HeadItemStyle>Nüfus</HeadItemStyle>
                        <HeadItemStyle>Vaka</HeadItemStyle>
                    </TableHeaderStyle>

                    <TableBodyStyle>
                        <RowItemStyle>
                            <RowColStyle><FlagStyle src={TurkeyFlag}></FlagStyle></RowColStyle>
                            <RowColStyle>1</RowColStyle>
                            <RowColStyle>Türkiye</RowColStyle>
                            <RowColStyle>83.614.362</RowColStyle>
                            <RowColStyle>5.000.000</RowColStyle>
                        </RowItemStyle>

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

const ListWrapStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ListCardStyle = styled.div`
   max-width: clamp(90rem, 5vw, 90rem);
   height: 100%;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.sixth};
   border-radius: 2rem;
   padding: 2rem 0;
   display: flex;
   flex-direction: column;
   gap: 3rem;
`;

const SearchWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InputWrapStyle = styled.div`
    position: relative;
`;

const InputStyle = styled.input`
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.seventh};
    border: none;
    border-radius: 5rem;
    height: clamp(4rem, 5vw, 5rem);
    width: 30rem;
    padding: 0 2rem;
    outline: none;
    transition: all 0.2s ease;

    &:focus{
       border: solid 0.1rem ${({ theme }) => theme.colors.primary};
    }
    
    &::placeholder{
        color: ${({ theme }) => theme.colors.eighth};
    }
`;

const IconSearchStyle = styled.img`
    width: 2rem;
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
        transition: all 0.2s ease;
    }
`;

const TableWrapStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const TableBodyStyle = styled.div``;

const TableHeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 4rem;
    gap: 1rem;
    border-bottom: solid 0.1rem ${({ theme }) => theme.colors.primary};
`;

const HeadItemStyle = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    flex: 1;
    text-align: center;

       &:first-child{
        flex: 0.7;
        /* padding-right: 2rem; */
    }
`;

const RowItemStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem clamp(2rem, 4vw, 4rem);
    gap: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover{
        background-color: ${({ theme }) => theme.colors.seventh};
    }
`;

const RowColStyle = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    flex: 1;
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeights.light};

    &:first-child{
        flex: 0.7;
        /* padding-right: 2rem; */
    }
`;

const FlagStyle = styled.img`
    width: 100%;
    display: block;
    object-fit: cover;
`;