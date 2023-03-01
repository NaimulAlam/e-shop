import React from "react";
import CartItems from "./CartItems";

const Cart = ({ cart, clearCart, children }) => {
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
              <CartItems key={cartItem.id} cartItem={cartItem} />
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
