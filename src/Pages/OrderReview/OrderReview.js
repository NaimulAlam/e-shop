import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ReviewProducts from "./ReviewProducts";
import { CartDetailsContext } from "../../Context/CartContext";

function OrderReview() {
  const {
    cart,
    clearCart,
    handleRemoveProduct,
    quantity,
    Subtotal,
    tax,
    total,
    shipping,
  } = useContext(CartDetailsContext);

  return (
    <div>
      {cart.length === 0 ? (
        <div className="container p-10 mx-auto text-center">
          <h2 className="text-2xl">No Produts to review!</h2>
          <h2 className="text-xl py-5">
            Please visit our shop to add some produsts buy...
          </h2>
          <Link to="/shop">
            <button className="btn btn-primary">Shop Now</button>
          </Link>
        </div>
      ) : (
        <div className="hero">
          <div className="hero-content flex-col md:flex-row-reverse w-full">
            <div className="card w-full bg-base-100 max-w-sm shadow-2xl self-start">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Order Summary</h2>
                <p>Total amount: ${Subtotal}</p>
                <div className="container mx-auto text-center">
                  <div className="mt-5">
                    <p>Selected Items: {quantity}</p>
                    <p>Total Price: ${total.toFixed(2)}</p>
                    <p>Tax: ${tax}</p>
                    <p>Shipping Cost: ${shipping.toFixed(2)}</p>
                    <h5>Grand Total: ${Subtotal}</h5>
                  </div>
                </div>
                <Link to="/checkout" className="w-full">
                  <button className="btn btn-success rounded-md w-full mt-2">
                    Go to Checkout
                  </button>
                </Link>
                <div className="card-actions w-full">
                  <button
                    className="btn btn-error rounded-md w-full mt-2"
                    onClick={() => clearCart()}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-sm bg-base-100">
              <div className="lg:col-span-2 mx-auto">
                {cart.map((product) => (
                  <ReviewProducts
                    key={product.id}
                    product={product}
                    handleRemoveProduct={handleRemoveProduct}
                  ></ReviewProducts>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderReview;
