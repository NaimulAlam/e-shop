import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  deleteShoppingCart,
  removeFromLocalStorage,
} from "../../utilities/localStorage";
import ReviewProducts from "./ReviewProducts";
import Cart from "../../components/Cart/Cart";

function OrderReview() {
  const { previousCart } = useLoaderData();
  console.log(previousCart);
  // create a state so we can remove items from the cart
  const [cart, setCart] = useState(previousCart);

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

  return (
    <div>
      {cart.length === 0 ? (
        <div className="container m-5">
          <h2 className="text-2xl">No Produts to review!</h2>
          <h2 className="text-xl">
            Please visit our shop to add some produsts to review ...
          </h2>
          <button className="btn btn-primary">
            <Link to="/shop">Shop Now</Link>
          </button>
        </div>
      ) : (
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2 mx-auto">
              {cart.map((product) => (
                <ReviewProducts
                  key={product.id}
                  product={product}
                  handleRemoveProduct={handleRemoveProduct}
                ></ReviewProducts>
              ))}
            </div>
            <div className="cart-container">
              <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderReview;
