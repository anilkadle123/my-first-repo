import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column, rowIndex) => {
    if (column.content) return column.content(item, rowIndex);
    return _.get(item, column.path);
  };

  createKey = (itemId, column) => {
    return itemId + (column.path || column.key);
  };
  render() {
    const {
      data,
      columns,

      valueProperty,
      getClassName,
    } = this.props;
    return (
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={item[valueProperty]} className={getClassName(rowIndex)}>
            {columns.map((column) => (
              <td key={this.createKey(item[valueProperty], column)}>
                {this.renderCell(item, column, rowIndex)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
TableBody.defaultProps = {
  textProperty: "itemName",
  valueProperty: "itemCode",
};
export default TableBody;
