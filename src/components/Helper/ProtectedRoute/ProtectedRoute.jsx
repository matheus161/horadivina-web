import React from "react";
import { userContext } from "../../../../userContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(userContext);

  if (login === true) {
    return children;
  } else if (login === false) {
    <Navigate to="/login" />;
  } else {
    return <></>;
  }

  // return login ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
