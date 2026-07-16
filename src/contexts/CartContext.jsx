import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  function addItem(id) {
    setCart((currentCart) => ({
      ...currentCart,
      [id]: (currentCart[id] || 0) + 1,
    }));
  }

  function removeItem(id) {
    setCart((currentCart) => ({
      ...currentCart,
      [id]: Math.max(0, (currentCart[id] || 0) - 1),
    }));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}