import styled from "styled-components";

export const ModalStyle = styled.div`
    position: absolute;
    max-width: clamp(90rem, 5vw, 90rem);
    width: 100%;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
    padding: 2rem;
`;

export const OverlayStyle = styled.div`
    background-color: rgba(147, 132, 222, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    z-index: -1;
    backdrop-filter: blur(5rem);
`;

export const ModalHeaderStyle = styled.div`
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(2.7rem, 5vw, 3.4rem);
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    position: relative;
    margin-top: 1rem;
`;

export const IconModalCancelStyle = styled.img`
    position: absolute;
    max-width: clamp(2.4rem, 5vw, 3rem);
    top: 0.5rem;
    right: 2rem;
    cursor: pointer;
`;