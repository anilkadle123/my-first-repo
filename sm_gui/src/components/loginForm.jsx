import React from "react";
import config from "../config.json";
import Joi from "joi-browser";
import Form from "./common/form";
import http from "../services/httpService";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css/";
import Modal from "./common/modal";
import ModalReact from "./common/modalReact";

class LoginForm extends Form {
  state = {
    data: { username: "guru", password: "guru" },
    errors: {},

    showModal: true,
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  //username = React.createRef();

  doSubmit = async () => {
    //Call the server
    const { apiServerPath, apiEndpointLogin } = config;
    try {
      await http.post(apiServerPath + apiEndpointLogin, this.state.data);
      const { state = {} } = this.props.location;
      const { prevLocation } = state;
      //const { onLoginSuccess } = this.props;
      this.props.onLoginSuccess();

      this.props.history.push(prevLocation || "/purchaseEntry");

      // this.props.history.replace("/purchaseEntry");
      //toast("Logged In");
    } catch (ex) {
      toast.error("Invalid Credentials!!");
      console.log("Exception", ex);
      //const data = { ...this.state.data };
      this.setState({});
    }
  };

  componentDidMount() {
    //this.username.current.focus();

    console.log(this.props);
  }

  toggle = () => {
    let { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  onClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <ToastContainer />
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Signin")}
          <button onClick={this.toggle} type="button">
            Toggle
          </button>
          <Modal show={this.state.showModal} onClose={this.onClose} />
        </form>
      </div>
    );
  }
}

export default LoginForm;
