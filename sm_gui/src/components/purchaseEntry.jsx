import React, { Component } from "react";
import NavBar from "./navBar";
import Form from "./common/form";
import Joi from "joi-browser";
import ItemsTable from "./itemsTable";

class PurchaseEntry extends Form {
  state = {
    data: { date: "", billNumber: "", partyName: "", gstNumber: "" },
    errors: {},

    items: [],
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

          <ItemsTable items={[]} onDelete={this.handleDelete} />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item Code</th>
                <th scope="col">Item Name</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
                <th scope="col">GST Inc</th>
                <th scope="col">Tax %</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default PurchaseEntry;
