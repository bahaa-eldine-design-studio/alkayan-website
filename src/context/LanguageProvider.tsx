import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  DEFAULT_LANGUAGE,
  dictionaries,
  localize,
  type Language,
} from '../content'
import { LanguageContext, type LanguageContextValue } from './languageContext'

const STORAGE_KEY = 'alkayan:language'

function readSavedLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'ar' || saved === 'en') return saved
  } catch {
    // Storage may be unavailable (private mode); fall back to the default.
  }
  return DEFAULT_LANGUAGE
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readSavedLanguage)

  useEffect(() => {
    const root = document.documentElement
    root.lang = language
    root.dir = language === 'ar' ? 'rtl' : 'ltr'
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // Persistence is a progressive enhancement only.
    }
  }, [language])

  const setLanguage = useCallback((next: Language) => setLanguageState(next), [])
  const toggleLanguage = useCallback(
    () => setLanguageState((current) => (current === 'ar' ? 'en' : 'ar')),
    [],
  )

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      dir: language === 'ar' ? 'rtl' : 'ltr',
      t: dictionaries[language],
      setLanguage,
      toggleLanguage,
      L: (content) => localize(content, language),
    }),
    [language, setLanguage, toggleLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
