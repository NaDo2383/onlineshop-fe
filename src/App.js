import Admin from "./pages/admin";
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import AdminDashboard from "./pages/admin.dashboard";
import AdminProducts from "./pages/admin.products";
import AdminUsers from "./pages/admin.users";
import AdminMenu from "./pages/admin.menu";
import AdminCate from "./pages/admin.cate";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Admin />}>
                    <Route index path="/admin.Dashboard" element={<AdminDashboard />} />
                    <Route path="/admin.Products" element={<AdminProducts />} />
                    <Route path="/admin.Users" element={<AdminUsers />} />
                    <Route path="/admin.Menu" element={<AdminMenu />} />
                    <Route path="/admin.Cate" element={<AdminCate />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
