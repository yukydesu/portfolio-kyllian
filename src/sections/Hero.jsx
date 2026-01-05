function Hero({ data }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/portfolio-kyllian/kikicoucou1.png" alt="Kyllian faisant coucou" />
        </div>

        <div className="hero-text">
          <h1 className="hero-title">
            Bonjour, je suis <span className="highlight">{data.name}</span>
          </h1>
          <p className="hero-subtitle">{data.title}</p>
          <p className="hero-bio">{data.bio}</p>

          <div className="hero-buttons">
            <a href={`#projects`} className="btn btn-primary">
              Voir mes projets
            </a>
            <a href={`#contact`} className="btn btn-secondary">
              Me contacter
            </a>
          </div>

          <div className="hero-social">
            {data.social.github && (
              <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
            )}
            {data.social.linkedin && (
              <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            )}
            {data.social.twitter && (
              <a href={data.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
