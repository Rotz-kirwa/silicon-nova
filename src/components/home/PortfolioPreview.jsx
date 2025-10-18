import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../ui/Card';
import { projects } from '../../data/portfolio';
import './PortfolioPreview.css';

const PortfolioPreview = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="portfolio-preview">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2>Featured Projects</h2>
          <p>Showcasing our best work for clients across Kenya and beyond</p>
        </div>

        <div className="portfolio-grid">
          {featuredProjects.map((project) => (
            <Card key={project.id} hoverable className="project-card">
              <img src={project.images.thumbnail} alt={project.title} loading="lazy" className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-client">Client: {project.client}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <span className="project-category">{project.category}</span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-site-button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Live Site
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="portfolio-cta">
          <Link to="/portfolio">
            <button className="view-portfolio-button">View Full Portfolio</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
