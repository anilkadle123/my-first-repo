import React from "react";

import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  console.log("logged in ", loggedIn, path);
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return loggedIn ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                prevLocation: path,
                error: "You need to login first!",
              },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
