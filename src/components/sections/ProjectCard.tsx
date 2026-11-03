import { Link } from 'react-router-dom'
import type { Project } from '../../content/data'
import { useLanguage } from '../../context/languageContext'
import { ArrowUpRightIcon } from '../ui/Icons'

interface ProjectCardProps {
  project: Project
  feature?: boolean
}

export function ProjectCard({ project, feature = false }: ProjectCardProps) {
  const { t, L } = useLanguage()

  return (
    <article className={`project-card ${feature ? 'project-card--feature' : ''}`}>
      <Link
        to={`/portfolio/${project.slug}`}
        className="project-card__link"
        aria-label={`${t.common.viewProject}: ${L(project.title)}`}
      >
        <div className="project-card__media">
          <img src={project.image} alt="" loading="lazy" />
          <span className="project-card__badge">{t.common.conceptual}</span>
          <span className="project-card__view">
            {t.common.viewProject}
            <ArrowUpRightIcon size={16} />
          </span>
        </div>
        <div className="project-card__body">
          <div className="project-card__meta">
            <span>{project.number}</span>
            <span className="project-card__dot" aria-hidden="true" />
            <span>{t.categories[project.category]}</span>
          </div>
          <h3>{L(project.title)}</h3>
          <p>{L(project.summary)}</p>
        </div>
      </Link>
    </article>
  )
}
