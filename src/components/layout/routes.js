import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Test, Home, About, Projects, Contacts, Atmosph, Lost } from "../contents";

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>sidebar!</div>,
        main: () => <h2>main!</h2>
    },
    {
        path: '/',
        exact: true,
        sidebar: () => <div>sidebar!</div>,
        main: () => <h2>main!</h2>
    },
    {
        path: '/',
        exact: true,
        sidebar: () => <div>sidebar!</div>,
        main: () => <h2>main!</h2>
    },
    {
        path: '/',
        exact: true,
        sidebar: () => <div>sidebar!</div>,
        main: () => <h2>main!</h2>
    },
    {
        path: '/',
        exact: true,
        sidebar: () => <div>sidebar!</div>,
        main: () => <h2>main!</h2>
    },
];

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Atmosph} />
                {/* <Route exact path="/" component={Test} /> */}
                {/* <Route exact path="/" component={Home} /> */}
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contacts" component={Contacts} />
                <Route to="*" component={Lost} />
            </Switch>
        </div>
    );
};

export default Routes;
