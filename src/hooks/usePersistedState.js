import React from "react";

function usePersistedState(key, initialState) {
  function initialize() {
    const dataInStorage = localStorage.getItem(key);
    return JSON.parse(dataInStorage) || initialState;
  }

  const [state, setState] = React.useState(initialize);

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export { usePersistedState };
