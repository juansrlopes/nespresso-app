import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const HeaderNav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Link to="/" style={{ color: "#fff" }}>
                Nespresso App
            </Link>
            <Nav
                className="justify-content-end"
                activeKey="/about"
                style={{ width: "90%" }}
            >
                <Nav.Item>
                    <Link to="/about" style={{ color: "#fff" }}>
                        About
                    </Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};
