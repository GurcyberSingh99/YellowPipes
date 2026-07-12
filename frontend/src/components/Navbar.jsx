import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Experience', path: '/experience' },
    { name: 'Equipment', path: '/equipment' },
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon"></span>
          <div className="logo-text">
            <h2>YELLOW PIPES</h2>
            <p>ENGINEERING</p>
          </div>
        </Link>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active-link' : ''}`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={closeMenu}>Contact Us</a>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
