import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../frontend/common/Loader";

export default function Welcome(props) {
  //state area
  
  //redux states
  const {loading} = useSelector(state=>state.data)

  return (
    <>{loading && <Loader/>}
      <div classname="container-scroller">
        {/* partial:partials/_navbar.html */}
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row default-layout-navbar">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a className="navbar-brand brand-logo" href="index-2.html">
              <img src="../../../assets/images/logo.svg" alt="logo" />
            </a>
            <a className="navbar-brand brand-logo-mini" href="index-2.html">
              <img src="../../../assets/images/logo-mini.svg" alt="logo" />
            </a>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-stretch">
            <button
              className="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-toggle="minimize"
            >
              <span className="fas fa-bars" />
            </button>
            <ul className="navbar-nav">
              <li className="nav-item nav-search d-none d-md-flex">
                <div className="nav-link">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-search" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item d-none d-lg-flex">
                <a className="nav-link" href="#">
                  <span className="btn btn-primary">+ Create new</span>
                </a>
              </li>
              <li className="nav-item dropdown d-none d-lg-flex">
                <div className="nav-link">
                  <span
                    className="dropdown-toggle btn btn-outline-dark"
                    id="languageDropdown"
                    data-toggle="dropdown"
                  >
                    English
                  </span>
                  <div
                    className="dropdown-menu navbar-dropdown"
                    aria-labelledby="languageDropdown"
                  >
                    <a className="dropdown-item font-weight-medium" href="#">
                      French
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item font-weight-medium" href="#">
                      Espanol
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item font-weight-medium" href="#">
                      Latin
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item font-weight-medium" href="#">
                      Arabic
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link count-indicator dropdown-toggle"
                  id="notificationDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  <i className="fas fa-bell mx-0" />
                  <span className="count">16</span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="notificationDropdown"
                >
                  <a className="dropdown-item">
                    <p className="mb-0 font-weight-normal float-left">
                      You have 16 new notifications
                    </p>
                    <span className="badge badge-pill badge-warning float-right">
                      View all
                    </span>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-danger">
                        <i className="fas fa-exclamation-circle mx-0" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-medium">
                        Application Error
                      </h6>
                      <p className="font-weight-light small-text">Just now</p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-warning">
                        <i className="fas fa-wrench mx-0" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-medium">
                        Settings
                      </h6>
                      <p className="font-weight-light small-text">
                        Private message
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-info">
                        <i className="far fa-envelope mx-0" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-medium">
                        New user registration
                      </h6>
                      <p className="font-weight-light small-text">2 days ago</p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link count-indicator dropdown-toggle"
                  id="messageDropdown"
                  href="#"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-envelope mx-0" />
                  <span className="count">25</span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="messageDropdown"
                >
                  <div className="dropdown-item">
                    <p className="mb-0 font-weight-normal float-left">
                      You have 7 unread mails
                    </p>
                    <span className="badge badge-info badge-pill float-right">
                      View all
                    </span>
                  </div>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="../../../assets/images/faces/face4.jpg"
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content flex-grow">
                      <h6 className="preview-subject ellipsis font-weight-medium">
                        David Grey
                        <span className="float-right font-weight-light small-text">
                          1 Minutes ago
                        </span>
                      </h6>
                      <p className="font-weight-light small-text">
                        The meeting is cancelled
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="../../../assets/images/faces/face2.jpg"
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content flex-grow">
                      <h6 className="preview-subject ellipsis font-weight-medium">
                        Tim Cook
                        <span className="float-right font-weight-light small-text">
                          15 Minutes ago
                        </span>
                      </h6>
                      <p className="font-weight-light small-text">
                        New product launch
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="../../../assets/images/faces/face3.jpg"
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content flex-grow">
                      <h6 className="preview-subject ellipsis font-weight-medium">
                        Johnson
                        <span className="float-right font-weight-light small-text">
                          18 Minutes ago
                        </span>
                      </h6>
                      <p className="font-weight-light small-text">
                        Upcoming board meeting
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item nav-profile dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  id="profileDropdown"
                >
                  <img src="../../../assets/images/faces/face5.jpg" alt="profile" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown"
                  aria-labelledby="profileDropdown"
                >
                  <a className="dropdown-item">
                    <i className="fas fa-cog text-primary" />
                    Settings
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item">
                    <i className="fas fa-power-off text-primary" />
                    Logout
                  </a>
                </div>
              </li>
              <li className="nav-item nav-settings d-none d-lg-block">
                <a className="nav-link" href="#">
                  <i className="fas fa-ellipsis-h" />
                </a>
              </li>
            </ul>
            <button
              className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              data-toggle="offcanvas"
            >
              <span className="fas fa-bars" />
            </button>
          </div>
        </nav>
        {/* <!-- partial --> */}
        <div className="container-fluid page-body-wrapper">
          {/* <!-- partial:partials/_sidebar.html --> */}
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item nav-profile">
                <div className="nav-link">
                  <div className="profile-image">
                    <img src="../../../assets/images/faces/face5.jpg" alt="image" />
                  </div>
                  <div className="profile-name">
                    <p className="name">Welcome Jane</p>
                    <p className="designation">Super Admin</p>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/dashboard">
                  <i className="fa fa-home menu-icon" />
                  <span className="menu-title">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/features">
                  <i className="fa fa-home menu-icon" />
                  <span className="menu-title">Add Features</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="collapse"
                  href="#page-layouts"
                  aria-expanded="false"
                  aria-controls="page-layouts"
                >
                  <i className="fab fa-trello menu-icon" />
                  <span className="menu-title">Product</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="page-layouts">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item d-none d-lg-block">
                      <Link
                        className="nav-link"
                        to="/admin/product/add"
                      >
                       Add New Product
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="pages/layout/rtl-layout.html"
                      >
                        RTL
                      </a>
                    </li>
                    <li className="nav-item d-none d-lg-block">
                      <a
                        className="nav-link"
                        href="pages/layout/horizontal-menu.html"
                      >
                        Horizontal Menu
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              
            </ul>
          </nav>

          {/* main content start */}
          <div className="main-panel">
            <div className="content-wrapper">{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
