import styled from "styled-components";

export const ModalStyle = styled.div`
    position: absolute;
    max-width: clamp(90rem, 5vw, 90rem);
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    padding: 2rem;

    @media screen and (max-width: 768px){
        width: 90%;
    }
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

export const ModalBodyStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 clamp(1rem , 5vw, 5rem);
    margin-top: 5rem;
`;

export const RowItemStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 3rem 0;
    border-bottom: solid 0.1rem ${({ theme }) => theme.colors.primary};

    &:last-child {
        border: none;
    }
`;

export const RowColStyle = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-size: clamp(1.4rem, 2vw, 1.6rem);

    &:first-child {
        text-align: right;
        width: clamp(13rem, 13vw, 13rem);
        font-weight: ${({ theme }) => theme.fontWeights.black};
        white-space: nowrap;
    }
`;

export const LoaderOverlayStyle = styled.div`
    background-color: rgba(147, 132, 222, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    backdrop-filter: blur(5rem);
`;