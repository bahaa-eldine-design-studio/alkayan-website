import { useLanguage } from '../../context/languageContext'
import { GlobeIcon } from '../ui/Icons'

interface LanguageSwitchProps {
  className?: string
}

export function LanguageSwitch({ className = '' }: LanguageSwitchProps) {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className={`lang-switch ${className}`.trim()} role="group" aria-label={t.a11y.languageSwitch}>
      <GlobeIcon className="lang-switch__globe" />
      <button
        type="button"
        lang="ar"
        className={`lang-switch__option ${language === 'ar' ? 'is-active' : ''}`}
        aria-pressed={language === 'ar'}
        onClick={() => setLanguage('ar')}
      >
        {t.nav.arabic}
      </button>
      <span className="lang-switch__divider" aria-hidden="true" />
      <button
        type="button"
        lang="en"
        className={`lang-switch__option ${language === 'en' ? 'is-active' : ''}`}
        aria-pressed={language === 'en'}
        onClick={() => setLanguage('en')}
      >
        {t.nav.english}
      </button>
    </div>
  )
}
