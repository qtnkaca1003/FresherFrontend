import React from "react";
//import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-while py-3 shadow-sm">
        <div className="container">
          <div className="navbar-brand fw-bold fs-4">  LA COLLECTION</div>
          {/* <NavLink className="navbar-brand fw-bold fs-4" to="/">
            LA COLLECTION
          </NavLink> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item nav-link active">
                {/*   <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink> */}
                Home
              </li>
              <li className="nav-item nav-link active">
                {/*   <NavLink className="nav-link" to="/products">
                    Products
                  </NavLink> */}
                Products
              </li>
              <li className="nav-item nav-link active">
                {/* <NavLink className="nav-link" to="/about">
                    About
                  </NavLink> */}
                About
              </li>
              <li className="nav-item nav-link active">
                {/*  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink> */}
                Contact
              </li>
            </ul>
            <div className="buttons">
              <a className="btn btn-outline-dark" href="/#">
                {" "}
                Login
              </a>
              <a className="btn btn-outline-dark ms-2" href="/#">
                Sign Up
              </a>
              <a className="btn btn-outline-dark ms-2" href="/#">
                Cart
              </a>
              {/*  <NavLink to="/login" className="btn btn-outline-dark">
                  Login
                </NavLink>
                <NavLink to="/sign-up" className="btn btn-outline-dark ms-2">
                  Sign Up
                </NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                  Cart
                </NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
