import React from "react";
import { Box } from '@material-ui/core';
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.jpg";

const Navigation = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        alt="Z'yev"
                        style={{
                            background: "white",
                            borderRadius: "50%",
                            padding: "1px",
                            boxShadow: "0 0 0 1px white",
                        }}
                    />
                    {" "}Portfoly
                    </Navbar.Brand>
                <Box>
                    <Nav>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/Contacts">Contacts</Nav.Link>
                    </Nav>
                </Box>
            </Navbar>
        </div >
    );
};

export default Navigation;