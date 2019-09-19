import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import { theme } from "./themes/theme";
import LandingPage from "./pages/Landing";
import TempLanding from "./pages/TempLanding";

import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" component={TempLanding} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
