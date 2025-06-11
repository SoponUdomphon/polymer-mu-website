import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ResearchCluster.css";

const ResearchCluster: React.FC = () => {
  const projectsRef = useRef<HTMLHeadingElement>(null);
  const partnersRef = useRef<HTMLHeadingElement>(null);
  const publicationsRef = useRef<HTMLHeadingElement>(null);
  const patentsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const initCarousels = async () => {
      try {
        // Dynamically import Bootstrap
        await import("bootstrap/dist/js/bootstrap.bundle.min.js");

        // Initialize carousels after Bootstrap is loaded
        const carousels = document.querySelectorAll(".carousel");
        carousels.forEach((carouselEl) => {
          // @ts-ignore
          new window.bootstrap.Carousel(carouselEl, {
            interval: 5000,
            touch: true,
          });
        });
      } catch (error) {
        console.error("Error initializing carousels:", error);
      }
    };

    initCarousels();

    // Cleanup function
    return () => {
      const carousels = document.querySelectorAll(".carousel");
      carousels.forEach((carouselEl) => {
        try {
          // @ts-ignore
          const carousel = window.bootstrap.Carousel.getInstance(carouselEl);
          if (carousel) {
            carousel.dispose();
          }
        } catch (error) {
          console.error("Error disposing carousel:", error);
        }
      });
    };
  }, []);

  useEffect(() => {
    const animateValue = (
      element: HTMLElement,
      start: number,
      end: number,
      duration: number
    ) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.innerHTML = `${current}+`;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            let endValue = 50;

            switch (element.id) {
              case "projects-count":
                endValue = 50;
                break;
              case "partners-count":
                endValue = 30;
                break;
              case "publications-count":
                endValue = 200;
                break;
              case "patents-count":
                endValue = 15;
                break;
            }

            animateValue(element, 0, endValue, 2000);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all number elements
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (partnersRef.current) observer.observe(partnersRef.current);
    if (publicationsRef.current) observer.observe(publicationsRef.current);
    if (patentsRef.current) observer.observe(patentsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="research-cluster-page">
      <Container>
        <div className="research-header">
          <h1>Research Clusters</h1>
          <p>
            Our research clusters focus on cutting-edge technologies and
            innovations that drive the future of computer science and
            engineering.
          </p>
        </div>

        <Row className="research-cards g-4">
          <Col md={6} lg={3}>
            <Card className="research-card">
              <Card.Img
                variant="top"
                src="https://static.vecteezy.com/system/resources/previews/025/935/856/non_2x/nanotechnology-abstract-background-molecule-model-scientific-research-generative-ai-illustration-photo.jpg"
                alt="Nanotechnology"
              />
              <Card.Body>
                <Card.Title>Nanotechnology</Card.Title>
                <Card.Text>
                  Delve into micro- and nano-structural investigations of soft
                  matter, colloid, latex, and functional interfaces, with a
                  focus on advancing our understanding of their behavior and
                  applications. Explore cutting-edge microscopy and analytical
                  techniques to uncover new insights into these materials and
                  interfaces.
                </Card.Text>
                <div className="card-buttons">
                  <Button variant="primary">View Details</Button>
                  <Button variant="outline-primary">Contact Team</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="research-card">
              <Card.Img
                variant="top"
                src="https://www.shutterstock.com/image-photo/closeup-rubber-latex-splash-bowlful-260nw-2183692149.jpg"
                alt="Natural Rubber"
              />
              <Card.Body>
                <Card.Title>Natural Rubber</Card.Title>
                <Card.Text>
                  Concentrate on the precise synthesis, modification, and
                  fabrication of natural rubber and biopolymers to attain
                  specific properties. Investigate bio-based materials
                  engineered for exceptional strength, elasticity, or
                  biodegradability to address industry-specific needs.
                </Card.Text>
                <div className="card-buttons">
                  <Button variant="primary">View Details</Button>
                  <Button variant="outline-primary">Contact Team</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="research-card">
              <Card.Img
                variant="top"
                src="https://static.vecteezy.com/system/resources/previews/012/639/730/non_2x/zero-waste-products-set-of-recycling-food-and-beverage-packaging-included-coffee-cup-paper-bag-and-delivery-box-reduce-plastic-environment-ecology-care-renewable-concept-photo.jpg"
                alt="Advanced Composite"
              />
              <Card.Body>
                <Card.Title>Advanced Composite</Card.Title>
                <Card.Text>
                  Explore the design, compounding, and processing of sustainable
                  materials with an emphasis on regenerative properties.
                  Investigate novel materials, manufacturing techniques, and
                  recycling methods to advance sustainability in various
                  applications.
                </Card.Text>
                <div className="card-buttons">
                  <Button variant="primary">View Details</Button>
                  <Button variant="outline-primary">Contact Team</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="research-card">
              <Card.Img
                variant="top"
                src="https://www.bausano.com/img/img_uploaded/webp/plastic_compounding_62badd1423a5a.png"
                alt="Applied Industry"
              />
              <Card.Body>
                <Card.Title>Applied Industry</Card.Title>
                <Card.Text>
                  Investigate the creation of polymers and composites tailored
                  for the electrical, environmental, home care, and healthcare
                  sectors, with a focus on achieving multifunctionality. Explore
                  materials that simultaneously offer electrical conductivity,
                  environmental sustainability, and healthcare compatibility.
                </Card.Text>
                <div className="card-buttons">
                  <Button variant="primary">View Details</Button>
                  <Button variant="outline-primary">Contact Team</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="company-numbers">
          <h2>Research Impact</h2>
          <p>
            Our research clusters have made significant contributions to science
            and industry through various projects and collaborations.
          </p>
          <Row className="g-4">
            <Col md={3}>
              <div className="number-box">
                <img
                  src="/images/projects-icon.png"
                  alt="Projects Icon"
                  className="number-icon"
                />
                <h3 id="projects-count" ref={projectsRef}>
                  0+
                </h3>
                <p>Research Projects</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="number-box">
                <img
                  src="/images/partners-icon.png"
                  alt="Partners Icon"
                  className="number-icon"
                />
                <h3 id="partners-count" ref={partnersRef}>
                  0+
                </h3>
                <p>Industry Partners</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="number-box">
                <img
                  src="/images/publications-icon.png"
                  alt="Publications Icon"
                  className="number-icon"
                />
                <h3 id="publications-count" ref={publicationsRef}>
                  0+
                </h3>
                <p>Publications</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="number-box">
                <img
                  src="/images/patents-icon.png"
                  alt="Patents Icon"
                  className="number-icon"
                />
                <h3 id="patents-count" ref={patentsRef}>
                  0+
                </h3>
                <p>Patents</p>
              </div>
            </Col>
          </Row>
        </div>

        <section className="research-teams">
          <div className="container">
            {/* Nanotechnology Section */}
            <div className="tester_new">
              <div className="row">
                <div className="col-md-6">
                  <div className="research-image">
                    <img
                      src="https://www.hitechnectar.com/wp-content/uploads/2019/04/Nanotechnology-Inventions-for-Future-jpg-webp.webp"
                      alt="Nanotechnology Research"
                      className="img-fluid research-main-image"
                      style={{
                        objectFit: "contain",
                        padding: "2rem",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="research-content text-center">
                    <h2 className="section-title">Nanotechology</h2>
                    <div className="section-underline"></div>
                    <h5 className="section-subtitle">
                      Please find some details about your group
                    </h5>
                    <div
                      id="carouselNanotech"
                      className="carousel slide"
                      data-bs-ride="carousel"
                      data-bs-interval="5000"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <p className="quote-text">
                            "The teaching, in my opinion, is the best that
                            anyone can hope for. Sekolah High School staff
                            provide an environment in which students are able to
                            reach their full potential. As well as this. I felt
                            constantly challenged to push myself to exceed what
                            is expected. I have no doubt that the persion I
                            become is due to my time spent here and that the
                            last six years have been the best of my life."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Panya Sunintaboon</h5>
                            <p className="lab-name">Laboratory Name</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "The teaching, in my opinion, is the best that
                            anyone can hope for. Sekolah High School staff
                            provide an environment in which students are able to
                            reach their full potential. As well as this. I felt
                            constantly challenged to push myself to exceed what
                            is expected. I have no doubt that the persion I
                            become is due to my time spent here and that the
                            last six years have been the best of my life."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">
                              Pramuan Tangboriboonrat
                            </h5>
                            <p className="lab-name">Laboratory Name</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "The teaching, in my opinion, is the best that
                            anyone can hope for. Sekolah High School staff
                            provide an environment in which students are able to
                            reach their full potential. As well as this. I felt
                            constantly challenged to push myself to exceed what
                            is expected. I have no doubt that the persion I
                            become is due to my time spent here and that the
                            last six years have been the best of my life."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">
                              Thanchanok Ratvijitvech
                            </h5>
                            <p className="lab-name">Laboratory Name</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "The teaching, in my opinion, is the best that
                            anyone can hope for. Sekolah High School staff
                            provide an environment in which students are able to
                            reach their full potential. As well as this. I felt
                            constantly challenged to push myself to exceed what
                            is expected. I have no doubt that the persion I
                            become is due to my time spent here and that the
                            last six years have been the best of my life."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">
                              Anyarat Watthanaphanit
                            </h5>
                            <p className="lab-name">Laboratory Name</p>
                          </div>
                        </div>
                      </div>
                      <div className="staff-carousel">
                        <ol className="carousel-indicators custom-indicators">
                          <li
                            data-bs-target="#carouselNanotech"
                            data-bs-slide-to="0"
                            className="active"
                          >
                            <img
                              src="/staff/Single Photo/7. Panya Sunintaboon.jpg"
                              alt="Panya Sunintaboon"
                            />
                          </li>
                          <li
                            data-bs-target="#carouselNanotech"
                            data-bs-slide-to="1"
                          >
                            <img
                              src="/staff/Single Photo/2. Pramuan Tangboriboonrat.jpg"
                              alt="Pramuan Tangboriboonrat"
                            />
                          </li>
                          <li
                            data-bs-target="#carouselNanotech"
                            data-bs-slide-to="2"
                          >
                            <img
                              src="/staff/Single Photo/17. Thanchanok Ratvijitvech.jpg"
                              alt="Thanchanok Ratvijitvech"
                            />
                          </li>
                          <li
                            data-bs-target="#carouselNanotech"
                            data-bs-slide-to="3"
                          >
                            <img
                              src="/staff/Single Photo/12. Anyarat Watthanaphanit.jpg"
                              alt="Anyarat Watthanaphanit"
                            />
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Natural Rubber Section */}
            <div className="tester_new">
              <div className="row">
                <div className="col-md-6 order-md-2">
                  <div className="research-image">
                    <img
                      src="https://lautan-luas.co.th/wp-content/uploads/2021/04/shutterstock_2183692149-1.jpg"
                      alt="Natural Rubber Research"
                      className="img-fluid research-main-image"
                      style={{
                        objectFit: "contain",
                        padding: "2rem",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="research-content">
                    <h2 className="section-title">Natural Rubber</h2>
                    <div className="section-underline"></div>
                    <h5 className="section-subtitle">
                      Please find some details about your group
                    </h5>
                    <div
                      id="carouselRubber"
                      className="carousel slide"
                      data-bs-ride="carousel"
                      data-bs-interval="5000"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <p className="quote-text">
                            "We are developing innovative rubber compounds for
                            sustainable applications in various industries. Our
                            research focuses on improving natural rubber
                            properties and creating eco-friendly solutions."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">
                              Jitladda Sakdapipanich
                            </h5>
                            <p className="lab-name">
                              Rubber Technology Laboratory
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "Our research focuses on improving natural rubber
                            properties for advanced applications, ensuring
                            sustainable development in the rubber industry."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Pranee Phinyocheep</h5>
                            <p className="lab-name">
                              Rubber Processing Laboratory
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "We specialize in developing eco-friendly rubber
                            products for the future, combining innovation with
                            sustainability."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Preeyanuch Junkong</h5>
                            <p className="lab-name">
                              Sustainable Rubber Laboratory
                            </p>
                          </div>
                        </div>
                      </div>
                      <ol className="carousel-indicators custom-indicators">
                        <li
                          data-bs-target="#carouselRubber"
                          data-bs-slide-to="0"
                          className="active"
                        >
                          <img
                            src="/staff/Single Photo/4. Jitladda Sakdapipanich.jpg"
                            alt="Jitladda Sakdapipanich"
                          />
                        </li>
                        <li
                          data-bs-target="#carouselRubber"
                          data-bs-slide-to="1"
                        >
                          <img
                            src="/staff/Single Photo/6. Pranee Phinyocheep.jpg"
                            alt="Pranee Phinyocheep"
                          />
                        </li>
                        <li
                          data-bs-target="#carouselRubber"
                          data-bs-slide-to="2"
                        >
                          <img
                            src="/staff/Single Photo/16. Preeyanuch Junkong.jpg"
                            alt="Preeyanuch Junkong"
                          />
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Composite Section */}
            <div className="tester_new">
              <div className="row">
                <div className="col-md-6">
                  <div className="research-image">
                    <img
                      src="https://cdn.sick.com/media/content/h47/h95/13512207925278.jpg"
                      alt="Advanced Composite Research"
                      className="img-fluid research-main-image"
                      style={{
                        objectFit: "contain",
                        padding: "2rem",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="research-content">
                    <h2 className="section-title">Advanced Composite</h2>
                    <div className="section-underline"></div>
                    <h5 className="section-subtitle">
                      Please find some details about your group
                    </h5>
                    <div
                      id="carouselComposite"
                      className="carousel slide"
                      data-bs-ride="carousel"
                      data-bs-interval="5000"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <p className="quote-text">
                            "Our team develops advanced composite materials for
                            aerospace and automotive applications, pushing the
                            boundaries of material science."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Supa Wirasate</h5>
                            <p className="lab-name">
                              Composite Materials Laboratory
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "We focus on creating sustainable composite
                            materials for the construction industry, combining
                            strength with environmental responsibility."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">
                              Chayanisa Chitichotpanya
                            </h5>
                            <p className="lab-name">
                              Structural Composites Laboratory
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "Our research aims to develop bio-based composites
                            for various applications, leading the way in
                            sustainable material innovation."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Kalyanee Sirisinha</h5>
                            <p className="lab-name">
                              Bio-Composites Laboratory
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "Our research aims to develop bio-based composites
                            for various applications, leading the way in
                            sustainable material innovation."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Manthana Jariyaboon</h5>
                            <p className="lab-name">
                              Bio-Composites Laboratory
                            </p>
                          </div>
                        </div>
                      </div>
                      <ol className="carousel-indicators custom-indicators">
                        <li
                          data-bs-target="#carouselComposite"
                          data-bs-slide-to="0"
                          className="active"
                        >
                          <img
                            src="/staff/Single Photo/9. Supa Wiraset.jpg"
                            alt="Supa Wirasate"
                          />
                        </li>
                        <li
                          data-bs-target="#carouselComposite"
                          data-bs-slide-to="1"
                        >
                          <img
                            src="/staff/Single Photo/Unknown_person.jpg"
                            alt="Chayanisa Chitichotpanya"
                          />
                        </li>
                        <li
                          data-bs-target="#carouselComposite"
                          data-bs-slide-to="2"
                        >
                          <img
                            src="/staff/Single Photo/5. Kalyanee Sirisingha.jpg"
                            alt="Kalyanee Sirisinha"
                          />
                        </li>
                        <li
                          data-bs-target="#carouselComposite"
                          data-bs-slide-to="3"
                        >
                          <img
                            src="/staff/Single Photo/Unknown_person.jpg"
                            alt="Manthana Jariyaboon"
                          />
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Applied Industry Section */}
            <div className="tester_new">
              <div className="row">
                <div className="col-md-6 order-md-2">
                  <div className="research-image">
                    <img
                      src="https://cmp-fe.de/files/cmp-fe/media/service/case-studies/cmp-fe_polymer_3-2.jpg"
                      alt="Applied Industry Research"
                      className="img-fluid research-main-image"
                      style={{
                        objectFit: "contain",
                        padding: "2rem",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="research-content">
                    <h2 className="section-title">Applied Industry</h2>
                    <div className="section-underline"></div>
                    <h5 className="section-subtitle">
                      Please find some details about your group
                    </h5>
                    <div
                      id="carouselIndustry"
                      className="carousel slide"
                      data-bs-ride="carousel"
                      data-bs-interval="5000"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <p className="quote-text">
                            "We work closely with industry partners to develop
                            practical solutions for manufacturing challenges,
                            bridging the gap between research and application."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Chakrit Sirisinha</h5>
                            <p className="lab-name">
                              Industrial Applications Laboratory
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "Our research focuses on improving industrial
                            processes through innovative materials, ensuring
                            efficiency and sustainability."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Darapond Triampo</h5>
                            <p className="lab-name">
                              Process Innovation Laboratory
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "We develop sustainable solutions for industrial
                            applications using advanced materials, creating a
                            better future for manufacturing."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Sombat Thanawan</h5>
                            <p className="lab-name">
                              Sustainable Industry Laboratory
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "We develop sustainable solutions for industrial
                            applications using advanced materials, creating a
                            better future for manufacturing."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">
                              Taweechai Amornsakchai
                            </h5>
                            <p className="lab-name">
                              Sustainable Industry Laboratory
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "We develop sustainable solutions for industrial
                            applications using advanced materials, creating a
                            better future for manufacturing."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">
                              Thammasit Vongsetskul
                            </h5>
                            <p className="lab-name">
                              Sustainable Industry Laboratory
                            </p>
                          </div>
                        </div>
                      </div>
                      <ol className="carousel-indicators custom-indicators">
                        <li
                          data-bs-target="#carouselIndustry"
                          data-bs-slide-to="0"
                          className="active"
                        >
                          <img
                            src="/staff/Single Photo/3. Chakrit Sirisingha.jpg"
                            alt="Chakrit Sirisinha"
                          />
                        </li>
                        <li
                          data-bs-target="#carouselIndustry"
                          data-bs-slide-to="1"
                        >
                          <img
                            src="/staff/Single Photo/14. Darapond Triampo.jpg"
                            alt="Darapond Triampo"
                          />
                        </li>
                        <li
                          data-bs-target="#carouselIndustry"
                          data-bs-slide-to="2"
                        >
                          <img
                            src="/staff/Single Photo/8. Sombat Thanawan.jpg"
                            alt="Sombat Thanawan"
                          />
                        </li>
                        <li
                          data-bs-target="#carouselIndustry"
                          data-bs-slide-to="3"
                        >
                          <img
                            src="/staff/Single Photo/10. Taweechai Amornsakchai.jpg"
                            alt="Taweechai Amornsakchai"
                          />
                        </li>
                        <li
                          data-bs-target="#carouselIndustry"
                          data-bs-slide-to="4"
                        >
                          <img
                            src="/staff/Single Photo/Unknown_person.jpg"
                            alt="Thammasit Vongsetskul"
                          />
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default ResearchCluster;
