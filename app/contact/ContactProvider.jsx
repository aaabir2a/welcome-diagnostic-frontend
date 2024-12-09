"use client";

import React, { createContext } from "react";

// Create Context
export const ContactContext = createContext();

export default function ContactProvider({ aboutData, children }) {
  return (
    <ContactContext.Provider value={aboutData}>
      {children}
    </ContactContext.Provider>
  );
}
