import { useState } from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/home page images/xdezo-logo.png";
import fblogo from "../assets/images/home page images/fb-icon.png";
import instalogo from "../assets/images/home page images/insta-icon.png";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation(); 
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
          <p
            className="nav-link courses-drp-dwn"
            onClick={toggleDropdown}
            aria-expanded={dropdownVisible}
            aria-haspopup="true"
          >
            All Courses <i className="fa-solid fa-caret-down"></i>
          </p>
          {dropdownVisible && (
            <div className="dropdown-content" onClick={(e) => e.stopPropagation()}>
              <table>
              <thead>
                  <tr>
                    <th>Design</th>
                    <th>Development</th>
                    <th>Marketing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link to="../../courses_pages/design_page/graphics_design.html">
                        Complete <strong>Graphics Design</strong> Masterclass Course
                      </Link>
                    </td>
                    <td>
                      <Link to="../../courses_pages/development_pages/python.html">
                        Complete <strong>Python Programming</strong> Course
                      </Link>
                    </td>
                    <td>
                      <Link to="../../courses_pages/marketing_pages/digital_marketing.html">
                        Complete <strong>Digital Marketing</strong> Course
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="../../courses_pages/design_page/ui_ux.html">
                        Complete <strong>UI/UX Masterclass</strong> Course
                      </Link>
                    </td>
                    <td>
                      <Link to="../../courses_pages/development_pages/laravel.html">
                        Full Stack Web Development with <strong>PHP Laravel</strong> Course
                      </Link>
                    </td>
                    <td>
                      <Link to="../../courses_pages/marketing_pages/seo.html">
                        Complete <strong>SEO Masterclass</strong> Course
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <Link to="../../courses_pages/design_page/logo_design.html">
                        Complete <strong>Logo Design</strong> Course
                      </Link>
                    </td>
                    <td>
                      <Link to="../../courses_pages/development_pages/django.html">
                        Full Stack Web Development with <strong>Python Django</strong> Course
                      </Link>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <Link to="../../courses_pages/development_pages/mern.html">
                        <strong>MERN</strong> Full Stack Web Development Course
                      </Link>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <Link to="../../courses_pages/development_pages/flutter.html">
                        Complete Mobile App Development with <strong>Flutter</strong> Course
                      </Link>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <Link to="../../courses_pages/development_pages/react.html">
                        Frontend Development with <strong>ReactJS</strong> Course
                      </Link>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      
                    </td>
                    <td>
                      <Link to="../../courses_pages/development_pages/nodejs.html">
                        Backend Development with <strong>Node.js</strong> Course
                      </Link>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
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

      <div className="social-media">
        <a href="#" className="icon">
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
