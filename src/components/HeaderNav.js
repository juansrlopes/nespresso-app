import React from "react";
import Navbar from "react-bootstrap/Navbar";

export const HeaderNav = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Nespresso App</Navbar.Brand>
        </Navbar>
    );
};
