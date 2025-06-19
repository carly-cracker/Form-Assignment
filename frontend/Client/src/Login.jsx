import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: async (values) => {
            const response = await fetch("http://localhost:5555/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("loggedIn", "true");
                navigate("/homepage");
            } else {
                alert(data.message || "Login failed");
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Login</h2>
            <input
                name="username"
                placeholder="Username"
                onChange={formik.handleChange}
                value={formik.values.username}
            />
            {formik.errors.username && <p>{formik.errors.username}</p>}

            <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.errors.password && <p>{formik.errors.password}</p>}

            <button type="submit">Login</button>

            <p>
                New user?{" "}
                <span
                    style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => navigate("/signup")}
                >
                    Signup
                </span>
            </p>
        </form>
    );
}

export default Login;
