import React from "react";
import NavBar from "./navBar";
import Form from "./common/form";
import Joi from "joi-browser";
import ItemsTable from "./itemsTable";

import Items from "./items";
import PurchaseEntryInputs from "./purchaseEntryInputs";

import ModalReact from "./common/modalReact";

class PurchaseEntry extends Form {
  state = {
    data: {
      date: new Date(),
      billNumber: "",
      partyName: "",
      gstNumber: "",
      noOfItems: 0,
    },
    errors: {},

    itemsAdded: [],

    lastUpdatedIndex: -1,
  };

  schema = {
    date: Joi.date().required().label("Date"),
    billNumber: Joi.string().allow("").label("Bill Number"),
    partyName: Joi.string().allow("").label("Party Name"),
    gstNumber: Joi.string().allow("").label("Bill Number"),
    noOfItems: Joi.number().min(1).label("Items"),
  };

  clearStates = () => {
    this.setState({
      data: {
        date: new Date(),
        billNumber: "",
        partyName: "",
        gstNumber: "",
        noOfItems: 0,
      },
      errors: {},

      itemsAdded: [],

      lastUpdatedIndex: -1,
    });
  };
  doNothing = () => {
    //  console.log("Entry will be saved");
  };
  getrowClassName = (rowIndex) => {
    return rowIndex === this.state.lastUpdatedIndex ? "table-primary" : "";
  };

  handleDelete = (item) => {
    //console.log(movie);
    const itemsAdded = this.state.itemsAdded.filter(
      (i) => i.itemCode !== item.itemCode
    );
    const data = { ...this.state.data };
    data.noOfItems = itemsAdded.length;
    this.setState({ itemsAdded: itemsAdded, lastUpdatedIndex: -1, data });
  };

  updateState = (itemsAdded, lastUpdatedIndex) => {
    const data = { ...this.state.data };
    data.noOfItems = itemsAdded.length;

    this.setState({ itemsAdded, lastUpdatedIndex, data });
  };

  handleDateChange = (date) => {
    const data = { ...this.state.data };
    data.date = date;
    this.setState({ data });
    //this.validateForms(input);
  };

  doSubmit = async () => {};
  render() {
    const { itemsAdded } = this.state;
    //this.state.items.map((i) => console.log(i.itemCode));
    //console.log("Items", items);
    //items.ma

    return (
      <div>
        <NavBar />
        <h2> Purchase Entry</h2>
        <form onSubmit={this.handleSubmit}>
          <PurchaseEntryInputs
            renderInput={this.renderInput}
            renderDatePicker={this.renderDatePicker}
          />
          <Items itemsAdded={itemsAdded} updateState={this.updateState} />

          <ItemsTable
            items={itemsAdded}
            onDelete={this.handleDelete}
            getClassName={this.getrowClassName}
          />

          {this.renderButton("Add")}

          <ModalReact
            triggerButtonLabel="Clear"
            title="Confirm"
            body="Do you want to clear all fields?"
            continueLabel="Yes"
            cancelLabel="No"
            onContinue={this.doNothing}
            onCancel={this.clearStates}
          />
        </form>
      </div>
    );
  }
}

export default PurchaseEntry;
