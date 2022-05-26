import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return <>{props.children}</>;
};

export default ProtectedRoutes;
