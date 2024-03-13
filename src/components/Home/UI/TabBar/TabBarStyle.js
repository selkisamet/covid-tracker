import styled from "styled-components";
import { theme } from "../../../../GlobalStyle";

export const TabBarWrapStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 0.1px ${({ theme }) => theme.colors.primary};
    border-radius: 20rem;
    height: 7rem;
    width: 50%;
    margin: 0 auto;
    padding: 0%.5rem;
    margin-top: 10rem;
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
    transition: all 0.3s ease;

   &:first-child {
        border-top-left-radius: 20rem;
        border-bottom-left-radius: 20rem;
    }

     &:last-child {
        border-top-right-radius: 20rem;
        border-bottom-right-radius: 20rem;
    }
`;
