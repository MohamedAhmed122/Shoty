import React, { useState } from "react";
import "./signin.styles.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle, auth } from "../../firebase/firebase.config";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setPassword("");
      setEmail("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="sign">
      <h1 className="title">I already have an account</h1>
      <span>Sign in With your Email and Password</span>
      <form onSubmit={handleSubmit} autoComplete="off">
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
        <div className="buttons">
          <CustomButton type="submit">Submit </CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
