import React, { createContext, useReducer, useContext } from 'react';

export const StateContext = createContext();
export const DarkModeContext = createContext();

export const StateProvider = ({ children, reducer, initialState }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      <DarkModeContext.Provider
        value={useReducer(reducer, { isDarkMode: true })}
      >
        {children}
      </DarkModeContext.Provider>
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
export const useDarkMode = () => useContext(DarkModeContext);
