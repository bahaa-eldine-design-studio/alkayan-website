import { CATEGORY_ORDER, type CategoryId } from '../../content/data'
import { useLanguage } from '../../context/languageContext'

export type FilterValue = CategoryId | 'all'

interface FilterChipsProps {
  active: FilterValue
  onChange: (value: FilterValue) => void
}

export function FilterChips({ active, onChange }: FilterChipsProps) {
  const { t } = useLanguage()
  const filters: { id: FilterValue; label: string }[] = [
    { id: 'all', label: t.common.all },
    ...CATEGORY_ORDER.map((id) => ({ id, label: t.categories[id] })),
  ]

  return (
    <div className="filter-chips" role="group" aria-label={t.portfolioPage.filtersLabel}>
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={`filter-chip ${active === filter.id ? 'is-active' : ''}`}
          aria-pressed={active === filter.id}
          onClick={() => onChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
