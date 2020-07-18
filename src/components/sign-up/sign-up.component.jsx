import React, { useState } from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ email, password, displayName });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign in with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          required
        />
        <FormInput
          handleChange={handleChange}
          label="Email"
          type="email"
          name="email"
          value={email}
          required
        />
        <FormInput
          handleChange={handleChange}
          label="Password"
          type="password"
          name="password"
          value={password}
          required
        />
        <FormInput
          handleChange={handleChange}
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
        />

        <CustomButton type="submit"> Sign up </CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
