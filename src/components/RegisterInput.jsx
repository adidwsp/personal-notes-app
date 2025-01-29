import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function useInput (defaultValue) {
    const [value, setValue] = React.useState(defaultValue);
    const handleValueChange = (event) => setValue(event.target.value);
    return [value, handleValueChange];
}

function RegisterInput () {
    const [name, handleNameChange] = useInput('');
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');
    const [confirmPassword, handleConfirmPasswordChange] = useInput('');

    return (
        <div className="input-register">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={handleNameChange}/>
            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmailChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" onChange={handlePasswordChange}/>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" onChange={handleConfirmPasswordChange}/>
            <button type="button">Register</button>
        </div>
    )

}

export default RegisterInput; 