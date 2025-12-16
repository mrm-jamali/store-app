import { useContext, useReducer } from "react";
import { createContext } from "react";
import { SumProducts } from "../../helper/helper";

const initialState = {
  selectedItem: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD-ITEM":
      if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        checkout: false,
        ...SumProducts(state.selectedItem),
      };
    case "REMOVE-ITEM":
      const newSelectedItem = state.selectedItem.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        // checkout:false,
        selectedItem: [...newSelectedItem],
        ...SumProducts(newSelectedItem),
      };
    case "INCREASE":
      const increaseIndex = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[increaseIndex].quantity++;
      return {
        ...state,
        ...SumProducts(state.selectedItem),
      };

    case "DECREASE":
      const decreaseIndex = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[decreaseIndex].quantity--;
      return {
        ...state,
        ...SumProducts(state.selectedItem),
      };
      case "CHECKOUT":
        return{
          selectedItem:[],
          total:0,
          itemCounter:0,
          checkout:true,
        }

    default:
      throw new Error("invalid action");
  }
};

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  // console.log(result);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
