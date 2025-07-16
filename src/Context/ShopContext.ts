import { createContext } from "react";

export interface ShopcontextType {
  backendUrl: string;
}

const ShopContext = createContext<ShopcontextType | undefined>(undefined);

export default ShopContext;
