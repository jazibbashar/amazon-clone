import React, { createContext, useContext, useReducer } from "react";
//  preapare the dataLayer
export const StateContext = createContext();

//  wrap our app and provide the data layer.
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//  pull iinformation from the data layer
export const useStateValue = () => useContext(StateContext);