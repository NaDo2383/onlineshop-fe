import React from "react";

import { Outlet, Link } from "react-router-dom";
import { NavBar } from "../components";

export default function Admin() {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <div className="d-flex flex-column">
            <Link to="/admin/admin.Dashboard">Admin Dashboard</Link>
            <Link to="/admin/admin.Products">Products</Link>
            <Link to="/admin/admin.Users">Users</Link>
            <Link to="/admin/admin.Menu">Menu</Link>
            <Link to="/admin/admin.Cate">Cate</Link>
          </div>
        </div>
        <div className="col-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
