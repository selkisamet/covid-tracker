import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
    return (
        <ContainerStyle>
            {children}
        </ContainerStyle>
    )
}

export default Container;

const ContainerStyle = styled.div`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
`;