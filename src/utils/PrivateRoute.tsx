import React from "react";
import { useFirebase } from "../../utils/FirebaseContext";

import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { user, loading } = useFirebase();

  if (loading) {
    return <p>Wait</p>;
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;