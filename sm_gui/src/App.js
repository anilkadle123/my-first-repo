import React, { Component } from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./components/loginForm";
import PurchaseEntry from "./components/purchaseEntry";

import Sales from "./components/sales";
import GstReport from "./components/gstReport";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/purchaseEntry" component={PurchaseEntry} />
            <Route path="/sales" component={Sales} />
            <Route path="/gstReport" component={GstReport} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
