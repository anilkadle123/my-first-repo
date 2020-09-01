import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({
  columns,
  sortColumn,
  onSort,
  data,
  sortDisable,
  getClassName,
}) => {
  return (
    <table className="table table-sm table-bordered">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
        sortDisable={sortDisable}
      ></TableHeader>
      <TableBody
        columns={columns}
        data={data}
        getClassName={getClassName}
      ></TableBody>
    </table>
  );
};

export default Table;
