import React, { useState } from "react";
import "./signin.styles.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from '../CustomButton/CustomButton'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword("");
    setEmail("");
  };
  return (
    <div className="sign" >
      <h1>I already have an account</h1>
      <span>Sign in With your Email and Password</span>
      <form onSubmit={handleSubmit} autocomplete="off">
        <FormInput
          type="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          name="email"
          required
          label="email"
        />

        <FormInput
          type="password"
          name="password"
          required
          label="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />

        <CustomButton type="submit">Submit </CustomButton>
      </form>
    </div>
  );
};
export default SignIn;
