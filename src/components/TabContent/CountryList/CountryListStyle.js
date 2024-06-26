import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListWrapStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ListCardStyle = styled.div`
   max-width: clamp(90rem, 5vw, 90rem);
   height: 100%;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.sixth};
   border-radius: 2rem;
   padding: 2rem 0;
   display: flex;
   flex-direction: column;
   gap: 3rem;
   position: relative;
`;

export const SearchWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 15rem;
    /* background-color: red; */
    padding: 1rem 0;
`;

export const InputWrapStyle = styled.div`
    position: relative;
`;

export const InputStyle = styled.input`
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.seventh};
    border: solid 0.1rem ${({ theme }) => theme.colors.primary};
    border-radius: 5rem;
    height: clamp(4rem, 5vw, 5rem);
    width: 30rem;
    padding: 0 2rem;
    outline: none;
    transition: all 0.2s ease;

    &:focus{
       border: solid 0.1rem ${({ theme }) => theme.colors.white};
    }
    
    &::placeholder{
        color: ${({ theme }) => theme.colors.eighth};
    }
`;

export const IconSearchStyle = styled.img`
    width: 2rem;
    position: absolute;
    top: 1.5rem;
    right: 2rem;
`;

export const TableWrapStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const TableBodyStyle = styled.div``;

export const TableHeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 4rem;
    gap: 1rem;
    border-bottom: solid 0.1rem ${({ theme }) => theme.colors.primary};
`;

export const HeadItemStyle = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    flex: 1;
    text-align: center;

       &:first-child{
        flex: 0.7;
    }
`;

export const RowItemStyle = styled.div`
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

export const RowColStyle = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    flex: 1;
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-size: clamp(1.2rem, 1.6vw, 1.6rem);

    &:first-child{
        flex: 0.7;
        /* padding-right: 2rem; */
    }
`;

export const LinkStyle = styled(Link)`
    text-decoration: none;
`;

export const FlagStyle = styled.img`
    height: clamp(2rem, 10vw, 10rem);
    width: clamp(2rem, 15vw, 15rem);
    display: block;
    object-fit: cover;
`;

export const MessageTextStyle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(1.6rem, 2vw, 2rem);
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    text-align: center;
`;