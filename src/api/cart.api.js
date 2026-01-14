import API from "./axiosInstance";

/* ================= ADD ITEM ================= */
export const addCartItem = (data) => {
  return API.post("/cart/items", data);
};

/* ================= GET CART ================= */
export const getCartItem = () => {
  return API.get("/cart");
};

/* ================= UPDATE QTY ================= */
export const updateCartItem = (productId, data) => {
  return API.put(`/cart/items/${productId}`, data);
};

/* ================= DELETE ITEM (FIXED) ================= */
/**
 * BACKEND EXPECTS:
 * DELETE /cart/items/:id
 *
 * If variant → use variantSku
 * Else → use productId
 */
export const deleteCartItem = ({ productId, hasVariants, variantSku, variantId }) => {
  const body = hasVariants
    ? { variantSku }
    : { variantId };

  return API.delete(`/cart/items/${productId}`, {
    data: body, // ⚠️ DELETE BODY MUST BE HERE
  });
};

/* ================= CLEAR CART ================= */
export const clearCart = () => {
  return API.delete("/cart");
};
