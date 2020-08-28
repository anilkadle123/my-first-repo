import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  createKey = (itemId, column) => {
    return itemId + (column.path || column.key);
  };
  render() {
    const { data, columns, textProperty, valueProperty } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item[valueProperty]}>
            {columns.map((column) => (
              <td key={this.createKey(item[valueProperty], column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
TableBody.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default TableBody;
