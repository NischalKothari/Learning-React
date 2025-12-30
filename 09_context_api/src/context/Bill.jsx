import React, { createContext, useState, useContext } from "react";

// Create context
const CartContext = createContext(null);

// Custom hook for easier use
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Provider component
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Export the context itself if needed
export { CartContext };