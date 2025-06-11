import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src="/sorces/hero_section.jpg"
            alt="Polymer Science Background"
            className="hero-image"
          />
        </div>
        <div className="hero-overlay"></div>
        <Container className="h-100 d-flex align-items-center">
          <Row className="w-100">
            <Col lg={5} className="ms-0 text-start">
              <div className="hero-content">
                <h2 className="animated fadeInUp">
                  Welcome to Polymer Science and Technology Program at Mahidol
                  University
                </h2>
                <p className="animated fadeInUp">
                  Our program is dedicated to advancing the frontiers of polymer
                  science through innovative research, high-quality education,
                  and strong industry partnerships. Join us to explore the
                  exciting world of polymers and their endless possibilities.
                </p>
                <Link
                  to="https://chemistry.sc.mahidol.ac.th/?page_id=2131"
                  className="delicious-btn animated fadeInUp"
                >
                  See more
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Our Program Section */}
      <Container className="mt-5 mb-5">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-5 fw-bold mb-3">Why Choose Our Program?</h1>
        </div>

        <Row className="pt-5 mt-30">
          {/* Cutting-Edge Research */}
          <Col lg={4} sm={6} className="mb-30 pb-5">
            <Card className="h-100 feature-card">
              <div className="icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="feature-icon"
                >
                  <path d="m14.5,12.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5Zm7.181-1.073l-2.604,3.721c-.374.534-.986.853-1.638.853H6.562c-.652,0-1.265-.318-1.638-.853l-2.604-3.721c-.316-.452-.94-.562-1.393-.246-.453.316-.562.94-.246,1.393l2.604,3.721c.748,1.068,1.973,1.706,3.277,1.706h1.438v5c0,.553.448,1,1,1h6c.552,0,1-.447,1-1v-5h1.438c1.304,0,2.529-.638,3.277-1.706l2.604-3.721c.316-.452.207-1.076-.246-1.393-.452-.315-1.075-.206-1.393.246Z" />
                </svg>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="pt-1">Cutting-Edge Research</Card.Title>
                <Card.Text>
                  Engage in pioneering research across four dynamic clusters:
                  Nanotechnology, Natural Rubber, Advanced Composite, and
                  Applied Industry.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* World-Class Faculty */}
          <Col lg={4} sm={6} className="mb-30 pb-5">
            <Card className="h-100 feature-card">
              <div className="icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="feature-icon"
                >
                  <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,5c1.66,0,3,1.34,3,3s-1.34,3-3,3 S9,9.66,9,8S10.34,5,12,5z M12,19.2c-2.5,0-4.71-1.28-6-3.22c0.03-1.99,4-3.08,6-3.08c1.99,0,5.97,1.09,6,3.08 C16.71,17.92,14.5,19.2,12,19.2z" />
                </svg>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="pt-1">World-Class Faculty</Card.Title>
                <Card.Text>
                  Learn from leading experts and researchers in the field of
                  polymer science and technology.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* State-of-the-Art Facilities */}
          <Col lg={4} sm={6} className="mb-30 pb-5">
            <Card className="h-100 feature-card">
              <div className="icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="feature-icon"
                >
                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z M12,17h5v-2h-5V17z M12,13h5v-2h-5V13z M12,9h5V7h-5V9z M7,7h3v2H7V7z M7,11h3v2H7V11z M7,15h3v2H7V15z" />
                </svg>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="pt-1">
                  State-of-the-Art Facilities
                </Card.Title>
                <Card.Text>
                  Access to modern laboratories and advanced equipment for
                  hands-on learning and research.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Industry Connections */}
          <Col lg={4} sm={6} className="mb-30 pb-5">
            <Card className="h-100 feature-card">
              <div className="icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="feature-icon"
                >
                  <path d="M16,11c1.66,0,2.99-1.34,2.99-3S17.66,5,16,5c-1.66,0-3,1.34-3,3s1.34,3,3,3z M8,11c1.66,0,2.99-1.34,2.99-3S9.66,5,8,5 C6.34,5,5,6.34,5,8s1.34,3,3,3z M8,13c-2.33,0-7,1.17-7,3.5L1,19h14v-2.5c0-2.33-4.67-3.5-7-3.5z M16,13c-0.29,0-0.62,0.02-0.97,0.05 c1.16,0.84,1.97,1.97,1.97,3.45L17,19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="pt-1">Industry Connections</Card.Title>
                <Card.Text>
                  Benefit from our strong partnerships with industry leaders and
                  gain practical experience through collaborative projects.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Global Opportunities */}
          <Col lg={4} sm={6} className="mb-30 pb-5">
            <Card className="h-100 feature-card">
              <div className="icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="feature-icon"
                >
                  <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M11,19.93c-3.95-0.49-7-3.85-7-7.93 c0-0.62,0.08-1.21,0.21-1.79L9,15v1c0,1.1,0.9,2,2,2v1.93z M17.9,17.39c-0.26-0.81-1-1.39-1.9-1.39h-1v-3c0-0.55-0.45-1-1-1H8v-2h2 c0.55,0,1-0.45,1-1V7h2c1.1,0,2-0.9,2-2v-0.41c2.93,1.19,5,4.06,5,7.41c0,2.08-0.8,3.97-2.1,5.39z" />
                </svg>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="pt-1">Global Opportunities</Card.Title>
                <Card.Text>
                  Participate in international conferences, exchange programs,
                  and collaborative research initiatives.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Global Opportunities */}
          <Col lg={4} sm={6} className="mb-30 pb-5">
            <Card className="h-100 feature-card">
              <div className="icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="feature-icon"
                >
                  <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M11,19.93c-3.95-0.49-7-3.85-7-7.93 c0-0.62,0.08-1.21,0.21-1.79L9,15v1c0,1.1,0.9,2,2,2v1.93z M17.9,17.39c-0.26-0.81-1-1.39-1.9-1.39h-1v-3c0-0.55-0.45-1-1-1H8v-2h2 c0.55,0,1-0.45,1-1V7h2c1.1,0,2-0.9,2-2v-0.41c2.93,1.19,5,4.06,5,7.41c0,2.08-0.8,3.97-2.1,5.39z" />
                </svg>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="pt-1">Global Opportunities</Card.Title>
                <Card.Text>
                  Participate in international conferences, exchange programs,
                  and collaborative research initiatives.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* New for 2024 Section */}
      <Container className="mt-5 mb-5">
        <Row className="align-items-center">
          <Col md={4} className="mb-4 mb-md-0">
            <h2 className="display-5 fw-bold">New for 2024!</h2>
            <p className="lead">
              Join us to push the boundaries of polymer science and technology.
              Apply now to our '<strong>Research Only</strong>' plans and shape
              your academic and professional future.
            </p>
            <Link to="program-master" className="delicious-btn">
              See more
            </Link>
          </Col>
          <Col md={8}>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
              <h1 className="display-5 fw-bold">
                Innovate Your Future with Our 'Research Only' Plans
              </h1>
            </div>
            <div className="card-deck mb-3 text-center">
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="card mb-4 box-shadow">
                    <div className="card-header">
                      <h4 className="my-0 font-weight-normal">Research Plan</h4>
                      <span className="new-plan-label">New Plan</span>
                    </div>
                    <div className="card-body">
                      <img
                        src="/sorces/research.png"
                        alt="Research"
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                        }}
                      />
                      <h1
                        className="card-title"
                        style={{ fontSize: "2.0rem", fontWeight: "bold" }}
                      >
                        Start to Do!!
                      </h1>
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                      </ul>
                      <Button variant="outline-primary">
                        Sign up for free
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 box-shadow">
                    <div className="card-header">
                      <h4 className="my-0 font-weight-normal">
                        Coursework Plan
                      </h4>
                    </div>
                    <div className="card-body">
                      <img
                        src="/sorces/course.png"
                        alt="Student studying"
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                        }}
                      />
                      <h1
                        className="card-title"
                        style={{ fontSize: "2.0rem", fontWeight: "bold" }}
                      >
                        Deep to Knowledge
                      </h1>
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                      </ul>
                      <Button variant="outline-primary">
                        Sign up for free
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container className="mt-5 mb-5">
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h2 className="mb-4">Contact Us</h2>
            <h4>Polymer Science and Technology Programme</h4>
            <p>
              Department of Chemistry, Faculty of Science, Mahidol University
              Salaya Campus
              <br />
              Phutthamonthon Sai 4 Rd, Salaya, Phutthamonthon District, Nakhon
              Pathom 73170
            </p>
            <p>+66(0)-2201-5110-3</p>
          </Col>
          <Col md={8}>
            <div className="map-container">
              <iframe
                className="map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.217475334!2d100.3217!3d13.7897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ3JzIyLjkiTiAxMDDCsDE5JzE4LjEiRQ!5e0!3m2!1sen!2sth!4v1620000000000!5m2!1sen!2sth"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahidol University Salaya Campus"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
