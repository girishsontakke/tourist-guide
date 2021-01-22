import React from "react";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../CustomButton/customButton.component";
import "./signUp.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up-form-container">
        <div className="sign-up">
          <h1 className="title">I do not have account</h1>
          <span>Sign Up With Your Email And Password</span>
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              handleChange={this.handleChange}
              label="Display Name"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              handleChange={this.handleChange}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              handleChange={this.handleChange}
              label="Password"
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              handleChange={this.handleChange}
              label="Confirm Password"
              required
            />
            <CustomButton type="submit">Sign Up</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
