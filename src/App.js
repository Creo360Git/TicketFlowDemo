import React, { Suspense, useEffect, useContext, useState } from "react";
import {
  MuiThemeProvider,
  CssBaseline,
  Backdrop,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import packageInfo from "../package.json";
import CacheBuster from "react-cache-buster";
import { HashRouter } from "react-router-dom";
import Router from "./routes";
import intro from "./pages/Intro";

import logo from "./logo.svg";
import theme from "./theme";
import "./App.css";

const App = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
  }));
  packageInfo;

  const classes = useStyles();

  const isProduction = process.env.NODE_ENV === "production";
  return (
    <CacheBuster //allows clients to automatically check the new version when a new version is released in the production environment, and if a new version is published, clearing the cache and reload the page
      currentVersion={packageInfo.version}
      isEnabled={isProduction} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      //loadingComponent={<Loading />} //If not pass, nothing appears at the time of new version check.
      //metaFileDirectory={"."} //If public assets are hosted somewhere other than root on your server.
    >
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <HashRouter>
          <Suspense
            fallback={
              <Backdrop open={true}>
                <CircularProgress color="primary" size={60} />
              </Backdrop>
            }
          ></Suspense>
          {/* <Router></Router> */}

          <div className="App">
            <Router></Router>
            {/* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header> */}
          </div>
        </HashRouter>
      </MuiThemeProvider>
    </CacheBuster>
  );
};

export default App;
