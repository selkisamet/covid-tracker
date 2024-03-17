import React, { Fragment, useEffect, useRef, useState } from "react";
import data from "../../../data.json";
import IconCancel from "../../../assets/icons/cancel.svg";
import { MapWrapStyle, HoverBoxStyle, DetailBoxStyle, DetailButtonStyle, DetailCancelButtonStyle, IconCancelStyle } from "./WorldMapStyle";
import Modal from "../../UI/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../../../redux/actions";
import { Link } from "react-router-dom";

const WorldMap = () => {
    const [hoveredCountry, setHoveredCountry] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [detailButtonPosition, setDetailButtonPosition] = useState({ x: null, y: null });
    const [showDetailButton, setShowDetailButton] = useState(false);
    const svgRef = useRef(null);
    const modal = useSelector((state) => state.modal.isOpen);
    const selectedCountryCode = useSelector((state) => state.country.countryCode);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.modalAction.setModalData({}));
        dispatch(Actions.modalAction.setModalLoading(true));
    }, []);

    const handleSelectedCountry = (value) => {
        const countryCode = value.alpha3;
        dispatch(Actions.modalAction.isOpenModal(true));
        dispatch(Actions.modalAction.setModalLoading(true));
        dispatch(Actions.countryAction.selectedCountryCode(countryCode))
    };

    const handleMouseMove = (e) => {
        const svg = svgRef.current;
        if (!svg) return;
        const svgRect = svg.getBoundingClientRect();
        const mouseX = e.clientX - svgRect.left + 15;
        const mouseY = e.clientY - svgRect.top + 15;
        setMousePosition({ x: mouseX, y: mouseY });
    };

    const handleContextMenu = (e, country) => {
        e.preventDefault();
        const svg = svgRef.current;
        if (!svg) return;
        const svgRect = svg.getBoundingClientRect();
        const mouseX = e.clientX - svgRect.left;
        const mouseY = e.clientY - svgRect.top;
        setDetailButtonPosition({ x: mouseX, y: mouseY });
        dispatch(Actions.countryAction.selectedCountryCode(country.alpha3))
        setShowDetailButton(true);
    };

    const handleCancelDetailButtonClick = () => {
        setShowDetailButton(false);
    };


    return (
        <Fragment>
            <MapWrapStyle onMouseMove={handleMouseMove}>
                <svg
                    ref={svgRef}
                    viewBox="0 0 1009.6727 665.96301"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {data.map((country, index) => (

                        <g key={index} onClick={() => handleSelectedCountry(country)}>
                            <path
                                id={country.alpha3}
                                title={country.title}
                                d={country.d}
                                style={hoveredCountry ? { fill: hoveredCountry === country.title ? "#C3B8FF" : "#9384DE", cursor: "pointer" } : { fill: selectedCountryCode === country.alpha3 ? "#C3B8FF" : "#9384DE", cursor: "pointer" }}
                                stroke="#091236"
                                strokeWidth="1"
                                onMouseEnter={() => setHoveredCountry(country.title)}
                                onMouseLeave={() => setHoveredCountry(null)}
                                onContextMenu={(e) => handleContextMenu(e, country)}
                            />
                        </g>
                    ))}
                </svg>

                {showDetailButton && (
                    <DetailBoxStyle style={{ top: detailButtonPosition.y, left: detailButtonPosition.x }}>
                        <Link to={`/country-details/${selectedCountryCode.toLowerCase()}`}>
                            <DetailButtonStyle>Ülke Detayı</DetailButtonStyle>
                        </Link>

                        <DetailCancelButtonStyle onClick={handleCancelDetailButtonClick}>
                            <IconCancelStyle src={IconCancel}></IconCancelStyle>
                        </DetailCancelButtonStyle>
                    </DetailBoxStyle>
                )
                }

                {
                    hoveredCountry && (
                        <HoverBoxStyle style={{ left: mousePosition.x, top: mousePosition.y }}>
                            {hoveredCountry}
                        </HoverBoxStyle>
                    )
                }



            </MapWrapStyle >

            {
                modal && <Modal />
            }
        </Fragment>

    )
}

export default WorldMap;