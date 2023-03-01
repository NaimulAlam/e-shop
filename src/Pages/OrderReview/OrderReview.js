import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReviewProducts from "./ReviewProducts";
import Cart from "../../components/Cart/Cart";
import { CartDetailsContext } from "../../Context/CartContext";

function OrderReview() {
  const { previousCart } = useLoaderData();
  // create a state so we can remove items from the cart
  const { cart, setCart, clearCart, handleRemoveProduct } =
    useContext(CartDetailsContext);

  useEffect(() => {
    if (previousCart) {
      setCart(previousCart);
    }
  }, []);

  return (
    <div>
      {cart.length === 0 ? (
        <div className="container m-5">
          <h2 className="text-2xl">No Produts to review!</h2>
          <h2 className="text-xl">
            Please visit our shop to add some produsts to review ...
          </h2>
          <Link to="/shop">
            <button className="btn btn-primary">Shop Now</button>
          </Link>
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
            <div>
              <button
                className="btn btn-error rounded-md w-full mt-2"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </div>
            {/* <div className="cart-container">
              <Cart
                cart={cart}
                clearCart={clearCart}
                handleRemoveProduct={handleRemoveProduct}
              ></Cart>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderReview;
