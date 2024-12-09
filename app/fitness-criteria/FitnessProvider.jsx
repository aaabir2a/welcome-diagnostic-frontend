"use client";

import React, { createContext } from "react";

// Create Context
export const FitnessContext = createContext();

export default function FitnessProvider({ aboutData, children }) {
  return (
    <FitnessContext.Provider value={aboutData}>
      {children}
    </FitnessContext.Provider>
  );
}
