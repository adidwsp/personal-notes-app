import React from "react";
import { Link } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";
import Header from "../components/Header";


function RegisterPage () {
    async function onRegisterHandler () {
        await register(user);
    }

    return (
        <section className="register-page">
            <h2>Isi form untuk mendaftar akun.</h2>
            <RegisterInput register={onRegisterHandler}/>
            <p>Sudah punya akun?<Link to="/">Login di sini</Link></p>
        </section>
    )
}


export default RegisterPage;