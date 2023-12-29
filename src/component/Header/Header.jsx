import React from "react";
import "./Header.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

// link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover
function Header() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center header-container">
      <div className="container d-sm-none d-md-flex d-lg-flex d-lx-flex align-items-center justify-content-center header-box" id="navbarNavDropdown">
        <div className="d-flex flex-column px-4 fw-bold align-items-center justify-content-center header-h1">
          <Link to="/" className="link-txt">
            {" "}
            All
          </Link>
        </div>

        <div className="d-flex flex-column px-4 fw-bold align-items-center justify-content-center header-h1">
          <Link to="/fsd" className="link-txt">
            Full Stack Development
          </Link>
        </div>

        <div className="d-flex flex-column px-4 fw-bold align-items-center justify-content-center header-h1">
          <Link to="/data" className="link-txt">
            Data Science
          </Link>
        </div>
        <div className="d-flex flex-column px-4 fw-bold align-items-center justify-content-center header-h1">
          <Link to="/cyber" className="link-txt">
            Cyber Security
          </Link>
        </div>
        <div className="d-flex flex-column px-4 fw-bold align-items-center justify-content-center header-h1">
          <Link to="/career" className="link-txt">
            Career
          </Link>
        </div>
        
      </div>
      <div className="d-flex d-md-none d-lg-noe d-xl-none align-items-center justify-content-around header-menu">
      <a class="navbar-brand fs-5 fw-bold bl" href="#">Blog Category</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  {/* <span class="navbar-toggler-icon"></span> */}
  <span class="bi bi-list fw-bold fs-3 text-light cl" ></span>
  {/* <i class="bi bi-list"></i> */}
        </div>
    </div>
  );
}

export default Header;
