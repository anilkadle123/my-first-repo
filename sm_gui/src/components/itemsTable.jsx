import React, { Component } from "react";
import Table from "./common/table";

import { Link } from "react-router-dom";

class ItemsTable extends Component {
  columns = [
    { key: "slno", label: "Sl No" },
    { path: "itemcode", label: "Item Code" },
    { path: "itemName", label: "Item Name" },
    { path: "price", label: "Price" },
    { path: "qty", label: "QTY" },
    { path: "tax", label: "TAX %" },
    { path: "total", label: "Total" },
    /* {
      key: "like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onClick={() => this.props.onLike(movie)}
        ></Like>
      ),
    }, */
    {
      key: "delete",
      content: (item) => (
        <button
          onClick={() => this.props.onDelete(item)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { items } = this.props;
    return (
      <Table columns={this.columns} data={items} sortDisable={true}></Table>
    );
  }
}

export default ItemsTable;
