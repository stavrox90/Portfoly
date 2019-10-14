import firelog from "../images/firelog.png";
import atmosph from "../images/atmosph.png";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import github from "../images/github.png";
import soundcloud from "../images/soundcloud.png";

export const tools = [
    {
        title: "Hardware",
        value: "Custom Desktop PC"
    },
    {
        title: "Code Editor",
        value: "VSCode, CodeSandbox"
    },
    {
        title: "Hosting Platforms",
        value: "Heroku, Netlify"
    },
    {
        title: "Framework",
        value: "React JS"
    }
];

export const contacts = [
    {
        title: "Email",
        value: "inrafilus@gmail.com",
        url: "mailto:inrafilus@gmail.com",
        color: "#D44638",
        img: gmail
    },
    {
        title: "LinkedIn",
        value: "Filus Inra",
        url: "https://www.linkedin.com/in/inrafilus/",
        color: "#0077B5",
        img: linkedin
    },
    {
        title: "Twitter",
        value: "@nyxstvrx",
        url: "https://twitter.com/nyxstvrx",
        color: "#1DA1F2",
        img: twitter
    },
    {
        title: "Github",
        value: "stavrox90",
        url: "https://github.com/stavrox90",
        color: "#999999",
        img: github
    },
    {
        title: "Soundcloud",
        value: "Z'yev",
        url: "https://soundcloud.com/stvrx90",
        color: "#e87109",
        img: soundcloud
    }
];

export const works = [
    {
        title: "Firelog",
        description: "My simple sign-up & login app using React & Firebase",
        url: "https://firelog.netlify.com/",
        source: "https://github.com/stavrox90/firebase-login",
        img: firelog
    },
    {
        title: "Atmosph",
        description: "My weather finding app using React & OpenWeatherMap API",
        url: "https://atmosph.netlify.com/",
        source: "https://github.com/stavrox90/atmosph",
        img: atmosph
    }
];
