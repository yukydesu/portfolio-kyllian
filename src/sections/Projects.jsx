import ProjectCard from '../components/ProjectCard'

function Projects({ data }) {
  return (
    <section id="projects" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        <p className="section-subtitle">Voici quelques projets sur lesquels j'ai travaillé</p>

        <div className="projects-grid">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
