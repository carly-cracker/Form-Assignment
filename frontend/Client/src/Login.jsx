import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();  

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5555/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("loggedIn", "true");
            Navigate("/homepage");
        } else {
            alert(data.message || "Login failed");
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
        <p>
            New user?{" "}
            <span
                style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                onClick={() => Navigate("/signup")}
            >
                Sign up
            </span>
        </p>
        </>
    );
}

export default Login;
