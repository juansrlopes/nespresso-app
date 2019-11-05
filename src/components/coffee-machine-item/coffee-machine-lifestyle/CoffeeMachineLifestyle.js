import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./CoffeeMachineLifestyle.scss";

export const CoffeeMachineLifestyle = props => {
    const { lifestyleImages, machineContent, machineLifestyleMain } = props;
    return (
        <Row style={{ marginTop: "40px" }}>
            <Col md={6} className="machine-col machine-lifestyle">
                <Image
                    className="machine-lifestyle-main-iamge"
                    src={machineLifestyleMain}
                />
                <div className="machine-photos-banner">
                    {lifestyleImages.map((image, index) => {
                        return <Image src={image} key={index} />;
                    })}
                </div>
            </Col>
            <Col md={6} className="machine-col machine-visualblock-text-wrap">
                <div className="machine-visualblock-text">
                    <h3>{machineContent.visualblock.title}</h3>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: machineContent.visualblock.description
                        }}
                        className="machine-description"
                    ></p>
                </div>
            </Col>
        </Row>
    );
};
