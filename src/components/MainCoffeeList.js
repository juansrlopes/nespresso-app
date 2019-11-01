import React from "react";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { mainCoffeeList } from "../coffee-data/mainCoffee";

export const MainCoffeeList = () => {
    const coffeeDataList = mainCoffeeList.range;

    return (
        <>
            <Helmet>
                <title>
                    Koffiemachines voor de perfecte kop koffie | Nespresso
                </title>
            </Helmet>
            <Container>
                <Row>
                    {coffeeDataList.map(coffeeDataItem => {
                        return (
                            <Col
                                md={3}
                                style={{ marginBottom: "20px" }}
                                key={coffeeDataItem.machine_slug}
                            >
                                <Card style={{ border: "none" }}>
                                    <Card.Img
                                        variant="top"
                                        src={coffeeDataItem.machine_show}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            {coffeeDataItem.machine_name}
                                        </Card.Title>
                                        <Card.Text>
                                            Price: &euro;{" "}
                                            {coffeeDataItem.nesOAMachine_price}
                                        </Card.Text>
                                        <Button variant="dark">
                                            <Link
                                                to={`/coffee/${coffeeDataItem.machine_slug}`}
                                                style={{ color: "#fff" }}
                                            >
                                                See More
                                            </Link>
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};
