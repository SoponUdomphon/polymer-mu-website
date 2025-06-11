import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { getArticleById, getNewsById, getPresentationById, Content, Presentation } from '../data/ContentStorage';
import './ContentDetail.css';

const ContentDetail: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();

  const getContent = () => {
    if (!id) return null;
    
    switch (type) {
      case 'article':
        return { type: 'content' as const, data: getArticleById(id) };
      case 'news':
        return { type: 'content' as const, data: getNewsById(id) };
      case 'presentation':
        return { type: 'presentation' as const, data: getPresentationById(id) };
      default:
        return null;
    }
  };

  const result = getContent();

  if (!result || !result.data) {
    return (
      <Container className="content-detail">
        <div className="text-center py-5">
          <h2>Content Not Found</h2>
          <Button variant="primary" onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </Container>
    );
  }

  if (result.type === 'presentation') {
    const presentation = result.data as Presentation;
    return (
      <div className="content-detail">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="presentation-header">
                <Button variant="link" className="back-button" onClick={() => navigate(-1)}>
                  <i className="fas fa-arrow-left"></i> Back
                </Button>
                <div className="category-tag">Presentation</div>
                <h1>{presentation.topic}</h1>
                <div className="presenter-info">
                  <div className="presenter">
                    <i className="fas fa-user"></i>
                    <span>{presentation.presenter.name}</span>
                  </div>
                  <div className="laboratory">
                    <i className="fas fa-flask"></i>
                    <span>{presentation.presenter.laboratory}</span>
                  </div>
                  <div className="date">
                    <i className="fas fa-calendar"></i>
                    <span>{presentation.date}</span>
                  </div>
                  <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{presentation.location}</span>
                  </div>
                </div>
              </div>

              <div className="content-section">
                <h2>Abstract</h2>
                <div className="abstract">
                  {presentation.abstract}
                </div>

                <h2>Content</h2>
                <div className="main-content">
                  {presentation.content}
                </div>

                {presentation.slides && (
                  <div className="slides-section">
                    <h2>Presentation Slides</h2>
                    <Button variant="primary" href={presentation.slides} target="_blank">
                      <i className="fas fa-download"></i> Download Slides
                    </Button>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  // For articles and news
  const content = result.data as Content;
  return (
    <div className="content-detail">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="content-header">
              <Button variant="link" className="back-button" onClick={() => navigate(-1)}>
                <i className="fas fa-arrow-left"></i> Back
              </Button>
              <div className="category-tag">{content.category}</div>
              <h1>{content.title}</h1>
              <div className="meta-info">
                <div className="author">
                  <i className="fas fa-user"></i>
                  <span>by {content.author.name}</span>
                </div>
                <div className="date">
                  <i className="fas fa-calendar"></i>
                  <span>{content.date}</span>
                </div>
              </div>
            </div>

            <div className="featured-image">
              {content.images && content.images.length > 0 ? (
                <Carousel>
                  {content.images.map((image: string, index: number) => (
                    <Carousel.Item key={index}>
                      <img src={image} alt={`${content.title} - Image ${index + 1}`} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : null}
            </div>

            <div className="content-section">
              <div className="description">
                {content.description}
              </div>
              <div className="main-content">
                {content.content}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentDetail; 