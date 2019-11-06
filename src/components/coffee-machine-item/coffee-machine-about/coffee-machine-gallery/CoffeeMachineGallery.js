import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CoffeeMachineGallery.scss";

export const CoffeeMachineGallery = props => {
    const { machineGallery } = props;
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
    return (
        <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
            interval={7000}
            className="gallery-carousel"
        >
            {machineGallery.map((image, imageIndex) => {
                return (
                    <Carousel.Item key={imageIndex}>
                        <img
                            className="carousel-image"
                            src={image.thumbUrl}
                            alt="Carousel visual"
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};
