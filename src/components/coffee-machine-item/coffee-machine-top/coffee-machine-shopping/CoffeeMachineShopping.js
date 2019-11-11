import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export const CoffeeMachineShopping = props => {
    const { machineColors, machineName, machinePrice } = props;
    const [currentColorMachine, setCurrentColorMachine] = useState(
        machineColors[0]
    );
    const [currentIndex, setCurrentIndex] = useState(0);
    const functionSetCurrentMachine = (machineColorItem, index) => {
        console.log(" Params function : ", machineColorItem, index);
        setCurrentColorMachine(machineColorItem);
        setCurrentIndex(index);
    };
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
                                        src={
                                            currentColorMachine.color_gallery[0]
                                                .thumbUrl
                                        }
                                        alt={
                                            currentColorMachine.color_gallery[0]
                                                .alt
                                        }
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
                                        {machineColors.map(
                                            (machineColorItem, index) => {
                                                return (
                                                    <li
                                                        key={
                                                            machineColorItem.color_id
                                                        }
                                                        onClick={() => {
                                                            functionSetCurrentMachine(
                                                                machineColorItem,
                                                                index
                                                            );
                                                        }}
                                                        className={
                                                            currentIndex ===
                                                            index
                                                                ? "color-list-active"
                                                                : ""
                                                        }
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
                                            }
                                        )}
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
                        <div>
                            {machineName} : {currentColorMachine.color_price}
                        </div>
                        <div>{currentColorMachine.color_desc}</div>
                    </Col>
                </Row>
            </Container>
        </Row>
    );
};
