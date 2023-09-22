import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);


  return (
    <>
      <div>{isAuth ? <button onClick={() => {navigate('/')}}>Home</button> : ""}</div>
      <div>{isAuth ? <button onClick={() => {navigate('/logout')}}>Logout</button> : ""}</div>
      <div>{isAuth ? <button onClick={() => {navigate('/login')}}>Login</button> : ""}</div>
    </>
  );
};
