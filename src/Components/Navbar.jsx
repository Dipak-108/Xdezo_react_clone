import { useState } from 'react';
import "../assets/css/navbar.css"

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (

    
    <nav id="nav" className="navbar">
      <div className="logo">
        <a href="#"><img src="./img/xdezo-logo.png" alt="Xdezo Logo" /></a>
      </div>
      <ul className="menu">
        <li><a href="index.html" className="nav-link">Home</a></li>
        <li><a href="./nav_pages/about_us.html" className="nav-link">About</a></li>
        <li className="drp-down">
          <p className="nav-link courses-drp-dwn" onClick={toggleDropdown}>
            All Courses <i className="fa-solid fa-caret-down"></i>
          </p>
          {dropdownVisible && (
            <div className="dropdown-content">
              <table>
               
               {/* dropdown table goes here */}
              </table>
            </div>
          )}
        </li>
        <li><a href="./nav_pages/blog.html" className="nav-link">Blog</a></li>
        <li><a href="./nav_pages/events.html" className="nav-link">Events</a></li>
        <li><a href="./nav_pages/testimonials.html" className="nav-link">Testimonials</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
