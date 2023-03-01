import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";

function NavCart() {
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        htmlFor="shop-cart-drawer"
        className="btn btn-ghost btn-circle"
      >
        <div className="indicator">
          <ShoppingBagIcon className="h-6 w-6 text-slate-900" />
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavCart;
