import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data, sortDisable }) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
        sortDisable={sortDisable}
      ></TableHeader>
      <TableBody columns={columns} data={data}></TableBody>
    </table>
  );
};

export default Table;
