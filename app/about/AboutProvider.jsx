
"use client";

import React, { createContext } from "react";

// Create Context
export const AboutContext = createContext();

export default function AboutProvider({ aboutData, children }) {
  return (
    <AboutContext.Provider value={aboutData}>
      {children}
    </AboutContext.Provider>
  );
}
