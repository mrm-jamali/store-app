
import { Link, useParams } from 'react-router-dom'
import { useDeailsProducts } from '../assets/Context/ProductContext';
import Loading from '../components/Loading';
import styles from "./DetailsProducts.module.css"
import { IoMdPricetag } from 'react-icons/io';
import  {FaArrowLeft } from 'react-icons/fa';
import {SiOpenproject} from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../features/product/productfetch';

function DetailsProducts() {
  const dispatch=useDispatch()
  const {id}=useParams();

    useEffect(()=>{
dispatch(fetchProducts())
  },[])

 const detailes=useSelector(store=>store.products.products.find(i=>i.id=== +id))
 
  if (!detailes) return <Loading />

//  console.log(detailes)
  return (
    <div className={styles.container}>
      
      <img src={detailes.image} alt={detailes.title} />
      
      <div className={styles.information}>
        <h3 className={styles.title}>{detailes.title}</h3>
        <p className={styles.discription}>{detailes.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {detailes.category}</p>
        <div>
         
          <span className={styles.price}>
             <IoMdPricetag />
            {detailes.price}$</span>
         
             <Link to="/Products">
             <FaArrowLeft />
             <span>back to shop</span>
             </Link>
         
         
        </div>
      </div>
    </div>
  )
}

export default DetailsProducts
