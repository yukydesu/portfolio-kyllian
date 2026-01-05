import SkillBadge from '../components/SkillBadge'

function Skills({ data }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Compétences</h2>
        <p className="section-subtitle">Technologies et outils que j'utilise</p>

        <div className="skills-grid">
          {data.skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
