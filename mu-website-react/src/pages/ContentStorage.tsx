import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, ListGroup, Pagination, Carousel } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import { articles, news, presentations, Author } from '../data/ContentStorage';
import './ContentStorage.css';

const ITEMS_PER_PAGE = 10;

const ContentStorage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['all', 'presentations', 'news', 'articles'].includes(tab)) {
      setActiveTab(tab);
    }
    setCurrentPage(1); // Reset to first page when tab changes
  }, [searchParams]);

  const formatAuthor = (author: Author) => {
    return `${author.name}${author.role ? `, ${author.role}` : ''}`;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('tab', tab);
    window.history.pushState({}, '', `?${newSearchParams.toString()}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const getPaginatedItems = <T extends { id: string }>(items: T[], page: number): T[] => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    return items.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const renderPagination = (totalItems: number) => {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    if (totalPages <= 1) return null;

    return (
      <Pagination className="justify-content-center mt-4">
        <Pagination.Prev 
          disabled={currentPage === 1} 
          onClick={() => handlePageChange(currentPage - 1)}
        />
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next 
          disabled={currentPage === totalPages} 
          onClick={() => handlePageChange(currentPage + 1)}
        />
      </Pagination>
    );
  };

  return (
    <div className="content-storage-page">
      <Container>
        {/* Page Header */}
        <div className="page-header">
          <h1>Content Storage</h1>
          <p>Browse through our collection of articles, presentations, and news</p>
          <div className="divider"></div>
        </div>

        {/* Filter Navigation */}
        <div className="filter-navigation">
          <Nav variant="pills" className="justify-content-center mb-5">
            <Nav.Item>
              <Nav.Link 
                active={activeTab === 'all'}
                onClick={() => handleTabChange('all')}
              >
                All Content
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                active={activeTab === 'presentations'}
                onClick={() => handleTabChange('presentations')}
              >
                Presentations
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                active={activeTab === 'news'}
                onClick={() => handleTabChange('news')}
              >
                News
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                active={activeTab === 'articles'}
                onClick={() => handleTabChange('articles')}
              >
                Articles
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        {/* Content List */}
        <div className="content-list">
          {/* Presentations */}
          {(activeTab === 'all' || activeTab === 'presentations') && presentations.length > 0 && (
            <div className="content-section">
              <h2 className="section-title">Presentations</h2>
              <ListGroup>
                {getPaginatedItems(presentations, currentPage).map((pres) => (
                  <ListGroup.Item key={pres.id} className="content-item">
                    <Row className="align-items-center">
                      <Col md={8}>
                        <div className="content-info">
                          <h3 className="content-title">
                            <Link to={`/content/presentation/${pres.id}`}>
                              {pres.topic}
                            </Link>
                          </h3>
                          <div className="meta-info">
                            <div>
                              <i className="fas fa-user"></i>
                              {pres.presenter.name}
                            </div>
                            <div>
                              <i className="fas fa-calendar"></i>
                              {formatDate(pres.date)}
                            </div>
                            <div>
                              <i className="fas fa-building"></i>
                              {pres.presenter.laboratory}
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={4} className="text-end">
                        <Link 
                          to={`/content/presentation/${pres.id}`}
                          className="view-details"
                        >
                          View Details <i className="fas fa-arrow-right"></i>
                        </Link>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              {renderPagination(presentations.length)}
            </div>
          )}

          {/* News */}
          {(activeTab === 'all' || activeTab === 'news') && news.length > 0 && (
            <div className="content-section">
              <h2 className="section-title">News</h2>
              <ListGroup>
                {getPaginatedItems(news, currentPage).map((item) => (
                  <ListGroup.Item key={item.id} className="content-item">
                    <Row className="align-items-center">
                      <Col md={8}>
                        <div className="content-info">
                          <h3 className="content-title">
                            <Link to={`/content/news/${item.id}`}>
                              {item.title}
                            </Link>
                          </h3>
                          <div className="meta-info">
                            <div>
                              <i className="fas fa-user"></i>
                              {formatAuthor(item.author)}
                            </div>
                            <div>
                              <i className="fas fa-calendar"></i>
                              {formatDate(item.date)}
                            </div>
                            <div>
                              <i className="fas fa-tag"></i>
                              {item.category}
                            </div>
                          </div>
                          <p className="content-description">{item.description}</p>
                        </div>
                      </Col>
                      <Col md={4} className="text-end">
                        {item.images && item.images.length > 0 && (
                          <Carousel className="news-carousel">
                            {item.images.map((image: string, index: number) => (
                              <Carousel.Item key={index}>
                                <img
                                  className="d-block w-100"
                                  src={image}
                                  alt={`Slide ${index + 1}`}
                                />
                              </Carousel.Item>
                            ))}
                          </Carousel>
                        )}
                        <Link 
                          to={`/content/news/${item.id}`}
                          className="view-details"
                        >
                          Read More <i className="fas fa-arrow-right"></i>
                        </Link>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              {renderPagination(news.length)}
            </div>
          )}

          {/* Articles */}
          {(activeTab === 'all' || activeTab === 'articles') && articles.length > 0 && (
            <div className="content-section">
              <h2 className="section-title">Articles</h2>
              <ListGroup>
                {getPaginatedItems(articles, currentPage).map((article) => (
                  <ListGroup.Item key={article.id} className="content-item">
                    <Row className="align-items-center">
                      <Col md={8}>
                        <div className="content-info">
                          <h3 className="content-title">
                            <Link to={`/content/article/${article.id}`}>
                              {article.title}
                            </Link>
                          </h3>
                          <div className="meta-info">
                            <div>
                              <i className="fas fa-user"></i>
                              {formatAuthor(article.author)}
                            </div>
                            <div>
                              <i className="fas fa-calendar"></i>
                              {formatDate(article.date)}
                            </div>
                            <div>
                              <i className="fas fa-tag"></i>
                              {article.category}
                            </div>
                          </div>
                          <p className="content-description">{article.description}</p>
                        </div>
                      </Col>
                      <Col md={4} className="text-end">
                        <Link 
                          to={`/content/article/${article.id}`}
                          className="view-details"
                        >
                          Read More <i className="fas fa-arrow-right"></i>
                        </Link>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              {renderPagination(articles.length)}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ContentStorage; 