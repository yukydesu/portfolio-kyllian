function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
      )}

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link project-link-demo">
              Démo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
