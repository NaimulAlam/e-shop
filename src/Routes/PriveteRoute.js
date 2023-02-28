import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import { Navigate } from "react-router-dom";

const PriveteRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PriveteRoute;
