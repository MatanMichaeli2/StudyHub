import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";
import './Login'
// function Login() {
function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate("/register");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      console.log("Please enter both username and password.");
      alert("Please enter both username and password.");
      return;
    }

    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      console.log("Invalid credentials");
      alert("Invalid credentials");
      return;
    }

    const data = await response.json();
    setUser(data.userData);

    setUsername("");
    setPassword("");
    alert("Login successful!");
    navigate("/");
  };

  return (
    <div className="login-page-container"> {/* Add this class to the parent div */}
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="one">
          <button onClick={handleJoinNow}>Register</button>
        </div>
      </div>
    </div>
  );  
}

export default Login;