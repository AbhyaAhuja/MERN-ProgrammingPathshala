import Navbar from "../common/Navbar/navbar";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./signup.css"


const Signup = ()=>{
    const navigate = useNavigate();

const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

const handleClick=async()=>{
console.log(email,password);
if(!email || !password){
    toast.error("Email and password are required.");

    return;
}

const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/signup`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({email, password})
        });
        const data = await res.json();
        if (data.status === "success") {
            console.log("Signup successful. Please login.");
            navigate("/login");
        }
        // Logging the response data for debugging purposes
        console.log(data);
    } 


return (
    <div>
            <Navbar page='signup'/>
            <div className="mid"><div className="mid2">

                <h2>Sign Up</h2>
                <div className="in">
<input placeholder="Email" onChange={(e)=>{
    setEmail(e.target.value)
}}/>
<br/>
<input placeholder="Password" onChange = {(e)=>setPassword(e.target.value)}/><br/><br/>
<button  onClick = {handleClick}>Signup</button>
</div>
</div>
</div>
</div>




    )
}

export default Signup;