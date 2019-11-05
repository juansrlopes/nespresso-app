import React from "react";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "./CoffeeMachineDetails.scss";

export const CoffeeMachineDetails = props => {
    const { usp } = props;

    return (
        <Row className="machine-details-wrapper">
            <h3>Ontdek de voordelen van de Lattissima One</h3>
            <ul className="functionality">
                {usp.map(uspItem => {
                    return (
                        <li key={uspItem.func_id}>
                            <Image src={uspItem.func_icon} />
                            <p>{uspItem.func_title}</p>
                        </li>
                    );
                })}
            </ul>
        </Row>
    );
};
