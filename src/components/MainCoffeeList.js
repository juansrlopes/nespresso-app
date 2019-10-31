import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { mainCoffeeList } from "../coffee-data/mainCoffee";

export const MainCoffeeList = () => {
    const coffeeDataList = mainCoffeeList.range;
    return (
        <Container>
            <Row>
                {coffeeDataList.map(coffeeDataItem => {
                    return (
                        <Col xs={6} md={4}>
                            <Card>
                                <Card.Header as="h5">
                                    {coffeeDataItem.machine_name}
                                </Card.Header>
                                <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/300"
                                />
                                <Card.Body>
                                    <Card.Text>
                                        Price: &euro;{" "}
                                        {coffeeDataItem.nesOAMachine_price}
                                    </Card.Text>
                                    <Button variant="primary">See more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};
