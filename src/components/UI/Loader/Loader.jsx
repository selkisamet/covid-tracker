import React from "react";
import LoaderGif from "../../../assets/icons/loader.gif";
import { LoaderGifStyle } from "./LoaderStyle.js";

const Loader = () => {
    return (
        <LoaderGifStyle src={LoaderGif} />
    )
}

export default Loader;