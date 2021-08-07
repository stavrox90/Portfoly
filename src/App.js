import { Container, createTheme, ThemeProvider } from '@material-ui/core';
import { purple, teal } from '@material-ui/core/colors';
import React from 'react';
import { BrowserRouter as Router, withRouter, Switch, Route } from "react-router-dom";
import { Navigation, Routes, Footer } from "./components/layout";
import MobileView from './layouts/mobileView'

const theme = createTheme({
  // palette: {},
  palette: {
    primary: teal,
    secondary: purple,
  },
  typography: {
    fontFamily: [
      'Quicksand',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(', '),
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MobileView />
    </ThemeProvider>
    // <Container>
    //   <Router>
    //     <Switch>
    //         <Route exact path="/" component={MobileView} />
    //         {/* <Route path="/about" component={About} />
    //         <Route path="/projects" component={Projects} />
    //         <Route path="/contacts" component={Contacts} />
    //         <Route to="*" component={Lost} /> */}
    //     </Switch>
    //   </Router>
    // </Container>
  );
}

export default App;
