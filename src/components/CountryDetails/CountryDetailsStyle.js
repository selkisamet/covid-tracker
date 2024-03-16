import { Link } from "react-router-dom";
import styled from "styled-components";

export const DetailsWrapStyle = styled.div`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

     @media screen and (max-width: 576px) {
        flex-direction: column;
    }
`;

export const FlagAndCountryStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`;

export const FlagStyle = styled.img`
    width: clamp(6rem, 10vw, 10rem);
    box-shadow: 0 0 5rem 0 rgba(255, 255, 255, 0.5);
`;

export const CountryNameStyle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const BreadCrumbStyle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    gap: 1rem;
`;

export const LinkStyle = styled(Link)`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
`;

export const ActivePageStyle = styled.div`
    color: ${({ theme }) => theme.colors.ninth};
`;

export const InfoCardWrapStyle = styled.div`
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

export const CardItemStyle = styled.div`
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

export const TitleStyle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(1.8rem, 2vw, 2.4rem);
`;

export const CountStyle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: ${({ theme }) => theme.fontWeights.black};
`;

export const ContentStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const RowItemStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`;

export const RowColStyle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-size: clamp(1.4rem, 2vw, 1.6rem);

    &:first-child {
        text-align: right;
        width: clamp(10rem, 13vw, 13rem);
        font-weight: ${({ theme }) => theme.fontWeights.black};
    }
`;