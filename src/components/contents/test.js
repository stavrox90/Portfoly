import React from 'react'
import { Bamboozle } from '../layout'
import avatar from '../images/avatar.jpg'
import { styled, makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import profile from '../../_mocks_/profile';
import workExp from '../../_mocks_/work-experience';

const useStyles = makeStyles({
    sideDrawer: {
        width: "280px",
        height: "100vh"
    },
    avatar: {
        margin: "auto",
        width: "20vh",
        height: "auto",
        boxShadow: "0 0 0 5px #007cfe",
        border: "5px inset white",
    },
})

const SIDEBAR_WIDTH = 280;
const SIDEBAR_HEIGHT = 100;

const _class = {
    sidebar_: "d-flex flex-column flex-shrink-0 p-3 text-white bg-dark",
    sidebarStyle_: {
        width: SIDEBAR_WIDTH,
        height: SIDEBAR_HEIGHT+ 'vh'
    },
    content_: "d-flex flex-column justify-content-center bg-secondary",
    contentStyle_: {
        height: SIDEBAR_HEIGHT+ "vh"
    }
}

const SideDrawer = () => {
    return (
        <div className={_class.sidebar_} style={_class.sidebarStyle_}>
            henlo
        </div>
    )
}

const Card = () => {
    return (
        <div className="card border-light my-2" style={{height: "50vh", width: "18rem;"}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    )
}

// font-size-h4 text-dark-75 text-hover-primary font-weight-bold

const ProfileCard = (props) => {
    return (
        <div className="card border-light my-2">
            <div className="row g-0">
                <div className="col-md-3 text-center">
                    <img src={avatar} className="img-fluid rounded my-3 mx-auto d-block" alt="..." style={{maxHeight: "10rem"}} />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">{props.fullName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.designation}</h6>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const WorkExpCard = (props) => {
    const { designation, company, timespan, location, desc } = props;
    return (
        <div className="card border-light my-2">
            <div className="card-body">
                <h6 className="card-title d-flex flex-column">
                    <span className="card-label">{designation}</span>
                    <span className="card-subtitle pt-2 text-muted">{company}</span>
                </h6>
                <p className="row card-subtitle text-muted mb-4">
                    <span className="col-sm-8">{timespan}</span>
                    <span className="col-sm-4 text-end" style={{textAlign: 'end'}}>{location}</span>
                </p>
                <div className="row">
                    <ul>
                    {
                        desc.map(dsc => <li className="card-text">{dsc}</li>)
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const SkillCard = (props) => {
    const skills = ['Observation', 'Problem Solving',
    'Patience', 'Ethics',
    'Listening', 'Critical Thinking', 'Collaboration', 'Idealistic', 
    'Fast Learner', 'Creativity', 'Communication'
];
    return (
        <div className="card border-light my-2">
            <div className="card-body">
                <h5 className="card-title">Skills</h5>
                <div className="row">
                    {
                        skills.map((skill, index) => 
                            <div className="col" key={index}>
                                <h5><span className="badge rounded-pill bg-info text-white">{skill}</span></h5>
                            </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default function Test() {
    const classes = useStyles();

    return (
        <div className="container bg-light px-0">
            <div className="row">
                <div className="col">
                    <ProfileCard {...profile}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {
                        workExp.map(aa => <WorkExpCard {...aa} />)
                    }
                </div>
                <div className="col-md-4">
                    <SkillCard />
                    <Card />
                </div>
            </div>
        </div>
    )
}