import React from 'react'
import avatar from '../images/avatar.jpg'
import { tools } from './details'
import { Grid, Box, Paper, CardHeader } from '@material-ui/core';
import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";

function About() {


    return (
        <div>
            <Jumbotron>
                <h3 style={{ textAlign: "center" }}>Introduction</h3>
                <br />
                <Grid style={{ textAlign: "center" }}>
                    <p>
                        I'm an alumni from UiTM (Seri Iskandar, Perak) since 2013, and my
                        field of study was Quantity Surveying (Diploma).
                    </p>
                    <p>
                        I've worked in my previous field as Quantity Surveyor for 5 years
                        for local Consultant Firm, Contractors and Landscape Architect..
                        and started questioning my own passions and current jobscopes.
                    </p>
                    <p>
                        My coding journey started around 2017, when I tried coding using HTML,
                        PHP, MySQL, Javascript with the help of my programmer friends and
                        started using ReactJS in mid 2019.
                </p>
                    <p>
                        Apart from programming, I'm also a musician, a bassist for our local Melodic Death Metal band, named
                        <a href="https://www.deathreturns.my/bands/murder/" style={{ color: "gray" }}>{" "}Murder</a>.
                </p>
                    <p>Coffee? My favourite beverage!</p>
                </Grid>
            </Jumbotron>
            <Container>
                <h4 style={{ marginLeft: "20px" }}>My current tools</h4>
                <Row>
                    {tools.map(tools => {
                        return (
                            <Col>
                                <div
                                    style={{
                                        margin: "20px 30px 0 20px",
                                        padding: "20px 0 20px 0"
                                    }}
                                >
                                    <Card.Text>
                                        <h6>{tools.title}</h6>
                                        <p>{tools.value}</p>
                                    </Card.Text>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default About
