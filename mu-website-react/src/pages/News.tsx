import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { articles, news, presentations } from "../data/ContentStorage";
import "./News.css";

const News: React.FC = () => {
  // Get the 3 latest articles
  const latestArticles = articles.slice(0, 3);

  // Get the 3 latest news items
  const latestNews = news.slice(0, 3);

  // Get the latest presentation
  const latestPresentation = presentations[0];

  return (
    <div className="news-page">
      <Container>
        <div className="blog-header">
          <h2>News & Events</h2>
          <p>Stay tuned and updated by the latest updates from our blog.</p>
          <hr className="divider" />
        </div>

        <Row className="blog-posts">
          {latestArticles.map((article) => (
            <Col lg={4} md={6} className="mb-4" key={article.id}>
              <Card className="blog-card">
                <Card.Img
                  variant="top"
                  src={
                    article.images && article.images.length > 0
                      ? article.images[0]
                      : "/images/default.jpg"
                  }
                  alt={article.title}
                />
                <div className={`category ${article.category.toLowerCase()}`}>
                  {article.category}
                </div>
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <div className="post-meta">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.author.name}</span>
                  </div>
                  <Link
                    to={`/content/article/${article.id}`}
                    className="read-more"
                  >
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="presentation-latest-section">
          <Col lg={4}>
            <div className="presentation-section">
              <h6 className="section-title">PRESENTATION</h6>
              <Card className="presentation-card">
                <Card.Body>
                  <div className="presentation-topic">
                    {latestPresentation.topic}
                  </div>
                  <h2>{latestPresentation.presenter.name}</h2>
                  <p>{latestPresentation.presenter.laboratory}</p>
                  <div className="role">
                    <i className="fas fa-calendar"></i>{" "}
                    {latestPresentation.date}
                  </div>
                  <Link
                    to={`/content/presentation/${latestPresentation.id}`}
                    className="more-details"
                  >
                    More Details <i className="fas fa-arrow-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col lg={8}>
            <div className="latest-news">
              <div className="section-header">
                <h6>LATEST NEWS AT WRAPKIT</h6>
                <Link to="/content-storage?tab=news" className="view-all">
                  VIEW ALL <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              <div className="news-list">
                {latestNews.map((newsItem) => (
                  <div className="news-item" key={newsItem.id}>
                    <div className="news-image">
                      <img
                        src={newsItem.images[0] || "/images/default.jpg"}
                        alt={newsItem.title}
                      />
                    </div>
                    <div className="news-content">
                      <Link to={`/content/news/${newsItem.id}`}>
                        <h3>{newsItem.title}</h3>
                      </Link>
                      <div className="news-meta">
                        by {newsItem.author.name} / {newsItem.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default News;
