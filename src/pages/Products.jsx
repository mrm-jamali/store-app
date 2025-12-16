// import { useProducts } from "../assets/Context/ProductContext";
import styles from "./Products.module.css";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { initialQuery, searchProducts } from "../helper/helper";
import { filterProducts } from "../helper/helper";

import { useEffect, useState } from "react";


import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";
import { fetchProducts } from "../features/product/productfetch";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  // const products = useProducts([]);
  const dispatch=useDispatch();
  const {products,loading}=useSelector(store=>store.products)
  console.log(products)
  //  const products =[];
  const [search, setSearch] = useState([]);

  const [displayed, setDisplayed] = useState([]);
  // console.log("displayed:", displayed);

  const [query, setQuery] = useState({});
  const [searchParams,setSearchParams]=useSearchParams()
 

  useEffect(()=>{
dispatch(fetchProducts())
  },[])

  useEffect(()=>{
  setDisplayed(products);
  setQuery(initialQuery(searchParams));

},[products])


useEffect(()=>{
  setSearchParams(query);
  setSearch(query.search)
  let finalProducts=searchProducts(query.search,products);
   console.log(finalProducts)
    finalProducts=filterProducts(query.category, finalProducts)
    setDisplayed(finalProducts)
},[query])

  

 


 


 


  return (
    <>
    <SearchBox  search={search} setSearch={setSearch}  setQuery={setQuery}/>
      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <Loading />}
          {displayed.map((p) => (
            <Card data={p} key={p.id} />
          ))}
        </div>
       <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default Products;
