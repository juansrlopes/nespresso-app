import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { CoffeeMachineSpecs } from "./coffee-machine-specs/CoffeeMachineSpecs";
import { CoffeeMachineFuncs } from "./coffee-machine-funcs/CoffeeMachineFuncs";
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
            <Row
                style={{
                    backgroundColor: "#26211e",
                    flexDirection: "column",
                    padding: "4%"
                }}
            >
                <h3>Ontdek de voordelen van de Lattissima One</h3>
                <ul className="functionality">
                    {machineContent.usp.map(uspItem => {
                        return (
                            <li key={uspItem.func_id}>
                                <Image src={uspItem.func_icon} />
                                <p>{uspItem.func_title}</p>
                            </li>
                        );
                    })}
                </ul>
            </Row>
            <Row>
                <Container>
                    <div className="machine-about-wrapper">
                        <h3>
                            Meer weten over de {machineContent.machine_name}
                        </h3>
                        <Tabs
                            defaultActiveKey="specificaties"
                            id="machine-tabs"
                        >
                            <Tab eventKey="specificaties" title="Specificaties">
                                <h4>Functionele Specificaties</h4>
                                <CoffeeMachineFuncs
                                    funcs={machine.functionality}
                                />
                                <h4>Technische Specificaties</h4>
                                <CoffeeMachineSpecs
                                    specs={machine.specifications}
                                />
                            </Tab>
                            <Tab eventKey="fotogalerij" title="Fotogalerij">
                                Fotogalerij
                            </Tab>
                            <Tab
                                eventKey="veelgesteldeVragen"
                                title="Veelgestelde Vragen"
                            >
                                Veelgestelde Vragen
                            </Tab>
                        </Tabs>
                    </div>
                </Container>
            </Row>
        </>
    );
};
