import React from 'react'
import { makeStyles, Grid, Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core'

import { works } from "./details"

const useStyles = makeStyles({
    card: {
        maxWidth: "auto",
        margin: "10px 0 10px 0",
    },
    media: {
        height: "90vw",
    },
    container: {
        width: "100%",
        flexWrap: "wrap",
        boxSizing: "borderBox",
    }
});

function About() {
    const classes = useStyles();

    return (
        <div>
            {works.map(works => {
                return (
                    <div className={classes.container}>
                        <Card className={classes.card}>
                            <CardHeader
                                title={works.title}
                                subheader="2019"
                            />
                            <a href={works.url}>
                                <CardMedia
                                    className={classes.media}
                                    image={works.img}
                                    title={works.title}
                                />
                            </a>
                        </Card>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <span>{works.description}</span>
                                <span>{works.source}</span>
                            </Typography>
                        </CardContent>
                    </div>
                );
            })}
        </div>
    )
}

export default About
