import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Vision.css";

const Vision: React.FC = () => {
  return (
    <div className="vision-page">
      <Container>
        <div className="vision-header">
          <h1>Our Faculty & Program</h1>
        </div>

        <Row className="vision-content">
          <Col md={6}>
            <div className="vision-section">
              <h2>Our Program</h2>
              <p>
                The Master of Science in Information Systems (MSIS) program at
                the University of Maryland is designed to prepare students for
                leadership roles in the rapidly evolving field of information
                technology and systems. Our curriculum combines technical
                expertise with business acumen, ensuring graduates are
                well-equipped to drive innovation and solve complex
                organizational challenges.
              </p>
              <p>
                With a focus on emerging technologies such as artificial
                intelligence, data analytics, cloud computing, and
                cybersecurity, our program provides students with the knowledge
                and skills needed to excel in today's digital landscape. Through
                hands-on projects, industry partnerships, and expert faculty
                guidance, students gain practical experience that directly
                translates to their professional careers.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="career-section">
              <h2>Career Opportunities</h2>
              <p>
                Graduates of our MSIS program are highly sought after by leading
                organizations across various industries. Our alumni have gone on
                to successful careers in roles such as:
              </p>
              <ul>
                <li>Information Systems Manager</li>
                <li>Data Analytics Director</li>
                <li>IT Consultant</li>
                <li>Cybersecurity Specialist</li>
                <li>Business Intelligence Analyst</li>
                <li>Cloud Solutions Architect</li>
                <li>Digital Transformation Leader</li>
              </ul>
              <p>
                The program's strong industry connections and career development
                resources ensure that students have access to internship
                opportunities, networking events, and job placements upon
                graduation.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="values-row">
          <Col>
            <div className="values-section">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3>Vision</h3>
                <p>
                  To be a globally recognized leader in information systems
                  education, research, and innovation, empowering the next
                  generation of technology leaders to shape the future of
                  digital transformation.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Mission</h3>
                <p>
                  To deliver exceptional education that combines cutting-edge
                  technical knowledge with practical business applications,
                  fostering innovation, critical thinking, and ethical
                  leadership in the field of information systems.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Organizational Culture</h3>
                <p>
                  We foster a collaborative, inclusive environment that
                  encourages creativity, intellectual curiosity, and continuous
                  learning. Our culture values diversity of thought, ethical
                  decision-making, and a commitment to excellence in all
                  endeavors.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Core Competencies</h3>
                <p>
                  Our program emphasizes the development of key competencies
                  including technical expertise, analytical thinking,
                  problem-solving abilities, project management skills, and
                  effective communication. These competencies prepare our
                  graduates to excel in diverse professional environments.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h3>Values</h3>
                <p>
                  We are guided by the principles of Excellence, Innovation,
                  Integrity, Collaboration, and Social Responsibility. These
                  values shape our educational approach, research initiatives,
                  and community engagement, ensuring we contribute positively to
                  society while advancing the field of information systems.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <div className="achievement-section">
          <h2>Our Achievements</h2>
          <div className="achievement-cards">
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>500+</h3>
              <p>Graduates</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>100+</h3>
              <p>Industry Partners</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>25+</h3>
              <p>Awards</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>95%</h3>
              <p>Employment Rate</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Vision;
