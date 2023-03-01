import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import React, { useContext, useEffect } from "react";
import { CartDetailsContext } from "../../../Context/CartContext";
import { Link, useLoaderData } from "react-router-dom";

function NavCart() {
  const { previousCart } = useLoaderData();

  const { setCart, quantity, Subtotal } = useContext(CartDetailsContext);

  useEffect(() => {
    if (previousCart) {
      setCart(previousCart);
    } else {
      setCart([]);
    }
  }, [previousCart, setCart]);

  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        htmlFor="shop-cart-drawer"
        className="btn btn-ghost btn-circle"
      >
        <div className="indicator">
          <ShoppingBagIcon className="h-6 w-6 text-slate-900" />
          <span className="badge badge-sm indicator-item">{quantity}</span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-sm">Order Summary</span>
          <span className="font-bold text-lg">total items: {quantity}</span>
          <span className="text-info">Subtotal: ${Subtotal}</span>
          <div className="card-actions">
            {Subtotal > 0 ? (
              <Link to="/orders-review">
                <button className="btn btn-primary btn-block btn-sm">
                  View cart
                </button>
              </Link>
            ) : (
              <Link to="/shop">
                <button className="btn btn-secondary btn-block btn-sm">
                  Go to Shop
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavCart;
