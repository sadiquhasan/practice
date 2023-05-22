import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <svg
            style={{ fontSize: 50 }}
            className="svg-icon"
            viewBox="0 0 20 20"
          >
            <path
              fill="none"
              d="M15.77,3.488c-2.266-0.067-3.801,1.105-4.605,3.519c0.415-0.158,0.817-0.237,1.206-0.237c0.829,0,1.193,0.428,1.097,1.284c-0.049,0.52-0.414,1.275-1.097,2.268c-0.682,0.993-1.192,1.489-1.534,1.489c-0.439,0-0.841-0.767-1.206-2.3C9.508,9.06,9.288,7.909,8.972,6.06C8.679,4.346,7.899,3.545,6.633,3.658c-0.537,0.045-1.34,0.496-2.412,1.354c-0.78,0.654-1.572,1.308-2.375,1.962l0.767,0.914c0.73-0.474,1.157-0.711,1.279-0.711c0.56,0,1.084,0.812,1.571,2.436c0.439,1.489,0.878,2.979,1.316,4.468c0.658,1.624,1.462,2.436,2.412,2.436c1.535,0,3.412-1.33,5.628-3.992c2.144-2.549,3.253-4.557,3.326-6.023C18.242,4.537,17.451,3.534,15.77,3.488"
            ></path>
          </svg>
          <b className="logo_name">Vimo</b>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/setting">
                Setting
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-light px-3">Sign In</button>
            <button className="btn btn-primary px-3 mx-3">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
