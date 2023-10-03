import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Error404 from "./page/Error404";
import ProductDetail from "./page/ProductDetail";
import Category from "./page/Category";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import Login from "./page/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/category/:categoryId/:slug" element={<Category />}></Route>
          <Route path="/item/:itemId/:slug" element={<ProductDetail />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
