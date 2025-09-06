//import logo from "./logo.svg";
//import "./App.css";
import "./styles.css";

import React from "react";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [loggedin, setLoggedin] = useState(false);
  const [passStrength, setPassStrength] = useState("");

  const handlePasswordChange=(pwd)=>{
      setPassword(pwd);
 if (pwd.length < 5&&pwd.length>=1) {
  setPassStrength("Weak");
} else if (pwd.length < 8) {
  setPassStrength("Medium");
} else {
  setPassStrength("Strong");
}

  }
      
  
  const getPassClass = () => {
    if (!password) return "";
    if (passStrength === "Weak") return "weak";
    if (passStrength === "Medium") return "medium";
    return "Strong";
  };
  const handleClick = () => {
    if (username.trim() === "" && password.trim() === "") {
      setError("Both Required!");
      setLoggedin(false);
    } else if (username.trim() === "") {
      setError("Please fill up username first!");
      setLoggedin(false);
    } else if (password.trim() === "") {
      setError("Please fill up password !");
      setLoggedin(false);
    } else if (confirmpassword.trim() === "") {
      setError("Please fill up Confirm password !");
      setLoggedin(false);
    } else if (password != confirmpassword) {
      setError("Password don't Match!");
      setLoggedin(false);
    } else {
      setError("");
      setLoggedin(true);
      alert("Success!");
    }
  };
  return (
    <div className="App">
      <h1>Welcome to our Log In App</h1>
      {error && <div className="error">{error}</div>}
      {loggedin && (
        <div className="loggedin">Welcome!Logged In Successfully.</div>
      )}
      <label>Username</label>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => handlePasswordChange(e.target.value)}
      />

      <br />
      <br />
     {password && (
  <div
    className={
      passStrength === "Weak"
        ? "weak"
        : passStrength === "Medium"
        ? "medium"
        : passStrength === "Strong"
        ? "strong"
        : ""
    }
  >
    {passStrength} Password
  </div>
)}

       
     

      <br />
      <br />
      <label>Confirm Password</label>
      <input
        type="password"
        placeholder="Retype your entered password"
        value={confirmpassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleClick}>Log In</button>
    </div>
  );
}

export default App;
