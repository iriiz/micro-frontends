import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginComponent from 'components/LoginComponent';

function Login() {
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        navigate("/home");
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleTogglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <div className="container-fluid d-flex flex-column min-vh-100">
            <LoginComponent handleLogin={handleLogin} passwordVisible={passwordVisible} handleTogglePassword={handleTogglePassword} />
        </div>
    )
}

export default Login