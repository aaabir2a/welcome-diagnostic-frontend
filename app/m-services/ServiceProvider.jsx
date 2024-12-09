
"use client";

import React, { createContext } from "react";

// Create Context
export const ServiceContext = createContext();

export default function ServiceProvider({ aboutData, children }) {
  return (
    <ServiceContext.Provider value={aboutData}>
      {children}
    </ServiceContext.Provider>
  );
}
