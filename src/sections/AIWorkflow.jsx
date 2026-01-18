import { Link } from 'react-router-dom'

function AIWorkflow({ data }) {
  return (
    <section id="ai-workflow" className="section ai-workflow-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{data.aiWorkflow.title}</h2>
          <p className="section-subtitle">{data.aiWorkflow.subtitle}</p>
        </div>

        <div className="ai-workflow-content">
          <div className="ai-intro">
            <p className="ai-summary">{data.aiWorkflow.summary}</p>
          </div>

          <div className="ai-key-points">
            {data.aiWorkflow.keyPoints.map((point, index) => (
              <div key={index} className="key-point-card">
                <div className="key-point-number">{index + 1}</div>
                <p className="key-point-text">{point}</p>
              </div>
            ))}
          </div>

          <div className="ai-cta">
            <Link to="/ai-workflow" className="btn btn-primary">
              En savoir plus sur ma vision de l'IA
            </Link>
            <p className="ai-badge-note">
              <a
                href={data.aiWorkflow.badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ai-badge-link"
              >
                {data.aiWorkflow.badge.text}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIWorkflow
