import React from "react";
import { usePersistedState } from "hooks/usePersistedState";
import { loadProgressBar } from "../common";
import { persianMoment } from "./utils";

const AppContext = React.createContext();
const AppDispatcherContext = React.createContext();

function AppProvider({ children }) {
  const [state, setState] = usePersistedState("APP", {
    activeRoute: {},
    sidebarCollapse: false
  });

  persianMoment();
  loadProgressBar({
    parent: "#pageLoading"
  });

  return (
    <AppContext.Provider value={state}>
      <AppDispatcherContext.Provider value={setState}>
        {children}
      </AppDispatcherContext.Provider>
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext, AppDispatcherContext };
