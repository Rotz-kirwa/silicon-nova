import Card from '../ui/Card';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <Card hoverable className="project-card" onClick={() => onClick(project)}>
      <div className="project-image">
        <img src={project.images.thumbnail} alt={project.title} loading="lazy" />
        <div className="project-overlay">
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
      </div>
      <div className="project-info">
        <h4>{project.title}</h4>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
