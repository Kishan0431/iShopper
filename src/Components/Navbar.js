import React from "react";
import style from "./Style/Home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import {Route } from "react-router-dom";
const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white shadow-sm bg-white rounded">
        <div class="container-fluid">
          <a href="/">
            <img
              title="iShopper"
              className={style.logo}
              src="https://static.vecteezy.com/system/resources/previews/009/389/585/non_2x/orange-shopping-bag-icon-isolated-on-background-free-png.png"
              alt=""
            />
          </a>

          <a class="navbar-brand m-1 p-2" href="/">
            iShopper
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              {/* ---------------------------------Men----------------------------------- */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/Men.js"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Men
                </a>
                <ul class="dropdown-menu">
                  <p className={style.topwear}>TopWear</p>
                  <li>
                    <a class="dropdown-item" href="#">
                      Kurtas
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      T-Shirt
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Casual Shirts
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Formal Shirts
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Jeans
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Jackets
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <p className={style.topwear}>FootWear</p>
                  <li>
                    <a class="dropdown-item" href="#">
                      Casual Shoes
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Sport Shoes
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Sneakers
                    </a>
                  </li>
                </ul>
              </li>
              {/* -----------------------------------Women---------------------------------- */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/Women.js"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Women
                </a>
                <ul class="dropdown-menu">
                  <p className={style.topwear}>TopWear</p>
                  <li>
                    <a class="dropdown-item" href="#">
                      Kurtas
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Sarees
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Jeans
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Jackets
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <p className={style.topwear}>FootWear</p>
                  <li>
                    <a class="dropdown-item" href="#">
                      Flats
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Boots
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Heels
                    </a>
                  </li>
                </ul>
              </li>
              {/* ----------------------------------Kids-------------------------------- */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/Kids.js"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kids
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      T-Shirts
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Shirts
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Shorts
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Jeans
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="about">
                  About
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link  active" href="contact">
                  Contact Us
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/Men.js"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Account
                </a>
                <ul class="dropdown-menu">
                  {isAuthenticated && (
                    <p className={style.email} >{user.name}</p>
                  )}
                  {isAuthenticated ? (
                    <li>
                      <button
                        className="m-3 btn btn-sm btn-warning"
                        onClick={() =>
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          })
                        }
                      >
                        Log Out
                      </button>
                    </li>
                  ) : (
                    <li>
                      <button
                        className="m-3 btn btn-sm btn-warning"
                        onClick={() => loginWithRedirect()}
                      >
                        Log In
                      </button>
                    </li>
                  )}
                </ul>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
