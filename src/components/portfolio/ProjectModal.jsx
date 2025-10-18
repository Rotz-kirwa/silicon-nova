import Modal from '../ui/Modal';
import { FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} size="large">
      <div className="project-modal-content">
        <img
          src={project.images.full[0]}
          alt={project.title}
          className="project-modal-image"
        />

        <div className="project-modal-details">
          <p className="project-modal-description">{project.description}</p>

          <div className="project-modal-info">
            <div className="info-item">
              <strong>Client:</strong> {project.client}
            </div>
            <div className="info-item">
              <strong>Category:</strong> <span className="capitalize">{project.category}</span>
            </div>
            <div className="info-item">
              <strong>Completed:</strong> {new Date(project.completedDate).toLocaleDateString()}
            </div>
          </div>

          <div className="project-modal-tech">
            <strong>Technologies:</strong>
            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          {project.testimonial && (
            <div className="project-testimonial">
              <div className="testimonial-rating">
                {[...Array(project.testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <blockquote>"{project.testimonial.quote}"</blockquote>
              <cite>— {project.testimonial.author}</cite>
            </div>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-site-button"
            >
              Visit Live Site <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
