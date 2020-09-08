import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Form extends Component {
  state = {
    data: {},
    errors: {},
    loggedIn: false,
    prevLocation: "",
  };
  validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    error.details.map((item) => {
      errors[item.path[0]] = item.message;
      return errors;
    });
    //console.log(error);
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };

    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;
    //const username = this.username.current.value;
    this.doSubmit();
  };

  validateForms = (input) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleChange = ({ currentTarget: input }) => {
    this.validateForms(input);
  };

  renderButton(label) {
    //console.log(this.validate());
    return (
      <button disabled={this.validate()} className="btn btn-primary mr-2">
        {label}
      </button>
    );
  }

  renderDatePicker = (name) => {
    const { data } = this.state;
    return (
      <DatePicker
        selected={this.state.data[name]}
        customInput={
          <Input
            type="text"
            name={name}
            value={data[name]}
            readOnly="readOnly"
          ></Input>
        }
        onChange={this.handleDateChange}
        dateFormat="dd/MM/yyyy"
      />
    );
  };

  renderInput = (name, label, type = "text", includeLabel = false) => {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        includeLabel={includeLabel}
      ></Input>
    );
  };

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        options={options}
      ></Select>
    );
  }
}

export default Form;
