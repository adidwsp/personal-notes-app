import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";


function LoginPage () {
    async function onLoginHandler () {
        await login(user);
    }

    return (
        <section className="login-page">
            <h2>Yuk, login untuk menggunakan aplikasi.</h2>
            <LoginInput login={onLoginHandler}/>
            <p>Belum punya akun? <Link to="/">Daftar di sini</Link></p>
        </section>
    )
}


export default RegisterPage;