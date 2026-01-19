import { createContext, useState, useEffect } from "react";
import {
  getCartItem,
  updateCartItem,
  deleteCartItem,
  clearCart as clearCartAPI,
  addCartItem,
} from "../api/cart.api";
import { showToast } from "../utils/toast";
import { useAuth } from "./AuthContext";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState(null); // API cart data
  const [loading, setLoading] = useState(true);

  const {isAuth} =useAuth()
  // add to cart

  // Add item to cart
  const addToCart = async (payload) => {
    try {
      await addCartItem({
        productId: payload.productId,
        quantity: payload.quantity,
        ...(payload.hasVariants ? { variantSku: payload.variantSku } : {}),
      });
      showToast("Product added to cart successfully.", "success");

      loadCart(); // refresh cart
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };

  // Load cart from API
  const loadCart = async () => {

    if(!isAuth){
      setCartData({ items: [] }); // ✅ reset cart if not logged in
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await getCartItem();
      setCartData(res.data);
    } catch (err) {
      console.error("Failed to load cart", err);
      setCartData({ items: [] });
    } finally {
      setLoading(false);
    }
  };

  // Update quantity of a single item
  const updateQty = async (itemId, newQty, item) => {
    try {
      await updateCartItem(itemId, {
        quantity: newQty,
        ...(item.hasVariants
          ? { variantSku: item.variantSku }
          : { variantId: item.variantId }),
      });
      loadCart();
      
    } catch (err) {
      console.error("Update quantity failed", err);
    }
  };

  // Remove an item
  const removeFromCart = async (item) => {
    try {
      await deleteCartItem({
        productId: item.productId,
        hasVariants: item.hasVariants,
        variantSku: item.variantSku,
        variantId: item.variantId,
      });
      showToast("Item removed from cart.", "success");
      loadCart();
    } catch (err) {
      console.error("Remove cart item failed", err);
    }
  };

  // Clear entire cart
  const clearCart = async () => {
    try {
      await clearCartAPI();
      loadCart();
    } catch (err) {
      console.error("Clear cart failed", err);
    }
  };

  useEffect(() => {
    loadCart();
  }, [isAuth]);

  return (
    <CartContext.Provider
      value={{
        cartData,
        loading,
        loadCart,
        updateQty,
        removeFromCart,
        clearCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
