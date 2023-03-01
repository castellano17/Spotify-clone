import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLogged = () => {
  const { token } = useSelector((store) => store.userInfo);
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/Login" />;
  }
};

export default ProtectedLogged;
