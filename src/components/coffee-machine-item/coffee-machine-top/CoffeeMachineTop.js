import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./CoffeeMachineTop.scss";

export const CoffeeMachineTop = props => {
    const { thumbUrl, machineName, machineSubline, machineDescription } = props;
    return (
        <Container className="machine-top-wrapper">
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
                </Col>
            </Row>
        </Container>
    );
};
