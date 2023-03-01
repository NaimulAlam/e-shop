import React, { useContext, useEffect } from "react";
import CartItems from "./CartItems";
import { CartDetailsContext } from "../../Context/CartContext";
import { useLoaderData } from "react-router-dom";

const Cart = ({ children }) => {
  const { previousCart } = useLoaderData();

  const {
    cart,
    setCart,
    clearCart,
    handleRemoveProduct,
    quantity,
    Subtotal,
    tax,
    total,
    shipping,
  } = useContext(CartDetailsContext);

  useEffect(() => {
    if (previousCart) {
      setCart(previousCart);
    }
  }, []);

  return (
    <>
      {cart.length === 0 ? (
        <div className="text-center m-5">
          <h2 className="text-error"> Your Shopping Car is Empty</h2>
          <p>Buy some products</p>
        </div>
      ) : (
        <>
          <ul className="menu">
            {/* <!-- Sidebar content here --> */}
            <h2 className="text-center m-2"> Your Shopping Cart</h2>

            {cart.map((cartItem) => (
              <CartItems
                key={cartItem.id}
                cartItem={cartItem}
                handleRemoveProduct={handleRemoveProduct}
              />
            ))}
          </ul>
          <div className="container mx-auto text-center">
            <div className="mt-5">
              <p>Selected Items: {quantity}</p>
              <p>Total Price: ${total.toFixed(2)}</p>
              <p>Tax: ${tax}</p>
              <p>Shipping Cost: ${shipping.toFixed(2)}</p>
              <h5>Grand Total: ${Subtotal}</h5>
            </div>
            <div>
              <button
                className="btn btn-error rounded-md w-full mt-2"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>

              <div>{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
