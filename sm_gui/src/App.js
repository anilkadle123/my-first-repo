import React, { Component } from "react";

import "./App.css";
import { Switch, Redirect, Route } from "react-router-dom";
import LoginForm from "./components/loginForm";
import PurchaseEntry from "./components/purchaseEntry";

import Sales from "./components/sales";
import GstReport from "./components/gstReport";
import ProtectedRoute from "./components/common/protectedRoute";

class App extends Component {
  state = { loggedIn: false };

  updateLogin = () => {
    this.setState({ loggedIn: true });
  };
  render() {
    return (
      <React.Fragment>
        <main className="container border">
          <Switch>
            <Route
              path="/login"
              render={(props) => (
                <LoginForm {...props} onLoginSuccess={this.updateLogin} />
              )}
            />
            <ProtectedRoute
              loggedIn={this.state.loggedIn}
              path="/purchaseEntry"
              component={PurchaseEntry}
            />
            <ProtectedRoute
              loggedIn={this.state.loggedIn}
              path="/sales"
              component={Sales}
            />
            <ProtectedRoute
              loggedIn={this.state.loggedIn}
              path="/gstReport"
              component={GstReport}
            />
            <Redirect from="/" exact to="/login" />
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
