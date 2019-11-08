import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export const CoffeeMachineShopping = props => {
    const { machineColors, machineName, machinePrice, thumbUrl } = props;
    const [currentColorMachine, setCurrentColorMachine] = useState(
        machineColors[0]
    );
    console.log("currentColorMachine : ", currentColorMachine);
    return (
        <Row className="machine-shopping-wrapper">
            <Container>
                <Button
                    variant="outline-secondary"
                    size="sm"
                    style={{ float: "right" }}
                    onClick={props.closeShoppingArea}
                >
                    Sluiten
                </Button>
                <Row>
                    <Col md={8} className="shopping-inner">
                        <h3>
                            <span className="stepUp">Stap 1</span> Uw
                            machinekeuze
                        </h3>
                        <Row className="product-choice step1">
                            <Col md={6} className="choices-box">
                                <div className="choice-box-wrapper choice-box-machine">
                                    <Image
                                        className="choice-box-main-image"
                                        src={thumbUrl}
                                    />
                                    <p className="product-name">
                                        {machineName}
                                    </p>
                                    <p className="product-price">
                                        &euro;{machinePrice}
                                    </p>
                                </div>
                            </Col>
                            <Col md={6} className="choices-box">
                                <div className="choice-box-wrapper choice-box-color">
                                    <h4>Selecteer uw kleur</h4>
                                    <ul>
                                        {machineColors.map(machineColorItem => {
                                            return (
                                                <li
                                                    key={
                                                        machineColorItem.color_id
                                                    }
                                                    onClick={() => {
                                                        console.log(
                                                            "Clicked Li : ",
                                                            machineColorItem
                                                        );
                                                    }}
                                                >
                                                    <Image
                                                        src={
                                                            machineColorItem.color_dash
                                                        }
                                                        className="choice-box-color-dash"
                                                    />
                                                    <span className="choice-box-color-desc">
                                                        {
                                                            machineColorItem.color_desc
                                                        }
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row className="product-choice step2">
                            Coffee choice
                        </Row>
                        <Row className="product-choice step3">
                            Accessories choice
                        </Row>
                    </Col>
                    <Col md={4} className="shopping-cart">
                        Cart
                    </Col>
                </Row>
            </Container>
        </Row>
    );
};
