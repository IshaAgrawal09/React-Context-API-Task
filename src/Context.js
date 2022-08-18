import { createContext, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [msg, setMsg] = useState("");
  return (
    <CartContext.Provider
      value={{
        msg,
        setMsg,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
