


import React, { useState, createContext } from "react";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showNow, setShowNow] = useState("");
  const [cart, setCart] = useState([]);
  const [collection, setCollection] = useState([]);

  return (
    <AppContext.Provider
      value={{
        showNow,
        setShowNow,
        authenticated,
        setAuthenticated,
        cart,
        setCart,
        collection,
        setCollection,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
