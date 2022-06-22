import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css"


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav className="navbar_container">
        <div>
          <h3><Link to="/" className="myLink">Made4Day</Link></h3>
          <h6><Link to="/about" className="myLink">About</Link></h6>
        </div>
        <div>
          <button className="navbar_btn btn" onClick={() => navigate("/favorite")}>❤</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
