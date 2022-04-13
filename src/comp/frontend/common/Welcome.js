import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../redux/actions";
import Loader from "./Loader";
export default function Welcome(props) {
  // state area
  const Navigate = useNavigate();
  const { normalUser, loading } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  return (
    <>
      <header>
        {loading && <Loader />}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid align-items-center">
            <NavLink className="navbar-brand  fw-bold text-uppercase" to="/">
              <span className="text-warning"> Giri</span>{" "}
              <span className="text-white">
                Br<span className="text-white">and</span>
              </span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse align-items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/testing">
                    Testing
                  </Link>
                </li>
              </ul>
              <div className="cart">
                <ul className="navbar-nav">
                  <li className="nav-item me-4">
                    <NavLink
                      to="/cart"
                      className="nav-link text-white "
                    >
                      Cart ( 12 )
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* user creadentials  */}
              {!normalUser ? (
                <>
                  <div className="user">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink to="/user" className="nav-link text-white">
                          Login/Register
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown  ">
                      <a
                        className="nav-link dropdown-toggle  d-flex justify-content-center flex-column align-items-center"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >

                        <span className="d-block text-white">
                        {normalUser.user.name}
                        </span>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link
                            onClick={() => dispatch(logoutUser(Navigate))}
                            className="dropdown-item"
                            to="/user"
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
      {props.children}
    </>
  );
}
