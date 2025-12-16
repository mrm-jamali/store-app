const shortendFunc = (text) => {
  return text.split(" ").slice(0,3).join("");
};


const searchProducts = (search, products) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};


const filterProducts = (category, products) => {
  if (!category) return products;
  const filteredProducts = products.filter((p) => p.category === category);
  return filteredProducts;
};

const createQuery=(currentQuery,newQuery)=>{
   if (newQuery.category==="all") {
    const {category,...rest}=currentQuery;
    return rest
   }
   if (newQuery.search==="") {
    const {search,...rest}=currentQuery;
    return rest;
   }
   
     return {...currentQuery, ...newQuery,}
   
}

const initialQuery=searchParams =>{
     const query={}
  const category=searchParams.get("category");
  const search=searchParams.get("search");
  if (category) query.category=category;
  if (search) query.search=search;
return query
  
}

// const SumProducts=products=>{
// const itemCounter=products.reduce((counter,product)=>counter+product.quantity,0)
// const total=products.reduce((total,product)=>total+product.price*product.quantity,0).toFixed(2)

// return {itemCounter,total}

// }


const sumPrice=(products)=>{
  return products.reduce((total,product)=>total+product.price*product.quantity,0).toFixed(2)
}

const sumQuantity=(products)=>{
return products.reduce((counter,product)=>counter+product.quantity,0)
}



const ProductQauninty=(state,id)=>{
const index=state.selectedItem.findIndex(item=>item.id===id);
if(index=== -1){
  return 0
}
else{
  return state.selectedItem[index].quantity
}
}

export { shortendFunc, searchProducts, filterProducts,createQuery,initialQuery,sumPrice,sumQuantity,ProductQauninty };
