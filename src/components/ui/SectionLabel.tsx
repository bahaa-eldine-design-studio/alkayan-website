interface SectionLabelProps {
  index?: string
  label: string
  light?: boolean
}

export function SectionLabel({ index, label, light = false }: SectionLabelProps) {
  return (
    <div className={`section-label ${light ? 'section-label--light' : ''}`}>
      <span className="section-label__rule" aria-hidden="true" />
      {index ? <span className="section-label__index">{index}</span> : null}
      <span className="section-label__text">{label}</span>
    </div>
  )
}
