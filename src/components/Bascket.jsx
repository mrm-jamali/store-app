
import { removeItem,incrementItem,decrementItem } from "../features/cart/cartSlice";
import { shortendFunc } from "../helper/helper";
import styles from "./Bascket.module.css"
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

function Bascket({ data }) {
  const {image,title,quantity}=data;
    const dispatch=useDispatch()
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortendFunc(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
          
           <MdDeleteOutline />

          </button>
        )}


        {quantity > 1 && (
          <button onClick={() => dispatch (decrementItem(data))}>-</button>
        )}
        <span>{quantity}</span>
        
        <button onClick={() => dispatch(incrementItem(data))}>+</button>
      </div>
    </div>
  );
}

export default Bascket;
