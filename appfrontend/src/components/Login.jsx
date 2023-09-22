import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    ///create post req
    const { data } = await axios.post("http://localhost:8000/token/", user, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    localStorage.clear()
    localStorage.setItem('access_token', data.access)
    localStorage.setItem('refresh_token', data.refresh)
    
    
    ///indicamos que el access se envia como header default en todas las peticiones de axios de esta app
    axios.defaults.headers.common['Authorization'] =
    `Bearer ${data['access']}`

    window.location.href = '/'
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
