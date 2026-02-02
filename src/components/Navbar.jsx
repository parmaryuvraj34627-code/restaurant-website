import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          Foodie
        </NavLink>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" end className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="nav-link" onClick={closeMenu}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
