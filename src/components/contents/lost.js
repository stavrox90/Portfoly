import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

function Lost() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Aaand we're lost...</h1>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <br />
                <p>Gotta love all these placeholder!{" "}
                    <span role="img" aria-label="sparkling heart">💖</span>
                    <span role="img" aria-label="tears of joy">😂</span>
                </p>
            </Container>
        </Jumbotron>
    );
}

export default Lost;
