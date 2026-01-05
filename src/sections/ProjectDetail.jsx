function ProjectDetail({ project }) {
  return (
    <div className="project-detail">
      <div className="project-detail-header">
        <h2>{project.title}</h2>
        <div className="project-meta">
          <span className="project-duration">{project.duration}</span>
          <span className="project-type">{project.type}</span>
        </div>
      </div>

      <div className="project-detail-content">
        {/* Contexte du projet */}
        <section className="detail-section">
          <h3>Contexte du projet</h3>
          <p>{project.context}</p>
          <ul className="context-details">
            {project.constraints && <li><strong>Contraintes :</strong> {project.constraints}</li>}
            {project.duration && <li><strong>Durée :</strong> {project.duration}</li>}
            {project.team && <li><strong>Équipe :</strong> {project.team}</li>}
          </ul>
        </section>

        {/* Méthodes de travail */}
        <section className="detail-section">
          <h3>Méthodes de travail & Résultats</h3>
          <p>{project.methodology}</p>

          {project.results && (
            <div className="results">
              <h4>Résultats obtenus :</h4>
              <ul>
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Preuves visuelles */}
          {project.visuals && project.visuals.length > 0 && (
            <div className="project-visuals">
              {project.visuals.map((visual, index) => (
                <div key={index} className="visual-item">
                  {visual.type === 'image' && <img src={visual.url} alt={visual.caption} />}
                  {visual.type === 'video' && (
                    <video controls>
                      <source src={visual.url} type="video/mp4" />
                    </video>
                  )}
                  <p className="visual-caption">{visual.caption}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Compétences travaillées */}
        <section className="detail-section">
          <h3>Compétences travaillées</h3>
          <div className="skills-worked">
            {project.skillsWorked && project.skillsWorked.map((skill, index) => (
              <div key={index} className="skill-worked-item">
                <h4>{skill.category}</h4>
                <ul>
                  {skill.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies utilisées */}
        {project.technologies && (
          <section className="detail-section">
            <h3>Technologies utilisées</h3>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </section>
        )}

        {/* Liens */}
        <div className="project-detail-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Voir sur GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Voir la démo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
