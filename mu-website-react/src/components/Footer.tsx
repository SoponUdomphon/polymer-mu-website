import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={3} sm={6} className="mb-4">
            <h4 className="mb-3">Platform</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#">Overview</a>
              </li>
              <li className="mb-2">
                <a href="#">Framer</a>
              </li>
              <li className="mb-2">
                <a href="#">Extensions</a>
              </li>
              <li className="mb-2">
                <a href="#">Connected</a>
              </li>
              <li className="mb-2">
                <a href="#">Building</a>
              </li>
              <li className="mb-2">
                <a href="#">Data</a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <h4 className="mb-3">Solutions</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#">Operations</a>
              </li>
              <li className="mb-2">
                <a href="#">Marketing</a>
              </li>
              <li className="mb-2">
                <a href="#">Documents</a>
              </li>
              <li className="mb-2">
                <a href="#">Product</a>
              </li>
              <li className="mb-2">
                <a href="#">Finance</a>
              </li>
              <li className="mb-2">
                <a href="#">Sales</a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <h4 className="mb-3">Learn</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#">Events</a>
              </li>
              <li className="mb-2">
                <a href="#">Integrations</a>
              </li>
              <li className="mb-2">
                <a href="#">Learning</a>
              </li>
              <li className="mb-2">
                <a href="#">Webinars</a>
              </li>
              <li className="mb-2">
                <a href="#">Customer</a>
              </li>
              <li className="mb-2">
                <a href="#">Webinars</a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <h4 className="mb-3">Company</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#">About</a>
              </li>
              <li className="mb-2">
                <a href="#">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#">Services</a>
              </li>
              <li className="mb-2">
                <a href="#">Newsroom</a>
              </li>
              <li className="mb-2">
                <a href="#">Developers</a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <hr />
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="mb-2">
                <a href="#" className="text-muted me-3">
                  Terms and Conditions
                </a>
                <a href="#" className="text-muted me-3">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted">
                  Cookies
                </a>
              </div>
              <div className="social-icons mb-2">
                <a href="#" className="me-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="me-3">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="me-3">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="me-3">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="text-muted mb-0">
                © 2024 Polymer Science and Technology Programme, Mahidol
                University. All Rights Reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
