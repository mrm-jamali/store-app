// import { useCart } from "../assets/Context/CartContext";
// import { useProduct } from "../assets/Context/CartContext";
import {  useSelector } from "react-redux";
import Bascket from "../components/Bascket"
import BascketSideBar from "../components/BascketSideBar"
import styles from "./CheckOut.module.css";


function CheckOut() {
  const state = useSelector(store => store.cart);

  return (
    <div className={styles.container}>
      
      {!state.itemsCounter ? (
        <div className={styles.empty}>
          <h2>empty</h2>
        </div>
      ) : (
        <>
          <BascketSideBar state={state} />
          <div className={styles.products}>
            {state.selectedItem.map(product => (
              <Bascket data={product} key={product.id} />
            ))}
          </div>
        </>
      )}

    </div>
  );
}

export default CheckOut;
