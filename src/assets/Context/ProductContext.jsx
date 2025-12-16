import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/Config";

const ProductContext = createContext();

function ProductProvider({children}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
      
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
    </div>
  );
}


const useProducts=()=>{
  const products=useContext(ProductContext);
  return products;
}

const useDeailsProducts=(id)=> {
const products=useContext(ProductContext);
const result=products.find(product=>product.id===id)
console.log(result)
return result;

}

export default ProductProvider;
export {useProducts,useDeailsProducts};

