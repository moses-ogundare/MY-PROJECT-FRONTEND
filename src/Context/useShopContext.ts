import { useContext } from "react";
import ShopContext from "./ShopContext";

const useShopContext = () => useContext(ShopContext);

export default useShopContext;
