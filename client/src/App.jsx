import Product from "./pages/Product"
import Home from './pages/Home';
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from './pages/Success';
import ProductUpdateForm from "./pages/ProductJpdateForm";
import ProductAddNew from "./pages/ProductAddNew";
import LoginAdmin from './pages/LoginAdmin'
import ProductDisplayForAdmin from "./pages/ProductDisplayForAdmin";
import { BrowserRouter as Router, Routes,Route,Navigate,} from "react-router-dom";

const  App=()=> {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}> </Route>
        <Route exact path="/products/:category" element={<ProductList />}> </Route>
        <Route exact path="/product/:id" element={<Product />}></Route>
        <Route exact path="/cart" element={<Cart />}> </Route>
        <Route exact path="/success" element={<Success />}> </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/admin" element={<LoginAdmin />} />
        <Route exact path="/product/update" element={<ProductUpdateForm />} />
        <Route exact path="/product/addnew" element={<ProductAddNew />} />
        <Route exact path="/product/display"element={<ProductDisplayForAdmin />}/>
      </Routes>
    </Router>
  );

}

export default App;
