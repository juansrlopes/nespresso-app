import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { CoffeeMachineDetails } from "./coffee-machine-details/CoffeeMachineDetails";
import { CoffeeMachineAbout } from "./coffee-machine-about/CoffeeMachineAbout";
import "./CoffeeMachineItem.scss";

export const CoffeeMachineItem = props => {
    const { machine } = props;
    const machineContent = machine.content[0];
    const lifestyleImages = machine.lifestyle[0].machine_lifestylevisual;

    return (
        <>
            <Helmet>
                <title>{machineContent.machine_name}</title>
            </Helmet>
            <Container>
                <Link to={"/"}>
                    <Button variant="dark">Back to machines</Button>
                </Link>
                <Row style={{ marginTop: "40px" }}>
                    <Col md={4}>
                        <Image
                            src={machineContent.machine_gallery[0].thumbUrl}
                            fluid
                        />
                    </Col>
                    <Col md={{ span: 6, offset: 2 }}>
                        <h1 className="machine-title">
                            {machineContent.machine_name}
                        </h1>
                        <h2 className="machine-subtitle">
                            {machineContent.machine_subline}
                        </h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: machineContent.machine_description_full
                            }}
                            className="machine-description"
                        ></p>
                    </Col>
                </Row>
            </Container>
            <Row style={{ marginTop: "40px" }}>
                <Col md={6} className="machine-col machine-lifestyle">
                    <Image
                        className="machine-lifestyle-main-iamge"
                        src={machine.lifestyle[0].machine_lifestyle_main}
                    />
                    <div className="machine-photos-banner">
                        {lifestyleImages.map((image, index) => {
                            return <Image src={image} key={index} />;
                        })}
                    </div>
                </Col>
                <Col
                    md={6}
                    className="machine-col machine-visualblock-text-wrap"
                >
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
            <CoffeeMachineDetails usp={machineContent.usp} />
            <CoffeeMachineAbout
                machineName={machineContent.machine_name}
                funcs={machine.functionality}
                specs={machine.specifications}
            />
        </>
    );
};
