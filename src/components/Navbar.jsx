import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
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

        {/* Hamburger */}
        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
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
              about
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" onclick={closeMenu}>
            contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
