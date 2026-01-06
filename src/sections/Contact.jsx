function Contact({ data }) {
  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <p>Vous avez un projet en tête ou vous voulez simplement discuter ?</p>
            <p>Contactez-moi via email ou sur les réseaux sociaux.</p>

            <div className="contact-links">
              {data.social.email && (
                <a href={`mailto:${data.social.email}`} className="contact-link">
                  {data.social.email}
                </a>
              )}
              {data.social.github && (
                <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                  GitHub
                </a>
              )}
              {data.social.linkedin && (
                <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
