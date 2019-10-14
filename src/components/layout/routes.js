import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, Projects, Contacts, Lost } from "../contents";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contacts" component={Contacts} />
                <Route to="*" component={Lost} />
            </Switch>
        </div>
    );
};

export default Routes;
