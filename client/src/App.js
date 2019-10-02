import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import { theme } from "./themes/theme";

import Signup from "./pages/Dialogs/Signup";
import Signin from "./pages/Dialogs/Login";

import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
