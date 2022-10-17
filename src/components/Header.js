


import React, { useContext } from "react";
import { AppContext } from "../main/context";
import Cart from "./Cart";

function Header() {
  const { cart } = useContext(AppContext);
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark text-light">
        <div className="container-fluid">
          <h1>Shop Online</h1>
        </div>
      </nav>
      <Cart />
    </>
  );
}

export default Header;
