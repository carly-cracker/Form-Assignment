import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        navigate("/login");
    };

    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <button onClick={handleLogout}>Logout</button>
            <div>
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
