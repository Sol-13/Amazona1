import React, { createContext, useContext, useReducer } from "react";

// Preparar capa de datos

export const StateContext = createContext();

// Envolver aplicación y proporcionar capa de datos
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Extraer información de la capa de datos
export const useStateValue = () => useContext(StateContext);