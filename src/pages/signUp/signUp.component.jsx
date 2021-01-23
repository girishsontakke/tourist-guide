import React from "react";
import FormInput from "../../components/formInput/formInput.component";
import CustomButton from "../../components/CustomButton/customButton.component";
import "./signUp.styles.scss";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setInputField } from "../../redux/form/actions";

const SignUp = () => {
  const { displayName, email, password, confirmPassword } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(setInputField(event));
  return (
    <div className="sign-up-form-container">
      <div className="sign-up">
        <h1 className="title">I do not have account</h1>
        <span>Sign Up With Your Email And Password</span>
        <form className="sign-up-form" onSubmit={(e) => e.preventDefault()}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
