import React, { Component } from "react";
import Table from "./common/table";

class ItemsTable extends Component {
  columns = [
    {
      key: "slno",
      label: "Sl No",

      content: (item, index) => <div>{index + 1}</div>,
    },
    { path: "itemCode", label: "Item Code" },
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
      content: (item, index) => (
        <button
          type="button"
          onClick={() => this.props.onDelete(item)}
          className="btn btn-danger btn-sm"
        >
          X
        </button>
      ),
    },
  ];
  render() {
    const { items, getClassName } = this.props;
    return (
      <Table
        columns={this.columns}
        data={items}
        sortDisable={true}
        getClassName={getClassName}
      ></Table>
    );
  }
}

export default ItemsTable;
