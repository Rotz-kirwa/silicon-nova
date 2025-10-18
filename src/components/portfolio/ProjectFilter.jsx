import './ProjectFilter.css';

const ProjectFilter = ({ categories, activeCategory, onFilterChange }) => {
  return (
    <div className="project-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-button ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
