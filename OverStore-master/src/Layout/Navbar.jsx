import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.href = window.location.href;
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light bg-light ">
        <div class="container-fluid">
          <Link
            style={{
              fontWeight: "700",
              color: "#A59CCA",
              fontSize: "30px",
              cursor: "pointer",
            }}
            to="/">
            Over Store
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="product">
                  Product
                </Link>
              </li>
              {localStorage.getItem("admin") ? (
                <li className="nav-item">
                  <Link className="nav-link" to="billing">
                    Billing
                  </Link>
                </li>
              ) : (
                ""
              )}
              {!localStorage.getItem("admin") ||
              localStorage.getItem("admin") == 0 ||
              localStorage.getItem("admin") == "0" ? (
                ""
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="addcustomer">
                    Add Customer
                  </Link>
                </li>
              )}
              {localStorage.getItem("admin") !== "1" ? (
                <li className="nav-item">
                  <Link className="nav-link" to="contact">
                    Contact
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="customerlist">
                    Customer List
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>

              {localStorage.getItem("admin") ? (
                <li className="nav-item">
                  <Link className="nav-link" onClick={logout}>
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
