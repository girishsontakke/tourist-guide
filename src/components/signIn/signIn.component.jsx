import React, { Component } from "react";
import "./signIn.styles.scss";

import FormInput from "../formInput/formInput.component";
import CustomButton from "../CustomButton/customButton.component";

import { withRouter } from "react-router-dom";

class SignIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="sign-in-form-container">
        <div className="sign-in">
          <h1>Sign in with email and password</h1>
          <form action="POST" onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              handleChange={this.handleChange}
              value={this.state.email}
              label="email"
              required
            />
            <FormInput
              name="password"
              type="password"
              handleChange={this.handleChange}
              value={this.state.password}
              label="password"
              required
            />

            <CustomButton type="submit">Sign In</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(SignIN);
