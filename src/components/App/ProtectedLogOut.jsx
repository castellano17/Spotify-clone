import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLogOut = () => {
  const { token } = useSelector((store) => store.userInfo);
  if (token) {
    return <Navigate to="/home" />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedLogOut;
