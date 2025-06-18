import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

    

function Homepage() {
    const Navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <div >
                <div>
                    <h2>Group A Activities</h2>
                    <ul>
                        <li>Complete the registration form</li>
                        <li>Attend the orientation session</li>
                        <li>Submit your project proposal</li>
                    </ul>
                </div>
                <div>
                    <h2>Group B Activities</h2>
                    <ul>
                        <li>Review project guidelines</li>
                        <li>Join the team meeting</li>
                        <li>Prepare your presentation</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Homepage;