import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo" style={{ marginBottom: '1rem' }}>
            <span className="logo-icon"></span>
            <div className="logo-text">
              <h2>YELLOW PIPES</h2>
              <p>ENGINEERING</p>
            </div>
          </div>
          <p className="footer-desc">
            Providing innovative and sustainable construction services to the Hydrocarbon Sector, specifically for City Gas Distribution.
          </p>
        </div>

        <div className="footer-links-group">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/experience">Experience</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <strong>Address:</strong> House No 1848, Sector 61, Mohali, SAS Nagar, Punjab, 160062
            </li>
            <li>
              <strong>Email:</strong> yellowpipes.engg@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Yellow Pipes Engineering. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
