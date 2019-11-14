import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";

export const CoffeeMachineShopping = props => {
    const {
        machineColors,
        machineName,
        machinePrice,
        coffee,
        machineCoffeeIds,
        accessories
    } = props;
    const [currentColorMachine, setCurrentColorMachine] = useState(
        machineColors[0]
    );
    const [currentMachineIndex, setCurrentMachineIndex] = useState(0);
    const [currentCoffeeIndex, setCurrentCoffeeIndex] = useState(0);
    const [accessoriesArea, setAccessoriesArea] = useState(false);
    const functionSetCurrentMachine = (machineColorItem, index) => {
        setCurrentColorMachine(machineColorItem);
        setCurrentMachineIndex(index);
    };
    const functionSetCurrentCoffee = (coffeeBoxitem, index) => {
        setCurrentCoffee(coffeeBoxitem);
        setCurrentCoffeeIndex(index);
    };
    let resultArray = [];
    coffee.category.boxes.map(coffeeBoxItem => {
        machineCoffeeIds.map(machineCoffeeIdsItem => {
            if (coffeeBoxItem.sku === machineCoffeeIdsItem) {
                resultArray.push(coffeeBoxItem);
            }
            return true;
        });
        return true;
    });
    const [currentCoffee, setCurrentCoffee] = useState(resultArray[0]);
    const settings = {
        dots: false,
        controls: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    let accessoriesArray = [];
    accessories.map(accessoriesItem => {
        if (accessoriesItem.inStock === true) {
            accessoriesArray.push(accessoriesItem);
        }
    });
    return (
        <Row className="machine-shopping-wrapper">
            <Container>
                <Button
                    variant="outline-danger"
                    size="sm"
                    style={{ float: "right" }}
                    onClick={props.closeShoppingArea}
                >
                    X
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
                                        src={currentColorMachine.color_show}
                                        alt={`Machine color ${currentColorMachine.color_desc}`}
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
                                                            currentMachineIndex ===
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
                        <h3>
                            <span className="stepUp">Stap 2</span> Kies Uw
                            Koffieassortiment
                        </h3>
                        <Row className="product-choice step2">
                            {resultArray.map((coffeeBoxitem, index) => {
                                return (
                                    <Col
                                        md={12 / resultArray.length}
                                        className="choices-box"
                                        key={coffeeBoxitem.sku}
                                    >
                                        <div
                                            className={`choice-box-wrapper choice-box-coffee ${
                                                currentCoffeeIndex === index
                                                    ? "coffee-list-active"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                functionSetCurrentCoffee(
                                                    coffeeBoxitem,
                                                    index
                                                );
                                            }}
                                        >
                                            <Image
                                                src={coffeeBoxitem.show}
                                                className="choice-box-main-image"
                                            />
                                            <p className="product-name">
                                                {coffeeBoxitem.name}
                                            </p>
                                            <p className="product-quantity">
                                                {coffeeBoxitem.quantity}
                                            </p>
                                            <p className="product-price">
                                                <span className="price-was">
                                                    &euro;
                                                    {parseFloat(
                                                        coffeeBoxitem.price
                                                    ).toFixed(2)}
                                                </span>{" "}
                                                &euro;
                                                {parseFloat(
                                                    coffeeBoxitem.price -
                                                        coffeeBoxitem.discount
                                                ).toFixed(2)}
                                            </p>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                        {accessoriesArea && (
                            <>
                                <h3>
                                    <span className="stepUp">Stap 3</span> Kies
                                    Uw Accessoire
                                </h3>
                                <Row className="product-choice step3">
                                    {accessoriesArray.length > 0 && (
                                        <Slider {...settings}>
                                            {accessoriesArray.map(
                                                (
                                                    accessoriesArrayItem,
                                                    index
                                                ) => {
                                                    return (
                                                        <>
                                                            {accessoriesArrayItem.inStock ===
                                                                true && (
                                                                <div
                                                                    className="sliderItem"
                                                                    key={index}
                                                                >
                                                                    <Image
                                                                        src={
                                                                            accessoriesArrayItem.show
                                                                        }
                                                                        fluid
                                                                    />
                                                                    <h3>
                                                                        {
                                                                            accessoriesArrayItem.name_prospect
                                                                        }
                                                                    </h3>
                                                                    <p>
                                                                        {parseFloat(
                                                                            accessoriesArrayItem.price
                                                                        ).toFixed(
                                                                            2
                                                                        )}
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </>
                                                    );
                                                }
                                            )}
                                        </Slider>
                                    )}
                                </Row>
                            </>
                        )}
                    </Col>
                    <Col md={4} className="shopping-cart">
                        <div className="shopping-cart-inner">
                            <div>
                                {machineName} : &euro;
                                {currentColorMachine.color_price}
                            </div>
                            <div>{currentColorMachine.color_desc}</div>
                            <div>
                                {currentCoffee.name} : &euro;
                                {parseFloat(
                                    currentCoffee.price - currentCoffee.discount
                                ).toFixed(2)}
                            </div>
                            <div>
                                Total: &euro;
                                {parseFloat(
                                    currentColorMachine.color_price +
                                        (currentCoffee.price -
                                            currentCoffee.discount)
                                ).toFixed(2)}
                            </div>
                            <br />
                            <div>
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => {
                                        setAccessoriesArea(true);
                                    }}
                                >
                                    Voeg Accessoire toe
                                </Button>
                            </div>
                            <br />
                            <div>
                                <Button
                                    variant="success"
                                    onClick={() => {
                                        console.log("You bought a machine");
                                    }}
                                >
                                    Bestelling Afrekenen
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Row>
    );
};
