import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import Dashboard from "./pages/user/Dashboard.js";
import PrivateRoute from "./components/Routes/private.js";
import ForgotPassword from "./pages/Auth/ForgotPassword.js";
import AdminRoute from "./components/Routes/AdminRoute.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js"
import CreateCategory from "./pages/Admin/CreateCategory.js";
import CreateProduct from "./pages/Admin/CreateProduct.js";
import Users from "./pages/Admin/Users.js";
import Orders from "./pages/user/Orders.js";
import Profile from "./pages/user/Profile.js";
import Products from "./pages/Admin/Products.js";
import UpdateProduct from "./pages/Admin/UpdateProduct.js";
import SearchP from "./pages/SearchP.js";
import ProductDetails from "./pages/ProductDetails.js";
import CategoryProduct from "./pages/CategoryProduct.js";
import Categories from "./pages/Categories.js";
import AdminOrders from "./pages/Admin/AdminOrders.js";
import CartPage from "./pages/CartPage.js";
import GetUsers from "./pages/Admin/GetUsers.js";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails  />} />
        <Route path="/categories" element={<Categories  />} />
        <Route path="/cart" element={<CartPage  />} />
        <Route path="/category/:slug" element={<CategoryProduct  />} />
        <Route path="/search" element={<SearchP />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard/>} />
          <Route path="user/orders" element={<Orders/>} />
          <Route path="user/profile" element={<Profile/>} />
          </Route> 
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} /> 
          <Route path="admin/create-category" element={<CreateCategory />} /> 
          <Route path="admin/create-product" element={<CreateProduct />} /> 
          <Route path="admin/product/:slug" element={<UpdateProduct />} /> 
          <Route path="admin/products" element={<Products />} />  
          <Route path="admin/users" element={<Users />} /> 
          <Route path="admin/orders" element={<AdminOrders />} /> 
          <Route path="admin/get-users" element={<GetUsers/>} /> 
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
