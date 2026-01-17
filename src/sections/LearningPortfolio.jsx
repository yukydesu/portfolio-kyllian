import { Link } from 'react-router-dom'

// Mapping des noms de projets vers leurs IDs
const projectNameToId = {
  'SAE 5.01': 1,
  'SAE 5.D.01': 1,
  'Pacman': 2,
  'CAE Projet d\'entreprise': 3,
  'TerraBio': 3
}

function LearningPortfolio({ data }) {
  const getProjectId = (projectName) => {
    return projectNameToId[projectName] || null
  }

  return (
    <section id="learning-portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Bilan d'apprentissage</h2>
        <p className="section-subtitle">Compétences développées au semestre 5 - BUT 3</p>

        <div className="competences-grid">
          {data.competences.map((competence, index) => (
            <div key={index} className="competence-card">
              <div className="competence-header">
                <span className="competence-number">{index + 1}</span>
                <h3>{competence.title}</h3>
              </div>

              <div className="competence-content">
                <h4>Apprentissages critiques :</h4>
                <ul className="apprentissages-list">
                  {competence.apprentissages.map((apprentissage, idx) => (
                    <li key={idx}>{apprentissage}</li>
                  ))}
                </ul>

                <h4>Composantes essentielles :</h4>
                <ul className="composantes-list">
                  {competence.composantes.map((composante, idx) => (
                    <li key={idx}>{composante}</li>
                  ))}
                </ul>

                {competence.projets && competence.projets.length > 0 && (
                  <>
                    <h4>Projets associés :</h4>
                    <div className="projets-tags">
                      {competence.projets.map((projet, idx) => {
                        const projectId = getProjectId(projet)
                        return projectId ? (
                          <Link
                            key={idx}
                            to={`/project/${projectId}`}
                            className="projet-tag projet-tag-link"
                          >
                            {projet}
                          </Link>
                        ) : (
                          <span key={idx} className="projet-tag">{projet}</span>
                        )
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningPortfolio
