import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./stores";
import { theme } from "./themes/theme";

import Main from "./Main";

import "./App.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Main />
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
