import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5555/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password, email ,first_name: firstName,last_name: lastName,}),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("loggedIn", "true");
            navigate("/homepage");
        } else {
            alert(data.message || "Signup failed");
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
            />
            <input
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
            />
            <input
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Unique username"
            />
            <input
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Signup</button>
        </form>
        <p>
            Already have an account?{" "}
            <span
                style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                onClick={() => navigate("/login")}
            >
                Login
            </span>
        </p>
        </>
    );
}

export default Signup;