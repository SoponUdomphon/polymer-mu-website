import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavigationBar: React.FC = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-light" style={{ backgroundColor: 'white' }}>
      <Container>
        {/* Mobile Logo */}
        <Navbar.Brand as={Link} to="/" className="d-block d-sm-none d-lg-none">
          <img src={process.env.PUBLIC_URL + '/sorces/polymer_logo.png'} height="40" alt="Polymer Logo" />
        </Navbar.Brand>
        
        {/* Desktop Logo */}
        <Navbar.Brand as={Link} to="/" className="d-none d-sm-block">
          <img src={process.env.PUBLIC_URL + '/sorces/polymer_logo.png'} height="65" alt="Polymer Logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarsExample07" />
        <Navbar.Collapse id="navbarsExample07">
          <Nav className="mx-auto mb-2 mb-lg-0">
            {/* Home Menu */}
            <Nav.Link as={Link} to="/" className="px-2" active>
              Home
            </Nav.Link>
            
            {/* About Menu */}
            <NavDropdown title="About" id="about-dropdown" className="px-2">
              <NavDropdown.Item as={Link} to="/vision">Our Faculty & Program</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/staff">Our Faculty Staff</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/partners">Our Partner & Collaborators</NavDropdown.Item>
            </NavDropdown>
            
            {/* Programs Menu */}
            <NavDropdown title="Programs & Courses" id="programs-dropdown" className="px-2">
              <NavDropdown.Item as={Link} to="/program-master">Master Degree</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/program-phd">Doctor Degree</NavDropdown.Item>
            </NavDropdown>
            
            {/* Research Menu */}
            <NavDropdown title="Research" id="research-dropdown" className="px-2">
              <NavDropdown.Item as={Link} to="/research-cluster">Research Cluster</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/laboratory">Laboratory</NavDropdown.Item>
            </NavDropdown>
            
            {/* News Menu */}
            <Nav.Link as={Link} to="/news" className="px-2">
              News & Events
            </Nav.Link>
          </Nav>
          
          <a href="https://graduate.mahidol.ac.th/admission-apply/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="apply-button">
            <button type="button" className="btn btn-outline-primary">
              Apply Now!
            </button>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 