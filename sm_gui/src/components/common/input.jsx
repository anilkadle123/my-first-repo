import React, { Component } from "react";
class Input extends Component {
  render() {
    const { name, label, error, includeLabel = false, ...rest } = this.props;
    return (
      <div className="form-group">
        {includeLabel && <label htmlFor={name}>{label}</label>}

        <input
          {...rest}
          name={name}
          id={name}
          className="form-control"
          placeholder={includeLabel ? "" : label}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Input;
