import { Routes, Route, Navigate } from "react-router-dom";
import "./global.css";
// import Products from "./pages/Products";
import DetailsProducts from "./pages/DetailsProducts";
import Products from "./pages/Products";
import CheckOut from "./pages/CheckOut";
import NotFound from "./pages/NotFound";
// import ProductProvider from "./assets/Context/ProductContext";
// import CartProvider from "./assets/Context/CartContext";
import LayOut from "./layout/LayOut";

function App() {
  return (

   
      <LayOut>
      <Routes>
        <Route path="/" element={<Navigate to="/Products" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<DetailsProducts />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </LayOut>
  
   
  );
}

export default App;
