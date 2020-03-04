import React from "react";
import { useHistory } from "react-router-dom";
import { Route } from "react-router";

function AppUtils() {
  const history = useHistory();

  function renderRoutes(routeList) {
    return routeList.map(route => {
      if(route.child) {
        return renderRoutes(route.child);
      }

      return <Route key={route.path} {...route} />;
    });
  }

  function goToLogin() {
    if(!history.location.pathname.includes("login"))
      return history.push("/login");

    return false;
  }

  function onLogin() {
    history.push("/");
  }

  return {
    renderRoutes,
    goToLogin,
    onLogin
  };
}

export default AppUtils;