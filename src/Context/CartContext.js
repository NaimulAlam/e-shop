import React, { createContext, useState } from "react";
import {
  addToLocalStorage,
  deleteShoppingCart,
  removeFromLocalStorage,
} from "../utilities/localStorage";

export const CartDetailsContext = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddtoCart = (selectedProduct) => {
    console.log("selectedProduct: ", selectedProduct);
    let newCart = [];
    const existedProduct = cart.find(
      (product) => product.id === selectedProduct.id
    );
    if (!existedProduct) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      existedProduct.quantity += 1;
      newCart = [...rest, existedProduct];
    }
    setCart(newCart);
    addToLocalStorage(selectedProduct.id);
  };
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const handleRemoveProduct = (productId) => {
    const remainingProducts = cart.filter(
      (product) => product.id !== productId
    );
    setCart(remainingProducts);
    removeFromLocalStorage(productId);
  };

  // Cart Calculations
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity += product.quantity;
    total = total + product.price * product.quantity;
    shipping += product.shipping;
  }

  const tax = parseFloat(total * 0.1).toFixed(2);
  const Subtotal = (
    parseFloat(total) +
    parseFloat(shipping) +
    parseFloat(tax)
  ).toFixed(2);
  // Cart Calculations

  const cartInfo = {
    cart,
    setCart,
    handleAddtoCart,
    clearCart,
    handleRemoveProduct,
    quantity,
    Subtotal,
    tax,
    total,
    shipping,
  };

  return (
    <CartDetailsContext.Provider value={cartInfo}>
      {children}
    </CartDetailsContext.Provider>
  );
};

export default CartContext;
