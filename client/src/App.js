import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import { theme } from "./themes/theme";
import Welcome from "./pages/Pages/Welcome";
import Signup from "./pages/Dialogs/Signup";
import Signin from "./pages/Dialogs/Login";
import DashBoardApp from "./pages/Pages/Dashboard";

import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/home" component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/dashboard" component={DashBoardApp} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
