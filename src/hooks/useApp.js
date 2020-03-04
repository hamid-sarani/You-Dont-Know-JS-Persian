import React, { useCallback } from "react";

import _ from "lodash";
import { matchPath } from "react-router";
import { AppContext, AppDispatcherContext } from "providers/appProvider";

function useApp() {
  return React.useContext(AppContext);
}

function useAppDispatcher() {
  const setState = React.useContext(AppDispatcherContext);

  const setActiveRoute = useCallback((link, routes) => {
    let active = false;
    const sideRoutes = [
      ..._.filter(_.flatMap(routes, "child"), undefined),
      ...routes
    ];

    sideRoutes.map(route => {
      if(!active && matchPath(link, route)) {
        active = route;
      }

      return route;
    });

    setState((state) => {
      return { ...state, activeRoute: active };
    });
  }, [setState]);

  function toggleSidebar() {
    setState((state) => ({ ...state, sidebarCollapse: !state.sidebarCollapse }));
  }

  return {
    setState,
    setActiveRoute,
    toggleSidebar
  };
}

export { useApp, useAppDispatcher };
