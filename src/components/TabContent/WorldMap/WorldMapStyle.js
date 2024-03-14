import styled from "styled-components";

export const MapWrapStyle = styled.div`
    position: relative;
`;

export const HoverBoxStyle = styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
`;

export const DetailBoxStyle = styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;

export const DetailButtonStyle = styled.button`
    background-color: ${({ theme }) => theme.colors.second};
    padding: 0.5rem;
    height: 2.7rem;
    width: 10rem;
    border: none;
    border-radius: 0.3rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover{
        background-color: ${({ theme }) => theme.colors.third};
    }
`;

export const DetailCancelButtonStyle = styled.button`
    height: 2.7rem;
    border-radius: 0.3rem;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.fourth};
    width: 2.7rem;
    transition: all 0.2s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover{
        background-color: ${({ theme }) => theme.colors.fifth};
    }
`;

export const IconCancelStyle = styled.img`
    width: 1.6rem;
`;
