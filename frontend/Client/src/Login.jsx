import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const Navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);
        if (name === "email") setEmail(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Please fill in all fields");
            return;
        }
        Navigate("/Homepage");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input name="username" onChange={handleChange} placeholder="Username" />
            <input name="password" type="password" onChange={handleChange} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
}
export default Login;   