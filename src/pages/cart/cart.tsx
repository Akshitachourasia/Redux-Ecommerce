import React, { useEffect, useState } from "react";
import { Product } from "../../services/api";
import { Star, Delete, ShoppingCartCheckout } from "@mui/icons-material";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    setCartItems(storedCartItems);
  }, []);

  const handleRemoveItem = (id: number) => {
    const deletedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(deletedItems);
    localStorage.setItem("cartItems", JSON.stringify(deletedItems));
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2); 
  };

  const handleBuyNow = () => {
    console.log("Proceeding to checkout with items:", cartItems);
  };

  return (
    <div className="container mx-auto p-6 relative">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-indigo-600">
        Your Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <span className="text-7xl">🛒</span>
          <h2 className="text-3xl text-gray-500 mt-4">Your cart is empty!</h2>
          <p className="mt-4 text-gray-400">
            Browse our store and add some cool items.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="relative border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-42 w-full object-cover mb-4 rounded-md hover:opacity-90 transition-opacity"
                />
                <h2 className="text-xl font-semibold text-indigo-600">
                  {item.title}
                </h2>
                <p className="text-gray-700 mt-2">{item.description}</p>
                <div className="mt-4">
                  <span className="font-bold text-lg">Price: </span>$
                  {item.price.toFixed(2)} 
                </div>
                <div className="mt-2 text-black ">
                  <span className="font-bold">Category: </span>
                  {item.category}
                </div>
                <div className="flex items-center mt-4">
                  <p className="font-bold">Rating: {"  "} </p>
                  {item.rating?.rate}
                  <div className="flex items-center text-yellow-500 ml-2">
                    {Array.from(
                      { length: Math.round(item.rating?.rate) },
                      (_, i) => (
                        <Star key={i} className="h-5 w-5" />
                      )
                    )}
                  </div>
                  <span className="ml-2 text-gray-700">
                    ({item.rating?.count}) reviews
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition-colors duration-300"
                  >
                    <Delete />
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="flex items-center bg-indigo-600 text-white p-2 rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-300"
                  >
                    <ShoppingCartCheckout className="mr-2" />
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <h2 className="text-2xl font-bold text-indigo-600">
              Total: ${calculateTotal()}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
