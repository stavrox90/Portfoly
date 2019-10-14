import React from "react";
import { makeStyles, AppBar, Tabs, Tab, Button, Box, Grid, Paper } from '@material-ui/core';
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
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
                        <Nav.Link
                            href="/about"
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            href="/projects"
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            href="/Contacts"
                        >
                            Contacts
                        </Nav.Link>
                        <Nav.Link href="*" />
                    </Nav>
                </Box>
            </Navbar>
        </div >
    );
};

export default Navigation;

{/* <Grid>
    <Navbar bg="primary" variant="dark">
        <Container>
            <Col>
                <Navbar.Brand href="/">
                    <img
                        src={brand}
                        width="50"
                        height="50"
                        alt="Z'yev"
                    // style={{
                    //     background: "white",
                    //     borderRadius: "50%",
                    //     padding: "1px",
                    //     boxShadow: "0 0 0 1px white",
                    //     position: "relative",
                    //     left: "28px"
                    // }}
                    />
                    <h2>Portfoly</h2>
                </Navbar.Brand>
            </Col>
            <Row>
                <Col>
                    <Nav>
                        <Nav.Link
                            href="/about"
                            style={{
                                padding: "0 10px 0 0",
                                position: "relative",
                                top: "28px",
                                right: "10px"
                            }}
                        >
                            <h6>About</h6>
                        </Nav.Link>
                        <Nav.Link
                            href="/projects"
                            style={{
                                padding: "0 10px 0 0",
                                position: "relative",
                                top: "28px",
                                right: "10px"
                            }}
                        >
                            <h6>Projects</h6>
                        </Nav.Link>
                        <Nav.Link
                            href="/Contacts"
                            style={{
                                padding: "0 10px 0 0",
                                position: "relative",
                                top: "28px",
                                right: "10px"
                            }}
                        >
                            <h6>Contacts</h6>
                        </Nav.Link>
                        <Nav.Link href="*" />
                    </Nav>
                </Col>
            </Row>
        </Container>
    </Navbar>
</Grid> */}