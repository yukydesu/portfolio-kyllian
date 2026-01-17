import { useParams, Link } from 'react-router-dom'
import { portfolioData } from '../data/portfolioData'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Mapping des technologies vers leurs URLs officielles
const techLinks = {
  'C': 'https://en.wikipedia.org/wiki/C_(programming_language)',
  'Sockets TCP/IP': 'https://en.wikipedia.org/wiki/Network_socket',
  'Mémoire partagée': 'https://en.wikipedia.org/wiki/Shared_memory',
  'Sémaphores': 'https://en.wikipedia.org/wiki/Semaphore_(programming)',
  'Fork/Exec': 'https://en.wikipedia.org/wiki/Fork_(system_call)',
  'Appels système POSIX': 'https://en.wikipedia.org/wiki/POSIX',
  'IPC': 'https://en.wikipedia.org/wiki/Inter-process_communication',
  'Symfony': 'https://symfony.com',
  'Vue.js': 'https://vuejs.org',
  'PHP': 'https://www.php.net',
  'Docker': 'https://www.docker.com',
  'MySQL': 'https://www.mysql.com',
  'API Platform': 'https://api-platform.com',
  'Tailwind': 'https://tailwindcss.com',
  'React': 'https://react.dev',
  'TypeScript': 'https://www.typescriptlang.org',
  'Spring Boot': 'https://spring.io/projects/spring-boot',
  'PostgreSQL': 'https://www.postgresql.org',
  'Azure': 'https://azure.microsoft.com',
  'Java': 'https://www.java.com',
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'Node.js': 'https://nodejs.org',
  'Express': 'https://expressjs.com',
  'MongoDB': 'https://www.mongodb.com',
  'Redis': 'https://redis.io',
  'Kubernetes': 'https://kubernetes.io',
  'GitLab CI/CD': 'https://docs.gitlab.com/ee/ci/',
  'JWT': 'https://jwt.io'
}

