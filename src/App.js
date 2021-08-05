import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation, Routes, Footer } from "./components/layout";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  app: {
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  }
})

function App() {
  const classes = useStyles();

  return (
    <div className="container">
      <Router>
        <Navigation />
        <Routes />
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
