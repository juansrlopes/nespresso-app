import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./CoffeeMachineTop.scss";

export const CoffeeMachineTop = props => {
    const [showPurchaseMessage, setShowPurchaseMessage] = useState(false);
    const [shoppingArea, setshoppingArea] = useState(false);
    const {
        thumbUrl,
        machineName,
        machineSubline,
        machineDescription,
        machineTopUsp,
        machinePrice
    } = props;

    const purchasedMachine = () => {
        setShowPurchaseMessage(true);
        setTimeout(function() {
            setShowPurchaseMessage(false);
        }, 4000);
    };

    const showMainShoppingArea = () => {
        setshoppingArea(true);
    };

    const closeShoppingArea = () => {
        setshoppingArea(false);
    };

    return (
        <>
            <Container className="machine-top-wrapper">
                {showPurchaseMessage && (
                    <Alert variant="success">
                        You just purchased a {machineName}
                    </Alert>
                )}
                <Link to={"/"}>
                    <Button variant="dark">Back to machines</Button>
                </Link>
                <Row className="machine-top-row">
                    <Col md={4}>
                        <Image src={thumbUrl} fluid />
                    </Col>
                    <Col md={{ span: 6, offset: 2 }}>
                        <h1 className="machine-title">{machineName}</h1>
                        <h2 className="machine-subtitle">{machineSubline}</h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: machineDescription
                            }}
                            className="machine-description"
                        ></p>
                        <div>
                            <a href="#machine-about" className="anchor-to">
                                Meer informatie
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="machine-top-row">
                    {machineTopUsp.map((machineTopUspItem, index) => {
                        return (
                            <Col md={4} key={index}>
                                <div className="machine-extra-features">
                                    <Image
                                        src={machineTopUspItem.icon_url}
                                        className="machine-usp-icon"
                                    />{" "}
                                    <p>{machineTopUspItem.icon_description}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
                <Row className="machine-top-row machine-main-tab">
                    <Col md={6} className="machine-main-tab-col">
                        <Card className="machine-main-card adviesprijs-card">
                            <Card.Header>Machine Adviesprijs</Card.Header>
                            <Card.Body>
                                <Card.Title>&euro;{machinePrice}</Card.Title>
                                <Button
                                    variant="success"
                                    onClick={purchasedMachine}
                                >
                                    Bestellen
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="machine-main-tab-col">
                        <Card className="machine-main-card aanbieding-card">
                            <Card.Header>Machine Aanbieding</Card.Header>
                            <Card.Body
                                className={`${
                                    shoppingArea ? "aanbieding-card-active" : ""
                                }`}
                            >
                                <Card.Title>&euro;{machinePrice}</Card.Title>
                                <Card.Text>
                                    Bij aanschaf van minimaal 200 capsules
                                </Card.Text>
                                <Button
                                    variant="success"
                                    onClick={showMainShoppingArea}
                                >
                                    Bekijk aanbod
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {shoppingArea && (
                <Row className="machine-shopping-wrapper">
                    <Container>
                        <Button
                            variant="outline-secondary"
                            size="sm"
                            style={{ float: "right", marginTop: "20px" }}
                            onClick={closeShoppingArea}
                        >
                            Sluiten
                        </Button>
                        <Row>
                            <Col md={8} className="shopping-inner">
                                Shopping
                            </Col>
                            <Col md={4} className="shopping-cart">
                                Cart
                            </Col>
                        </Row>
                    </Container>
                </Row>
            )}
        </>
    );
};
