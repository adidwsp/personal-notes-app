import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function useInput (defaultValue) {
    const [value, setValue] = React.useState(defaultValue);
    const handleValueChange = (event) => setValue(event.target.value);
    return [value, handleValueChange];
}

function RegisterInput () {
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');

    return (
        <div className="input-login">
            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmailChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" onChange={handlePasswordChange}/>
            <button type="button">Login</button>
        </div>
    )

}

export default LoginInput; 