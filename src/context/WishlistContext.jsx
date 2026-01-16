import { createContext, useContext, useEffect, useState } from "react";
import {
  getWishlistAPI,
  addWishlistAPI,
  deleteWishlistAPI,
} from "../api/wishlist.api";
import { showToast } from "../utils/toast";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWishlist = async () => {
    try {
      setLoading(true);
      const res = await getWishlistAPI();
      setWishlist(res.data?.items || []);
    } catch (error) {
      console.error("Fetch wishlist failed", error);
      setWishlist([]);
    } finally {
      setLoading(false);
    }
  };

  const addToWishlist = async ({ productId, variantSku }) => {
    try {
      await addWishlistAPI(
        variantSku ? { productId, variantSku } : { productId }
      );
      fetchWishlist();
    } catch (error) {
      console.error("Add wishlist failed", error);
    }
  };

  const removeFromWishlist = async ({ productId }) => {
    try {
      if (!productId || typeof productId !== "string") {
        console.error("Invalid productId for wishlist removal", productId);
        return;
      }

      await deleteWishlistAPI(productId);
      fetchWishlist();
      showToast("Item removed from wishlist.", "success");
    } catch (error) {
      console.error("Remove wishlist failed", error);
      showToast("Failed to remove item from wishlist.", "error");
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        loading,
        fetchWishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

/* ✅ CUSTOM HOOK EXPORT */
export const useWishlist = () => {
  return useContext(WishlistContext);
};
