import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Partners.css";

// Partner data with logo URLs
const partners = [
  {
    id: 1,
    name: "Harvard University",
    logo: "https://assets.turbologo.com/blog/en/2024/06/27075854/harvard-logo.png",
  },
  {
    id: 2,
    name: "Nagoya University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/1280px-Harvard_University_logo.svg.png",
  },
  {
    id: 3,
    name: "UCL",
    logo: "https://assets.turbologo.com/blog/en/2024/06/27075854/harvard-logo.png",
  },
  {
    id: 4,
    name: "MIT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/1280px-Harvard_University_logo.svg.png",
  },
  {
    id: 5,
    name: "Stanford University",
    logo: "https://assets.turbologo.com/blog/en/2024/06/27075854/harvard-logo.png",
  },
  {
    id: 6,
    name: "Oxford University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/1280px-Harvard_University_logo.svg.png",
  },
  {
    id: 7,
    name: "Cambridge University",
    logo: "https://assets.turbologo.com/blog/en/2024/06/27075854/harvard-logo.png",
  },
  {
    id: 8,
    name: "Yale University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/1280px-Harvard_University_logo.svg.png",
  },
];

const Partners: React.FC = () => {
  return (
    <div className="partner-page">
      <Container>
        <div className="partner-header">
          <h1>Our Partner & Collaborators</h1>
          <p>
            We collaborate with leading organizations and institutions to
            advance research, innovation, and education in Polymer Science and
            Technology.
          </p>
        </div>

        <div className="partner-grid">
          <Row className="justify-content-center">
            {partners.map((partner) => (
              <Col key={partner.id} lg={3} md={4} sm={6} className="mb-4">
                <div className="partner-logo-container">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
