import { TbListDetails } from "react-icons/tb";
import { TbGardenCartFilled } from "react-icons/tb";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { ProductQauninty, shortendFunc } from "../helper/helper";

import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrementItem,
  incrementItem,
  removeItem,
} from "../features/cart/cartSlice";

function Card({ data }) {
  const { id, title, image, price } = data;
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const qauntity = ProductQauninty(state, id);

  console.log(qauntity);

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortendFunc(title)}</h3>
      <p>{price}$</p>
      <div className={styles.actions}>
        <Link to={`/Products/${id}`}>
          <TbListDetails />
        </Link>

       
          <div>
            {qauntity === 1 && (
              <button onClick={() => dispatch(removeItem(data))}>
                <MdDeleteOutline />
              </button>
            )}

            {qauntity > 1 && (
              <button onClick={() => dispatch(decrementItem(data))}>-</button>
            )}
            {!!qauntity && <span>{qauntity}</span>}
            {qauntity === 0 ? (
              <button onClick={() => dispatch(addItem(data))}>
                <TbGardenCartFilled />
              </button>
            ) : (
              <button onClick={() => dispatch(incrementItem(data))}>+</button>
            )}
          </div>
      
      </div>
    </div>
  );
}

export default Card;
