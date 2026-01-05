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

  return (
    <div className={`skill-badge ${getLevelColor(skill.level)}`}>
      <span className="skill-name">{skill.name}</span>
      <span className="skill-level">{skill.level}</span>
    </div>
  )
}

export default SkillBadge
