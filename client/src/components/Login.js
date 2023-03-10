import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

function Login({setIsAuth}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const cookies = new Cookies();
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username,
      password,
    }).then((res) => {
      const { firstName, lastName, username, token, userId } = res.data;
      cookies.set("token", token);
      cookies.set("userId", userId);
      cookies.set("firstName", firstName);
      cookies.set("lastName", lastName);
      cookies.set("username", username);
      setIsAuth(true);
    });
  };
  return (
    <div className="login">
      <label>Log In</label>

      <input
        placeholder="Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={login}>Log In</button>
    </div>
  );
}

export default Login;
