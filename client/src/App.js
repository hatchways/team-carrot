import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import { theme } from "./themes/theme";
import LandingPage from "./pages/Landing";
import TempLanding from "./pages/TempLanding";
import Signup from "./pages/Dialogs/Signup";
import Signin from "./pages/Dialogs/Login";

import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <Route path="/" component={Landing} /> */}
        {/* <Route path="/home" component={TempLanding} /> */}
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
