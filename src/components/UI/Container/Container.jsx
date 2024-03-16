import React from "react";
import { ContainerStyle } from "./ContainerStyle";

const Container = ({ children }) => {
    return (
        <ContainerStyle>
            {children}
        </ContainerStyle >
    )
}

export default Container;