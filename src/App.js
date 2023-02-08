import Admin from "./pages/admin";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/admin.dashboard";
import AdminProducts from "./pages/admin.products";
import AdminUsers from "./pages/admin.users";
import AdminMenu from "./pages/admin.menu";
import AdminCate from "./pages/admin.cate";
import { Footer, NavBar, Product } from "./components";
import { Landing, Products, Services, Article, AboutUs } from "./pages";
import { useState } from "react";

function App() {
  const [current, setCurrent] = useState();
  return (
    <div className="Container flex flex-d aling-items justify-content">
      <NavBar current={current} setCurrent={setCurrent} />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="product/:id" element={<Products />}>
          <Route path="card" element={<Product />} />
        </Route>
        <Route path="services" element={<Services />} />
        <Route path="article" element={<Article />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route index path="/admin.Dashboard" element={<AdminDashboard />} />
          <Route path="/admin.Products" element={<AdminProducts />} />
          <Route path="/admin.Users" element={<AdminUsers />} />
          <Route path="/admin.Menu" element={<AdminMenu />} />
          <Route path="/admin.Cate" element={<AdminCate />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
