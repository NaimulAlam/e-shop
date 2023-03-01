import React, { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import Cart from "../../components/Cart/Cart";
import { CartDetailsContext } from "../../Context/CartContext";

const Shop = () => {
  const { products, previousCart } = useLoaderData();

  const { cart, setCart, handleAddtoCart, clearCart } =
    useContext(CartDetailsContext);

  useEffect(() => {
    setCart(previousCart);
  }, []);

  return (
    <div className="drawer drawer-end">
      <input id="shop-cart-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="container mx-auto">
          <h1 className="text-4xl text-accent-focus">Shope your desire!</h1>
          <h2 className="text-2xl">Find all Products here ...</h2>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddtoCart={handleAddtoCart}
            ></ProductCard>
          ))}
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="shop-cart-drawer" className="drawer-overlay"></label>
        <div className="drawer-side">
          <div className="bg-base-100 w-full h-full text-base-conten p-2">
            <Cart cart={cart} clearCart={clearCart}>
              <Link to="/orders-review">
                {cart.length > 0 && (
                  <button className="btn btn-outline btn-success rounded-md w-full mt-5">
                    Review Order
                  </button>
                )}
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
