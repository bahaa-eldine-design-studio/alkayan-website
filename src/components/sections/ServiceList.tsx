import { useRef, useState, type PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { SERVICES } from '../../content/data'
import { useLanguage } from '../../context/languageContext'
import { ArrowUpRightIcon } from '../ui/Icons'

/** Editorial services index with a pointer-following image preview on desktop. */
export function ServiceList() {
  const { L } = useLanguage()
  const [active, setActive] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return
    const container = containerRef.current
    const preview = previewRef.current
    if (!container || !preview) return
    const rect = container.getBoundingClientRect()
    preview.style.setProperty('--preview-x', `${event.clientX - rect.left}px`)
    preview.style.setProperty('--preview-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div
      className="service-list"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setActive(null)}
    >
      <ol className="service-list__rows">
        {SERVICES.map((service, index) => (
          <li
            key={service.id}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            <Link
              to={`/services#service-${service.id}`}
              className={`service-row ${active === index ? 'is-active' : ''}`}
            >
              <span className="service-row__num">{service.number}</span>
              <span className="service-row__title">{L(service.title)}</span>
              <span className="service-row__summary">{L(service.summary)}</span>
              <span className="service-row__arrow"><ArrowUpRightIcon size={19} /></span>
            </Link>
          </li>
        ))}
      </ol>
      <div
        ref={previewRef}
        className={`service-list__preview ${active !== null ? 'is-visible' : ''}`}
        aria-hidden="true"
      >
        {active !== null && <img src={SERVICES[active].image} alt="" />}
      </div>
    </div>
  )
}
