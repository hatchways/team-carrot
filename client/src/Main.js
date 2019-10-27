import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Welcome from "./pages/Pages/Welcome";
import DashBoardApp from "./pages/Pages/Dashboard";

const Main = props => {
  let isAuth = props.currentUser.isAuthenticated;
  // console.log("Main Props");
  // console.log(props);

  return (
    <Switch>
      <Route exact path="/" render={props => <Welcome {...props} />} />
      {/* <Route exact path="/dashboard" render={props => <Welcome {...props} />} /> */}
      <Route
        exact
        path="/dashboard"
        render={props =>
          isAuth === true ? <DashBoardApp {...props} /> : <Redirect to="/" />
        }
      />
    </Switch>
  );
};

function mapStateToProps(state) {
  // console.log("Redux State");
  // console.log(state);
  return {
    currentUser: state.currentUser
  };
}

export default withRouter(connect(mapStateToProps)(Main));
