import React from "react";
import Form from "./common/form";
import http from "../services/httpService";
import config from "../config.json";
import Input from "./common/input";
import Joi from "joi-browser";
import { Autocomplete } from "./common/autoComplete";
import { Link } from "react-router-dom";

class Items extends Form {
  state = {
    data: {
      itemCode: "",
      itemName: "",
    },
    errors: {},

    items: [],
  };

  schema = {
    itemCode: Joi.string().allow("").label("Item Code"),
    itemName: Joi.string().allow("").label("Item Name"),
  };

  componentDidMount = async () => {
    const { apiServerPath, apiEndpointGetAllItems } = config;
    try {
      //const { data: items }
      const { data: items } = await http.get(
        apiServerPath + apiEndpointGetAllItems
      );
      //console.log("Items", items);

      this.setState({ items });
    } catch (ex) {}
  };
  handleOnEnter = (e) => {
    if (e.key === "Enter") {
      this.searchByCode();
    }
  };

  handleSelectedItem = async (selectedItem) => {
    //console.log(selectedItem);

    //console.log(selectedItem.split("-")[0].trim());
    if (selectedItem === null) {
      alert("Item Not found");
    } else {
      const data = { ...this.state.data };
      data.itemCode = selectedItem.split("-")[0].trim();

      await this.setState({ data });
      console.log("enter ", selectedItem);
      this.searchByCode();
    }
  };

  searchByCode = () => {
    console.log("search ", this.state.data.itemCode);
    const itemToAdd = this.state.items.filter(
      (i) => i.itemCode === this.state.data.itemCode
    );
    const errors = { ...this.state.errors };
    let lastUpdatedIndex = 0;

    if (itemToAdd.length === 0) {
      errors.itemCode = "Item Not found";
    } else {
      let itemsAdded = [];
      const iteminList = this.props.itemsAdded.filter(
        (i) => i.itemCode === this.state.data.itemCode
      );

      if (iteminList.length === 0) {
        itemToAdd[0].qty = 1;
        itemToAdd[0].total = itemToAdd[0].qty * itemToAdd[0].price;
        itemsAdded = [itemToAdd[0], ...this.props.itemsAdded];
        lastUpdatedIndex = 0;
      } else {
        itemsAdded = [...this.props.itemsAdded];
        const index = itemsAdded.indexOf(iteminList[0]);
        itemsAdded[index].qty += 1;
        lastUpdatedIndex = index;
      }

      const data = { ...this.state.data };
      data.itemCode = "";
      errors.itemCode = "";
      this.setState({ data });
      this.props.updateState(itemsAdded, lastUpdatedIndex);
    }
    this.setState({ errors });
  };

  render() {
    const { data, errors, items } = this.state;

    const itemNames = items.map(
      (item) => `${item.itemCode} - ${item.itemName}`
    );

    return (
      <div className="row">
        <div className="col-4">
          <Input
            type="text"
            name="itemCode"
            label="Item Code"
            value={data.itemCode}
            onChange={this.handleChange}
            onKeyDown={this.handleOnEnter}
            error={errors.itemCode}
            includeLabel={false}
          ></Input>
        </div>
        <div className="col-8">
          <Autocomplete
            suggestions={itemNames}
            onSelect={this.handleSelectedItem}
            placeHolder="Search By Item Name"
          />
        </div>
      </div>
    );
  }
}

export default Items;
