import React from "react";
import { makeStyles, Grid, Paper } from '@material-ui/core';
import { Row, Col, Card } from "react-bootstrap";
import { contacts } from "./details";

const useStyles = makeStyles({
    card: {
        maxWidth: "auto",
        margin: "10px 0 10px 0",
    },
    container: {
        width: "100%",
        flexWrap: "wrap",
        boxSizing: "borderBox",
    },
    icon: {
        width: "60px",
        height: "60px"
    }
});

const Contacts = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.container}>
                {contacts.map(contacts => {
                    return (
                        <div>
                            <Paper>
                                <a href={contacts.url} style={{ textDecoration: "none" }}>
                                    <Card
                                        style={{
                                            height: "100px",
                                            padding: "0 60px 0 60px",
                                            marginTop: "10px",
                                            background: contacts.color,
                                            color: "white",
                                            textDecoration: "none"
                                        }}
                                    >
                                        <Card.Title />
                                        <Row>
                                            <Col
                                                style={{ position: "relative", top: "10px", right: "20px" }}
                                            >
                                                <h5>{contacts.title}</h5>
                                            </Col>
                                            <Col style={{ textAlign: "right" }}>
                                                <Card.Img
                                                    src={contacts.img}
                                                    style={{
                                                        width: "3rem",
                                                        border: "0.1rem outset white",
                                                        borderRadius: "10%",
                                                        position: "relative",
                                                        left: "20px",
                                                        top: "12px"
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col
                                                style={{
                                                    position: "relative",
                                                    bottom: "10px",
                                                    right: "20px"
                                                }}
                                            >
                                                <Card.Text>{contacts.value}</Card.Text>
                                            </Col>
                                        </Row>
                                    </Card>
                                </a>
                            </Paper>
                        </div>
                    );
                })}
            </Grid>
        </div>
    );
};

export default Contacts;

