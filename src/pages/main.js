import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";
import { useState } from "react";

export default function Main() {
    const [current, setCurrent] = useState();
    return (
        <div>
            <NavBar current={current} setCurrent={setCurrent} />
            <Outlet />
            <Footer />
        </div>
    );
}
