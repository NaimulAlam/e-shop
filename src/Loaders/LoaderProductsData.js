import { getStoredCart } from "../utilities/localStorage";

export const LoaderProductsData = async () => {
  //get all products
  const url = "https://eshopwsb.onrender.com/products";
  const productsDate = await fetch(url);
  const products = await productsDate.json();

  //get cart items
  const savedCart = getStoredCart();
  const previousCart = [];

  //  find cart items and quantity by id stored in localStorage from all products
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);

    //set the quantity of the product in the cart from localStorage
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      previousCart.push(addedProduct);
    }
  }
  return { products, previousCart };
};
