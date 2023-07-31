
import { Routes, Route, Link } from "react-router-dom";

import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Checkout from "./pages/Checkout";
import Shop from "./pages/Shop";
import Home from "./pages/Home";


function App() {
  return (
   <>
   <Routes>
     <Route path="/"element={<Home/>}/>
     <Route path="/Contact"element={<Contact/>}/>
     <Route path="/product"element={<Product/>}/>
     <Route path="/blog"element={<Blog/>}/>
     <Route path="/checkout"element={<Checkout/>}/>
     <Route path="/cart"element={<Cart/>}/>
     <Route path="/shop"element={<Shop/>}/>
   </Routes>
   </>
  );
}

export default App;

