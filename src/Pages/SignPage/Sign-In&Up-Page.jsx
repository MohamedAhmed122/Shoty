import React from "react";
import SignIn from "../../Components/Sign-in/Sign-in.component";
import SignUp from '../../Components/SignOut/SignUp-component'
import './Sign-In&Up-Page.scss'

const SignPage =()=>(
    <div className='sign-in-up'>
        <SignIn />
        <SignUp />
    </div>
)
export default SignPage;