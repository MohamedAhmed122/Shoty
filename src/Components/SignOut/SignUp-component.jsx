import React, { useState } from "react";

import "./SignUp-styles.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.config";

const SignOut = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    await createUserProfileDocument(user, {displayName});

    setConfirmPassword("");
    setDisplayName("");
    setEmail("");
    setPassword("");

    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='sign-up' >
      <h1 className='title'>I don't have account </h1>
      <span> Create Account Using Email & Password</span>
      <form onSubmit={HandleSubmit}>
        <FormInput
          value={displayName}
          name="displayName"
          type="displayName"
          label="Name"
          handleChange={(e) => setDisplayName(e.target.value)}
        />
        <FormInput
          value={email}
          name="email"
          label="email"
          type="email"
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          value={password}
          type="password"
          label="password"
          name="password"
          handleChange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          value={confirmPassword}
          type="password"
          name="password"
          label="confirm password"
          handleChange={(e) => setConfirmPassword(e.target.value)}
        />
        <CustomButton type='submit' > Sign Up</CustomButton>
      </form>
    </div>
  );
};
export default SignOut;
