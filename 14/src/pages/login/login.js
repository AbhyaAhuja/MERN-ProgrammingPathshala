// require('dotenv').config();

import PointsContext from "../../context/pointsContext";
import Navbar from "../common/Navbar/navbar";
import React, {useState, useContext} from "react";
import { useNavigate, redirect } from "react-router-dom";
import "./login.css"

const Login = () => {
    const {login} = useContext(PointsContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // const [loading, setLoading] = useState(false);


    const handleClick = async() => {
        if(!email || !password){
            console.error("Email and password are required.");
            return;
        }
        const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/login`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({email, password})
        });
        const data = await res.json();
        if (data.status === "success") {
            // Store the JWT token in local storage
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("user", JSON.stringify(data.data.user));
            // Call the login function from the context
            login();
            navigate("/image-generator");

        }
    }

    return (
        <div>
            <Navbar page='login'/>
            <div className="mid">
            
            <div className="mid2">
            <h2 >Hey, you must login first ^_^</h2><br/>
                <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
                <button onClick={handleClick}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;