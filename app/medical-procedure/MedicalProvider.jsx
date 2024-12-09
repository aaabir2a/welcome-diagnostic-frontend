
"use client";

import React, { createContext } from "react";

// Create Context
export const MedicalContext = createContext();

export default function MedicalProvider({ aboutData, children }) {
  return (
    <MedicalContext.Provider value={aboutData}>
      {children}
    </MedicalContext.Provider>
  );
}
