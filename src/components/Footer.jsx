import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Tagline */}
        <div className="footer-logo-section">
          <h2 className="footer-logo">Foodie</h2>
          <p className="footer-tagline">
            We are ready to give you the best dining experiences
          </p>

          {/* Social Icons */}
          <div className="footer-social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon fb"
              aria-label="Facebook"
            >
              F
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon ig"
              aria-label="Instagram"
            >
              I
            </a>
          </div>
        </div>

        {/* Footer Content Grid */}
        <div className="footer-grid">
          {/* Opening Hours */}
          <div className="footer-box">
            <h3>Opening Hours</h3>
            <p>Monday - Sunday</p>
            <p>11:00 AM - 10:00 PM</p>
          </div>

          {/* Contact - Let's Talk */}
          <div className="footer-box">
            <h3>Let's Talk</h3>
            <p>Phone: 1-800-222-4545</p>
            <p>Fax: 1-800-222-4545</p>
          </div>

          {/* Book a Table */}
          <div className="footer-box">
            <h3>Book a Table</h3>
            <p>Email: info@niomax.com</p>
            <p>Support: sales@niomax.com</p>
          </div>

          {/* Address */}
          <div className="footer-box">
            <h3>Our Address</h3>
            <p>123 Anywhere, Any City, NY 12345</p>
            <p>india</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Foodie Restaurant. All rights reserved.</p>
          <p>Made with ❤️ using React</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
