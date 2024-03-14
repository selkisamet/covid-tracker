import React, { useRef, useState } from "react";
import data from "../../../data.json";
import IconCancel from "../../../assets/icons/cancel.svg";
import { MapWrapStyle, HoverBoxStyle, DetailBoxStyle, DetailButtonStyle, DetailCancelButtonStyle, IconCancelStyle } from "./WorldMapStyle";
import { Link } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";

const WorldMap = () => {
    const [selectedCountryCode, setSelectedCountryCode] = useState(null);
    const [hoveredCountry, setHoveredCountry] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [detailButtonPosition, setDetailButtonPosition] = useState({ x: null, y: null });
    const [showDetailButton, setShowDetailButton] = useState(false);
    const [modal, setModal] = useState(false);
    const svgRef = useRef(null);

    const handleSelectedCountry = (value) => {
        const countryCode = value.id;
        setSelectedCountryCode(countryCode);
    };

    const handleMouseMove = (e) => {
        const svg = svgRef.current;
        if (!svg) return;
        const svgRect = svg.getBoundingClientRect();
        const mouseX = e.clientX - svgRect.left + 15;
        const mouseY = e.clientY - svgRect.top + 15;
        setMousePosition({ x: mouseX, y: mouseY });
    };

    const handleDetailButtonClick = (e, country) => {
        e.stopPropagation(); // Path tıklamasını engelle
        console.log("Detay butonuna tıklandı:", country);
        // Detay butonu tıklama işlemleri burada yapılabilir
    };

    const handleContextMenu = (e, country) => {
        e.preventDefault();
        const svg = svgRef.current;
        if (!svg) return;
        const svgRect = svg.getBoundingClientRect();
        const mouseX = e.clientX - svgRect.left;
        const mouseY = e.clientY - svgRect.top;
        setDetailButtonPosition({ x: mouseX, y: mouseY });
        setSelectedCountryCode(country.id);
        setShowDetailButton(true);
    };

    const handleCancelDetailButtonClick = () => {
        setShowDetailButton(false);
    };


    return (
        <MapWrapStyle onMouseMove={handleMouseMove}>
            <svg
                ref={svgRef}
                viewBox="0 0 1009.6727 665.96301"
                preserveAspectRatio="xMidYMid meet"
            >
                {data.map((country, index) => (

                    <g key={index} onClick={() => handleSelectedCountry(country)}>
                        <path
                            id={country.id}
                            title={country.title}
                            d={country.d}
                            style={hoveredCountry ? { fill: hoveredCountry === country.title ? "#C3B8FF" : "#9384DE", cursor: "pointer" } : { fill: selectedCountryCode === country.id ? "#C3B8FF" : "#9384DE", cursor: "pointer" }}
                            stroke="#091236"
                            strokeWidth="1"
                            onMouseEnter={() => setHoveredCountry(country.title)}
                            onMouseLeave={() => setHoveredCountry(null)}
                            onContextMenu={(e) => handleContextMenu(e, country)}
                            onClick={() => setModal(true)}
                        />
                    </g>
                ))}
            </svg>

            {showDetailButton && (
                <DetailBoxStyle style={{ top: detailButtonPosition.y, left: detailButtonPosition.x }}>
                    <Link to="/country-details">
                        <DetailButtonStyle onClick={(e) => handleDetailButtonClick(e, data.find(item => item.id === selectedCountryCode))}>Ülke Detayı</DetailButtonStyle>
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

            {
                modal && <Modal setModal={setModal} />
            }

        </MapWrapStyle >
    )
}

export default WorldMap;