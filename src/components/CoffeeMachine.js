import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CoffeeMachineItem } from "./coffee-machine-item/CoffeeMachineItem";

export const CoffeeMachine = () => {
    let { coffeeSlug } = useParams();
    const [machine, setMachine] = useState({});
    const [coffee, setCoffee] = useState({});
    const [accessories, setAccessories] = useState({});
    const [noData, setNoData] = useState(true);

    useEffect(() => {
        const dataUrl = `http://localhost:3000/${coffeeSlug}.json`;
        const coffeeDataUrl = `http://localhost:3000/coffee.json`;
        const accessoriesDataUrl = `http://localhost:3000/accessories.json`;
        const fetchData = async () => {
            try {
                const result = await axios(dataUrl);
                const coffeeResult = await axios(coffeeDataUrl);
                const accessoriesResult = await axios(accessoriesDataUrl);
                setMachine(result.data.machine);
                setCoffee(coffeeResult.data.coffee);
                setAccessories(accessoriesResult.data.accessories);
                setNoData(false);
            } catch (error) {
                setNoData(true);
            }
        };
        fetchData();
    }, [coffeeSlug]);

    return (
        <>
            {noData ? (
                <div>No coffee yet...</div>
            ) : (
                <CoffeeMachineItem
                    machine={machine}
                    coffee={coffee}
                    accessories={accessories}
                />
            )}
        </>
    );
};
