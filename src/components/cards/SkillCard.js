import React from "react";
import {
  makeStyles,
  Chip,
  Card,
  List,
  Paper,
  ListItem,
  Container,
  Box,
  Hidden,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import { FaceOutlined, TagFacesRounded } from "@material-ui/icons";

const skills = [
  "Observation",
  "Problem Solving",
  "Critical Thinking",
  "Patience",
  "Listening",
  "Fast Learner",
  "Creativity",
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.down('sm')]: {
        maxWidth: 360,
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: 600,
      },
    margin: "auto",
    marginTop: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",

    // margin: theme.spacing(1),
    // "& > *": {
    //   margin: theme.spacing(0.5),
    // },

    //   listStyle: 'none',
    //   padding: theme.spacing(0.5),
    backgroundColor: theme.palette.background.paper,
    },
  chip: {
    margin: theme.spacing(0.5),
    // [theme.breakpoints.down('sm')]: {
    //     size: 'small'
    // }
  },
}));

export default function SkillCard() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    {/* <Card className={classes.root}> */}
    <Box component="div" className={classes.root}>
        {skills.map((skill) => (
          <Chip
            label={skill}
            variant="outlined"
            size={matches? "small" : "large"}
            color="primary"
            className={classes.chip}
          />
        ))}
      </Box>
    {/* </Card> */}

    </>
  );
}
