import CVDownload from '../components/CVDownload'

function About({ data }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>

        {/* Biographie */}
        <div className="about-bio">
          <h3>Biographie</h3>
          <p className="about-description">{data.about.description}</p>
        </div>

        {/* Parcours de formation */}
        <div className="about-education">
          <h3>Parcours de formation</h3>
          <div className="education-timeline">
            {data.about.education && data.about.education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-year">{edu.year}</div>
                <div className="education-content">
                  <h4>{edu.degree}</h4>
                  <p className="education-school">{edu.school}</p>
                  {edu.description && <p className="education-description">{edu.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projets professionnels */}
        <div className="about-career">
          <h3>Projets professionnels après le cursus</h3>
          <div className="career-goals">
            {data.about.careerGoals && data.about.careerGoals.map((goal, index) => (
              <div key={index} className="career-goal-item">
                <h4>{goal.title}</h4>
                <p>{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Centres d'intérêt */}
        <div className="interests">
          <h3>Centres d'intérêt</h3>
          <ul className="interests-list">
            {data.about.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>

        {/* Téléchargement CV */}
        <CVDownload cvUrl={data.cvUrl} />
      </div>
    </section>
  )
}

export default About
