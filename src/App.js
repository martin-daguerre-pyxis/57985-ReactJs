import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Error404 from "./page/Error404";
import ProductDetail from "./page/ProductDetail";
import Category from "./page/Category";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import Login from "./page/Login";
import { CartProvider } from "./contexts/cart.context";
import { AuthProvider } from "./contexts/auth.context";
import { StructureProvider } from "./contexts/structure.context";
import { NavProvider } from "./contexts/nav.context";
import { UserProvider } from "./contexts/user.context";

const App = () => {
  //const [state, setListBook] = useState({ ListBook:[], name:'', edition:'', id:'', bandera:true });

  return (
    <AuthProvider>
      <UserProvider>
        <StructureProvider>
          <NavProvider>
            <CartProvider>
              <BrowserRouter>
                <Routes>
                  <Route exact path="/" element={<Home />}></Route>
                  <Route
                    path="/category/:slug"
                    element={<Category />}
                  ></Route>
                  <Route
                    path="/item/:itemId/:slug"
                    element={<ProductDetail />}
                  ></Route>
                  <Route exact path="/cart" element={<Cart />}></Route>
                  <Route exact path="/checkout" element={<Checkout />}></Route>
                  <Route exact path="/login" element={<Login />}></Route>
                  <Route path="*" element={<Error404 />}></Route>
                </Routes>
              </BrowserRouter>
            </CartProvider>
          </NavProvider>
        </StructureProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;