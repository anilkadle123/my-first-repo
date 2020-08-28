import React from "react";
import config from "../config.json";
import Joi from "joi-browser";
import Form from "./common/form";
import http from "../services/httpService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css/";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
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
      toast("Logged In");
    } catch (ex) {
      toast.error("Invalid Credentials!!");
      console.log("Exception", ex);
      const data = { ...this.state.data };
      this.setState({});
    }
  };

  componentDidMount() {
    //this.username.current.focus();
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <ToastContainer />
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
