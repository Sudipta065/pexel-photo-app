import React, { Component } from "react";
import "./style.css";
import logo from "../img/logo.JPG";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div>
            {" "}
            <img src={logo} alt="Logo" />
          </div>
          <a className="navbar-brand" href="/"></a>
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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Explore <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Discover
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  For Professional
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-bubble "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ...
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">
                    About Click Motto
                  </a>

                  <a className="dropdown-item" href="/">
                    Pricing
                  </a>
                  <a className="dropdown-item" href="/">
                    License
                  </a>
                  <a className="dropdown-item" href="/">
                    Partnerships
                  </a>
                  <a className="dropdown-item" href="/">
                    Blog
                  </a>
                  <a className="dropdown-item" href="/">
                    Help
                  </a>
                  <a className="dropdown-item" href="/">
                    Join The Team
                  </a>
                </div>
              </li>
              <li className="nav-item margin-right-line">
                <a
                  className="nav-link btn btn-outline-secondary btn-navs"
                  href="#"
                >
                  Submit Photos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item ">
                <a className=" btn btn-free" href="#">
                  Join Free
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
