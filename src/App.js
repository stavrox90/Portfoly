import { Container, createTheme, ThemeProvider } from '@material-ui/core';
import { purple, teal } from '@material-ui/core/colors';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, withRouter, Switch, Route } from "react-router-dom";
import { Navigation, Routes, Footer } from "./components/layout";
import Layout from './layouts/layout'

import { Home, About, Projects, Contacts, Lost } from './components/contents';

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

{/*
  fetch('http://localhost:8000/contacts', {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({ title, details, category })
  })
  .then(() => history.push('/'))
*/}

function App() {
  // const [data, setData] = useState()

  // useEffect(() => {
  //   fetch('http://localhost:8000/contacts')
  //   .then(res => res.json())
  //   .then(data => setData(data))
  // }, [])

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contacts" component={Contacts} />
              <Route to="*" component={Lost} />
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
