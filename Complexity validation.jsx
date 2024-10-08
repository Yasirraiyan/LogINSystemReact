import React, { useState } from 'react';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        const validCredentials = {
            username: 'user',
            password: 'Yasyan4@'
        };
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(username===''||password===''){
            console.log("Please input username and password first");
            setError("Please input username and password first");
            return;
        }
        if (!passwordRegex.test(password)) {
            setError("Password must be at least 8 characters long, include 1 uppercase letter, 1 number, and 1 symbol");
            console.log("Password does not meet complexity requirements");
            return;
        }
          if (username === validCredentials.username && password === validCredentials.password) {
            console.log('Log In Successful');
            setError('');
        } else {
            setError('Invalid Username or Password');
               console.log('Invalid Username or Password');
        }
        }
    
    return (
        <div className="App">
            <h1>Log In</h1>
            <label>User Name:</label>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <label>Password:</label>
            <input
                type="password"  // Changed to password input for security
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button onClick={handleLogin}>Log In</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message */}
        </div>
    );
}

export default App;
