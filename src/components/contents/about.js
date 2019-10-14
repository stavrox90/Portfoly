import React from 'react'
import avatar from '../images/avatar.jpg'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';
import { Jumbotron } from 'react-bootstrap';

function About() {


    return (
        <div>
            <Jumbotron>
                <h3 className="intro">Introduction</h3>
                <br />
                <Grid container justify="center" alignItems="center" className="center">
                    <p>
                        I'm an alumni from UiTM (Seri Iskandar, Perak) since 2013, and my
                        field of study was Quantity Surveying (Diploma).
                </p>
                    <p>
                        I've worked in my previous field as Quantity Surveyor for 5 years
                        for local Consultant Firm, Contractors and Landscape Architect..
                        and started qestioning my own passions and current jobscopes.
                    </p>
                    <p>
                        My coding journey started around 2017, when I tried coding using HTML,
                        PHP, MySQL, Javascript with the help of my programmer friends and
                        started using ReactJS in mid 2019.
                </p>
                    <p>
                        Apart from programming, I'm also a musician, a bassist for our local Melodic Death Metal band, named
                        <a href="https://www.deathreturns.my/bands/murder/">{" "}Murder</a>.
                </p>
                    <p>Coffee? My favourite beverage!</p>
                </Grid>
            </Jumbotron>
        </div>
    )
}

export default About
