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
  useMediaQuery,
  Typography,
  Avatar,
  CardMedia,
  CardContent,
  Divider,
} from "@material-ui/core";
import { FaceOutlined, TagFacesRounded } from "@material-ui/icons";
import logo from "../images/logo.jpg";
import { loremText } from "../contents/details";

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
    [theme.breakpoints.down("sm")]: {
      maxWidth: 360,
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 600,
      //   marginBottom: theme.spacing(8),
    },
    margin: "auto",
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  cover: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      maxHeight: 200,
    },
    [theme.breakpoints.up("md")]: {
      maxHeight: 360,
    },
    margin: "auto",
    objectFit: "cover",
    objectPosition: "100% 40%",
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
}));

export default function SkillCard() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box component="div" className={classes.root}>
        <Card>
          <CardMedia
            component="img"
            alt={"hmmm..."}
            image={logo}
            title={"Where are we?"}
            className={classes.cover}
          />
          <div className={classes.section1}>
            <Typography gutterBottom variant="h5" component="h2">
              Aaand we're lost...
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {loremText}
            </Typography>
          </div>
          <Divider variant="middle" component="h5" />
          <div className={classes.section2}>
            <Typography variant="p" component="p">
              {`Gotta love all these placeholder text! 😂💖`}
            </Typography>
          </div>
        </Card>
      </Box>
    </>
  );
}
