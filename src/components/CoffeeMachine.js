import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { CoffeeMachineItem } from "./coffee-machine-item/CoffeeMachineItem";

export const CoffeeMachine = () => {
    let { coffeeSlug } = useParams();
    const [machine, setMachine] = useState({});
    const [noData, setNoData] = useState(true);

    useEffect(() => {
        const dataUrl = `http://localhost:3000/${coffeeSlug}.json`;
        const fetchData = async () => {
            try {
                const result = await axios(dataUrl);
                setMachine(result.data.machine);
                setNoData(false);
            } catch (error) {
                setNoData(true);
            }
        };
        fetchData();
    }, [coffeeSlug]);

    return (
        <>
            <Container>
                {noData ? (
                    <div>No coffee yet...</div>
                ) : (
                    <CoffeeMachineItem machine={machine} />
                )}
            </Container>
        </>
    );
};
