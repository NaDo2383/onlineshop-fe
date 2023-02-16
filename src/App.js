import Admin from "./pages/admin";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/admin.dashboard";
import AdminProducts from "./pages/admin.products";
import AdminUsers from "./pages/admin.users";
import AdminMenu from "./pages/admin.menu";
import AdminCate from "./pages/admin.cate";

import { Landing, Products, Services, Article, AboutUs } from "./pages";
import { RiMailUnreadFill } from "react-icons/ri";
import Main from "./pages/main";
import ProductDetail from "./pages/productDetail";

function App() {
  return (
    <div className="Container flex flex-d aling-items justify-content">
      <Routes>
        <Route exact path="/" element={<Main />}>
          <Route path="/" element={<Landing />} />
          <Route path="product" element={<Products />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="article" element={<Article />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route index path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/admin.Products" element={<AdminProducts />} />
          <Route path="/admin/admin.Users" element={<AdminUsers />} />
          <Route path="/admin/admin.Menu" element={<AdminMenu />} />
          <Route path="/admin/admin.Cate" element={<AdminCate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