function ProjectDetail() {
  const { id } = useParams()
  const project = portfolioData.projects.find(p => p.id === parseInt(id))

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true
  }

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <h1>Projet non trouvé</h1>
          <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
        </div>
      </div>
    )
  }

  // Configuration spécifique pour le projet Pacman
  const isPacman = project.id === 2
  const pacmanGifs = isPacman ? [
    { url: '/portfolio-kyllian/pacman_v1.gif', caption: 'Version 1 - Interface initiale du jeu' },
    { url: '/portfolio-kyllian/pacman_v2.gif', caption: 'Version 2 - Gameplay multijoueur' }
  ] : []

  const pacmanScreenshots = isPacman ? [
    { url: '/portfolio-kyllian/win.png', caption: 'Écran de victoire' },
    { url: '/portfolio-kyllian/loose.png', caption: 'Écran de défaite' }
  ] : []

  // Configuration spécifique pour le projet TerraBio
  const isTerraBio = project.id === 3
  const terraBioScreenshots = isTerraBio ? [
    {
      title: "Interface Client",
      screenshots: [
        { url: '/portfolio-kyllian/terrabio/screenshot-03.png', caption: 'Catalogue produits avec filtres par catégorie' },
        { url: '/portfolio-kyllian/terrabio/screenshot-04.png', caption: 'Fiche produit détaillée avec ajout au panier' },
        { url: '/portfolio-kyllian/terrabio/screenshot-05.png', caption: 'Panier avec calcul automatique et réservation' },
        { url: '/portfolio-kyllian/terrabio/screenshot-06.png', caption: 'Suivi des réservations du client' }
      ]
    },
    {
      title: "Espace Producteur",
      screenshots: [
        { url: '/portfolio-kyllian/terrabio/screenshot-08.png', caption: 'Gestion des lots en vente avec statuts' },
        { url: '/portfolio-kyllian/terrabio/screenshot-09.png', caption: 'Formulaire de création de lot' }
      ]
    },
    {
      title: "Espace Bénévole",
      screenshots: [
        { url: '/portfolio-kyllian/terrabio/screenshot-11.png', caption: 'Gestion des réservations à préparer' },
        { url: '/portfolio-kyllian/terrabio/screenshot-10.png', caption: 'Interface caisse pour ventes magasin' },
        { url: '/portfolio-kyllian/terrabio/screenshot-12.png', caption: 'Retrait de produits du stock' }
      ]
    },
    {
      title: "Tableau de Bord Gestionnaire",
      screenshots: [
        { url: '/portfolio-kyllian/terrabio/screenshot-13.png', caption: 'Dashboard avec métriques temps réel' },
        { url: '/portfolio-kyllian/terrabio/screenshot-19.png', caption: 'Validation des lots en attente' },
        { url: '/portfolio-kyllian/terrabio/screenshot-15.png', caption: 'Lots disponibles avec filtres avancés' },
        { url: '/portfolio-kyllian/terrabio/screenshot-16.png', caption: 'Historique des lots refusés' }
      ]
    }
  ] : []

  return (
    <div className="project-detail">
      <div className="container">
        <Link to="/" className="back-link">← Retour aux projets</Link>

        {/* Header avec titre et métadonnées */}
        <header className="detail-header">
          <div className="detail-header-content">
            <h1 className="detail-title">{project.title}</h1>
            <div className="detail-meta">
              <span className="meta-item">{project.type}</span>
              <span className="meta-separator">•</span>
              <span className="meta-item">{project.duration}</span>
              <span className="meta-separator">•</span>
              <span className="meta-item">{project.team}</span>
            </div>
          </div>
        </header>

        {/* Section hero avec description */}
        <section className="detail-hero">
          <p className="detail-description">{project.description}</p>
        </section>

        {/* Galerie de GIFs pour Pacman */}
        {isPacman && pacmanGifs.length > 0 && (
          <section className="detail-gallery">
            <div className="gallery-grid">
              {pacmanGifs.map((gif, index) => (
                <div key={index} className="gallery-item">
                  <div className="gallery-image-wrapper">
                    <img src={gif.url} alt={gif.caption} className="gallery-image" />
                  </div>
                  <p className="gallery-caption">{gif.caption}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Screenshots win/loose pour Pacman */}
        {isPacman && pacmanScreenshots.length > 0 && (
          <section className="detail-gallery">
            <div className="gallery-grid">
              {pacmanScreenshots.map((screenshot, index) => (
                <div key={index} className="gallery-item">
                  <div className="gallery-image-wrapper">
                    <img src={screenshot.url} alt={screenshot.caption} className="gallery-image" />
                  </div>
                  <p className="gallery-caption">{screenshot.caption}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Galerie TerraBio organisée par workflow - Carousels */}
        {isTerraBio && terraBioScreenshots.length > 0 && (
          <>
            {terraBioScreenshots.map((section, sectionIndex) => (
              <section key={sectionIndex} className="detail-section">
                <h2 className="section-title">{section.title}</h2>
                <div className="carousel-container">
                  <Slider {...carouselSettings}>
                    {section.screenshots.map((screenshot, index) => (
                      <div key={index} className="carousel-slide">
                        <div className="carousel-image-wrapper">
                          <img src={screenshot.url} alt={screenshot.caption} className="carousel-image" />
                        </div>
                        <p className="carousel-caption">{screenshot.caption}</p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </section>
            ))}
          </>
        )}

        {/* Contexte du projet */}
        {project.context && (
          <section className="detail-section">
            <h2 className="section-title">Contexte</h2>
            <div className="section-content">
              <p>{project.context}</p>
            </div>
          </section>
        )}

        {/* Technologies en grille visuelle */}
        {project.technologies && project.technologies.length > 0 && (
          <section className="detail-section">
            <h2 className="section-title">Technologies</h2>
            <div className="tech-badges">
              {project.technologies.map((tech, index) => {
                const techUrl = techLinks[tech]
                return techUrl ? (
                  <a
                    key={index}
                    href={techUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-badge tech-badge-link"
                  >
                    {tech}
                  </a>
                ) : (
                  <span key={index} className="tech-badge">{tech}</span>
                )
              })}
            </div>
          </section>
        )}

        {/* Architecture et méthodologie côte à côte */}
        <div className="detail-grid-2">
          {project.constraints && (
            <section className="detail-section">
              <h2 className="section-title">Contraintes techniques</h2>
              <div className="section-content">
                <p>{project.constraints}</p>
              </div>
            </section>
          )}

          {project.methodology && (
            <section className="detail-section">
              <h2 className="section-title">Méthodologie</h2>
              <div className="section-content">
                <p>{project.methodology}</p>
              </div>
            </section>
          )}
        </div>

        {/* Résultats obtenus */}
        {project.results && project.results.length > 0 && (
          <section className="detail-section highlight-section">
            <h2 className="section-title">Résultats obtenus</h2>
            <ul className="results-list">
              {project.results.map((result, index) => (
                <li key={index} className="result-item">{result}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Compétences développées */}
        {project.skillsWorked && project.skillsWorked.length > 0 && (
          <section className="detail-section">
            <h2 className="section-title">Compétences développées</h2>
            <div className="project-skills-grid">
              {project.skillsWorked.map((skill, index) => (
                <div key={index} className="skill-card">
                  <h3 className="skill-title">{skill.category}</h3>
                  <ul className="skill-list">
                    {skill.details.map((detail, i) => (
                      <li key={i} className="skill-item">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer avec lien GitHub */}
        {project.github && (
          <footer className="detail-footer">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Voir le code source sur GitHub
            </a>
          </footer>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail
