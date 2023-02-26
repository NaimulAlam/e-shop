import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import Cart from "../../components/Cart/Cart";
import { addToLocalStorage, deleteShoppingCart } from "../../utilities/localStorage";
import "./Shop.css";

const Shop = () => {
  const { products, previousCart } = useLoaderData();
  // console.log(products);
  const [cart, setCart] = useState(previousCart);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

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

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddtoCart={handleAddtoCart}
          ></ProductCard>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/orders">
            {cart.length > 0 && (
              <button className="review-order">Review Order</button>
            )}
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
