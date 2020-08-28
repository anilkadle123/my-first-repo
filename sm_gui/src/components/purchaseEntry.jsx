import React, { Component } from "react";
import NavBar from "./navBar";
import Form from "./common/form";
import Joi from "joi-browser";

class PurchaseEntry extends Form {
  state = {
    data: { date: "", billNumber: "", partyName: "", gstNumber: "" },
    errors: {},
  };

  schema = {
    date: Joi.string().required().label("Date"),
    billNumber: Joi.string().label("Bill Number"),
    partyName: Joi.string().label("Party Name"),
    gstNumber: Joi.string().label("Bill Number"),
  };

  doSubmit = async () => {};
  render() {
    return (
      <div>
        <NavBar />
        <h2> Purchase Entry</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-3">{this.renderInput("date", "Date")}</div>
            <div className="col-3">
              {this.renderInput("billNumber", "Bill Number")}
            </div>
            <div className="col-3">
              {this.renderInput("partyName", "Party name")}{" "}
            </div>
            <div className="col-3">
              {this.renderInput("gstNumber", "GST Number")}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PurchaseEntry;
