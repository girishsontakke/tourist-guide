import "./signIn.styles.scss";

// custom components
import FormInput from "../../components/formInput/formInput.component";
import CustomButton from "../../components/CustomButton/customButton.component";
import { withRouter } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setInputField } from "../../redux/form/actions";

const SignIN = () => {
  const { email, password } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setInputField(event));
  };

  return (
    <div className="sign-in-form-container">
      <div className="sign-in">
        <h1>Sign in with email and password</h1>
        <form action="POST" onSubmit={(e) => e.preventDefault()}>
          <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={handleChange}
            value={password}
            label="password"
            required
          />

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    </div>
  );
};
export default withRouter(SignIN);
