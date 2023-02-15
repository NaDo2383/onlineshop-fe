import { nanoid } from "nanoid";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import { menuItems } from "../data/menuData";
import { useState } from "react";
import AddCustomerModal from "./addCustomerModal";

export const NavBar = ({ current, setCurrent }) => {
  const [regModal, setRegModal] = useState(false);

  function modalHandler() {
    setRegModal(!regModal);
  }

  console.log(current);
  return (
    <nav className="flex align-items space-between">
      <AddCustomerModal modal={regModal} setModal={setRegModal} />
      <Link
        to="/"
        className="Logo flex align-items"
        onClick={() => {
          setCurrent("");
        }}
      >
        <img src={require("../assets/icon-img/logo.png")} alt="" />
        <img src={require("../assets/page/landing/Lalasia.png")} alt="" />
      </Link>
      <div className="flex align-items space-between ">
        {menuItems.map((e, index) =>
          current === e._id ? (
            <Link className="item item-active" to={e.link} key={index}>
              {e.name}
            </Link>
          ) : (
            <Link
              className="item"
              to={e.link}
              onClick={() => {
                setCurrent(e._id);
              }}
              key={index}
            >
              {e.name}
            </Link>
          )
        )}
      </div>
      <div className="flex align-items space-between gap-3">
        <div className="iconMenu">
          <img src={require("../assets/icon-img/bag.png")} alt="img" />
        </div>
        <div className="dropdown">
          <img
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            src={require("../assets/icon-img/user.png")}
            alt="img"
          />

          <div className={`dropdown-menu ${regModal ? "none" : "show"}`}>
            <form class="px-4 py-3">
              <div class="mb-3">
                <label for="exampleDropdownFormEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleDropdownFormEmail1"
                  placeholder="email@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleDropdownFormPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleDropdownFormPassword1"
                  placeholder="Password"
                />
              </div>

              <button type="submit" class="btn btn-primary signInBtn">
                Sign In
              </button>
            </form>
            <div class="dropdown-divider"></div>
            <div className="d-flex">
              <button
                type="submit"
                class="btn align-self-center signUpBtn"
                onClick={() => {
                  modalHandler();
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
