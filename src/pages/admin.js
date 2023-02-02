import React from "react";
import Navbar from "../components/navbar";
import { Outlet, Link } from 'react-router-dom'

export default function Admin() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-3">
                    <div className="d-flex flex-column">
                        <Link to="/admin.Dashboard">Admin Dashboard</Link>
                        <Link to="/admin.Products">Products</Link>
                        <Link to="/admin.Users">Users</Link>
                        <Link to="/admin.Menu">Menu</Link>
                        <Link to="/admin.Cate">Cate</Link>
                    </div>
                </div>
                <div className="col-9">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
