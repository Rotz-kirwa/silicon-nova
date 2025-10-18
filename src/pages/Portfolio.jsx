import { useState } from 'react';
import Layout from '../components/layout/Layout';
import ProjectCard from '../components/portfolio/ProjectCard';
import ProjectFilter from '../components/portfolio/ProjectFilter';
import ProjectModal from '../components/portfolio/ProjectModal';
import { projects } from '../data/portfolio';
import './Portfolio.css';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <div className="portfolio-page">
        <div className="portfolio-hero">
          <h1>Our Portfolio</h1>
          <p>Explore our latest projects and success stories</p>
        </div>

        <div className="portfolio-content">
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onFilterChange={setActiveCategory}
          />

          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
          </div>
        </div>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </Layout>
  );
};

export default Portfolio;
