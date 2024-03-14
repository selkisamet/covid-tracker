import styled from "styled-components";
import { theme } from "../../../GlobalStyle";

export const TabBarWrapStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ItemWrapStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 0.1px ${({ theme }) => theme.colors.primary};
    border-radius: 20rem;
    height: clamp(5rem, 5vw, 7rem);
    max-width: clamp(70rem, 5vw, 70rem);
    width: 100%;
    padding: 0 0.5rem;
    margin-top: 2rem;
`;

export const TabItemStyle = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
    height: calc(100% - 1rem);
     display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${(props) => (props.selected ? theme.colors.third : theme.colors.primary)};
    background-color: ${(props) => (props.selected ? theme.colors.primary : "transparent")};
    transition: all 0.2s ease;

   &:first-child {
        border-top-left-radius: 20rem;
        border-bottom-left-radius: 20rem;
    }

     &:last-child {
        border-top-right-radius: 20rem;
        border-bottom-right-radius: 20rem;
    }
`;
