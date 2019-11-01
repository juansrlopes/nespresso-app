import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import { CoffeeMachineItem } from "./coffee-machine-item/CoffeeMachineItem";

export const CoffeeMachine = () => {
    let { coffeeSlug } = useParams();

    const [machine, setMachine] = useState({});
    const [noData, setNoData] = useState(true);
    const [helmet, setHelmet] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(
                    `http://localhost:3000/${coffeeSlug}.json`
                );
                setMachine(result.data.machine);
                setNoData(false);
                setHelmet(machine.content[0].machine_name);
            } catch (error) {
                setNoData(true);
            }
        };
        fetchData();
    }, [coffeeSlug, machine]);

    return (
        <>
            <Helmet>
                <title>{helmet}</title>
            </Helmet>
            <Container>
                {noData ? (
                    <div>No coffee yet...</div>
                ) : (
                    <div>
                        <CoffeeMachineItem machine={machine} />
                    </div>
                )}
            </Container>
        </>
    );
};
