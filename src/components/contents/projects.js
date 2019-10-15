import React from 'react'
import { makeStyles, Grid, Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core'

import { works } from "./details"

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        justifyContent: "space-evenly",
    },
    card: {
        // maxWidth: "auto",
        margin: "10px 0 10px 0",
    },
    media: {
        height: "20rem",
        margin: "0 20px 20px 20px",
    },
});

function About() {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.root}>
                {works.map(works => {
                    return (
                        <div>
                            <Grid item xs={12} >
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
                                        <br />
                                        <span>{works.source}</span>
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </div>
                    );
                })}
            </Grid>
        </div>
    )
}

export default About
