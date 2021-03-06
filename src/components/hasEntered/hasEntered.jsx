import React, { createContext, useState } from "react";

export const HasEnteredContext = createContext();
HasEnteredContext.displayName = "HasEntered";

const HasEnteredProvider = ({ children }) => {
  const [hasEntered, setHasEntered] = useState(false);

  const store = {
    hasEntered,
    setHasEntered,
  };

  return (
    <HasEnteredContext.Provider value={store}>
      {children}
    </HasEnteredContext.Provider>
  );
};

export default HasEnteredProvider;
