import { createTheme, ThemeProvider } from "@material-ui/core";
import {
  blue,
  blueGrey,
} from "@material-ui/core/colors";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from "./layouts/layout";
import { Home, About, Projects, Contacts, Lost } from "./pages";

const theme = createTheme({
  palette: {
    // type: "dark",
    primary: blueGrey,
    secondary: blue,
  },
  typography: {
    fontFamily: [
      "Quicksand",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(", "),
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contacts" component={Contacts} />
            <Route to="*" component={Lost} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
