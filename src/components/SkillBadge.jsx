// Mapping des compétences vers leurs URLs officielles
const skillLinks = {
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'TypeScript': 'https://www.typescriptlang.org',
  'React': 'https://react.dev',
  'Vue.js': 'https://vuejs.org',
  'Node.js': 'https://nodejs.org',
  'Express': 'https://expressjs.com',
  'Symfony': 'https://symfony.com',
  'PHP': 'https://www.php.net',
  'Python': 'https://www.python.org',
  'Java': 'https://www.java.com',
  'C': 'https://en.wikipedia.org/wiki/C_(programming_language)',
  'C++': 'https://isocpp.org',
  'SQL': 'https://www.mysql.com',
  'MySQL': 'https://www.mysql.com',
  'PostgreSQL': 'https://www.postgresql.org',
  'MongoDB': 'https://www.mongodb.com',
  'Docker': 'https://www.docker.com',
  'Git': 'https://git-scm.com',
  'Linux': 'https://www.linux.org',
  'Azure': 'https://azure.microsoft.com',
  'AWS': 'https://aws.amazon.com',
  'Tailwind CSS': 'https://tailwindcss.com',
  'Bootstrap': 'https://getbootstrap.com',
  'HTML': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  'CSS': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  'Spring Boot': 'https://spring.io/projects/spring-boot',
  'API Platform': 'https://api-platform.com',
  'REST API': 'https://restfulapi.net',
  'GraphQL': 'https://graphql.org',
  'Redis': 'https://redis.io',
  'Kubernetes': 'https://kubernetes.io',
  'GitLab': 'https://about.gitlab.com',
  'GitHub': 'https://github.com',
  'Vite': 'https://vitejs.dev',
  'Webpack': 'https://webpack.js.org',
  'Jest': 'https://jestjs.io',
  'Pytest': 'https://pytest.org'
}

function SkillBadge({ skill }) {
  const getLevelColor = (level) => {
    switch (level) {
      case 'débutant':
        return 'skill-beginner'
      case 'intermédiaire':
        return 'skill-intermediate'
      case 'avancé':
        return 'skill-advanced'
      default:
        return ''
    }
  }

  const skillUrl = skillLinks[skill.name]

  if (skillUrl) {
    return (
      <a
        href={skillUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`skill-badge skill-badge-link ${getLevelColor(skill.level)}`}
      >
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}</span>
      </a>
    )
  }

  return (
    <div className={`skill-badge ${getLevelColor(skill.level)}`}>
      <span className="skill-name">{skill.name}</span>
      <span className="skill-level">{skill.level}</span>
    </div>
  )
}

export default SkillBadge
