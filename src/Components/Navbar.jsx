import { useState } from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import logo from '../assets/images/home page images/xdezo-logo.png'
import fblogo from '../assets/images/home page images/fb-icon.png'
import instalogo from '../assets/images/home page images/insta-icon.png'


  
const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav id="nav" className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Xdezo Logo" />
        </Link>
      </div>
      <ul className="menu">
        <li>
          <Link to="/Home" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="nav-link">
            About
          </Link>
        </li>
        <li className="drp-down">
          <p className="nav-link courses-drp-dwn" onClick={toggleDropdown}>
            <Link to="/AllCourses">All Courses</Link>{" "}
            <i className="fa-solid fa-caret-down"></i>
          </p>
          {dropdownVisible && (
            <div className="dropdown-content">
              <table>{/* dropdown table goes here */}</table>
            </div>
          )}
        </li>
        <li>
          <Link to="/Blog" className="nav-link">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/Events" className="nav-link">
            Events
          </Link>
        </li>
        <li>
          <Link to="/Testimonials" className="nav-link">
            Testimonials
          </Link>
        </li>
      </ul>

      <div>
        <a href="#" className="icon" >
          <i className="fa-solid fa-bars"></i>
        </a>
        <div className="sm-logo">
          <div className="fbimg">
            <a
              href="https://www.facebook.com/XDezoAcademy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fblogo} alt="Facebook" />
            </a>
          </div>
          <div className="instaimg">
            <a
              href="https://www.instagram.com/xdezoacademy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instalogo} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
