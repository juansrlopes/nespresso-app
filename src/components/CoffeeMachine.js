import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

export const CoffeeMachine = () => {
    let { coffeeSlug } = useParams();

    return (
        <Container>
            <div>Hello {coffeeSlug}</div>
        </Container>
    );
};
