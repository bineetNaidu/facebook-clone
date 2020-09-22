import React, { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children, reducer, initialState }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
