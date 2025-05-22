import React, { useState } from "react";

function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const handleLogin = () => {
    if (username === "yasirraiyan" && password === "Yasyan480") {
      console.log("Successfully Logged In");
      alert("Successfully Logged In");
    } else {
      console.log("Login Failed");
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="App">
      <h1>Log In App</h1>
      <label>UserName:</label>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        required
      />
      <br /><br />
      <label>Password:</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        required
      />
      <br /><br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
