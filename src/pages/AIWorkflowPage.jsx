import { Link } from 'react-router-dom'
import { portfolioData } from '../data/portfolioData'

function AIWorkflowPage() {
  const data = portfolioData.aiWorkflow

  return (
    <div className="ai-workflow-page">
      <div className="container">
        <Link to="/" className="back-link">← Retour à l'accueil</Link>

        {/* Header */}
        <header className="page-header">
          <h1 className="page-title">Ma philosophie sur l'IA en développement</h1>
        </header>

        {/* Philosophie - 3 piliers */}
        <section className="detail-section">
          <div className="pillars-grid">
            {data.philosophy.pillars.map((pillar, index) => (
              <div key={index} className="pillar-card">
                <div className="pillar-number">{index + 1}</div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cas d'usage */}
        <section className="detail-section">
          <h2 className="section-title">Comment j'utilise l'IA au quotidien</h2>

          <div className="project-skills-grid">
            {data.useCases.map((useCase, index) => (
              <div key={index} className="skill-card">
                <h3 className="skill-title">{useCase.title}</h3>
                <p className="use-case-description">{useCase.description}</p>
                <div className="use-case-example">
                  <strong>Exemple :</strong> {useCase.example}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outils utilisés */}
        <section className="detail-section">
          <h2 className="section-title">Mes outils IA préférés</h2>

          <div className="tools-grid">
            {data.tools.map((tool, index) => (
              <div key={index} className="tool-card">
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-usage">{tool.usage}</p>
                <div className="tool-performance">
                  <span className="performance-label">Performance :</span>
                  <span className="performance-stars">{tool.performance}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vision du futur */}
        <section className="detail-section highlight-section">
          <h2 className="section-title">{data.futureVision.title}</h2>
          <p className="future-vision-content">{data.futureVision.content}</p>
        </section>

        {/* CTA retour */}
        <div className="page-footer">
          <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  )
}

export default AIWorkflowPage
