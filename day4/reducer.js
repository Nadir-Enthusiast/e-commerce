export const initialState = {
    cart: [],
    user: null
};
  
export const getTotalPrice = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

// Selector
export const getCartTotal = (cart) => 
  cart?.reduce((amount, item) => item.price + amount, 0);
  
const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    default:
      return state;
  }
};
  
export default reducer;
