import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            // Handle signup logic here
            if (!FirstName || !LastName || !email || !password) {
                alert("Please fill in all fields");
                return;
            }
            Navigate("/Homepage");
        }}>
            <h2>Signup</h2>
            <input name="FirstName" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
            <input name="LastName" onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
            <input name="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Signup</button>
        </form>
    );
}
export default Signup;
