import React, { type ReactNode } from "react";
import ShopContext from "./ShopContext";
import type { ShopcontextType } from "./ShopContext";



interface ShopProviderProps {
  children: ReactNode;
}

const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  const backendUrl = "https://my-project-backend-nx0l.onrender.com/";

  const value: ShopcontextType = {
    backendUrl,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
