import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { CoffeeMachineFuncs } from "./coffee-machine-funcs/CoffeeMachineFuncs";
import { CoffeeMachineSpecs } from "./coffee-machine-specs/CoffeeMachineSpecs";
import { CoffeeMachineGallery } from "./coffee-machine-gallery/CoffeeMachineGallery";
import "./CoffeeMachineAbout.scss";

export const CoffeeMachineAbout = props => {
    const { funcs, specs, machineGallery, machineName } = props;

    return (
        <Row id="machine-about">
            <Container>
                <div className="machine-about-wrapper">
                    <h3>Meer weten over de {machineName}</h3>
                    <Tabs
                        defaultActiveKey="specificaties"
                        id="machine-tabs"
                        className="machine-tabs-wrapper"
                    >
                        <Tab eventKey="specificaties" title="Specificaties">
                            <h4>Functionele Specificaties</h4>
                            <CoffeeMachineFuncs funcs={funcs} />
                            <h4>Technische Specificaties</h4>
                            <CoffeeMachineSpecs specs={specs} />
                        </Tab>
                        <Tab eventKey="fotogalerij" title="Fotogalerij">
                            <CoffeeMachineGallery
                                machineGallery={machineGallery}
                            />
                        </Tab>
                        <Tab
                            eventKey="veelgesteldeVragen"
                            title="Veelgestelde Vragen"
                        >
                            Veelgestelde Vragen
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </Row>
    );
};
