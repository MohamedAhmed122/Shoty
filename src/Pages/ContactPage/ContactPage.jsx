import React, { useState } from "react";
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/CustomButton/CustomButton";

import logo from '../../assets/crown.svg'

import "./ContactStyle.css";

const ContactPage = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit =()=>{
        setEmail('');
        setName('');
        setPhone('');
        setMessage('');
    }
   
  return (
    <section className="contact">
        <div>
            <img style={{height: '7rem'}} src={logo} alt='logo'/>
        </div>
        <h2>Let's get in touch</h2>
        <from>
      <FormInput
        type="name"
        value={name}
        handleChange={(e) => setName(e.target.value)}
        name="name"
        required
        label="name"
      />
       <FormInput
        type="email"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        name="email"
        required
        label="email"
      />
       <FormInput
        type="phone"
        value={phone}
        handleChange={(e) => setPhone(e.target.value)}
        name="phone"
        required
        label="phone"
        style={{width:'40vw'}}
      />
       <FormInput
        type="message"
        value={message}
        handleChange={(e) => setMessage(e.target.value)}
        name="message"
        required
        label="message"
      />
      <CustomButton onClick={()=>handleSubmit()} >Send Message</CustomButton>
      </from>
    </section>
  );
};
export default ContactPage;
