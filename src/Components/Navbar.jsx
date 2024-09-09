import { useState } from 'react';
import "../assets/css/navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (

    
    <nav id="nav" className="navbar">
      <div className="logo">
        <Link to="/Home"><img src="./img/xdezo-logo.png" alt="Xdezo Logo" /></Link>
      </div>
      <ul className="menu">
        <li><Link to="/Home" className="nav-link">Home</Link></li>
        <li><Link to="/About" className="nav-link">About</Link></li>
        <li className="drp-down">
          <p className="nav-link courses-drp-dwn" onClick={toggleDropdown}>
            <Link to="/AllCourses">All Courses</Link> <i className="fa-solid fa-caret-down"></i>
          </p>
          {dropdownVisible && (
            <div className="dropdown-content">
              <table>
               
               {/* dropdown table goes here */}
              </table>
            </div>
          )}
        </li>
        <li><Link to="/Blog" className="nav-link">Blog</Link></li>
        <li><Link to="/Events" className="nav-link">Events</Link></li>
        <li><Link to="/Testimonials" className="nav-link">Testimonials</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
