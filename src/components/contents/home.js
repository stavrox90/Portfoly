import React from 'react'
import { Bamboozle } from '../layout'
import avatar from '../images/avatar.jpg'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

const useStyles = makeStyles({
    avatar: {
        margin: "auto",
        width: "20vh",
        height: "auto",
        boxShadow: "0 0 0 5px #007cfe",
        border: "5px inset white",
    },
})


function Home() {
    const classes = useStyles();

    return (
        <div>
            <div className="avatar">
                <Grid container justify="center" alignItems="center" style={{ height: "40vh" }}>
                    <Avatar alt="Filus Inra" src={avatar} className={classes.avatar} />
                </Grid>
            </div>
            <Jumbotron className="center">
                <Container className="justify-content-md-center">
                    <Row>
                        <Col>
                            <h1 class="text-center">Hello, World!</h1>
                            <p class="text-center">
                                My name is Filus Inra, and welcome to my portfolio!
                  </p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            {/* <Bamboozle /> */}
        </div>
    )
}

export default Home
