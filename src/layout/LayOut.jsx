
import { TbGardenCartFilled } from "react-icons/tb";
// import { useCart } from "../assets/Context/CartContext";
import { Link } from "react-router-dom";

import styles from "./Layout.module.css"
import { useSelector } from "react-redux";

function LayOut({children}) {
// const [state]=useCart()
const state=useSelector(store=>store.cart)

  return (
    <div>
      <header className={styles.header}>
        <Link to="/Products" >WebDesign</Link>
        <Link to="/CheckOut " >
        <div>
             <TbGardenCartFilled />
             {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
        </div>
        </Link>
      </header>
      <main>  {children}</main>
    
      <footer>
      <p> Designed By Maryam</p> 
      </footer>
    </div>
  )
}

export default LayOut
